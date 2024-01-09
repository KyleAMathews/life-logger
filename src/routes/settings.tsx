import * as React from "react"
import { Link } from "react-router-dom"
import { fontStyles } from "../styles/typography.css"
import { Heading, Box, Stack } from "degen"
import { timeSince } from "../time-since"
import { useElectricData } from "electric-query"
import { useLocation } from "react-router-dom"
import {
  eventTypesWithEventCount,
  useCreateEventType,
} from "../daos/event-types"

function Settings() {
  const location = useLocation()
  const { eventTypes } = useElectricData(location.pathname + location.search)
  const createEventType = useCreateEventType()

  return (
    <Stack>
      <h2 className={fontStyles.Inter_XLARGE}>Settings</h2>
      <Stack space="12">
        <Stack space="5">
          <h3 className={fontStyles.SpaceMono_LARGE}>Event Types</h3>
          <Box className={fontStyles.SpaceMono_MED} as="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Count</th>
                <th scope="col">Latest event</th>
              </tr>
            </thead>
            <tbody>
              {eventTypes.map(({ id, name, event_count, latest_event_at }) => {
                return (
                  <tr key={id}>
                    <th>
                      <Link to={`/type/${id}`}>{name}</Link>
                    </th>
                    <th>{event_count}</th>
                    <th>{timeSince(latest_event_at)}</th>
                  </tr>
                )
              })}
            </tbody>
          </Box>
          <Box width="64">
            <Box marginBottom="2">
              <h3 className={fontStyles.SpaceMono_LARGE}>
                Create new event type
              </h3>
            </Box>
            <form
              method="post"
              onSubmit={async (e) => {
                e.preventDefault()
                const form = e.currentTarget
                const { name } = Object.fromEntries(new FormData(form))
                const newType = await createEventType(name)
                if (newType) {
                  form.reset()
                }
              }}
            >
              <Stack space="1">
                <input type="text" name="name" required />
                <button className={fontStyles.SpaceMono_MED} type="submit">
                  Submit
                </button>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  )
}

const queries = ({ db }) => {
  return {
    eventTypes: eventTypesWithEventCount(db),
  }
}
Settings.queries = queries

export default Settings
