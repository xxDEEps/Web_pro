/*
# Create site_visits table for visit counter

1. New Tables
- `site_visits`
  - `id` (int, primary key, always 1 — single row for global counter)
  - `count` (bigint, not null, default 0) — total visit count
  - `updated_at` (timestamptz, default now())
2. Security
- Enable RLS on `site_visits`.
- Allow anon + authenticated to SELECT (read counter) and UPDATE (increment).
  Data is intentionally public/shared (no sign-in app).
3. Notes
- Single-row design: id = 1. Frontend increments via UPDATE ... SET count = count + 1.
- Seed row inserted so the counter starts at 1.
*/

CREATE TABLE IF NOT EXISTS site_visits (
  id integer PRIMARY KEY DEFAULT 1 CHECK (id = 1),
  count bigint NOT NULL DEFAULT 0,
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE site_visits ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_visits" ON site_visits;
CREATE POLICY "anon_select_visits" ON site_visits FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_update_visits" ON site_visits;
CREATE POLICY "anon_update_visits" ON site_visits FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

INSERT INTO site_visits (id, count)
VALUES (1, 1)
ON CONFLICT (id) DO NOTHING;
