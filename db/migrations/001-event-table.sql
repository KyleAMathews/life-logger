-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    avatar_url TEXT
);

-- Create event_types table
CREATE TABLE IF NOT EXISTS event_types (
    id UUID PRIMARY KEY,
    name TEXT NOT NULL,
    user_id TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id)
);

-- Create events table
CREATE TABLE IF NOT EXISTS events (
    id UUID PRIMARY KEY,
    type UUID NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE,
    user_id TEXT NOT NULL,
    FOREIGN KEY (type) REFERENCES event_types (id),
    FOREIGN KEY (user_id) REFERENCES users (id)
);

ALTER TABLE users ENABLE ELECTRIC;
ALTER TABLE events ENABLE ELECTRIC;
ALTER TABLE event_types ENABLE ELECTRIC;
