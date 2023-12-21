import * as React from "react"
import { groupBy } from "lodash"
import Event from "./event"
import { Stack } from "degen"
import { Text } from "./text"
// import { useYjs } from 'situated'
import { fontStyles } from "../styles/typography.css"

function EventsByDay({ events, typesMap, showEventName = true }) {
  const eventsGroupedByDay = groupBy(Object.values(events), (event) =>
    event.created_at.toLocaleDateString()
  )
  return (
    <>
      {Object.keys(eventsGroupedByDay)
        .sort((a, b) => (new Date(a) < new Date(b) ? 1 : -1))
        .map((day) => {
          const dayEvents = eventsGroupedByDay[day]
          dayEvents.sort((a, b) => (a.created_at < b.created_at ? 1 : -1))
          return (
            <Stack space="2" key={day}>
              <Text>{day}</Text>
              {dayEvents.map((event) => {
                return (
                  <Event
                    key={event.id}
                    event={event}
                    typesMap={typesMap}
                    showEventName={showEventName}
                  />
                )
              })}
            </Stack>
          )
        })}
    </>
  )
  return `eventsbyday`
}

export default EventsByDay
