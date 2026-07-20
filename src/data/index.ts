import type { CourseModule } from './types';
import { introduction } from './introduction';
import { io, exception, dynamicMemory } from './foundations2';
import { foundations as foundationsLesson } from './foundations';
import { encapsulation } from './encapsulation';
import { inheritance } from './inheritance';
import { polymorphism } from './polymorphism';
import { arrayOfObjects } from './arrayOfObjects';
import { collection } from './collection';

import { introductionEn } from './en/introduction';
import { ioEn, exceptionEn, dynamicMemoryEn } from './en/foundations2';
import { foundationsEn } from './en/foundations';
import { encapsulationEn } from './en/encapsulation';
import { inheritanceEn } from './en/inheritance';
import { polymorphismEn } from './en/polymorphism';
import { arrayOfObjectsEn } from './en/arrayOfObjects';
import { collectionEn } from './en/collection';

import type { Lang } from '../hooks/useLanguage';

const viModules: CourseModule[] = [
  {
    id: 'introduction-module',
    title: 'Introduction',
    part: 'Introduction',
    description: 'Giới thiệu OOP, thuật ngữ, UML, encapsulation, inheritance, polymorphism.',
    lessons: [introduction],
  },
  {
    id: 'foundations-module',
    title: 'Foundations',
    part: 'Foundations',
    description: 'Nền tảng Java, I/O, Exception, Dynamic Memory.',
    lessons: [foundationsLesson, io, exception, dynamicMemory],
  },
  {
    id: 'encapsulation-module',
    title: 'Encapsulation',
    part: 'Encapsulation',
    description: 'Class, object, constructor, this, package, access modifier.',
    lessons: [encapsulation],
  },
  {
    id: 'inheritance-module',
    title: 'Inheritance',
    part: 'Inheritance',
    description: 'Kế thừa, is-a, super, instanceof, casting.',
    lessons: [inheritance],
  },
  {
    id: 'polymorphism-module',
    title: 'Polymorphism',
    part: 'Polymorphism',
    description: 'Overloading, overriding, abstract class, interface.',
    lessons: [polymorphism],
  },
  {
    id: 'array-module',
    title: 'Array of Objects',
    part: 'Array of Objects',
    description: 'Mảng object, File I/O, serialization.',
    lessons: [arrayOfObjects],
  },
  {
    id: 'collections-module',
    title: 'Collections in Java',
    part: 'Collections',
    description: 'ADT, List, Set, Map, supporting classes.',
    lessons: [collection],
  },
];

const enModules: CourseModule[] = [
  {
    id: 'introduction-module',
    title: 'Introduction',
    part: 'Introduction',
    description: 'Intro to OOP, terminology, UML, encapsulation, inheritance, polymorphism.',
    lessons: [introductionEn],
  },
  {
    id: 'foundations-module',
    title: 'Foundations',
    part: 'Foundations',
    description: 'Java foundations, I/O, Exception, Dynamic Memory.',
    lessons: [foundationsEn, ioEn, exceptionEn, dynamicMemoryEn],
  },
  {
    id: 'encapsulation-module',
    title: 'Encapsulation',
    part: 'Encapsulation',
    description: 'Class, object, constructor, this, package, access modifier.',
    lessons: [encapsulationEn],
  },
  {
    id: 'inheritance-module',
    title: 'Inheritance',
    part: 'Inheritance',
    description: 'Inheritance, is-a, super, instanceof, casting.',
    lessons: [inheritanceEn],
  },
  {
    id: 'polymorphism-module',
    title: 'Polymorphism',
    part: 'Polymorphism',
    description: 'Overloading, overriding, abstract class, interface.',
    lessons: [polymorphismEn],
  },
  {
    id: 'array-module',
    title: 'Array of Objects',
    part: 'Array of Objects',
    description: 'Object arrays, File I/O, serialization.',
    lessons: [arrayOfObjectsEn],
  },
  {
    id: 'collections-module',
    title: 'Collections in Java',
    part: 'Collections',
    description: 'ADT, List, Set, Map, supporting classes.',
    lessons: [collectionEn],
  },
];

export function getModules(lang: Lang): CourseModule[] {
  return lang === 'vi' ? viModules : enModules;
}

