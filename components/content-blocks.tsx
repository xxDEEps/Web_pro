import type { ContentBlock } from "@/lib/types"
import { CodeBlock } from "@/components/code-block"
import { cn } from "@/lib/utils"
import { Lightbulb, TriangleAlert, BookOpen } from "lucide-react"

const calloutStyles: Record<
  string,
  { icon: typeof BookOpen; wrap: string; iconWrap: string; title: string }
> = {
  note: {
    icon: BookOpen,
    wrap: "border-border bg-muted",
    iconWrap: "text-muted-foreground",
    title: "Note",
  },
  tip: {
    icon: Lightbulb,
    wrap: "border-accent/40 bg-accent/10",
    iconWrap: "text-accent-foreground",
    title: "Tip",
  },
  warning: {
    icon: TriangleAlert,
    wrap: "border-destructive/40 bg-destructive/10",
    iconWrap: "text-destructive",
    title: "Watch out",
  },
}

function Callout({
  variant = "note",
  title,
  text,
}: {
  variant?: string
  title?: string
  text: string
}) {
  const style = calloutStyles[variant] ?? calloutStyles.note
  const Icon = style.icon
  return (
    <div className={cn("my-6 flex gap-3 rounded-lg border p-4", style.wrap)}>
      <Icon className={cn("mt-0.5 size-5 shrink-0", style.iconWrap)} aria-hidden="true" />
      <div className="min-w-0">
        <p className="font-semibold text-foreground">{title ?? style.title}</p>
        <p className="mt-1 text-pretty leading-relaxed text-foreground/80">{text}</p>
      </div>
    </div>
  )
}

export function ContentBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={i} className="my-4 text-pretty leading-relaxed text-foreground/90">
                {block.text}
              </p>
            )
          case "heading":
            return (
              <h3
                key={i}
                id={block.id}
                className="mt-8 mb-3 scroll-mt-24 font-serif text-xl font-semibold text-foreground"
              >
                {block.text}
              </h3>
            )
          case "list":
            return (
              <ul key={i} className="my-4 space-y-2">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3 leading-relaxed text-foreground/90">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    <span className="min-w-0 text-pretty">{item}</span>
                  </li>
                ))}
              </ul>
            )
          case "code":
            return (
              <CodeBlock
                key={i}
                code={block.code}
                language={block.language}
                caption={block.caption}
              />
            )
          case "callout":
            return (
              <Callout key={i} variant={block.variant} title={block.title} text={block.text} />
            )
          case "table":
            return (
              <div key={i} className="my-6 overflow-x-auto rounded-lg border border-border">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-muted">
                      {block.headers.map((h, j) => (
                        <th
                          key={j}
                          className="border-b border-border px-4 py-2.5 text-left font-semibold text-foreground"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, j) => (
                      <tr key={j} className="even:bg-muted/40">
                        {row.map((cell, k) => (
                          <td
                            key={k}
                            className="border-b border-border px-4 py-2.5 align-top text-foreground/90 last:border-0"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          default:
            return null
        }
      })}
    </>
  )
}
