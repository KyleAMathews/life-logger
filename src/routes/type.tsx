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

const Chart: React.FC = ({ data }) => {
  const props = {
    data,
    xField: (d) => {
      const dateParts = d.day.split(`-`)
      const date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2])
      return date
    },
    yField: `count`,
    height: 200,
    title: `Trailing 7-day count`,
  }

  return (
    <div style={{ height: 200 }}>
      {` `}
      <Line {...props} />
    </div>
  )
}

const queries = ({
  db,
  props,
  timezoneOffsetHours,
}: {
  db: Electric[`db`]
}) => {
  return {
    type: eventTypeById({ db, typeId: props.params.id }),
    events: eventsByType({ db, typeId: props.params.id }),
    sevenDayCount: db.raw({
      sql: `WITH RECURSIVE DateSeries AS (
  SELECT date('now', '-3 months') AS day
  UNION ALL
  SELECT date(day, '+1 day')
  FROM DateSeries
  WHERE day < date('now')
)
SELECT 
  ds.day,
  COALESCE(
    (
      SELECT COUNT(*)
      FROM events as e2
      WHERE 
        e2.type = '${props.params.id}' AND
        datetime(e2.created_at, '${timezoneOffsetHours}') BETWEEN datetime(DATE(ds.day, '-6 days'), '${timezoneOffsetHours}') AND datetime(DATE(ds.day, '+1 day'), '${timezoneOffsetHours}')
    ),
    0
  ) as count
FROM DateSeries ds
LEFT JOIN events ON DATE(datetime(events.created_at, '${timezoneOffsetHours}')) = ds.day AND events.type = '${props.params.id}'
WHERE ds.day >= date('now', '-3 months')
GROUP BY ds.day;
`,
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