export function getAllLessons(lang: Lang) {
  return getModules(lang).flatMap((m) => m.lessons);
}

export const references: { title: string; author: string; url?: string }[] = [
  {
    title: 'Introduction to C++ for C Programmers (2011)',
    author: 'Szalwinski, C. M. — Seneca College, Toronto, Canada',
    url: 'https://ict.senecacollege.ca/~btp200/',
  },
  {
    title: 'Concise Guide to Object-Oriented Programming (2019)',
    author: 'Sage, Kingsley — University of Sussex, Brighton, UK',
  },
  {
    title: 'Java Java Java: Object-Oriented Problem Solving',
    author: '—',
    url: 'http://www.cs.trincoll.edu/~ram/jjj/jjj-os-20170625.pdf',
  },
  {
    title: 'Java 8 Specification',
    author: 'Oracle',
    url: 'https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-1.html#jvms-1.1',
  },
  {
    title: 'Core Java Volume I & II (11th Edition)',
    author: 'Cay Horstmann',
    url: 'https://www.amazon.com/Core-Java-I-Fundamentals-11th-Horstmann/dp/0135166306',
  },
  {
    title: 'Reference data types in Java',
    author: 'Tutorialspoint',
    url: 'https://www.tutorialspoint.com/What-are-reference-data-types-in-Java',
  },
  {
    title: 'Memory management in Java',
    author: 'Javatpoint',
    url: 'https://www.javatpoint.com/memory-management-in-java',
  },
];

export const resources: { label: string; href: string; group: string }[] = [
  { group: 'Lecture slides', label: 'Introduction.pdf', href: '/resource/Introduction.pdf' },
  { group: 'Lecture slides', label: 'Learning the Java Language.pdf', href: '/resource/Learning the Java Language.pdf' },
  { group: 'Lecture slides', label: 'Exception Handling.pdf', href: '/resource/Exception Handling.pdf' },
  { group: 'Lecture slides', label: 'Memory Management in Java.pdf', href: '/resource/Memory Management in Java.pdf' },
  { group: 'Lecture slides', label: 'Encapsulation.pdf', href: '/resource/Encapsulation.pdf' },
  { group: 'Lecture slides', label: 'Inheritance.pdf', href: '/resource/Inheritance.pdf' },
  { group: 'Lecture slides', label: 'Polymorphism.pdf', href: '/resource/Polymorphism.pdf' },
  { group: 'Lecture slides', label: 'Array Of Objects.pdf', href: '/resource/ArrayOfObjects.pdf' },
  { group: 'Lecture slides', label: 'File I/O.pdf', href: '/resource/File IO.pdf' },
  { group: 'Lecture slides', label: 'Collections.pdf', href: '/resource/Collections.pdf' },
  { group: 'Reading', label: 'Download & Install JDK & NetBeans.pdf', href: '/resource/Download & Install JDK & NetBeans 8.pdf' },
  { group: 'Reading', label: 'Get Start.pdf', href: '/resource/Get Start.pdf' },
  { group: 'Reading', label: 'Numbers and Strings.pdf', href: '/resource/Numbers and Strings.pdf' },
  { group: 'Reading', label: 'Support Classes.pdf', href: '/resource/Support Classes.pdf' },
];

export const workshops: { label: string; href: string }[] = [
  { label: 'Workshop 1', href: '/workshop/workshop1.pdf' },
  { label: 'Workshop 2', href: '/workshop/workshop2.pdf' },
  { label: 'Workshop 3', href: '/workshop/workshop3.pdf' },
  { label: 'Workshop 4', href: '/workshop/workshop4.pdf' },
  { label: 'Workshop 5', href: '/workshop/workshop5.pdf' },
  { label: 'Workshop 6', href: '/workshop/workshop6.pdf' },
];

