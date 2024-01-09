import { useState, useEffect } from "react"
import { makeElectricContext } from "electric-sql/react"
import { Electric, schema } from "../src/generated/client"
import { useAuth } from "@clerk/clerk-react"
import { initElectric, setLoggedOut } from "electric-query"
import sqliteWasm from "wa-sqlite/dist/wa-sqlite-async.wasm?asset"

export const { ElectricProvider, useElectric } = makeElectricContext<Electric>()
console.log(`hi`)

declare const ELECTRIC_URL: string
const electricUrl =
  typeof ELECTRIC_URL === `undefined`
    ? `ws://localhost:5133`
    : `wss://${ELECTRIC_URL}`

export function ElectricalProvider({ children }) {
  const { getToken, isLoaded, isSignedIn } = useAuth()
  const [db, setDb] = useState<Electric>()

  useEffect(() => {
    // declare the data fetching function
    const setupElectric = async () => {
      const token = await getToken()
      if (token) {
        setTimeout(async () => {
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
        }, 1000)
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
