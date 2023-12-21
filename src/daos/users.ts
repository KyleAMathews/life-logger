import { useLiveQuery } from "electric-sql/react"
import { useElectric } from "../context"
import { genUUID } from "electric-sql/util"

export function useCreateUser() {
  const { db } = useElectric()!
  return async (user) => {
    const id = genUUID()
    return db.users.create({
      data: {
        id,
        ...user,
      },
    })
  }
}

export function useUsers() {
  const { db } = useElectric()!

  const { results } = useLiveQuery(db.users.liveMany({}))

  return results
}
