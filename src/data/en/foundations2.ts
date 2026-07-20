import type { Lesson } from '../types';

export const ioEn: Lesson = {
  id: 'io',
  title: 'Standard I/O',
  category: 'Foundations',
  icon: 'terminal',
  summary:
    'I/O Streams, command-line input/output, Standard Streams and the Scanner class for reading user input.',
  outcomes: [
    'Understand the concept of an I/O Stream',
    'Use System.in, System.out, System.err',
    'Use Scanner to read multiple data types',
    'Convert a String to a number with Integer.parseInt',
  ],
  sections: [
    {
      id: 'streams',
      heading: 'I/O Streams',
      blocks: [
        {
          type: 'p',
          text: 'An I/O Stream represents an input source or an output destination. A stream may be a disk file, a device, another program, or a memory array.',
        },
        {
          type: 'p',
          text: 'Streams support many data types: bytes, primitives, localized characters, objects. Some streams simply pass data through; others transform it.',
        },
      ],
    },
    {
      id: 'command-line',
      heading: 'Command-Line I/O',
      blocks: [
        {
          type: 'p',
          text: 'Java supports command-line interaction through Standard Streams and the Console. There are 3 Standard Streams: System.in (input), System.out (output), System.err (error).',
        },
        {
          type: 'p',
          text: 'System.out and System.err are both for output; separating errors lets you redirect output to a file while still reading error messages.',
        },
      ],
    },
    {
      id: 'scanner',
      heading: 'The Scanner Class',
      blocks: [
        {
          type: 'p',
          text: 'Use Scanner to get user input. The table lists common methods:',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Scanner Methods',
          text: 'nextBoolean(), nextByte(), nextDouble(), nextFloat(), nextInt(), nextLine(), nextLong(), nextShort() — each method reads the corresponding type from the user.',
        },
      ],
    },
    {
      id: 'example',
      heading: 'Example',
      blocks: [
        { type: 'img', src: '/images/ioexample.png', alt: 'IO example' },
        {
          type: 'p',
          text: 'Import java.util.Scanner. Create a Scanner object, print the prompt "Enter number of elements", use sc.nextLine() to read a string then Integer.parseInt() to convert it to an int.',
        },
        {
          type: 'p',
          text: 'System.out.format is used to format the output.',
        },
      ],
    },
    {
      id: 'summary',
      heading: 'Summary',
      blocks: [
        {
          type: 'ul',
          items: [
            'The easiest way to read user data is to use Scanner',
            'Use System.out to print to the console',
            'Convert strings to numbers using Integer, Float, ...',
          ],
        },
      ],
    },
  ],
  resources: [],
  workshop: { href: '/workshop/workshop1.pdf', label: 'workshop1' },
};

export const exceptionEn: Lesson = {
  id: 'exception',
  title: 'Exception',
  category: 'Foundations',
  icon: 'alert',
  summary:
    'What an exception is, checked vs unchecked, try-catch and throws, practical examples and custom exceptions.',
  outcomes: [
    'Understand exceptions and the throw mechanism',
    'Distinguish checked and unchecked exceptions',
    'Use try-catch-finally and throws',
    'Create a custom exception class',
  ],
  sections: [
    {
      id: 'what',
      heading: 'What is an Exception',
      blocks: [
        {
          type: 'p',
          text: 'An exception is an event that occurs during program execution that disrupts the normal flow. When an error occurs in a method, the method creates an exception object containing error information and hands it to the runtime system — this is called throwing an exception.',
        },
        {
          type: 'p',
          text: 'Examples: the user enters an invalid file name, the file does not exist or is corrupted, a network link fails. All exceptions inherit from java.lang.Throwable.',
        },
        { type: 'img', src: '/images/exception.png', alt: 'Exception' },
        {
          type: 'p',
          text: 'When an error occurs on line 4, the main method creates an ArithmeticException object and the JVM throws it to the main method. Since main does not handle it, a stack trace is printed. The statement on line 5 is skipped.',
        },
      ],
    },
    {
      id: 'kinds',
      heading: 'Kinds of Exceptions',
      blocks: [
        {
          type: 'callout',
          variant: 'info',
          title: 'Checked Exception',
          text: 'Checked at compile time. Must be handled with try-catch or a throws declaration. Example: FileReader() throws IOException.',
        },
        { type: 'img', src: '/images/exception2.png', alt: 'Checked exception' },
        {
          type: 'callout',
          variant: 'info',
          title: 'Unchecked Exception',
          text: 'Occurs at runtime (Runtime Exception). No compile error. Usually caused by invalid user input. Example: accessing the 6th element of a 5-element array → ArrayIndexOutOfBoundsException.',
        },
        { type: 'img', src: '/images/exception1.png', alt: 'Unchecked exception' },
      ],
    },
    {
      id: 'fix',
      heading: 'How to Handle',
      blocks: [
        {
          type: 'p',
          text: 'Use try-catch or throws to handle exceptions.',
        },
        {
          type: 'p',
          text: 'try: the block of code checked for errors. catch: the block that runs when an error occurs in try. finally: runs after try...catch regardless of the result.',
        },
        { type: 'img', src: '/images/exception3.png', alt: 'try-catch syntax' },
        {
          type: 'callout',
          variant: 'rule',
          text: 'You cannot use finally without try. finally is optional.',
        },
        { type: 'img', src: '/images/exception5.png', alt: 'DemoException2' },
        { type: 'img', src: '/images/exception4.png', alt: 'ExceptionDemo_1' },
        {
          type: 'p',
          text: 'throws: used when you do not want to handle the error in a method, deferring it to another method.',
        },
        { type: 'img', src: '/images/exception6.png', alt: 'throws mechanism' },
      ],
    },
    {
      id: 'examples',
      heading: 'Example',
      blocks: [
        {
          type: 'p',
          text: 'Code prints "age is 20 or older" if age is under 20 or text is entered.',
        },
        { type: 'img', src: '/images/exception7.png', alt: 'Example' },
        { type: 'img', src: '/images/exception8.png', alt: 'Output 1' },
        { type: 'img', src: '/images/exception9.png', alt: 'Output 2' },
      ],
    },
    {
      id: 'summary',
      heading: 'Summary',
      blocks: [
        {
          type: 'ul',
          items: [
            'try is always paired with catch to handle exceptions in try',
            'A single try can have multiple catch blocks (multi-catch)',
            'try blocks can be nested (nested try/catch)',
            'Use throws to defer an exception to another method',
            'You can create a custom exception class',
          ],
        },
      ],
    },
  ],
  resources: [{ href: '/resource/Exception Handling.pdf', label: 'Exceptions.pdf' }],
  workshop: { href: '/workshop/workshop2.pdf', label: 'workshop2' },
};

