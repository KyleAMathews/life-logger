import { useEffect } from "react"
import { Link, Outlet } from "react-router-dom"
import { Box, Avatar, Stack } from "degen"
import { Text } from "../components/text"
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"
import { useElectric } from "../context"
import { useUser } from "@clerk/clerk-react"

export default function RootLayout() {
  const { user } = useUser()
  const electric = useElectric()!

  useEffect(() => {
    if (electric?.db && user && user.id) {
      electric.db.users.upsert({
        create: {
          id: user.id,
          name: user.firstName,
          avatar_url: user.imageUrl,
        },
        update: {
          id: user.id,
          name: user.firstName,
          avatar_url: user.imageUrl,
        },
        where: { id: user.id },
      })
    }
  }, [electric, user])

  if (!electric) {
    return null
  }

  return (
    <Box
      className="App"
      padding="3"
      style={{ maxWidth: `960px`, margin: `0 auto` }}
    >
      <Box padding="4">
        <Stack space="6">
          <Stack direction="horizontal" justify="space-between">
            <Stack direction="horizontal" align="center">
              <Text>
                <Link to="/">
                  Life Logger v{import.meta.env.VITE_COMMIT_COUNT}
                </Link>
              </Text>
            </Stack>
            <Stack direction="horizontal" align="center">
              <Text>
                <Link to="/settings">Events Settings</Link>
              </Text>
              <SignedIn>
                <UserButton afterSignOutUrl="/sign-in" />
              </SignedIn>
            </Stack>
          </Stack>
          <SignedOut>
            <Link to="/sign-in">Sign In</Link>
          </SignedOut>
        </Stack>
      </Box>
      <main>
        <Outlet />
      </main>
    </Box>
  )
}
