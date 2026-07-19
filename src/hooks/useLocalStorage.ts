import { useCallback, useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : initial;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* ignore quota errors */
    }
  }, [key, value]);

  return [value, setValue] as const;
}

export function useProgress() {
  const [completed, setCompleted] = useLocalStorage<string[]>('pro192:completed', []);
  const [bookmarks, setBookmarks] = useLocalStorage<string[]>('pro192:bookmarks', []);

  const toggleComplete = useCallback(
    (id: string) => {
      setCompleted((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
    },
    [setCompleted],
  );

  const toggleBookmark = useCallback(
    (id: string) => {
      setBookmarks((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
    },
    [setBookmarks],
  );

  const isCompleted = (id: string) => completed.includes(id);
  const isBookmarked = (id: string) => bookmarks.includes(id);

  return { completed, bookmarks, toggleComplete, toggleBookmark, isCompleted, isBookmarked };
}
