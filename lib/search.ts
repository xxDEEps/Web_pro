import { topics } from "./topics"

export type SearchEntry = {
  title: string
  href: string
  kind: "Topic" | "Section" | "Page"
  module?: string
  keywords: string
}

const staticPages: SearchEntry[] = [
  { title: "Syllabus & Schedule", href: "/syllabus", kind: "Page", keywords: "syllabus schedule grading assessment learning outcomes sessions" },
  { title: "Lecture Slides", href: "/resources", kind: "Page", keywords: "slides pdf pptx download resources materials" },
  { title: "Revision Quizzes", href: "/quizzes", kind: "Page", keywords: "quiz questions revision practice test mcq" },
  { title: "Knowledge Base", href: "/topics", kind: "Page", keywords: "topics lessons index all chapters" },
]

export function buildSearchIndex(): SearchEntry[] {
  const entries: SearchEntry[] = [...staticPages]

  for (const topic of topics) {
    const sectionText = topic.sections
      .map((s) => s.title + " " + blocksToText(s.blocks))
      .join(" ")

    entries.push({
      title: topic.title,
      href: `/topics/${topic.slug}`,
      kind: "Topic",
      module: topic.module,
      keywords: (topic.title + " " + topic.summary + " " + sectionText).toLowerCase(),
    })

    for (const section of topic.sections) {
      entries.push({
        title: `${section.title}`,
        href: `/topics/${topic.slug}#${section.id}`,
        kind: "Section",
        module: topic.title,
        keywords: (section.title + " " + blocksToText(section.blocks)).toLowerCase(),
      })
    }
  }

  return entries
}

function blocksToText(blocks: { type: string; [k: string]: unknown }[]): string {
  return blocks
    .map((b) => {
      if (b.type === "paragraph" || b.type === "heading") return String(b.text ?? "")
      if (b.type === "callout") return String(b.title ?? "") + " " + String(b.text ?? "")
      if (b.type === "list") return (b.items as string[])?.join(" ") ?? ""
      if (b.type === "code") return String(b.caption ?? "")
      if (b.type === "table") return (b.headers as string[])?.join(" ") ?? ""
      return ""
    })
    .join(" ")
}

export function searchIndex(index: SearchEntry[], query: string): SearchEntry[] {
  const q = query.trim().toLowerCase()
  if (!q) return []
  const terms = q.split(/\s+/)

  return index
    .map((entry) => {
      const haystack = (entry.title + " " + entry.keywords).toLowerCase()
      let score = 0
      for (const term of terms) {
        if (entry.title.toLowerCase().includes(term)) score += 5
        if (haystack.includes(term)) score += 1
      }
      return { entry, score }
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 12)
    .map((r) => r.entry)
}
