import { useLiveQuery } from "electric-sql/react"
import { genUUID } from "electric-sql/util"
import { useElectric } from "../context"
import { useUser } from "@clerk/clerk-react"

export function useCreateEvent() {
  const { db } = useElectric()!
  const { user } = useUser()
  return async ({ typeId }: { typeId: string }) => {
    if (!user) {
      throw new Error(`user not logged`)
    }

    const event = {
      id: genUUID(),
      type: typeId,
      user_id: user.id,
      created_at: new Date(),
    }

    return db.events.create({ data: event })
  }
}
export function useUpdateEvent(id: string) {
  const { db } = useElectric()!
  const { user } = useUser()
  return async (created_at: Date) => {
    if (!user) {
      throw new Error(`user not logged`)
    }

    return db.events.update({ data: { created_at }, where: { id } })
  }
}
export function useDeleteEvent(id: string) {
  const { db } = useElectric()!
  const { user } = useUser()
  return async () => {
    if (!user) {
      throw new Error(`user not logged`)
    }

    return db.events.delete({ where: { id } })
  }
}
export const events = (db) =>
  db.events.liveMany({ orderBy: { created_at: `desc` } })

export function useEvents() {
  const { db } = useElectric()!

  const { results } = useLiveQuery(events(db))

  return results
}

export const eventsByType = ({ db, typeId }) =>
  db.events.liveMany({
    where: { type: typeId },
    orderBy: { created_at: `desc` },
  })
export function useEventsByType(typeId: string) {
  const { db } = useElectric()!

  const { results } = useLiveQuery(
    db.events.liveMany({
      where: { type: typeId },
      orderBy: { created_at: `desc` },
    })
  )

  return results
}
