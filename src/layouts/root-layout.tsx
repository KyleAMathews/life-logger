import { useEffect } from "react"
import { Link, Outlet } from "react-router-dom"
import { Box, Stack } from "degen"
import { Text } from "../components/text"
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"
import { ConnectivityIcon } from "../components/connectivity-icon"

export default function RootLayout() {
  return (
    <Box
      className="App"
      padding="3"
      style={{ maxWidth: `960px`, margin: `0 auto` }}
    >
      <Box>
        <Box marginBottom="2">
          <Stack direction="horizontal" justify="space-between">
            <Stack direction="horizontal" align="center">
              <Text>
                <Link to="/">
                  Life Logger v{import.meta.env.VITE_COMMIT_COUNT}
                </Link>
              </Text>
              <ConnectivityIcon />
            </Stack>
            <Stack direction="horizontal" align="center">
              <Text>
                <Link to="/settings">App Settings</Link>
              </Text>
              <SignedIn>
                <UserButton afterSignOutUrl="/sign-in" />
              </SignedIn>
            </Stack>
          </Stack>
          <SignedOut>
            <Link to="/sign-in">Sign In</Link>
          </SignedOut>
        </Box>
      </Box>
      <main>
        <Outlet />
      </main>
    </Box>
  )
}
