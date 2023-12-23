import { useState, useEffect } from "react"
import { makeElectricContext } from "electric-sql/react"
import { Electric } from "../src/generated/client"
import initElectric from "./init-electric"
import { useAuth } from "@clerk/clerk-react"
import { electricRef } from "./init-electric"

export const { ElectricProvider, useElectric } = makeElectricContext<Electric>()

export function ElectricalProvider({ children }) {
  const { getToken, isLoaded, isSignedIn } = useAuth()
  const [db, setDb] = useState<Electric>()

  useEffect(() => {
    // declare the data fetching function
    const setupElectric = async () => {
      const token = await getToken()
      if (token) {
        setTimeout(async () => {
          const electric = await initElectric(token)
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
