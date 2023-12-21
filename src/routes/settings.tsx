import * as React from "react"
import { Link } from "react-router-dom"
// import { useYjs, useSubscribeYjs, useAuth } from 'situated'
import { nanoid } from "nanoid"
import { fontStyles } from "../styles/typography.css"
import { Heading, Box, Stack } from "degen"
import { useEventTypes, useCreateEventType } from "../daos/event-types"
import { useUsers, useCreateUser } from "../daos/users"
import { useUser } from "@clerk/clerk-react"

function Settings() {
  const { user } = useUser()
  const eventTypes = useEventTypes()
  const createEventType = useCreateEventType()
  const users = useUsers()

  console.log({ eventTypes, users })
  if (!eventTypes || !users) {
    return null
  }
  const accountInfo = {}

  return (
    <Stack>
      <Heading level="2">Settings</Heading>
      <Stack space="12">
        <Stack space="5">
          <h3 className={fontStyles.SpaceMono_LARGE}>Event Types</h3>
          <Box
            className={fontStyles.SpaceMono_MED}
            as="ul"
            paddingLeft="4"
            style={{ listStyle: `disc` }}
          >
            {eventTypes.map(({ id, name }) => {
              return (
                <li key={name}>
                  <Link to={`/type/${id}`}>{name}</Link>
                </li>
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
                const { name } = Object.fromEntries(
                  new FormData(e.currentTarget)
                )
                const newType = await createEventType(name)
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
