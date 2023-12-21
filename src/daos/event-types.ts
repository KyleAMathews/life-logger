import { useLiveQuery } from "electric-sql/react"
import { genUUID } from "electric-sql/util"
import { useElectric } from "../context"
import { useUser } from "@clerk/clerk-react"

export function useCreateEventType() {
  const { db } = useElectric()!
  const { user } = useUser()
  return async (name) => {
    const id = genUUID()
    const eventType = {
      id,
      name,
      user_id: user.id,
    }

    return db.event_types.create({ data: eventType })
  }
}

export function useEventTypes() {
  const { db } = useElectric()!

  const { results } = useLiveQuery(db.event_types.liveMany({}))

  return results
}
