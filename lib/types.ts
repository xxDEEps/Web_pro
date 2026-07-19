export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string; id: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "code"; language?: string; code: string; caption?: string }
  | { type: "callout"; variant: "note" | "tip" | "warning"; title?: string; text: string }
  | { type: "table"; headers: string[]; rows: string[][] }

export type TopicSection = {
  id: string
  title: string
  blocks: ContentBlock[]
}

export type Topic = {
  slug: string
  title: string
  order: number
  module: string
  summary: string
  readingMinutes: number
  learningOutcomes: string[]
  slide?: string
  pdf?: string
  sections: TopicSection[]
}

export type QuizQuestion = {
  id: string
  topicSlug: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}