export const dynamicMemoryEn: Lesson = {
  id: 'dynamic-memory',
  title: 'Dynamic Memory',
  category: 'Foundations',
  icon: 'database',
  summary:
    'Static/dynamic heap and stack, dynamic allocation, deallocation and Garbage Collection in Java.',
  outcomes: [
    'Distinguish static heap, dynamic heap and stack',
    'Understand dynamic allocation with new',
    'Understand the Garbage Collection mechanism',
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      blocks: [
        {
          type: 'p',
          text: 'Java manages memory automatically via the garbage collector. Allocation occurs when an object is created with new or when a method with local variables/arguments is called.',
        },
        {
          type: 'p',
          text: 'Local data of a method (return value, parameters, local variables) is allocated on the stack and destroyed when the method ends. Objects are allocated on the heap and live longer.',
        },
      ],
    },
    {
      id: 'heap-stack',
      heading: 'Static & Dynamic Heap, Stack',
      blocks: [
        {
          type: 'p',
          text: 'The static heap holds the class declaration when the class is loaded. You can have static methods, static classes, static blocks, and static variables using the static keyword.',
        },
        {
          type: 'p',
          text: 'The dynamic heap is the runtime region allocated for all objects and arrays. The heap is created when the JVM starts and can grow or shrink. Unused objects (garbage) are reclaimed automatically.',
        },
        {
          type: 'p',
          text: 'The stack holds temporary variables. When a method is called, a new block is created on the stack for that method, holding local values and references to objects. When the method ends, the block is removed.',
        },
        { type: 'img', src: '/images/memory.png', alt: 'Memory' },
        { type: 'img', src: '/images/memory2.png', alt: 'Memory 2' },
      ],
    },
    {
      id: 'allocation',
      heading: 'Dynamic Allocation',
      blocks: [
        {
          type: 'code',
          lang: 'java',
          code: 'public static void main(String[] args){\n    int a[] = new int[5];        // [1]\n    String s = new String("hello"); // [2]\n}',
        },
        {
          type: 'p',
          text: '[1] new allocates a 5-element array in the heap and returns the address of the first element. a stores this address. [2] new allocates a block containing "hello".',
        },
        { type: 'img', src: '/images/allocation.png', alt: 'Allocation' },
        {
          type: 'p',
          text: 'Use null so a variable points to nothing: int a[] = null; String s = null;',
        },
      ],
    },
    {
      id: 'deallocation',
      heading: 'Dynamic Deallocation',
      blocks: [
        {
          type: 'p',
          text: 'Java does not require explicit memory freeing. Garbage collection is automatic. Local variables are destroyed when the method ends; unused objects on the heap are reclaimed by the GC.',
        },
        { type: 'img', src: '/images/memory3.png', alt: 'Deallocation' },
      ],
    },
    {
      id: 'gc',
      heading: 'Garbage Collection',
      blocks: [
        {
          type: 'ul',
          items: [
            'The JVM provides GC to free programmers from heap management',
            'GC is only invoked by the JVM; we cannot trigger it',
            'The Java heap is managed with 2 lists: Free block list and Allocated block list',
            'After many allocations/deallocations, blocks become fragmented',
            'GC has the lowest priority and runs when the heap is nearly full',
          ],
        },
      ],
    },
  ],
  resources: [{ href: '/resource/Memory Management in Java.pdf', label: 'Memory Management in Java.pdf' }],
};
