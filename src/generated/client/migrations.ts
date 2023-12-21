export default [
  {
    "statements": [
      "CREATE TABLE \"users\" (\n  \"id\" TEXT NOT NULL,\n  \"name\" TEXT NOT NULL,\n  \"avatar_url\" TEXT,\n  CONSTRAINT \"users_pkey\" PRIMARY KEY (\"id\")\n) WITHOUT ROWID;\n",
      "CREATE TABLE \"events\" (\n  \"id\" TEXT NOT NULL,\n  \"type\" TEXT NOT NULL,\n  \"created_at\" TEXT,\n  \"user_id\" TEXT NOT NULL,\n  CONSTRAINT \"events_type_fkey\" FOREIGN KEY (\"type\") REFERENCES \"event_types\" (\"id\"),\n  CONSTRAINT \"events_user_id_fkey\" FOREIGN KEY (\"user_id\") REFERENCES \"users\" (\"id\"),\n  CONSTRAINT \"events_pkey\" PRIMARY KEY (\"id\")\n) WITHOUT ROWID;\n",
      "CREATE TABLE \"event_types\" (\n  \"id\" TEXT NOT NULL,\n  \"name\" TEXT NOT NULL,\n  \"user_id\" TEXT NOT NULL,\n  CONSTRAINT \"event_types_user_id_fkey\" FOREIGN KEY (\"user_id\") REFERENCES \"users\" (\"id\"),\n  CONSTRAINT \"event_types_pkey\" PRIMARY KEY (\"id\")\n) WITHOUT ROWID;\n",
      "-- Toggles for turning the triggers on and off\nINSERT OR IGNORE INTO _electric_trigger_settings(tablename,flag) VALUES ('main.users', 1);",
      "  /* Triggers for table users */\n\n  -- ensures primary key is immutable\n  DROP TRIGGER IF EXISTS update_ensure_main_users_primarykey;",
      "CREATE TRIGGER update_ensure_main_users_primarykey\n  BEFORE UPDATE ON \"main\".\"users\"\nBEGIN\n  SELECT\n    CASE\n      WHEN old.\"id\" != new.\"id\" THEN\n      \t\tRAISE (ABORT, 'cannot change the value of column id as it belongs to the primary key')\n    END;\nEND;",
      "-- Triggers that add INSERT, UPDATE, DELETE operation to the _opslog table\nDROP TRIGGER IF EXISTS insert_main_users_into_oplog;",
      "CREATE TRIGGER insert_main_users_into_oplog\n   AFTER INSERT ON \"main\".\"users\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.users')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'users', 'INSERT', json_object('id', new.\"id\"), json_object('avatar_url', new.\"avatar_url\", 'id', new.\"id\", 'name', new.\"name\"), NULL, NULL);\nEND;",
      "DROP TRIGGER IF EXISTS update_main_users_into_oplog;",
      "CREATE TRIGGER update_main_users_into_oplog\n   AFTER UPDATE ON \"main\".\"users\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.users')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'users', 'UPDATE', json_object('id', new.\"id\"), json_object('avatar_url', new.\"avatar_url\", 'id', new.\"id\", 'name', new.\"name\"), json_object('avatar_url', old.\"avatar_url\", 'id', old.\"id\", 'name', old.\"name\"), NULL);\nEND;",
      "DROP TRIGGER IF EXISTS delete_main_users_into_oplog;",
      "CREATE TRIGGER delete_main_users_into_oplog\n   AFTER DELETE ON \"main\".\"users\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.users')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'users', 'DELETE', json_object('id', old.\"id\"), NULL, json_object('avatar_url', old.\"avatar_url\", 'id', old.\"id\", 'name', old.\"name\"), NULL);\nEND;",
      "-- Toggles for turning the triggers on and off\nINSERT OR IGNORE INTO _electric_trigger_settings(tablename,flag) VALUES ('main.events', 1);",
      "  /* Triggers for table events */\n\n  -- ensures primary key is immutable\n  DROP TRIGGER IF EXISTS update_ensure_main_events_primarykey;",
      "CREATE TRIGGER update_ensure_main_events_primarykey\n  BEFORE UPDATE ON \"main\".\"events\"\nBEGIN\n  SELECT\n    CASE\n      WHEN old.\"id\" != new.\"id\" THEN\n      \t\tRAISE (ABORT, 'cannot change the value of column id as it belongs to the primary key')\n    END;\nEND;",
      "-- Triggers that add INSERT, UPDATE, DELETE operation to the _opslog table\nDROP TRIGGER IF EXISTS insert_main_events_into_oplog;",
      "CREATE TRIGGER insert_main_events_into_oplog\n   AFTER INSERT ON \"main\".\"events\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.events')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'events', 'INSERT', json_object('id', new.\"id\"), json_object('created_at', new.\"created_at\", 'id', new.\"id\", 'type', new.\"type\", 'user_id', new.\"user_id\"), NULL, NULL);\nEND;",
      "DROP TRIGGER IF EXISTS update_main_events_into_oplog;",
      "CREATE TRIGGER update_main_events_into_oplog\n   AFTER UPDATE ON \"main\".\"events\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.events')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'events', 'UPDATE', json_object('id', new.\"id\"), json_object('created_at', new.\"created_at\", 'id', new.\"id\", 'type', new.\"type\", 'user_id', new.\"user_id\"), json_object('created_at', old.\"created_at\", 'id', old.\"id\", 'type', old.\"type\", 'user_id', old.\"user_id\"), NULL);\nEND;",
      "DROP TRIGGER IF EXISTS delete_main_events_into_oplog;",
      "CREATE TRIGGER delete_main_events_into_oplog\n   AFTER DELETE ON \"main\".\"events\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.events')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'events', 'DELETE', json_object('id', old.\"id\"), NULL, json_object('created_at', old.\"created_at\", 'id', old.\"id\", 'type', old.\"type\", 'user_id', old.\"user_id\"), NULL);\nEND;",
      "-- Triggers for foreign key compensations\nDROP TRIGGER IF EXISTS compensation_insert_main_events_type_into_oplog;",
      "CREATE TRIGGER compensation_insert_main_events_type_into_oplog\n  AFTER INSERT ON \"main\".\"events\"\n  WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.event_types') AND\n       1 == (SELECT value from _electric_meta WHERE key == 'compensations')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  SELECT 'main', 'event_types', 'COMPENSATION', json_object('id', \"id\"), json_object('id', \"id\"), NULL, NULL\n  FROM \"main\".\"event_types\" WHERE \"id\" = new.\"type\";\nEND;",
      "DROP TRIGGER IF EXISTS compensation_update_main_events_type_into_oplog;",
      "CREATE TRIGGER compensation_update_main_events_type_into_oplog\n   AFTER UPDATE ON \"main\".\"events\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.event_types') AND\n        1 == (SELECT value from _electric_meta WHERE key == 'compensations')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  SELECT 'main', 'event_types', 'COMPENSATION', json_object('id', \"id\"), json_object('id', \"id\"), NULL, NULL\n  FROM \"main\".\"event_types\" WHERE \"id\" = new.\"type\";\nEND;",
      "-- Triggers for foreign key compensations\nDROP TRIGGER IF EXISTS compensation_insert_main_events_user_id_into_oplog;",
      "CREATE TRIGGER compensation_insert_main_events_user_id_into_oplog\n  AFTER INSERT ON \"main\".\"events\"\n  WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.users') AND\n       1 == (SELECT value from _electric_meta WHERE key == 'compensations')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  SELECT 'main', 'users', 'COMPENSATION', json_object('id', \"id\"), json_object('id', \"id\"), NULL, NULL\n  FROM \"main\".\"users\" WHERE \"id\" = new.\"user_id\";\nEND;",
      "DROP TRIGGER IF EXISTS compensation_update_main_events_user_id_into_oplog;",
      "CREATE TRIGGER compensation_update_main_events_user_id_into_oplog\n   AFTER UPDATE ON \"main\".\"events\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.users') AND\n        1 == (SELECT value from _electric_meta WHERE key == 'compensations')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  SELECT 'main', 'users', 'COMPENSATION', json_object('id', \"id\"), json_object('id', \"id\"), NULL, NULL\n  FROM \"main\".\"users\" WHERE \"id\" = new.\"user_id\";\nEND;",
      "-- Toggles for turning the triggers on and off\nINSERT OR IGNORE INTO _electric_trigger_settings(tablename,flag) VALUES ('main.event_types', 1);",
      "  /* Triggers for table event_types */\n\n  -- ensures primary key is immutable\n  DROP TRIGGER IF EXISTS update_ensure_main_event_types_primarykey;",
      "CREATE TRIGGER update_ensure_main_event_types_primarykey\n  BEFORE UPDATE ON \"main\".\"event_types\"\nBEGIN\n  SELECT\n    CASE\n      WHEN old.\"id\" != new.\"id\" THEN\n      \t\tRAISE (ABORT, 'cannot change the value of column id as it belongs to the primary key')\n    END;\nEND;",
      "-- Triggers that add INSERT, UPDATE, DELETE operation to the _opslog table\nDROP TRIGGER IF EXISTS insert_main_event_types_into_oplog;",
      "CREATE TRIGGER insert_main_event_types_into_oplog\n   AFTER INSERT ON \"main\".\"event_types\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.event_types')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'event_types', 'INSERT', json_object('id', new.\"id\"), json_object('id', new.\"id\", 'name', new.\"name\", 'user_id', new.\"user_id\"), NULL, NULL);\nEND;",
      "DROP TRIGGER IF EXISTS update_main_event_types_into_oplog;",
      "CREATE TRIGGER update_main_event_types_into_oplog\n   AFTER UPDATE ON \"main\".\"event_types\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.event_types')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'event_types', 'UPDATE', json_object('id', new.\"id\"), json_object('id', new.\"id\", 'name', new.\"name\", 'user_id', new.\"user_id\"), json_object('id', old.\"id\", 'name', old.\"name\", 'user_id', old.\"user_id\"), NULL);\nEND;",
      "DROP TRIGGER IF EXISTS delete_main_event_types_into_oplog;",
      "CREATE TRIGGER delete_main_event_types_into_oplog\n   AFTER DELETE ON \"main\".\"event_types\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.event_types')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'event_types', 'DELETE', json_object('id', old.\"id\"), NULL, json_object('id', old.\"id\", 'name', old.\"name\", 'user_id', old.\"user_id\"), NULL);\nEND;",
      "-- Triggers for foreign key compensations\nDROP TRIGGER IF EXISTS compensation_insert_main_event_types_user_id_into_oplog;",
      "CREATE TRIGGER compensation_insert_main_event_types_user_id_into_oplog\n  AFTER INSERT ON \"main\".\"event_types\"\n  WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.users') AND\n       1 == (SELECT value from _electric_meta WHERE key == 'compensations')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  SELECT 'main', 'users', 'COMPENSATION', json_object('id', \"id\"), json_object('id', \"id\"), NULL, NULL\n  FROM \"main\".\"users\" WHERE \"id\" = new.\"user_id\";\nEND;",
      "DROP TRIGGER IF EXISTS compensation_update_main_event_types_user_id_into_oplog;",
      "CREATE TRIGGER compensation_update_main_event_types_user_id_into_oplog\n   AFTER UPDATE ON \"main\".\"event_types\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.users') AND\n        1 == (SELECT value from _electric_meta WHERE key == 'compensations')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  SELECT 'main', 'users', 'COMPENSATION', json_object('id', \"id\"), json_object('id', \"id\"), NULL, NULL\n  FROM \"main\".\"users\" WHERE \"id\" = new.\"user_id\";\nEND;"
    ],
    "version": "1"
  }
]