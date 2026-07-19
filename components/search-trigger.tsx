"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { Search, FileText, Hash, BookOpen, CornerDownLeft } from "lucide-react"
import { buildSearchIndex, searchIndex, type SearchEntry } from "@/lib/search"

const kindIcon = {
  Topic: BookOpen,
  Section: Hash,
  Page: FileText,
} as const

export function SearchTrigger() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [active, setActive] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const index = useMemo(() => buildSearchIndex(), [])
  const results = useMemo(() => searchIndex(index, query), [index, query])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setOpen((v) => !v)
      }
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  useEffect(() => {
    if (open) {
      setActive(0)
      setTimeout(() => inputRef.current?.focus(), 20)
    } else {
      setQuery("")
    }
  }, [open])

  useEffect(() => {
    setActive(0)
  }, [query])

  function go(entry: SearchEntry) {
    setOpen(false)
    router.push(entry.href)
  }

  function onInputKey(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setActive((a) => Math.min(a + 1, results.length - 1))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setActive((a) => Math.max(a - 1, 0))
    } else if (e.key === "Enter") {
      if (results[active]) go(results[active])
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-ring/40 hover:text-foreground"
        aria-label="Search the knowledge base"
      >
        <Search className="h-4 w-4" aria-hidden="true" />
        <span className="hidden lg:inline">Search...</span>
        <kbd className="ml-1 hidden rounded border border-border bg-background px-1.5 py-0.5 text-[10px] font-medium lg:inline">
          Ctrl K
        </kbd>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-[12vh]" role="dialog" aria-modal="true" aria-label="Search">
          <button
            type="button"
            className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
            aria-label="Close search"
            onClick={() => setOpen(false)}
          />
          <div className="relative w-full max-w-xl overflow-hidden rounded-xl border border-border bg-popover shadow-2xl">
            <div className="flex items-center gap-3 border-b border-border px-4">
              <Search className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onInputKey}
                placeholder="Search topics, concepts, sections..."
                className="h-14 w-full bg-transparent text-base outline-none placeholder:text-muted-foreground"
                aria-label="Search query"
              />
            </div>

            <div className="max-h-[50vh] overflow-y-auto p-2">
              {query.trim() === "" && (
                <p className="px-3 py-6 text-center text-sm text-muted-foreground">
                  Try &ldquo;inheritance&rdquo;, &ldquo;garbage collection&rdquo;, or &ldquo;ArrayList&rdquo;
                </p>
              )}
              {query.trim() !== "" && results.length === 0 && (
                <p className="px-3 py-6 text-center text-sm text-muted-foreground">No results for &ldquo;{query}&rdquo;</p>
              )}
              {results.map((entry, i) => {
                const Icon = kindIcon[entry.kind]
                return (
                  <button
                    key={entry.href + i}
                    type="button"
                    onClick={() => go(entry)}
                    onMouseEnter={() => setActive(i)}
                    className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left ${
                      i === active ? "bg-secondary" : ""
                    }`}
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-background text-muted-foreground">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-medium">{entry.title}</span>
                      {entry.module && (
                        <span className="block truncate text-xs text-muted-foreground">
                          {entry.kind} · {entry.module}
                        </span>
                      )}
                    </span>
                    {i === active && <CornerDownLeft className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
