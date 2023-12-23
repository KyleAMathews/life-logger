import * as React from "react"
import { Link } from "react-router-dom"
import Editor from "./editor"
import { Text, DatePicker } from "../components"
import { parseAbsolute } from "@internationalized/date"
import { Box, Avatar, IconClose, IconChevronDown, Stack } from "degen"
import { useUsers } from "../daos/users"
import { useUpdateEvent, useDeleteEvent } from "../daos/events"

function EventComponent({ event, typesMap, showEventName = true }) {
  const users =
    useUsers()?.reduce((acc, obj) => {
      acc[obj.id] = obj
      return acc
    }, {}) || {}
  const updateEvent = useUpdateEvent(event.id)
  const deleteEvent = useDeleteEvent(event.id)
  const [isOpen, setIsOpen] = React.useState(false)
  const startDate = parseAbsolute(
    event.created_at.toJSON(),
    Intl.DateTimeFormat().resolvedOptions().timeZone
  )
  const [newDate, setNewDate] = React.useState(startDate)
  const user = users[event.user_id]

  return (
    <Stack space="2">
      <Box
        onClick={(e) => {
          // Ignore clicks on links
          if (!e.target.href) {
            setIsOpen(!isOpen)
          }
        }}
        cursor="pointer"
      >
        <Stack direction="horizontal" space="2">
          <Avatar address={user?.id} size="3" src={user?.avatar_url} />
          <Text>
            {new Date(event.created_at).toLocaleTimeString(navigator.language, {
              hour: `2-digit`,
              minute: `2-digit`,
              hour12: true,
            })}
          </Text>
          {showEventName && (
            <Text>
              <Link
                // onClick={(e) => e.preventDefault()}
                to={`/type/${event.type}`}
              >
                {typesMap[event.type].name}
              </Link>
            </Text>
          )}
          {isOpen ? <IconClose size={3} /> : <IconChevronDown size={3} />}
        </Stack>
      </Box>
      {isOpen && (
        <Stack direction="horizontal" space="2">
          <DatePicker
            label="Event happened at"
            value={newDate}
            onChange={setNewDate}
          />
          {startDate.toAbsoluteString() !== newDate.toAbsoluteString() && (
            <button
              onClick={() => {
                console.log(newDate.toDate())
                console.log(`saving`)
                updateEvent(newDate.toDate())
              }}
            >
              save
            </button>
          )}
        </Stack>
      )}
      {isOpen && (
        <Box
          width="180"
          onClick={() => {
            const result = confirm(
              `Are you sure you want to delete this event? It'll be gone forever.`
            )
            if (result) {
              deleteEvent()
            }
          }}
        >
          <button>delete</button>
        </Box>
      )}
    </Stack>
  )
}

export default EventComponent
