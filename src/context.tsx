import { useState, useEffect } from "react"
import { makeElectricContext } from "electric-sql/react"
import { Electric } from "../src/generated/client"
import { useAuth } from "@clerk/clerk-react"
import { initElectric, electricRef } from "./electric-routes-lib"

export const { ElectricProvider, useElectric } = makeElectricContext<Electric>()

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
            auth: {
              token,
            },
            debug: false,
            url: electricUrl,
          }
          const electric = await initElectric(config)
          setDb(electric)
        }, 1000)
      }
    }

    if (isSignedIn === false) {
      electricRef.value = false
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
