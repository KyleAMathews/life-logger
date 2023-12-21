import { Link, Outlet } from "react-router-dom"
import "../App.css"
import { Box, Avatar, Stack } from "degen"
import { Text } from "../components/text"
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"

export default function RootLayout() {
  return (
    <div className="App">
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
    </div>
  )
}
