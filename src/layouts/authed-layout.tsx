import * as React from "react"
import { useAuth } from "@clerk/clerk-react"
import { Outlet, useNavigate } from "react-router-dom"

export default function DashboardLayout() {
  const { userId, isLoaded } = useAuth()
  const navigate = useNavigate()

  React.useEffect(() => {
    if (!userId) {
      navigate(`/sign-in`)
    }
  }, [userId, isLoaded, navigate])

  if (!isLoaded) return null

  return <Outlet />
}
