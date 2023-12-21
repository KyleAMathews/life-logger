import React from "react"
import ReactDOM from "react-dom/client"
import { ThemeProvider } from "degen"
import "degen/styles"
import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from "./error-page"
import initElectric from "./init-electric"
import { ElectricalProvider } from "./context"
import "@fontsource/space-mono"
import { ClerkProvider } from "@clerk/clerk-react"

// Layouts
import RootLayout from "./layouts/root-layout"
import AuthedLayout from "./layouts/authed-layout"

// Routes
import Root from "./routes/root"
import Index from "./routes/index"
import Settings from "./routes/settings"
import SignIn from "./routes/sign-in"

const router = createBrowserRouter([
  {
    path: `/`,
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: `/sign-in`,
        element: <SignIn />,
      },
      {
        element: <AuthedLayout />,
        children: [
          {
            index: true,
            element: <Index />,
          },
          {
            path: `/settings`,
            element: <Settings />,
          },
        ],
      },
    ],
  },
])

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error(`Missing Publishable Key`)
}

async function render() {
  ReactDOM.createRoot(document.getElementById(`root`)!).render(
    <React.StrictMode>
      <ThemeProvider>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
          <ElectricalProvider>
            <RouterProvider router={router} />
          </ElectricalProvider>
        </ClerkProvider>
      </ThemeProvider>
    </React.StrictMode>
  )
}

render()
