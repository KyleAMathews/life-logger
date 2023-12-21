import { useUser, useAuth } from "@clerk/clerk-react"
import { useEvents } from "../daos/events"

export default function () {
  const { isSignedIn, user, isLoaded } = useUser()
  const { getToken } = useAuth()
  console.log({ isSignedIn, user, isLoaded, token: getToken() })
  const events = useEvents()
  console.log({ events })

  return `hi`
}
