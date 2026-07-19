import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import { getSortedTopics } from "@/lib/topics"
import { course } from "@/lib/course"

export const metadata: Metadata = {
  title: "Knowledge Base",
  description: `Structured lessons for every ${course.code} topic, from Java foundations to the Collections Framework.`,
}

const moduleOrder = ["Foundations", "Core OOP", "Applied OOP"]

const moduleBlurb: Record<string, string> = {
  Foundations: "Get comfortable with the Java language, I/O, exceptions, and how memory works before diving into objects.",
  "Core OOP": "The four pillars in practice: encapsulation, inheritance, and polymorphism.",
  "Applied OOP": "Put it together — manage objects at scale, persist to files, and use the Collections Framework.",
}

export default function TopicsPage() {
  const topics = getSortedTopics()

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12">
      <header className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Knowledge Base</p>
        <h1 className="mt-2 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
          {course.code} lessons
        </h1>
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          {topics.length} structured lessons covering the full object-oriented
          programming curriculum. Each lesson includes explanations, worked Java
          examples, and links to slides and quizzes.
        </p>
      </header>

      <div className="mt-10 flex flex-col gap-12">
        {moduleOrder.map((mod) => {
          const modTopics = topics.filter((t) => t.module === mod)
          if (modTopics.length === 0) return null
          return (
            <section key={mod}>
              <div className="mb-4 border-b border-border pb-3">
                <h2 className="font-serif text-xl font-bold text-foreground">{mod}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{moduleBlurb[mod]}</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {modTopics.map((t) => (
                  <Link
                    key={t.slug}
                    href={`/topics/${t.slug}`}
                    className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50 hover:bg-muted/40"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 font-mono text-sm font-semibold text-primary">
                        {t.order}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="size-3.5" aria-hidden="true" />
                        {t.readingMinutes} min read
                      </span>
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary">
                      {t.title}
                    </h3>
                    <p className="line-clamp-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                      {t.summary}
                    </p>
                    <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-2">
                      {t.learningOutcomes.map((lo) => (
                        <span
                          key={lo}
                          className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-xs text-muted-foreground"
                        >
                          {lo}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Read lesson
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
