import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, Clock, Download, ListChecks } from "lucide-react"
import { getTopic, getSortedTopics, getAdjacentTopics } from "@/lib/topics"
import { learningOutcomes } from "@/lib/course"
import { quizzes } from "@/lib/quizzes"
import { ContentBlocks } from "@/components/content-blocks"
import { TopicToc } from "@/components/topic-toc"

export function generateStaticParams() {
  return getSortedTopics().map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const topic = getTopic(slug)
  if (!topic) return { title: "Topic not found" }
  return { title: topic.title, description: topic.summary }
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const topic = getTopic(slug)
  if (!topic) notFound()

  const { prev, next } = getAdjacentTopics(slug)
  const tocItems = topic.sections.map((s) => ({ id: s.id, title: s.title }))
  const topicQuizCount = quizzes.filter((q) => q.topicSlug === slug).length
  const los = learningOutcomes.filter((lo) => topic.learningOutcomes.includes(lo.id))

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="lg:grid lg:grid-cols-[1fr_16rem] lg:gap-10">
        <article className="min-w-0">
          <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/topics" className="hover:text-foreground">
              Knowledge Base
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-foreground">{topic.module}</span>
          </nav>

          <header className="border-b border-border pb-6">
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="rounded-md bg-primary/10 px-2 py-0.5 font-mono font-semibold text-primary">
                Topic {topic.order}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="size-4" aria-hidden="true" />
                {topic.readingMinutes} min read
              </span>
            </div>
            <h1 className="mt-3 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
              {topic.title}
            </h1>
            <p className="mt-3 text-pretty text-lg leading-relaxed text-muted-foreground">
              {topic.summary}
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {topic.slide && (
                <Link
                  href="/resources"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  <Download className="size-4 text-primary" aria-hidden="true" />
                  Slides
                </Link>
              )}
              {topicQuizCount > 0 && (
                <Link
                  href={`/quizzes/${topic.slug}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  <ListChecks className="size-4 text-primary" aria-hidden="true" />
                  {topicQuizCount} practice questions
                </Link>
              )}
            </div>
          </header>

          {/* Learning outcomes */}
          {los.length > 0 && (
            <div className="mt-6 rounded-xl border border-border bg-muted/40 p-5">
              <h2 className="font-serif text-base font-semibold text-foreground">
                What you&apos;ll be able to do
              </h2>
              <ul className="mt-3 space-y-2">
                {los.map((lo) => (
                  <li key={lo.id} className="flex gap-3 text-sm leading-relaxed text-foreground/90">
                    <span className="shrink-0 rounded bg-background px-1.5 py-0.5 font-mono text-xs font-semibold text-primary">
                      {lo.id}
                    </span>
                    <span className="text-pretty">{lo.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Sections */}
          <div className="mt-8">
            {topic.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24 py-4">
                <h2 className="mb-2 font-serif text-2xl font-bold text-foreground">
                  {section.title}
                </h2>
                <ContentBlocks blocks={section.blocks} />
              </section>
            ))}
          </div>

          {/* Prev / Next */}
          <nav className="mt-10 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
            {prev ? (
              <Link
                href={`/topics/${prev.slug}`}
                className="group flex flex-col gap-1 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50"
              >
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <ArrowLeft className="size-3.5" aria-hidden="true" />
                  Previous
                </span>
                <span className="font-medium text-foreground group-hover:text-primary">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link
                href={`/topics/${next.slug}`}
                className="group flex flex-col gap-1 rounded-xl border border-border bg-card p-4 text-right transition-colors hover:border-primary/50 sm:col-start-2"
              >
                <span className="inline-flex items-center justify-end gap-1 text-xs text-muted-foreground">
                  Next
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </span>
                <span className="font-medium text-foreground group-hover:text-primary">
                  {next.title}
                </span>
              </Link>
            )}
          </nav>
        </article>

        {/* TOC sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <TopicToc items={tocItems} />
          </div>
        </aside>
      </div>
    </div>
  )
}
