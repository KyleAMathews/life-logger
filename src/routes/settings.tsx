import * as React from "react"
import { Link } from "react-router-dom"
// import { useYjs, useSubscribeYjs, useAuth } from 'situated'
import { nanoid } from "nanoid"
import { fontStyles } from "../styles/typography.css"
import { Heading, Box, Stack } from "degen"
import { useEventTypes } from "../daos/event-types"
import { useUsers, useCreateUser } from "../daos/users"

function Settings() {
  // const {
  // rootDoc,
  // provider: { awareness },
  // } = useYjs()
  // const { accountInfo } = useAuth()
  // const eventTypes = useSubscribeYjs(rootDoc.getMap(`types`)) as Record<
  // string,
  // EventType
  // >
  // const users = rootDoc.getMap(`users`)
  const eventTypes = useEventTypes()
  const users = useUsers()
  const createUser = useCreateUser()

  console.log({ eventTypes, users })
  if (!eventTypes || !users) {
    return null
  }
  const accountInfo = {}

  return (
    <Stack>
      <Heading level="2">Settings</Heading>
      <Stack space="12">
        <Stack space="3">
          <h3 className={fontStyles.SpaceMono_LARGE}>Event Types</h3>
          <Box
            className={fontStyles.SpaceMono_MED}
            as="ul"
            paddingLeft="4"
            style={{ listStyle: `disc` }}
          >
            {Object.entries(eventTypes).map(([id, type]) => {
              return (
                <li key={type.name}>
                  <Link to={`/type/${id}`}>{type.name}</Link>
                </li>
              )
            })}
          </Box>
          <Box width="64">
            <form
              method="post"
              onSubmit={(e) => {
                e.preventDefault()
                rootDoc.getMap(`types`).set(nanoid(), {
                  name: e.target.name?.value,
                  walletAddress: e.target.wallet?.value,
                })
              }}
            >
              <Stack space="1">
                <input
                  type="hidden"
                  id="wallet"
                  name="wallet"
                  value={accountInfo.address}
                />
                <input type="text" name="name" />
                <button className={fontStyles.SpaceMono_MED} type="submit">
                  Submit
                </button>
              </Stack>
            </form>
          </Box>
        </Stack>
        <Stack space="4">
          <h3 className={fontStyles.SpaceMono_LARGE}>Profile</h3>
          <Box width="32">
            <form
              method="post"
              onSubmit={(e) => {
                e.preventDefault()
                const user = {
                  name: e.target.name.value,
                  avatar_url: e.target.avatar_url.value || ``,
                }
                console.log({ user })
                createUser(user)
              }}
            >
              <Stack space="1">
                <label className={fontStyles.SpaceMono_MED}>Name</label>
                <input type="text" name="name" defaultValue={users[0]?.name} />
                <label className={fontStyles.SpaceMono_MED}>Avatar</label>
                <input
                  type="text"
                  name="avatar_url"
                  defaultValue={users[0]?.avatar_url}
                />
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
