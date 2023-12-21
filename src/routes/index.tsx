import { useUser, useAuth } from "@clerk/clerk-react"

export default function () {
  const { isSignedIn, user, isLoaded } = useUser()
  const { getToken } = useAuth()
  console.log({ isSignedIn, user, isLoaded, token: getToken() })
  return `hi`
}
