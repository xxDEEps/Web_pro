import type { Lesson } from '../types';

export const introductionEn: Lesson = {
  id: 'introduction',
  title: 'Introduction to OOP',
  category: 'Introduction',
  icon: 'sparkles',
  summary:
    'Introduction to software complexity, object-oriented terminology, abstraction, classes, UML, encapsulation, inheritance, and polymorphism.',
  outcomes: [
    'Understand why object orientation is needed to manage software complexity',
    'Distinguish object, class, encapsulation, inheritance, polymorphism',
    'Read a basic class diagram in UML',
  ],
  sections: [
    {
      id: 'complexity',
      heading: 'Software Complexity',
      blocks: [
        {
          type: 'p',
          text: 'Modern software applications are complex, dynamic, and may contain hundreds of thousands or millions of lines of code. They evolve over time, sometimes requiring years of effort from many programmers. Software engineering principles advise that each component should be highly cohesive and loosely coupled.',
        },
        {
          type: 'p',
          text: 'Object-oriented languages provide tools to implement these principles. We manage complexity by identifying the most important features of the problem domain and representing them through data and operations.',
        },
        { type: 'img', src: '/images/algorithmic.png', alt: 'Activity structure' },
        {
          type: 'p',
          text: 'When we shift attention from activities to objects, we get Course and HybridCourse. Course has a Course Code and uses a Grading Scheme; HybridCourse is a kind of Course. The diagram below shows the relationships: a closed circle means "has-a", an open circle means "uses-a", an arrow means "is-a-kind-of".',
        },
        { type: 'img', src: '/images/class_relationships.png', alt: 'Class relationships' },
      ],
    },
    {
      id: 'object-terminology',
      heading: 'Object-Oriented Terminology',
      blocks: [
        {
          type: 'p',
          text: 'Object-oriented programming reflects how we handle everyday tasks. Professor Miller (Princeton) showed that most of us can grasp only about 7 chunks of information at a time. Children learn to break problems into manageable parts.',
        },
        {
          type: 'p',
          text: 'A chunk in OOP is called an object. The general structure of a set of similar objects is called a class. This structure consists of a data structure and logic to process the data.',
        },
      ],
    },
    {
      id: 'abstraction',
      heading: 'Abstraction',
      blocks: [
        {
          type: 'p',
          text: 'An OOP solution consists of components called objects. OOP design uses abstraction: we identify the most important features, expose them, and hide less important details inside the object.',
        },
        { type: 'img', src: '/images/abstraction.png', alt: 'Abstraction' },
        {
          type: 'p',
          text: 'Each object has a clear conceptual boundary and behaves consistently with itself. Compare a book (pages bound, fixed order) with a ring binder (loose pages that can be reordered).',
        },
      ],
    },
    {
      id: 'classes',
      heading: 'Class',
      blocks: [
        {
          type: 'p',
          text: 'We describe the structure of similar objects through a class. Objects of the same class share the same structure but have different states. Each object is an instance of a class.',
        },
        { type: 'img', src: '/images/classes.png', alt: 'Classes' },
      ],
    },
    {
      id: 'uml',
      heading: 'UML and Class Diagram',
      blocks: [
        {
          type: 'p',
          text: 'UML (Unified Modelling Language) is a modelling language used to describe object systems and relationships between classes. A class diagram is a rectangle with 3 compartments:',
        },
        {
          type: 'ol',
          items: [
            'Top compartment: class name',
            'Middle compartment: attribute names and types with visibility',
            'Bottom compartment: operation names, return types and parameter types',
          ],
        },
        {
          type: 'p',
          text: 'Visibility: + public, - private, # protected, (blank) default (package).',
        },
        { type: 'img', src: '/images/classUML.png', alt: 'Class UML' },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Naming Convention',
          text: 'Start class names with an uppercase letter, member names with a lowercase letter, and use camelCase for all names.',
        },
      ],
    },
    {
      id: 'encapsulation',
      heading: 'Encapsulation',
      blocks: [
        {
          type: 'p',
          text: 'Encapsulation is a foundational concept of OOP: integrating data and logic within a class implementation, creating a clear boundary between implementation and client. Keep high cohesion within a class and loose coupling with clients.',
        },
        {
          type: 'p',
          text: 'A class hides all implementation details. The client sees only a clean, simple interface. When a class is well encapsulated, the programmer can upgrade the internal structure without changing client code.',
        },
        { type: 'img', src: '/images/encapsulation.png', alt: 'Encapsulation' },
      ],
    },
    {
      id: 'inheritance-polymorphism',
      heading: 'Inheritance and Polymorphism',
      blocks: [
        {
          type: 'p',
          text: 'Polymorphism associates the implementation of an object with its type. HybridCourse has a different delivery mode than Course but the same assessment. Both belong to the Course hierarchy.',
        },
        {
          type: 'p',
          text: 'Querying mode() on Course returns a different result than on HybridCourse, but assessments() is the same. Polymorphism helps reduce code duplication among objects in the same hierarchy.',
        },
        { type: 'img', src: '/images/differentBehavior.png', alt: 'Different behavior' },
        { type: 'img', src: '/images/identicalBehavior.png', alt: 'Identical behavior' },
        {
          type: 'callout',
          variant: 'rule',
          title: 'OOP Foundations',
          text: 'Encapsulation, inheritance and polymorphism are the three foundations of every object-oriented programming language.',
        },
      ],
    },
  ],
  resources: [{ href: '/resource/Introduction.pdf', label: 'Introduction.pdf' }],
};
