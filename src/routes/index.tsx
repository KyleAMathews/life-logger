import { Box, Heading, Stack } from "degen"
import EventsByDay from "../components/events-by-day"
import { fontStyles } from "../styles/typography.css"
import { useElectricData } from "../electric-routes-lib"
import { eventTypes } from "../daos/event-types"
import { events, useCreateEvent } from "../daos/events"
import { Electric } from "../generated/client"
import { useNavigate } from "react-router-dom"
import { useAuth } from "@clerk/clerk-react"

function Index() {
  const createEvent = useCreateEvent()
  const { events, eventTypes } = useElectricData()

  const typesMap = eventTypes.reduce((acc, obj) => {
    acc[obj.id] = obj
    return acc
  }, {})

  return (
    <div className="App">
      <Box>
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
                    <Heading level="2">All Events</Heading>
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

const queries = ({ db }: { db: Electric[`db`] }) => {
  return {
    eventTypes: db.event_types.liveMany({ orderBy: { name: `asc` } }),
    events: events(db),
  }
}
Index.queries = queries

export default Index
