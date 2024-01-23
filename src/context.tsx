import { useState, useEffect } from "react"
import { makeElectricContext } from "electric-sql/react"
import { Electric, schema } from "../src/generated/client"
import { useAuth, useUser } from "@clerk/clerk-react"
import { initElectric, setLoggedOut } from "electric-query"
import sqliteWasm from "wa-sqlite/dist/wa-sqlite-async.wasm?asset"
import { isEqual } from "lodash"

export const { ElectricProvider, useElectric } = makeElectricContext<Electric>()

declare const ELECTRIC_URL: string
const electricUrl =
  typeof ELECTRIC_URL === `undefined`
    ? `ws://localhost:5133`
    : `wss://${ELECTRIC_URL}`

export function ElectricalProvider({ children }) {
  const { getToken, isSignedIn } = useAuth()
  const [db, setDb] = useState<Electric>()
  const { user } = useUser()

  useEffect(() => {
    // declare the data fetching function
    const setupElectric = async () => {
      const token = await getToken()
      if (token) {
        const config = {
          appName: `life-logger`,
          sqliteWasmPath: sqliteWasm,
          schema,
          config: {
            auth: {
              token,
            },
            debug: false,
            url: electricUrl,
          },
        }
        const electric = await initElectric(config)
        setDb(electric)

        // Sync user data in if it's changed.
        const { db } = electric
        const syncPromise = await db.users.sync()
        await syncPromise.synced
        const { fullName, imageUrl, id } = user
        const clerkUser = { name: fullName, id, avatar_url: imageUrl }
        const dbUser =
          (await db.users.findUnique({
            where: {
              id,
            },
          })) || {}
        if (!isEqual(dbUser, clerkUser)) {
          db.users.upsert({
            create: {
              ...clerkUser,
            },
            update: {
              ...clerkUser,
            },
            where: {
              id,
            },
          })
        }
      }
    }

    if (isSignedIn === false) {
      setLoggedOut()
    }
    if (isSignedIn) {
      // call the function
      setupElectric()
        // make sure to catch any error
        .catch(console.error)
    }
  }, [getToken, isSignedIn])

  return <ElectricProvider db={db}>{children}</ElectricProvider>
}
