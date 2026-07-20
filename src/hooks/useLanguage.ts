import { useCallback, useEffect, useState } from 'react';

export type Lang = 'en' | 'vi';

function getInitial(): Lang {
  try {
    const saved = localStorage.getItem('pro192:lang') as Lang | null;
    if (saved === 'en' || saved === 'vi') return saved;
  } catch {
    /* ignore */
  }
  return 'en';
}

export function useLanguage() {
  const [lang, setLang] = useState<Lang>(getInitial);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    try {
      localStorage.setItem('pro192:lang', lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const toggle = useCallback(() => {
    setLang((l) => (l === 'en' ? 'vi' : 'en'));
  }, []);

  return { lang, setLang, toggle };
}
