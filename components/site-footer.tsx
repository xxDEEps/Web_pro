import Link from "next/link"
import { course } from "@/lib/course"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="text-sm font-bold">
            {course.code} · {course.university}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            A student-built study and reference hub for Object-Oriented Programming using Java.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Study</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/topics" className="text-muted-foreground hover:text-foreground">
                Knowledge Base
              </Link>
            </li>
            <li>
              <Link href="/quizzes" className="text-muted-foreground hover:text-foreground">
                Revision Quizzes
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Course</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/syllabus" className="text-muted-foreground hover:text-foreground">
                Syllabus &amp; Schedule
              </Link>
            </li>
            <li>
              <Link href="/resources" className="text-muted-foreground hover:text-foreground">
                Lecture Slides
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Details</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>{course.credits} credits</li>
            <li>Prerequisite: {course.prerequisite}</li>
            <li>{course.timeAllocation}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <p className="text-xs text-muted-foreground">
            Educational reference material for {course.university}. Content compiled from the official {course.code}{" "}
            course resources.
          </p>
        </div>
      </div>
    </footer>
  )
}
