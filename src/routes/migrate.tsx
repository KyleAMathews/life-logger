import * as React from 'react'
import { Stack, IconCheck } from 'degen'
import { Text } from '../components'
import { useYjs, useSubscribeYjs } from 'situated'

const migrations = [
  {
    id: `types-need-ids`,
    description: `Migrate events to add a reference to the id  of a type and not the name (so users can edit the name). Code change
    will be to stop writing out name & to get the type for the name`,
    migrate: (rootDoc) => {
      console.log(rootDoc)
      // Add id to each type
      const typesMap = rootDoc.getMap(`types`)
      const types = Object.entries(typesMap.toJSON())
      console.log({ types })
      const eventsMap = rootDoc.getMap(`entries`)
      // add typeId to each event.
      eventsMap.forEach((event) => {
        console.log({ event, type: event.get(`type`) })
        const typeId = types.find(([_, obj]) => {
          if (event.get(`type`) === obj.name) {
            return true
          } else {
            return false
          }
        })[0]
        console.log({ typeId })
        event.set(`typeId`, typeId)
        console.log(`event after`, event.toJSON())
      })

      return true
    },
  },
]

function Migrate() {
  const { rootDoc } = useYjs()
  const migrationMap = rootDoc.getMap(`migrations`)
  const migrationsStatus = useSubscribeYjs(migrationMap)
  return (
    <Stack>
      {migrations.map((migration, i) => {
        const isDone = !!migrationsStatus[migration.id]
        console.log({ isDone })
        return (
          <Stack key={migration.id} direction="horizontal" align="flex-start">
            {isDone ? (
              <IconCheck size="5" />
            ) : (
              <button
                onClick={() => {
                  const result = migration.migrate(rootDoc)
                  if (result) {
                    migrationMap.set(migration.id, true)
                  }
                }}
              >
                run
              </button>
            )}
            <Text>
              {i + 1}. {migration.description}
            </Text>
          </Stack>
        )
      })}
    </Stack>
  )
}

export default Migrate
