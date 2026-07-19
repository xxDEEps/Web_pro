export const course = {
  code: "PRO192",
  name: "Object-Oriented Programming using Java",
  credits: 3,
  degreeLevel: "Bachelor",
  program: "Undergraduate Program",
  prerequisite: "PRF192",
  timeAllocation: "30 slots (1 slot = 90 minutes)",
  minGpaToPass: 5,
  scoringScale: 10,
  university: "FPT University",
  description:
    "This subject introduces the student to the object-oriented programming paradigm using the Java language. It builds on procedural programming foundations and covers encapsulation, inheritance, polymorphism, exception handling, input/output, arrays of objects, and the Java Collections Framework, alongside memory management and core Java support classes.",
} as const

export const learningOutcomes = [
  { id: "LO1", description: "Understand the concepts of object-oriented programming." },
  { id: "LO2", description: "Practice basic Java language syntax and constructs." },
  { id: "LO3", description: "Use streams to read and write data from standard input/output and files." },
  { id: "LO4", description: "Discuss the benefits and use of Java exception handling and memory management." },
  { id: "LO5", description: "Identify classes, objects, and members of a class." },
  { id: "LO6", description: "Explain the concept and demonstrate the use of encapsulation." },
  { id: "LO7", description: "Discuss the principles and use of abstraction, inheritance and polymorphism." },
  { id: "LO8", description: "Understand and implement a complete program using arrays of objects." },
  { id: "LO9", description: "Explain the principles and use of the Java Collections Framework." },
]

export type GradingComponent = {
  name: string
  type: string
  weight: number
  parts: number
  duration: string
  questionType?: string
  scope: string
}

export const gradingStructure: GradingComponent[] = [
  {
    name: "Progress Test",
    type: "On-going",
    weight: 0.1,
    parts: 2,
    duration: "30' each",
    questionType: "Multiple choice, 20 questions each",
    scope: "Test 1: LO1–LO3 · Test 2: LO4–LO7",
  },
  {
    name: "Assignment",
    type: "On-going",
    weight: 0.2,
    parts: 1,
    duration: "28 slots",
    scope: "All subjects in syllabus (LO1–LO9)",
  },
  {
    name: "Lab",
    type: "On-going",
    weight: 0.1,
    parts: 6,
    duration: "90' each",
    scope: "LO1–LO9",
  },
  {
    name: "Practical Exam",
    type: "On-going",
    weight: 0.3,
    parts: 1,
    duration: "90' each",
    scope: "LO1–LO9",
  },
  {
    name: "Final Exam",
    type: "Final Exam",
    weight: 0.3,
    parts: 1,
    duration: "60'",
    questionType: "Multiple choice, 50 questions",
    scope: "All subjects in syllabus (LO1–LO9)",
  },
]

export type ScheduleSession = {
  session: string
  content: string
  lo: string
  itu: string
  type: "lecture" | "lab" | "test" | "review" | "exam" | "assignment"
}

export const schedule: ScheduleSession[] = [
  { session: "1", content: "Introduction: Welcome to Object-Oriented, a language for complex applications, object terminology", lo: "LO1", itu: "I", type: "lecture" },
  { session: "2", content: "Foundations: basic Java language — variables, data types, arrays, operators, logic constructs", lo: "LO2", itu: "I, T", type: "lecture" },
  { session: "3", content: "Foundations: Input and Output (Standard I/O)", lo: "LO3", itu: "I, T", type: "lecture" },
  { session: "4", content: "Lab 1 assistance", lo: "LO2, LO3", itu: "U", type: "lab" },
  { session: "5", content: "Foundations: Exception Handling & Dynamic Memory Management", lo: "LO4", itu: "I, T", type: "lecture" },
  { session: "6", content: "Lab 2 assistance", lo: "LO3, LO4", itu: "U", type: "lab" },
  { session: "7", content: "Encapsulation: Classes, constructors", lo: "LO5", itu: "I, T", type: "lecture" },
  { session: "8", content: "Encapsulation: Member functions, access modifiers", lo: "LO5, LO6", itu: "I, T", type: "lecture" },
  { session: "9", content: "Lab 2 assistance", lo: "LO5, LO6", itu: "U", type: "lab" },
  { session: "10", content: "Inheritance: Derived classes", lo: "LO5, LO6", itu: "I, T", type: "lecture" },
  { session: "11", content: "Inheritance: Functions in a hierarchy", lo: "LO5, LO6", itu: "I, T", type: "lecture" },
  { session: "12", content: "Lab 3 assistance", lo: "LO5, LO6", itu: "U", type: "lab" },
  { session: "13", content: "Polymorphism: Abstract class", lo: "LO7", itu: "I, T", type: "lecture" },
  { session: "14", content: "Polymorphism: Interface", lo: "LO7", itu: "I, T", type: "lecture" },
  { session: "15", content: "Polymorphism: Overview (overloading & overriding)", lo: "LO7", itu: "I, T", type: "lecture" },
  { session: "16", content: "Lab 4 assistance", lo: "LO7", itu: "U", type: "lab" },
  { session: "17", content: "Progress Test 1 + workshop evaluation", lo: "LO1–LO7", itu: "U", type: "test" },
  { session: "18–19", content: "Array of Objects: basic operators", lo: "LO8", itu: "I, T", type: "lecture" },
  { session: "20–21", content: "Input and Output (File I/O)", lo: "LO4–LO8", itu: "I, T", type: "lecture" },
  { session: "22", content: "Lab 5 assistance", lo: "LO4–LO7", itu: "U", type: "lab" },
  { session: "23", content: "Collections in Java: Overview, List", lo: "LO9", itu: "I, T", type: "lecture" },
  { session: "24", content: "Collections in Java: Set", lo: "LO9", itu: "I, T", type: "lecture" },
  { session: "25", content: "Collections in Java: Map", lo: "LO9", itu: "I, T", type: "lecture" },
  { session: "26", content: "Lab 6 assistance", lo: "LO9", itu: "T, U", type: "lab" },
  { session: "27", content: "Progress Test 2 + workshop evaluation", lo: "LO8, LO9", itu: "U", type: "test" },
  { session: "28", content: "Review", lo: "LO1–LO9", itu: "I, T", type: "review" },
  { session: "29", content: "Assignment Evaluation", lo: "LO1–LO9", itu: "U", type: "assignment" },
  { session: "30", content: "Practical Exam", lo: "LO1–LO9", itu: "U", type: "exam" },
]
