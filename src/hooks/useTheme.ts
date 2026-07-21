import { useCallback, useEffect, useState } from 'react';

export type Theme = 'dark' | 'light';

function getInitial(): Theme {
  try {
    const saved = localStorage.getItem('pro192:theme') as Theme | null;
    if (saved === 'dark' || saved === 'light') return saved;
    if (window.matchMedia?.('(prefers-color-scheme: light)').matches) return 'light';
  } catch {
    /* ignore */
  }
  return 'light';
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitial);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('pro192:theme', theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggle };
}
