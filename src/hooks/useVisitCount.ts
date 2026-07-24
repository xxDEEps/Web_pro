import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export function useVisitCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const { data, error } = await supabase
        .from('site_visits')
        .select('count')
        .eq('id', 1)
        .maybeSingle();

      if (error || !data) {
        if (!cancelled) setCount(null);
        return;
      }

      const next = data.count + 1;
      if (!cancelled) setCount(next);

      await supabase
        .from('site_visits')
        .update({ count: next, updated_at: new Date().toISOString() })
        .eq('id', 1);
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return count;
}
