import { useLiveQuery } from "electric-sql/react"
import { useElectric } from "../context"

export function useCreateEventType() {
  const { db } = useElectric()!
  return async (name) => {
    if (id) {
      // Check if the video exists.
      const videoExists = await db.youtube_videos.findUnique({ where: { id } })
      if (videoExists === null) {
        await trpc.createVideo.mutate({ id })
      }
    } else {
      throw new Error(`Not a valid YouTube URL`)
    }

    return id
  }
}

export function useEventTypes() {
  const { db } = useElectric()!

  const { results } = useLiveQuery(db.event_types.liveMany({}))

  return results
}
