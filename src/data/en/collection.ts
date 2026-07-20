import type { Lesson } from '../types';

export const collectionEn: Lesson = {
  id: 'collection',
  title: 'Collections',
  category: 'Collections in Java',
  icon: 'layers',
  summary:
    'ADT, the Java Collections Framework, List/ArrayList, Set/TreeSet, Map/HashMap and supporting classes.',
  outcomes: [
    'Understand Abstract Data Types and the Collections Framework',
    'Use ArrayList for lists that allow duplicates',
    'Use TreeSet for distinct + sorted sets',
    'Use HashMap for key-value pairs',
    'Use Collections and Arrays for auxiliary operations',
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Abstract Data Types',
      blocks: [
        {
          type: 'p',
          text: 'An ADT is a mathematical model for a data type that ignores the storage structure. An ADT describes a general concept, defined by behavior from the user perspective. Java defines ADTs through interfaces.',
        },
        {
          type: 'p',
          text: 'A group of elements can be viewed in several ways: list (allows duplicates), set (distinct), map (<Key, Value>).',
        },
        {
          type: 'p',
          text: 'Common operations: add, find, remove, traverse, sort. An ADT (mathematical model, user view) contrasts with a data structure (concrete implementation, implementer view).',
        },
      ],
    },
    {
      id: 'framework',
      heading: 'Java Collections Framework',
      blocks: [
        {
          type: 'p',
          text: 'A collection is an object that represents a group of objects. The Collections framework is a unified architecture for representing and manipulating collections independently of implementation details.',
        },
        {
          type: 'ul',
          items: [
            'Reduces programming effort — provides data structures and algorithms',
            'Increases performance — high-performance implementations that are interchangeable',
            'Interoperability between APIs',
            'Reduces the effort to learn/design APIs',
            'Promotes software reuse',
          ],
        },
        { type: 'img', src: '/images/7.01.gif', alt: 'Framework structure' },
      ],
    },
    {
      id: 'list',
      heading: 'List & ArrayList',
      blocks: [
        {
          type: 'p',
          text: 'ArrayList stores references in a one-dimensional array, allows duplicate elements and mixed types (when generics are not declared).',
        },
        { type: 'img', src: '/images/7.02.gif', alt: 'ArrayList' },
        {
          type: 'p',
          text: 'When elements are not of the same class, the reference behaves as Object. You must cast explicitly to call a specific method (e.g. area()). Use generics <Rectangle> so the compiler knows the type and removes the cast.',
        },
        { type: 'img', src: '/images/7.04.gif', alt: 'Generic ArrayList' },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Specifying the element type helps catch bugs at compile time and removes the need to cast.',
        },
      ],
    },
    {
      id: 'set',
      heading: 'Set & TreeSet',
      blocks: [
        {
          type: 'p',
          text: 'A Set is a group of distinct objects that does not allow duplicates. A tree is a structure of nodes and edges that describes a parent-child relationship.',
        },
        {
          type: 'p',
          text: 'TreeSet implements a self-balancing tree, guaranteeing log(n) for add/remove/contains. Elements must implement Comparable (compareTo).',
        },
        { type: 'img', src: '/images/7.14.gif', alt: 'TreeSet' },
        {
          type: 'callout',
          variant: 'rule',
          text: 'Two elements that are equal according to compareTo are considered equal by TreeSet.',
        },
      ],
    },
    {
      id: 'map',
      heading: 'Map & HashMap',
      blocks: [
        {
          type: 'p',
          text: 'A Map does not implement Collection. A Map associates two collections: keys (a set K) and values (a collection V). Each key maps to exactly one value. Key uniqueness is checked via equals().',
        },
        {
          type: 'p',
          text: 'A hash-table is a set of subsets, where the position is determined by a hash function h. Modulo (%) is commonly used in hash functions.',
        },
        { type: 'img', src: '/images/7.17.gif', alt: 'Hash function' },
        {
          type: 'p',
          text: 'HashMap implements Map with a hash-table. It offers constant-time performance for get/put if the hash is well distributed. It does not guarantee order.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'HashMap is best for lookups because searching within a small subset is more efficient than searching a large set.',
        },
      ],
    },
    {
      id: 'support',
      heading: 'Supporting Classes',
      blocks: [
        {
          type: 'p',
          text: 'java.util.Collections and java.util.Arrays contain many static methods for collection/array operations: sort, shuffle, copy, search, min, max, ...',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Choosing a Class',
          text: 'Duplicates → ArrayList. Distinct + sorted + high performance → TreeSet. Unique keys + very high performance → HashMap.',
        },
      ],
    },
  ],
  resources: [
    { href: '/resource/Collections.pdf', label: 'Collections.pdf' },
    { href: '/resource/Support Classes.pdf', label: 'Support Classes.pdf' },
  ],
  workshop: { href: '/workshop/workshop6.pdf', label: 'workshop6' },
};
