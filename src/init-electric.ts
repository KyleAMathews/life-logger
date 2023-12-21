import { ElectricDatabase, electrify } from "electric-sql/wa-sqlite"
import { uniqueTabId } from "electric-sql/util"
import sqliteWasm from "wa-sqlite/dist/wa-sqlite-async.wasm?asset"
import { Electric, schema } from "./generated/client"

console.log(`VITE_ELECTRIC_URL`, import.meta.env.VITE_ELECTRIC_URL)
export default async function initElectric(token: string) {
  const config = {
    auth: {
      token,
    },
    debug: true, //DEBUG_MODE,
    url: import.meta.env.VITE_ELECTRIC_URL,
  }

  console.time(`sync`)
  const { tabId } = uniqueTabId()
  const tabScopedDbName = `electric-${tabId}.db`

  const conn = await ElectricDatabase.init(tabScopedDbName, sqliteWasm)
  const electric = await electrify(conn, schema, config)

  // Start syncing but don't block rendering the app on it.
  new Promise(async () => {
    const { db } = electric
    try {
      const [a, b, c] = await Promise.all([
        db.event_types.sync({
          include: {
            users: true,
          },
        }),
        db.events.sync({
          include: {
            users: true,
            event_types: true,
          },
        }),
        db.users.sync(),
      ])
      await Promise.all([a.synced, b.synced, c.synced])

      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.timeEnd(`sync`)
    } catch (error) {
      console.log(`initial electric sync failed`, error)
    }
  })

  return electric
}
