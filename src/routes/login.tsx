import React from 'react'
import { useAuth } from 'situated'
import { useNavigate } from 'react-router-dom'

const port = import.meta.env.PROD ? location.port : `3000`
const BACKEND_ADDR = new URL(
  `${location.protocol}//${location.hostname}:${port}`,
).href

function Login(props) {
  const { authenticationStatus, setAuthenticationStatus, setAccountInfo } =
    useAuth()
  const navigate = useNavigate()
  console.log({ authenticationStatus, setAuthenticationStatus, setAccountInfo })
  React.useEffect(() => {
    // if (accountInfo) {
    // const { address, ...otherInfo } = accountInfo
    // setAccountInfo(() => {
    // return { address }
    // })
    // }
  }, [])
  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault()
          const inputValue = e.target[0].value
          const response = await fetch(`${BACKEND_ADDR}magic-phrase-login`, {
            method: `POST`,
            mode: `cors`,
            credentials: `include`,
            headers: { 'Content-Type': `application/json` },
            body: JSON.stringify({ input: inputValue }),
          })
          const result = await response.json()
          console.log(result)
          if (result.worked) {
            setAuthenticationStatus(`authenticated`)
            navigate(`/`)
          }
        }}
      >
        <label>Magic Phrase</label>
        <input type="text" />
      </form>
    </div>
  )
}

export default Login
