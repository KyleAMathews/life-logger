import { useLocation } from "react-router-dom"
import { electricRef } from "./init-electric"
import { useLiveQuery } from "electric-sql/react"
import { LoaderFunctionArgs } from "react-router"
import { Electric } from "./generated/client"

type ShapeFunction = (params: {
  db: Electric[`db`]
}) => Array<() => Promise<any>>
type QueryFunction = () => Promise<any>
type QueriesRecord = (params: {
  db: Electric[`db`]
}) => Record<string, QueryFunction>

// Define everything in loaders w/ a key & then the hook just references that key
const routeCache = new Map()
const queriesMap = new Map()

export async function electricSqlLoader({
  loaderProps,
  shapes,
  queries,
}: {
  loaderProps: LoaderFunctionArgs
  shapes: ShapeFunction
  queries: QueriesRecord
}) {
  const url = new URL(loaderProps.request.url)
  const key = url.pathname + url.search
  console.time(`loading ${key}`)
  // Await for Electric to be active
  await new Promise((resolve) => {
    if (typeof electricRef.value === `undefined`) {
      electricRef.subscribe(() => resolve(null))
    } else {
      resolve(null)
    }
  })

  if (typeof electricRef.value === `undefined`) {
    throw new Error(`electricRef.value is still undefined`)
  }

  // We're not signed in
  if (electricRef.value === false) {
    return
  }

  const syncPromises = await Promise.all(shapes({ db: electricRef.value.db }))
  await Promise.all(syncPromises.map((shape) => shape.synced))

  const setupQueries = queries({ db: electricRef.value.db })
  queriesMap.set(key, setupQueries)

  // Run queries
  const promises = Object.entries(setupQueries).map(([_key, func]) => func())
  const resolvedPromises = await Promise.all(promises)
  const queryResults = Object.fromEntries(
    resolvedPromises.map((result, i) => [
      Object.keys(setupQueries)[i],
      result.result,
    ])
  )

  routeCache.set(key, queryResults)
  console.timeEnd(`loading ${key}`)
}

export function useElectricData() {
  const location = useLocation()
  const key = location.pathname + location.search

  const queriesMapResult: ReturnType<Q> = queriesMap.get(key)

  if (!queriesMapResult) {
    throw new Error(`Queries not found for ${key}.`)
  }

  const cachedResult = routeCache.get(key)

  if (!cachedResult) {
    throw new Error(
      `precached query results not found for ${key}. Check your loader code to make sure it's caching correctly`
    )
  }

  // Call useLiveQuery for each query.
  const results = Object.keys(queriesMapResult).map((key) => {
    const query = queriesMapResult[key]
    // eslint-disable-next-line
    const { results } = useLiveQuery(query)
    return [key, results]
  })

  // Use cached results until all the live queries
  // have returned results.
  if (results.some((r) => r[1] === undefined)) {
    return cachedResult
  } else {
    return Object.fromEntries(results)
  }
}
