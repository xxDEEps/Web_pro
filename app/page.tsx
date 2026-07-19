import Link from "next/link"
import { ArrowRight, BookOpen, CalendarDays, Download, GraduationCap, ListChecks, Search } from "lucide-react"
import { course } from "@/lib/course"
import { getSortedTopics } from "@/lib/topics"
import { quizzes } from "@/lib/quizzes"

const moduleOrder = ["Foundations", "Core OOP", "Applied OOP"]

const features = [
  {
    href: "/topics",
    icon: BookOpen,
    title: "Knowledge Base",
    desc: "Structured lessons for every unit, from Java foundations to the Collections Framework, with worked code examples.",
  },
  {
    href: "/quizzes",
    icon: ListChecks,
    title: "Practice Quizzes",
    desc: "Check your understanding with multiple-choice questions and detailed explanations for each topic.",
  },
  {
    href: "/syllabus",
    icon: CalendarDays,
    title: "Syllabus & Schedule",
    desc: "The official session plan, learning outcomes, and grading structure for the whole semester.",
  },
  {
    href: "/resources",
    icon: Download,
    title: "Lecture Slides",
    desc: "Download the slide deck and PDF for each topic to review offline or in class.",
  },
]

export default function HomePage() {
  const topics = getSortedTopics()

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="flex flex-col items-start gap-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-sm font-medium text-muted-foreground">
              <GraduationCap className="size-4 text-primary" aria-hidden="true" />
              {course.code} · FPT University
            </span>
            <h1 className="max-w-3xl text-balance font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              {course.name}
            </h1>
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              A complete study companion for {course.code}. Learn object-oriented
              programming with Java through structured lessons, practice quizzes,
              lecture slides, and the full course syllabus — all in one place.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/topics"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Start learning
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="/syllabus"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 font-medium text-foreground transition-colors hover:bg-muted"
              >
                View syllabus
              </Link>
            </div>
            <dl className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
              <div>
                <dt className="text-sm text-muted-foreground">Topics</dt>
                <dd className="font-serif text-2xl font-bold text-foreground">{topics.length}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Practice questions</dt>
                <dd className="font-serif text-2xl font-bold text-foreground">{quizzes.length}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Credits</dt>
                <dd className="font-serif text-2xl font-bold text-foreground">{course.credits}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Sessions</dt>
                <dd className="font-serif text-2xl font-bold text-foreground">{course.sessions}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
          Everything you need to master {course.code}
        </h2>
        <p className="mt-2 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          Four ways to learn and revise, built directly from the official course
          material.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {features.map((f) => (
            <Link
              key={f.href}
              href={f.href}
              className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50 hover:bg-muted/40"
            >
              <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <f.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="font-serif text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              <span className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Explore
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Curriculum */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto w-full max-w-6xl px-4 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                Course curriculum
              </h2>
              <p className="mt-2 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                Work through the units in order, or jump straight to the topic you
                need to look up.
              </p>
            </div>
            <div className="hidden items-center gap-2 text-sm text-muted-foreground sm:flex">
              <Search className="size-4" aria-hidden="true" />
              Press{" "}
              <kbd className="rounded border border-border bg-background px-1.5 py-0.5 font-mono text-xs">
                /
              </kbd>{" "}
              to search
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-8">
            {moduleOrder.map((mod) => {
              const modTopics = topics.filter((t) => t.module === mod)
              if (modTopics.length === 0) return null
              return (
                <div key={mod}>
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    {mod}
                  </h3>
                  <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {modTopics.map((t) => (
                      <Link
                        key={t.slug}
                        href={`/topics/${t.slug}`}
                        className="group flex items-start gap-3 rounded-lg border border-border bg-background p-4 transition-colors hover:border-primary/50"
                      >
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-muted font-mono text-sm font-semibold text-foreground">
                          {t.order}
                        </span>
                        <div className="min-w-0">
                          <p className="font-medium text-foreground group-hover:text-primary">
                            {t.title}
                          </p>
                          <p className="mt-0.5 line-clamp-2 text-sm text-muted-foreground">
                            {t.summary}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
