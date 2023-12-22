import * as React from "react"
import { useParams } from "react-router-dom"
import { groupBy } from "lodash"
import { fontStyles } from "../styles/typography.css"
import { Heading, Stack } from "degen"
import { Text } from "../components/text"
import EventsByDay from "../components/events-by-day"
import { timeSince } from "../time-since"
import { useEventTypeById } from "../daos/event-types"
import { useEventsByType } from "../daos/events"
import { Line } from "@ant-design/charts"

// Helper function to add days to a date
const addDays = (date, days) => {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

const daysAgo = (date) => Math.ceil((new Date() - date) / (1000 * 3600 * 24))

// Function to get the array with filled dates
const fillDates = (data) => {
  if (data.length === 0) return []

  // Convert the string dates to Date objects and sort them
  const dates = data
    .map((entry) => {
      console.log({ entry, rejoined: entry.day.split(`/`).reverse().join(`-`) })
      return new Date(entry.day)
    })
    .sort((a, b) => a - b)
  console.log({ data, dates })

  // Get the start and end dates
  let startDate = dates[0]
  if (daysAgo(startDate) < 30) {
    startDate = new Date()
    startDate.setDate(startDate.getDate() - 30)
  }
  const endDate = new Date()

  // Create a map with all dates set to 0
  const dateMap = new Map()
  for (
    let date = new Date(startDate);
    date <= endDate;
    date = addDays(date, 1)
  ) {
    dateMap.set(date.toLocaleDateString(), 0)
  }
  console.log({ startDate, endDate, dateMap })

  // Update the map with the existing data
  data.forEach(({ day, count }) => {
    dateMap.set(day, count)
  })

  // Convert the map back to an array
  return Array.from(dateMap, ([day, count]) => ({ day, count }))
}

const Chart: React.FC = ({ data }) => {
  // const data = [
  // { year: `1991`, value: 3 },
  // { year: `1992`, value: 4 },
  // { year: `1993`, value: 3.5 },
  // { year: `1994`, value: 5 },
  // { year: `1995`, value: 4.9 },
  // { year: `1996`, value: 6 },
  // { year: `1997`, value: 7 },
  // { year: `1998`, value: 9 },
  // { year: `1999`, value: 13 },
  // ]

  const props = {
    data,
    xField: `day`,
    yField: `count`,
  }

  return <Line {...props} />
}

function Type() {
  const { id } = useParams()
  console.log({ id })
  const type = useEventTypeById(id)
  const events = useEventsByType(id)
  console.log({ type, events })

  if (!type || !events) {
    return null
  }

  const eventsGroupedByDay = groupBy(Object.values(events), (event) =>
    event.created_at.toLocaleDateString()
  )
  const data = Object.entries(eventsGroupedByDay)
    .map(([date, events]) => {
      return { day: date, count: events.length }
    })
    .sort((a, b) => (new Date(a) < new Date(b) ? 1 : -1))

  const filledData = fillDates(data)
  console.log({ data, filledData })

  return (
    <Stack>
      <Heading level="2">{type.name}</Heading>
      <Text>
        {events.length} events recorded.
        <br />
        The last event happened{` `}
        {timeSince(events[0]?.created_at)}.
      </Text>
      <Chart data={filledData} />
      <EventsByDay events={events} typesMap={{}} showEventName={false} />
    </Stack>
  )
}

export default Type
