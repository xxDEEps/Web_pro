"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"

export function CodeBlock({
  code,
  language = "java",
  caption,
}: {
  code: string
  language?: string
  caption?: string
}) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // ignore
    }
  }

  return (
    <figure className="my-5 overflow-hidden rounded-lg border border-border">
      <div className="flex items-center justify-between border-b border-border bg-secondary px-4 py-2">
        <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">{language}</span>
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-1.5 rounded px-2 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Copy code"
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto bg-card p-4 text-sm leading-relaxed">
        <code className="font-mono text-card-foreground">{code}</code>
      </pre>
      {caption && (
        <figcaption className="border-t border-border bg-secondary px-4 py-2 text-xs text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
