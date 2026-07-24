import { useEffect, useState } from 'react';
import { fetchVisitCount, incrementVisitCount } from '../lib/supabase';

export function useVisitCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const current = await fetchVisitCount();
      if (cancelled || current === null) return;

      const next = current + 1;
      setCount(next);
      incrementVisitCount(next);
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return count;
}
