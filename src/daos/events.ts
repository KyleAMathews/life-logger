import { useLiveQuery } from "electric-sql/react"
import { useElectric } from "../context"

export function useEvents() {
  const { db } = useElectric()!

  const { results } = useLiveQuery(db.events.liveMany({}))

  return results
}
