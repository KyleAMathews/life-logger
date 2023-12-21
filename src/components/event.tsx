import * as React from 'react'
import * as Y from 'yjs'
import { Link } from 'react-router-dom'
import Editor from './editor'
import { Text, DatePicker } from '../components'
import { parseAbsolute } from '@internationalized/date'
import { Box, Avatar, IconClose, IconChevronDown, Stack } from 'degen'
import { Event } from '../models/event'
import { EventType } from '../models/event-type'

function EventComponent({
  eventsMap,
  typesMap,
  provider,
  event,
  users,
  showEventName = true,
}): {
  eventsMap: any
  typesMap: any
  provider: any
  event: Event
  users: any
  showEventName: boolean
} {
  const [isOpen, setIsOpen] = React.useState(false)
  const startDate = parseAbsolute(
    event.created_at,
    Intl.DateTimeFormat().resolvedOptions().timeZone,
  )
  const [newDate, setNewDate] = React.useState(startDate)
  const user = users.get(event.creator)
  const yjsEvent = eventsMap.get(event.id)
  const type = typesMap.get(event.typeId) as EventType

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
          <Avatar address={user?.address} size="3" src={user?.avatar} />
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
                to={`/type/${event.typeId}`}
              >
                {type.name}
              </Link>
            </Text>
          )}
          {isOpen ? <IconClose size={3} /> : <IconChevronDown size={3} />}
        </Stack>
      </Box>
      {isOpen &&
        eventsMap.get(event.id).get(`body`) instanceof Y.XmlFragment && (
          <Box maxWidth="180">
            <Editor
              provider={provider}
              xmlType={eventsMap.get(event.id).get(`body`)}
            />
          </Box>
        )}
      {isOpen && (
        <Stack direction="horizontal" space="2">
          <DatePicker label="" value={newDate} onChange={setNewDate} />
          {startDate.toAbsoluteString() !== newDate.toAbsoluteString() && (
            <button
              onClick={() => {
                yjsEvent.set(`created_at`, newDate.toAbsoluteString())
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
              `Are you sure you want to delete this event? It'll be gone forever.`,
            )
            if (result) {
              eventsMap.delete(event.id)
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
