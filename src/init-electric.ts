import { ElectricDatabase, electrify } from "electric-sql/wa-sqlite"
import { uniqueTabId } from "electric-sql/util"
import sqliteWasm from "wa-sqlite/dist/wa-sqlite-async.wasm?asset"
import { Electric, schema } from "./generated/client"

type Listener<T> = (value: T) => void

function createElectricRef<T>() {
  let value: T | undefined
  let listeners: Listener<T>[] = []

  return {
    get value(): T | undefined {
      return value
    },
    set value(newValue: T | undefined) {
      value = newValue
      if (newValue !== undefined) {
        listeners.forEach((listener) => listener(newValue))
      }
    },
    subscribe(listener: Listener<T>) {
      listeners.push(listener)
      return () => {
        listeners = listeners.filter((l) => l !== listener)
      }
    },
  }
}

export const electricRef = createElectricRef<Electric>()

console.log(`ELECTRIC_URL`, import.meta.env.ELECTRIC_URL)
export default async function initElectric(token: string) {
  const config = {
    auth: {
      token,
    },
    debug: false,
    url: import.meta.env.ELECTRIC_URL,
  }

  const { tabId } = uniqueTabId()
  const tabScopedDbName = `electric-${tabId}.db`

  const conn = await ElectricDatabase.init(tabScopedDbName, sqliteWasm)
  const electric = await electrify(conn, schema, config)
  electricRef.value = electric

  return electric
}
