import type { Lesson } from '../types';

export const foundationsEn: Lesson = {
  id: 'foundations',
  title: 'Java Foundations',
  category: 'Foundations',
  icon: 'cube',
  summary:
    'JVM, Java Platform, the first program, data types, variables, arrays, operators and logic constructs.',
  outcomes: [
    'Understand the JVM and the Java Platform',
    'Write your first Java program in NetBeans',
    'Distinguish primitive types and reference types',
    'Declare and use one-dimensional and multi-dimensional arrays',
    'Use operators and control structures',
  ],
  sections: [
    {
      id: 'jvm',
      heading: 'Java Virtual Machine',
      blocks: [
        {
          type: 'p',
          text: 'The JVM is an abstract computer. Like a real computer, it has an instruction set and manages memory regions at runtime. Using a virtual machine for a programming language is quite common (e.g. P-Code of UCSD Pascal).',
        },
        { type: 'img', src: '/images/JVM.png', alt: 'JVM' },
      ],
    },
    {
      id: 'platform',
      heading: 'Java Platform',
      blocks: [
        {
          type: 'p',
          text: 'A platform is the hardware/software environment in which a program runs. The Java Platform has two components:',
        },
        {
          type: 'ul',
          items: ['Java Virtual Machine', 'Java Application Programming Interface (API)'],
        },
        { type: 'img', src: '/images/JavaPlatform.png', alt: 'Java Platform' },
      ],
    },
    {
      id: 'first-program',
      heading: 'The First Program',
      blocks: [
        {
          type: 'p',
          text: 'A program that prints "Hello World". Steps: create a NetBeans project, add a Java class, write the code, compile/run.',
        },
        { type: 'img', src: '/images/firstProgram.png', alt: 'First program' },
        { type: 'img', src: '/images/step2.png', alt: 'Step 2' },
        { type: 'img', src: '/images/step3.png', alt: 'Step 3' },
        { type: 'img', src: '/images/step4.png', alt: 'Step 4' },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Keyword & Identifier',
          text: 'Java is case-sensitive. An identifier must differ from keywords. Follow naming conventions: camelCase for variables, PascalCase for classes.',
        },
      ],
    },
    {
      id: 'data-types',
      heading: 'Data Types & Variables',
      blocks: [
        {
          type: 'p',
          text: 'Types in Java are divided into primitive types and reference types.',
        },
        {
          type: 'p',
          text: 'A primitive is a simple data type that is not an object, representing a single value.',
        },
        { type: 'img', src: '/images/datatype.png', alt: 'Primitive types' },
        {
          type: 'code',
          lang: 'java',
          code: '// Declaration\nint RollID;\nchar type = "A";\n\n// Initialize reference\nString s = new String("Hello");\nint[] ar = new int[3];\nar[0] = 1; ar[1] = 2; ar[2] = 3;',
        },
        {
          type: 'p',
          text: 'Reference types include Class, Array, and Interface. A reference variable only stores the address of an object. The default value of a reference is null.',
        },
        { type: 'img', src: '/images/referenceDataType.png', alt: 'Reference type' },
      ],
    },
    {
      id: 'scope',
      heading: 'Scope',
      blocks: [
        {
          type: 'p',
          text: 'Scope is the part of a program in which a declaration is visible. It includes:',
        },
        {
          type: 'ul',
          items: [
            'function scope — visible within the function',
            'class scope — visible within member functions',
            'block scope — visible within a code block',
            'global scope — the whole program',
            'file scope — within the source file',
          ],
        },
        { type: 'img', src: '/images/scope.png', alt: 'Scope' },
      ],
    },
    {
      id: 'arrays',
      heading: 'Arrays',
      blocks: [
        {
          type: 'p',
          text: 'An array is a container that holds a fixed number of values of one type. The length of an array is set when it is created. Each element is accessed by index.',
        },
        { type: 'img', src: '/images/array2.png', alt: 'Array' },
        {
          type: 'code',
          lang: 'java',
          code: 'int[] anArray = new int[10];\n\n// copy an array using System.arraycopy\nSystem.arraycopy(copyFrom, 2, copyTo, 0, 7);',
        },
        { type: 'img', src: '/images/copyarray.png', alt: 'Copy array' },
        {
          type: 'p',
          text: 'A multi-dimensional array can be viewed as an array of one-dimensional arrays. You can reassign individual rows to change their size.',
        },
        { type: 'img', src: '/images/2Darray.png', alt: '2D array' },
      ],
    },
    {
      id: 'operators',
      heading: 'Operators',
      blocks: [
        { type: 'img', src: '/images/operator.png', alt: 'Operators' },
        { type: 'img', src: '/images/operator2.png', alt: 'Operators 2' },
        { type: 'img', src: '/images/operator3.png', alt: 'Operators 3' },
      ],
    },
    {
      id: 'logic-constructs',
      heading: 'Logic Constructs',
      blocks: [
        {
          type: 'p',
          text: 'Control flow directs the flow of execution through decision making, looping, and branching: if-then, if-then-else, switch; for, while, do-while; break, continue, return.',
        },
      ],
    },
  ],
  resources: [
    { href: '/resource/Learning the Java Language.pdf', label: 'Learning the Java Language.pdf' },
    { href: '/resource/Download & Install JDK & NetBeans 8.pdf', label: 'Download & Install JDK & NetBeans 8.pdf' },
    { href: '/resource/Get Start.pdf', label: 'How to compile and run a Java program.pdf' },
    { href: '/resource/Numbers and Strings.pdf', label: 'Number and String in Java.pdf' },
  ],
};
