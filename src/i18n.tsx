import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Lang, Localized } from './data/types';

interface I18nCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (text: Localized) => string;
  tArr: (arr: Localized[]) => string[];
}

const Ctx = createContext<I18nCtx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem('pro192:lang') as Lang | null;
    return saved === 'vi' || saved === 'en' ? saved : 'en';
  });

  useEffect(() => {
    localStorage.setItem('pro192:lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggle = useCallback(() => setLangState((p: Lang) => (p === 'en' ? 'vi' : 'en')), []);

  const t = useCallback((text: Localized) => text[lang], [lang]);
  const tArr = useCallback((arr: Localized[]) => arr.map((x) => x[lang]), [lang]);

  const value = useMemo(() => ({ lang, setLang, toggle, t, tArr }), [lang, setLang, toggle, t, tArr]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useI18n() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