export const ui = {
  en: {
    brandSub: 'FPT · OOP Java',
    searchPlaceholder: 'Search lessons...',
    noResults: 'No results found',
    overview: 'Overview',
    home: 'Home',
    resources: 'Resources',
    workshops: 'Workshops',
    references: 'References',
    about: 'About this course',
    progress: 'Study progress',
    lessons: 'lessons',
    completed: 'completed',
    breadcrumbHome: 'Home',
    breadcrumbResources: 'Resources',
    breadcrumbWorkshops: 'Workshops',
    breadcrumbReferences: 'References',
    breadcrumbAbout: 'About this course',
    saveLesson: 'Save lesson',
    switchLight: 'Switch to light theme',
    switchDark: 'Switch to dark theme',
    switchVi: 'Chuyển sang tiếng Việt',
    switchEn: 'Switch to English',
    learningJourney: 'Learning journey',
    lessonsCount: 'lessons',
    doneCount: 'done',
    learningOutcomes: 'Learning outcomes',
    aboutCourse: 'About this course',
    aboutEyebrow: 'About the course',
    library: 'Library',
    resourcesSummary: 'Lecture slides and further reading for the whole course.',
    practice: 'Practice',
    workshopsSummary: 'Workshops applying knowledge from each chapter.',
    referencesSummary: 'Books and official references for the course.',
    courseCode: 'Course code',
    prerequisite: 'Prerequisite',
    lessonCount: 'Lessons',
    completedCount: 'Completed',
    academicPolicy: 'Academic policy',
    policyText:
      'Cheating, plagiarism and copyright infringement are serious violations. Cheating in a test is defined as talking, looking at a peer\'s work, or any secret communication. Plagiarism is using someone else\'s work without citation. Copyright infringement is copying material without the owner\'s permission.',
    lessonObjectives: 'Lesson objectives',
    contents: 'Contents',
    materialsWorkshop: 'Materials & Workshop',
    markDone: 'Mark as completed',
    done: 'Completed',
  },
  vi: {
    brandSub: 'FPT · OOP Java',
    searchPlaceholder: 'Tìm bài học...',
    noResults: 'Không tìm thấy kết quả',
    overview: 'Tổng quan',
    home: 'Trang chủ',
    resources: 'Tài nguyên',
    workshops: 'Workshops',
    references: 'Tài liệu tham khảo',
    about: 'Giới thiệu môn',
    progress: 'Tiến độ học tập',
    lessons: 'bài',
    completed: 'Đã hoàn thành',
    breadcrumbHome: 'Trang chủ',
    breadcrumbResources: 'Tài nguyên',
    breadcrumbWorkshops: 'Workshops',
    breadcrumbReferences: 'Tài liệu tham khảo',
    breadcrumbAbout: 'Giới thiệu môn',
    saveLesson: 'Lưu bài',
    switchLight: 'Chuyển sang giao diện sáng',
    switchDark: 'Chuyển sang giao diện tối',
    switchVi: 'Chuyển sang tiếng Việt',
    switchEn: 'Switch to English',
    learningJourney: 'Hành trình học tập',
    lessonsCount: 'bài',
    doneCount: 'đã xong',
    learningOutcomes: 'Mục tiêu học tập',
    aboutCourse: 'Về môn học',
    aboutEyebrow: 'Về môn học',
    library: 'Thư viện',
    resourcesSummary: 'Slide bài giảng và tài liệu đọc thêm cho toàn bộ môn học.',
    practice: 'Thực hành',
    workshopsSummary: 'Bài thực hành áp dụng kiến thức từng chương.',
    referencesSummary: 'Sách và nguồn tham khảo chính thức của môn học.',
    courseCode: 'Mã môn',
    prerequisite: 'Tiên quyết',
    lessonCount: 'Số bài học',
    completedCount: 'Đã hoàn thành',
    academicPolicy: 'Chính sách học thuật',
    policyText:
      'Gian lận, đạo văn và vi phạm bản quyền là các vi phạm nghiêm trọng. Gian lận trong kiểm tra được hiểu là nói chuyện, nhìn bài bạn hay bất kỳ cách truyền thông bí mật nào. Đạo văn là sử dụng công sức người khác mà không trích dẫn. Vi phạm bản quyền là sao chép tài liệu mà không xin phép chủ sở hữu.',
    lessonObjectives: 'Mục tiêu bài học',
    contents: 'Nội dung',
    materialsWorkshop: 'Tài liệu & Workshop',
    markDone: 'Đánh dấu hoàn thành',
    done: 'Đã hoàn thành',
  },
} as const;

export type UIStrings = (typeof ui)['en'] | (typeof ui)['vi'];
