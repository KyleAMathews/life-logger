import React from "react"
import ReactDOM from "react-dom/client"
import { ThemeProvider } from "degen"
import "degen/styles"
import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from "./error-page"
import { ElectricalProvider } from "./context"
import "@fontsource/space-mono"
import { ClerkProvider } from "@clerk/clerk-react"

import { electricSqlLoader } from "./electric-routes-lib"

// Layouts
import RootLayout from "./layouts/root-layout"
import AuthedLayout from "./layouts/authed-layout"

// Routes
import Index from "./routes/index"
import Settings from "./routes/settings"
import SignIn from "./routes/sign-in"
import Type from "./routes/type"

// Until there's support for fine-grained shapes, all the routes use the same
// shapes atm.
const shapes = ({ db }) => [
  {
    shape: db.event_types.sync({
      include: {
        users: true,
      },
    }),
    isReady: async ({ db }) => !!(await db.event_types.findFirst()),
  },
  {
    shape: db.events.sync({
      include: {
        users: true,
        event_types: true,
      },
    }),
    isReady: async ({ db }) => !!(await db.events.findFirst()),
  },
]

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
            loader: async (props) => {
              const url = new URL(props.request.url)
              const key = url.pathname + url.search
              await electricSqlLoader({
                key,
                shapes: ({ db }) => shapes({ db }),
                queries: ({ db }) => Index.queries({ db }),
              })

              return null
            },
          },
          {
            path: `/settings`,
            element: <Settings />,
            loader: async (props) => {
              const url = new URL(props.request.url)
              const key = url.pathname + url.search
              await electricSqlLoader({
                key,
                shapes: ({ db }) => shapes({ db }),
                queries: ({ db }) => Settings.queries({ db }),
              })

              return null
            },
          },
          {
            path: `/type/:id`,
            element: <Type />,
            loader: async (props) => {
              const url = new URL(props.request.url)
              const key = url.pathname + url.search
              await electricSqlLoader({
                key,
                shapes: ({ db }) => shapes({ db }),
                queries: ({ db }) => Type.queries({ db, props }),
              })

              return null
            },
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
