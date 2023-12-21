import * as React from "react"
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom"
// import { createEntry } from "../doc-factory"
import "../App.css"
import { Box, Avatar, Stack } from "degen"
import { Text } from "../components/text"
import EventsByDay from "../components/events-by-day"
// import { Event } from "../models/event"
// import { EventType } from "../models/event-type"
import { useEvents } from "../daos/events"
import { timeSince } from "../time-since"
// import { useYjs, useSubscribeYjs, useAwarenessStates, useAuth } from "situated"
import { fontStyles } from "../styles/typography.css"
// import * as Components from '../styles/base-components'
// import * as rootStyles from '../styles/root.css'
import "../styles/app.css"

const eventsAsArray: Array<Event> = []
function App() {
  // Router info
  const navigate = useNavigate()
  const location = useLocation()

  // const { authenticationStatus, accountInfo } = useAuth()
  const events = useEvents()

  if (!events) {
    return null
  }
  console.log({ events })

  // YJS data
  // const {
  // provider: { awareness },
  // rootDoc,
  // } = useYjs()
  // const usersOnline = useAwarenessStates((clients) => {
  // return clients.size
  // })
  // const profile = useSubscribeYjs(rootDoc.getMap(`users`), (users) => {
  // return users[accountInfo?.address]
  // })
  // const events = useSubscribeYjs(rootDoc.getMap(`entries`)) as Record<
  // string,
  // Event
  // >
  // const eventTypes = useSubscribeYjs(rootDoc.getMap(`types`)) as Record<
  // string,
  // EventType
  // >

  // eventsAsArray = Object.values(events).sort((a, b) => {
  // return new Date(a.created_at) < new Date(b.created_at) ? 1 : -1
  // })

  // function getLastEvent(typeId: string) {
  // return eventsAsArray.find((event) => event.typeId === typeId)
  // }

  // // Construct options
  // const options: Array<Record<string, string>> = Object.entries(eventTypes)
  // .sort((a, b) => {
  // const latestEventA = getLastEvent(a[0])
  // const latestEventB = getLastEvent(b[0])
  // if (latestEventA && latestEventB) {
  // return new Date(latestEventA?.created_at) <
  // new Date(latestEventB?.created_at)
  // ? 1
  // : -1
  // } else if (!latestEventA) {
  // return 1
  // } else if (!latestEventB) {
  // return -1
  // }
  // })
  // .map(([id, type]) => {
  // // Get latest event & "days since" string".
  // const latestEvent = getLastEvent(id)

  // let dateStr
  // if (latestEvent) {
  // dateStr = timeSince(latestEvent.created_at)
  // } else {
  // dateStr = `never`
  // }
  // return { id, value: `${type.name} (${dateStr})` }
  // })

  // Redirect to login if not logged in.
  // React.useEffect(() => {
  // if (
  // authenticationStatus === `unauthenticated` &&
  // location.pathname !== `/login`
  // ) {
  // navigate(`/login`)
  // } else if (authenticationStatus === `authenticated`) {
  // awareness.setLocalState({
  // ...awareness.getLocalState(),
  // online: true,
  // })
  // }
  // }, [authenticationStatus])
  const profile = { name: `foo` }
  const accountInfo = {}
  const usersOnline = 1
  const options = [{ id: 1, value: `foo` }]

  return (
    <div className="App">
      <Box padding="4">
        <Stack space="6">
          <Stack direction="horizontal" align="center">
            <Text>
              <Link to="/">
                Life Logger v{import.meta.env.VITE_COMMIT_COUNT}
              </Link>
            </Text>
            <Text size="extraSmall">
              {profile?.name || accountInfo?.address}
            </Text>
            <Avatar
              address={accountInfo?.address}
              size="6"
              src={profile?.avatar}
            />
            <Text>
              <Link to="/settings">Settings</Link>
            </Text>
            <Text size="extraSmall">{usersOnline} people online</Text>
          </Stack>
          <div
            style={{
              display: location.pathname === `/` ? `block` : `none`,
            }}
          >
            <Stack space="4">
              <Box
                style={{
                  display: location.pathname === `/` ? `block` : `none`,
                }}
                width="64"
              >
                <form
                  method="post"
                  onSubmit={(e) => {
                    e.preventDefault()
                    const walletAddress = e.target[0].value
                    const typeId = e.target[1].value
                    createEntry({ rootDoc, walletAddress, typeId })
                  }}
                >
                  <Stack space="2">
                    <h3 className={fontStyles.SpaceMono_MED}>Create event</h3>
                    <select
                      name="typeId"
                      className={fontStyles.SpaceMono_SMALL}
                    >
                      {options.map(({ id, value }) => (
                        <option key={id} value={id}>
                          {value}
                        </option>
                      ))}
                    </select>
                    <button
                      className={fontStyles.SpaceMono_SMALL}
                      type="submit"
                    >
                      Submit
                    </button>
                  </Stack>
                </form>
              </Box>
              <h3 className={fontStyles.SpaceMono_LARGE}>Events</h3>
              <EventsByDay events={events} />
            </Stack>
          </div>
          <React.Suspense>
            <Outlet />
          </React.Suspense>
        </Stack>
      </Box>
    </div>
  )
}

export default App
