import { useUser, useAuth } from "@clerk/clerk-react"
import { useEvents, useCreateEvent } from "../daos/events"
import { Box, Avatar, Stack } from "degen"
import EventsByDay from "../components/events-by-day"
import { fontStyles } from "../styles/typography.css"
import { useEventTypes } from "../daos/event-types"

export default function () {
  const { isSignedIn, user, isLoaded } = useUser()
  const { getToken } = useAuth()
  console.log({ isSignedIn, user, isLoaded, token: getToken() })
  const createEvent = useCreateEvent()
  const events = useEvents()
  const eventTypes = useEventTypes()!

  if (!events || !eventTypes) {
    return null
  }
  const typesMap = eventTypes.reduce((acc, obj) => {
    acc[obj.id] = obj
    return acc
  }, {})
  console.log({ events, eventTypes, typesMap })

  return (
    <div className="App">
      <Box padding="4">
        <Stack space="6">
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
                    const { typeId } = Object.fromEntries(
                      new FormData(e.currentTarget)
                    )
                    createEvent({ typeId })
                  }}
                >
                  <Stack space="2">
                    <h3 className={fontStyles.SpaceMono_MED}>Create event</h3>
                    <select
                      name="typeId"
                      className={fontStyles.SpaceMono_SMALL}
                    >
                      {eventTypes.map(({ id, name }) => (
                        <option key={id} value={id}>
                          {name}
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
              <EventsByDay events={events} typesMap={typesMap} />
            </Stack>
          </div>
        </Stack>
      </Box>
    </div>
  )
}
