import { useLiveQuery } from "electric-sql/react"
import { genUUID } from "electric-sql/util"
import { useElectric } from "../context"
import { useUser } from "@clerk/clerk-react"

export function useCreateEventType() {
  const { db } = useElectric()!
  const { user } = useUser()
  return async (name: string) => {
    const typeExists = !!(await db.event_types.findFirst({ where: { name } }))
    if (!typeExists) {
      const id = genUUID()
      const eventType = {
        id,
        name,
        user_id: user.id,
      }

      return db.event_types.create({ data: eventType })
    } else {
      return false
    }
  }
}

export function useEventTypes() {
  const { db } = useElectric()!

  const { results } = useLiveQuery(
    db.event_types.liveMany({ orderBy: { name: `asc` } })
  )

  return results
}

export function useEventTypesWithEventCount() {
  const { db } = useElectric()!

  const { results } = useLiveQuery(
    db.liveRaw({
      sql: `
SELECT 
    event_types.id,
    event_types.name,
    COUNT(events.id) AS event_count,
    MAX(events.created_at) AS latest_event_at
FROM 
    event_types
LEFT JOIN 
    events ON event_types.id = events.type
GROUP BY 
    event_types.id
ORDER BY 
    event_types.name;
    `,
    })
  )

  return results
}

export function useEventTypeById(id) {
  const { db } = useElectric()!

  const { results } = useLiveQuery(db.event_types.liveUnique({ where: { id } }))

  return results
}
