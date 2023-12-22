import * as React from "react"
import { Link } from "react-router-dom"
import { fontStyles } from "../styles/typography.css"
import { Heading, Box, Stack } from "degen"
import { timeSince } from "../time-since"
import {
  useEventTypesWithEventCount,
  useCreateEventType,
} from "../daos/event-types"
import { useUsers } from "../daos/users"
import { useUser } from "@clerk/clerk-react"

function Settings() {
  const { user } = useUser()
  const eventTypes = useEventTypesWithEventCount()
  const createEventType = useCreateEventType()
  const users = useUsers()

  console.log({ eventTypes, users })
  if (!eventTypes || !users) {
    return null
  }

  return (
    <Stack>
      <Heading level="2">Settings</Heading>
      <Stack space="12">
        <Stack space="5">
          <h3 className={fontStyles.SpaceMono_LARGE}>Event Types</h3>
          <Box className={fontStyles.SpaceMono_MED} as="table">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Count</th>
              <th scope="col">Latest event</th>
            </tr>
            {eventTypes.map(({ id, name, event_count, latest_event_at }) => {
              console.log({ id, name })
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
                console.log({ newType })
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

export default Settings
