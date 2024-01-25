import * as React from "react"
import { useLocation } from "react-router-dom"
import { groupBy } from "lodash"
import { fontStyles } from "../styles/typography.css"
import { Heading, Stack, Box } from "degen"
import { Text } from "../components/text"
import EventsByDay from "../components/events-by-day"
import { timeSince } from "../time-since"
import { eventTypeById, useEventTypeById } from "../daos/event-types"
import { eventsByType, useEventsByType } from "../daos/events"
import { Line } from "@ant-design/charts"
import { useElectricData } from "electric-query"
import { Electric } from "../generated/client"

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
      return new Date(entry.day)
    })
    .sort((a, b) => a - b)

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
    xField: (d) => new Date(d.day),
    yField: `count`,
    height: 200,
  }
  console.log({ props })

  return (
    <div style={{ height: 200 }}>
      {` `}
      <Line {...props} />
    </div>
  )
}

const queries = ({ db, props }: { db: Electric[`db`] }) => {
  return {
    type: eventTypeById({ db, typeId: props.params.id }),
    events: eventsByType({ db, typeId: props.params.id }),
    sevenDayCount: db.raw({
      sql: `WITH RECURSIVE DateSeries AS (
  SELECT date('now', '-3 months') AS day
  UNION ALL
  SELECT date(day, '+1 day')
  FROM DateSeries
  WHERE day <= date('now')
)
SELECT 
  ds.day,
  COALESCE(
    (
      SELECT COUNT(*)
      FROM events as e2
      WHERE 
        e2.type = '${props.params.id}' AND
        e2.created_at BETWEEN DATE(ds.day, '-6 days') AND ds.day
    ),
    0
  ) as count
FROM DateSeries ds
LEFT JOIN events ON DATE(events.created_at) = ds.day AND events.type = '${props.params.id}'
WHERE ds.day >= date('now', '-3 months')
GROUP BY ds.day;`,
    }),
  }
}
Type.queries = queries

function Type() {
  const location = useLocation()
  const { type, events, sevenDayCount } = useElectricData(
    location.pathname + location.search
  )

  return (
    <Stack>
      <h2 className={fontStyles.Inter_XLARGE}>{type.name}</h2>
      <Text>
        {events.length} events recorded.
        <br />
        The last event happened{` `}
        {timeSince(events[0]?.created_at)}.
      </Text>
      <Chart data={sevenDayCount} />
      <EventsByDay events={events} typesMap={{}} showEventName={false} />
    </Stack>
  )
}

export default Type
