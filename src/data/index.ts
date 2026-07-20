import type { CourseModule } from './types';
import { introduction } from './introduction';
import { io, exception, dynamicMemory } from './foundations2';
import { foundations as foundationsLesson } from './foundations';
import { encapsulation } from './encapsulation';
import { inheritance } from './inheritance';
import { polymorphism } from './polymorphism';
import { arrayOfObjects } from './arrayOfObjects';
import { collection } from './collection';

export const modules: CourseModule[] = [
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

export const allLessons = modules.flatMap((m) => m.lessons);

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
