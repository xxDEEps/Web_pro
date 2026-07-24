const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export async function fetchVisitCount(): Promise<number | null> {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/site_visits?id=eq.1&select=count`, {
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) return null;
    return data[0].count as number;
  } catch {
    return null;
  }
}

export async function incrementVisitCount(next: number): Promise<void> {
  try {
    await fetch(`${SUPABASE_URL}/rest/v1/site_visits?id=eq.1`, {
      method: 'PATCH',
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({ count: next, updated_at: new Date().toISOString() }),
    });
  } catch {
    /* ignore */
  }
}
