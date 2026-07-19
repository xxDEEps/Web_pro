import type { Topic } from "./types"

export const topics: Topic[] = [
  {
    slug: "introduction",
    title: "Introduction to Object-Oriented Programming",
    order: 1,
    module: "Getting Started",
    summary:
      "Why object-oriented programming exists, how it manages complexity through abstraction, and the core terminology of objects, classes, encapsulation, inheritance and polymorphism.",
    readingMinutes: 10,
    learningOutcomes: ["LO1"],
    slide: "Introduction.pptx",
    pdf: "Introduction.pdf",
    sections: [
      {
        id: "complex-applications",
        title: "A Language for Complex Applications",
        blocks: [
          {
            type: "paragraph",
            text: "Modern software applications are intricate, dynamic and complex. The number of lines of code can exceed hundreds of thousands or even millions, and these applications evolve over time. Creating them involves many developers with different levels of expertise, working on smaller, stand-alone and testable sub-projects that are transferable, practical and upgradeable.",
          },
          {
            type: "paragraph",
            text: "The principles of software engineering suggest that each component should be highly cohesive and that the collection of components should be loosely coupled. Object-oriented languages provide the tools for implementing these principles.",
          },
          {
            type: "callout",
            variant: "note",
            title: "Cohesion vs. coupling",
            text: "High cohesion means a component focuses on a single, well-defined responsibility. Low coupling means components depend on each other as little as possible. Together they make large systems maintainable.",
          },
        ],
      },
      {
        id: "complexity",
        title: "Managing Complexity",
        blocks: [
          {
            type: "paragraph",
            text: "We address the complexity of large applications by identifying the most important features of the problem domain — the area of expertise that must be examined to solve the problem. We express those features in terms of data and activities, identifying the data objects and the activities on those objects as complementary tasks.",
          },
          {
            type: "paragraph",
            text: "Consider a course enrollment system for a college. Each participant enrolls in several face-to-face courses, enrolls in several hybrid courses, and earns a grade in each course. If we switch our attention to the objects involved, we find a Course and a Hybrid Course. A Course has a Code and uses a Grading Scheme, and a Hybrid Course is a kind of Course.",
          },
          {
            type: "list",
            items: [
              "has-a relationship — a Course has a Code (composition/aggregation).",
              "uses-a relationship — a Course uses a Grading Scheme (dependency).",
              "is-a-kind-of relationship — a Hybrid Course is a kind of Course (inheritance).",
            ],
          },
          {
            type: "paragraph",
            text: "Switching our attention from the activities to the objects moves us from a procedural description of a problem to an object-oriented description.",
          },
        ],
      },
      {
        id: "abstraction",
        title: "Abstraction",
        blocks: [
          {
            type: "paragraph",
            text: "Programming solutions to application problems consist of components, and designing those solutions involves abstraction. In C we abstract common code into a structure or function and refer to it from multiple places, avoiding duplication.",
          },
          {
            type: "paragraph",
            text: "An object-oriented solution consists of components called objects. We distinguish the most important features of an object, identify them publicly, and hide the less important details within the object itself. Each object has a crisp conceptual boundary and acts in ways appropriate to itself.",
          },
          {
            type: "callout",
            variant: "tip",
            title: "Analogy",
            text: "An ear cannot see, an eye cannot listen, and a mouth cannot smell. A horse cannot bark and a dog cannot croak — each object acts only in ways appropriate to itself.",
          },
        ],
      },
      {
        id: "objects-classes",
        title: "Objects and Classes",
        blocks: [
          {
            type: "paragraph",
            text: "A 'chunk' in object-oriented programming is called an object. The shared structure of a set of similar objects is called their class. This shared structure includes the structure of the data in the similar objects as well as the logic that works on that data.",
          },
          {
            type: "paragraph",
            text: "Objects of the same class have the same structure, but possibly different states. The variable types that describe their states are identical, but generally have different values. For example, all books have a title and an author, but each book has a different title and author. We say that each object is an instance of its class.",
          },
        ],
      },
      {
        id: "uml",
        title: "UML and the Class Diagram",
        blocks: [
          {
            type: "paragraph",
            text: "The Unified Modelling Language (UML) is a general-purpose modeling language for describing systems of objects and the relationships between their classes. Its primary graphic is the class diagram: a rectangular box with three compartments.",
          },
          {
            type: "list",
            items: [
              "The upper compartment identifies the class by its name.",
              "The middle compartment identifies the names, types and visibility of its attributes.",
              "The lower compartment identifies the names, return types and parameter types of its operations.",
            ],
          },
          {
            type: "table",
            headers: ["Symbol", "Visibility"],
            rows: [
              ["+", "public"],
              ["-", "private"],
              ["#", "protected"],
              ["(blank)", "default (package)"],
            ],
          },
          {
            type: "callout",
            variant: "note",
            title: "Naming conventions",
            text: "Begin each class name with an uppercase letter, begin each member name with a lowercase letter, and use camelCase throughout.",
          },
          {
            type: "table",
            headers: ["UML term", "Equivalent terms"],
            rows: [
              ["attributes", "fields, data members, properties, member variables"],
              ["operations", "methods (Java), procedures, messages, member functions"],
            ],
          },
        ],
      },
      {
        id: "three-pillars",
        title: "Encapsulation, Inheritance and Polymorphism",
        blocks: [
          {
            type: "paragraph",
            text: "Encapsulation is the primary concept of object-oriented programming. It refers to integrating data and logic within a class' implementation, establishing a crisp interface between the implementation and any client. It maintains high cohesion within a class and low coupling between the class and its clients.",
          },
          {
            type: "paragraph",
            text: "Polymorphism relates the implementation for an object based on its type. A HybridCourse object may involve a different mode of delivery than a Course object, but the same assessments — both belong to the same hierarchy. A mode() query on a Course reports a different result than on a HybridCourse, while an assessments() query reports the same result on both.",
          },
        ],
      },
    ],
  },
  {
    slug: "foundations",
    title: "Foundations of the Java Language",
    order: 2,
    module: "Foundations",
    summary:
      "The Java Virtual Machine and platform, writing your first program, keywords and identifiers, primitive and reference data types, scope, arrays, operators and logic constructs.",
    readingMinutes: 14,
    learningOutcomes: ["LO2"],
    slide: "Learning the Java Language.pptx",
    pdf: "Learning the Java Language.pdf",
    sections: [
      {
        id: "jvm",
        title: "The Java Virtual Machine",
        blocks: [
          {
            type: "paragraph",
            text: "The Java Virtual Machine (JVM) is an abstract computing machine. Like a real computing machine, it has an instruction set and manipulates various memory areas at run time. Implementing a programming language using a virtual machine is common — the best-known example may be the P-Code machine of UCSD Pascal.",
          },
        ],
      },
      {
        id: "platform",
        title: "The Java Platform",
        blocks: [
          {
            type: "paragraph",
            text: "A platform is the hardware or software environment in which a program runs. The Java platform has two components:",
          },
          {
            type: "list",
            items: ["The Java Virtual Machine (JVM).", "The Java Application Programming Interface (API)."],
          },
        ],
      },
      {
        id: "first-program",
        title: "Your First Java Program",
        blocks: [
          {
            type: "paragraph",
            text: "This program prints the string \u201CHello World\u201D to the screen. In NetBeans, the steps are: create a new Java project, add a Java class, write the code, then compile and run the program.",
          },
          {
            type: "code",
            language: "java",
            code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}`,
            caption: "The classic first program",
          },
        ],
      },
      {
        id: "keywords",
        title: "Keywords and Identifiers",
        blocks: [
          {
            type: "paragraph",
            text: "Most Java keywords are similar to those in the C language. When naming identifiers, remember that Java is a case-sensitive language and identifiers must be different from keywords.",
          },
        ],
      },
      {
        id: "data-types",
        title: "Data Types",
        blocks: [
          {
            type: "paragraph",
            text: "The types of the Java programming language are divided into two categories: primitive types and reference types.",
          },
          {
            type: "paragraph",
            text: "A primitive is a simple, non-object data type that represents a single value. Java's primitive data types include byte, short, int, long, float, double, char and boolean.",
          },
          {
            type: "code",
            language: "java",
            code: `// Declaration:  Type var [= Initial value];
int  rollID;
char type = 'A';`,
            caption: "Declaring primitives",
          },
          {
            type: "paragraph",
            text: "Reference types point to objects rather than storing a value directly:",
          },
          {
            type: "list",
            items: [
              "Class types — a reference that points to an object of a class.",
              "Array types — a reference that points to an array.",
              "Interface types — a reference that points to an object of a class implementing an interface.",
            ],
          },
          {
            type: "paragraph",
            text: "Reference variables only store the address of these values. The default value of any reference variable is null.",
          },
          {
            type: "code",
            language: "java",
            code: `String s = new String("Hello");
int[] ar;
ar = new int[3];
ar[0] = 1; ar[1] = 2; ar[2] = 3;`,
          },
        ],
      },
      {
        id: "scope",
        title: "Scope",
        blocks: [
          {
            type: "paragraph",
            text: "The scope of a declaration is the portion of a program over which that declaration is visible.",
          },
          {
            type: "list",
            items: [
              "function scope — visible to the source code within the function.",
              "class scope — visible to the member functions of the class.",
              "block scope — visible to the code block.",
              "global scope — visible to the entire program.",
              "file scope — visible to the source code within the file.",
            ],
          },
          {
            type: "paragraph",
            text: "The scope of a non-global (local) declaration begins at the declaration and ends at the closing brace for that declaration.",
          },
        ],
      },
      {
        id: "arrays",
        title: "One-Dimensional Arrays",
        blocks: [
          {
            type: "paragraph",
            text: "An array is a container object that holds a fixed number of values of a single type. The length of an array is established when it is created. Each item is called an element and is accessed by its numerical index.",
          },
          {
            type: "code",
            language: "java",
            code: `int[] ar;                    // declaration
ar = new int[5];             // creation, length 5
float[] anArrayOfFloats;     // another declaration

int[] primes = {2, 3, 5, 7, 11};   // declare + initialize
System.out.println(primes.length); // 5`,
          },
          {
            type: "callout",
            variant: "warning",
            title: "Index bounds",
            text: "Valid indices run from 0 to length - 1. Accessing an index outside this range throws an ArrayIndexOutOfBoundsException at run time.",
          },
        ],
      },
      {
        id: "operators-logic",
        title: "Operators and Logic Constructs",
        blocks: [
          {
            type: "paragraph",
            text: "Java provides arithmetic (+, -, *, /, %), relational (==, !=, <, >, <=, >=), logical (&&, ||, !) and assignment operators, most of which mirror the C language.",
          },
          {
            type: "paragraph",
            text: "Logic constructs control the flow of a program: selection with if/else and switch, and repetition with for, while and do-while loops.",
          },
          {
            type: "code",
            language: "java",
            code: `int score = 82;
if (score >= 50) {
    System.out.println("Pass");
} else {
    System.out.println("Fail");
}

for (int i = 0; i < 3; i++) {
    System.out.println("Iteration " + i);
}`,
          },
        ],
      },
    ],
  },
  {
    slug: "standard-io",
    title: "Standard Input and Output",
    order: 3,
    module: "Foundations",
    summary:
      "I/O streams, the three standard streams (System.in, System.out, System.err), reading user input with the Scanner class, and formatting output.",
    readingMinutes: 8,
    learningOutcomes: ["LO3"],
    slide: "Get Start.pptx",
    pdf: "Get Start.pdf",
    sections: [
      {
        id: "io-streams",
        title: "I/O Streams",
        blocks: [
          {
            type: "paragraph",
            text: "An I/O stream represents an input source or an output destination. A stream can represent many different kinds of sources and destinations, including disk files, devices, other programs and memory arrays.",
          },
          {
            type: "paragraph",
            text: "Streams support many kinds of data — simple bytes, primitive data types, localized characters and objects. Some streams simply pass on data; others manipulate and transform the data in useful ways.",
          },
        ],
      },
      {
        id: "command-line",
        title: "I/O from the Command Line",
        blocks: [
          {
            type: "paragraph",
            text: "A program is often run from the command line and interacts with the user there. The Java platform supports three Standard Streams:",
          },
          {
            type: "list",
            items: [
              "Standard Input — accessed through System.in.",
              "Standard Output — accessed through System.out.",
              "Standard Error — accessed through System.err.",
            ],
          },
          {
            type: "paragraph",
            text: "These objects are defined automatically and do not need to be opened. Standard Output and Standard Error are both for output; having error output separately lets the user divert regular output to a file and still read error messages.",
          },
        ],
      },
      {
        id: "scanner",
        title: "Reading Input with Scanner",
        blocks: [
          {
            type: "paragraph",
            text: "To get user input we can use the Scanner class from java.util. It provides methods to read various types from the user.",
          },
          {
            type: "table",
            headers: ["Method", "Description"],
            rows: [
              ["nextBoolean()", "Reads a boolean value from the user"],
              ["nextByte()", "Reads a byte value from the user"],
              ["nextDouble()", "Reads a double value from the user"],
              ["nextFloat()", "Reads a float value from the user"],
              ["nextInt()", "Reads an int value from the user"],
              ["nextLine()", "Reads a String value from the user"],
              ["nextLong()", "Reads a long value from the user"],
              ["nextShort()", "Reads a short value from the user"],
            ],
          },
          {
            type: "code",
            language: "java",
            code: `import java.util.Scanner;

public class Demo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number of elements");
        int n = Integer.parseInt(sc.nextLine());
        System.out.format("You entered: %d%n", n);
    }
}`,
            caption: "Reading input and formatting output",
          },
          {
            type: "callout",
            variant: "tip",
            title: "Converting strings to numbers",
            text: "Use helper classes such as Integer.parseInt() or Float.parseFloat() to convert an input string into a numeric value. System.out.format() (or printf) is used to format output.",
          },
        ],
      },
    ],
  },
  {
    slug: "exception-handling",
    title: "Exception Handling",
    order: 4,
    module: "Foundations",
    summary:
      "What exceptions are, checked vs. unchecked exceptions, the try-catch-finally mechanism, the throws declaration, and how to handle multiple or nested exceptions.",
    readingMinutes: 11,
    learningOutcomes: ["LO4"],
    slide: "Exception Handling.pptx",
    pdf: "Exception Handling.pdf",
    sections: [
      {
        id: "what-is-an-exception",
        title: "What Is an Exception?",
        blocks: [
          {
            type: "paragraph",
            text: "An exception is an event that occurs during the execution of a program and disrupts the normal flow of instructions. When an error occurs within a method, the method creates an exception object and hands it off to the runtime system. This object contains information about the error, including its type and the state of the program when the error occurred. Creating an exception object and handing it to the runtime system is called throwing an exception.",
          },
          {
            type: "list",
            items: [
              "A user might type an invalid filename.",
              "An accessed file does not exist or contains corrupted data.",
              "A network link could fail.",
            ],
          },
          {
            type: "paragraph",
            text: "Circumstances of this type are called exception conditions in Java and are represented using objects. All exceptions descend from java.lang.Throwable. When an error occurs on a line, the statements after it are not executed unless the exception is handled.",
          },
        ],
      },
      {
        id: "kinds",
        title: "Kinds of Exception",
        blocks: [
          {
            type: "heading",
            text: "Checked exceptions",
            id: "checked",
          },
          {
            type: "paragraph",
            text: "Checked exceptions are checked at compile time. You must handle them either with the try-catch mechanism or the throws declaration. For example, the FileReader() constructor throws a checked exception, so the compiler forces you to handle it.",
          },
          {
            type: "heading",
            text: "Unchecked exceptions",
            id: "unchecked",
          },
          {
            type: "paragraph",
            text: "An unchecked exception occurs at the time of execution and is also called a runtime exception. The program will not give a compilation error. These often occur due to bad data provided by the user. For example, if you declare an array of size 5 and try to access the 6th element, an ArrayIndexOutOfBoundsException occurs.",
          },
        ],
      },
      {
        id: "try-catch",
        title: "The try-catch Mechanism",
        blocks: [
          {
            type: "list",
            items: [
              "The try statement defines a block of code to be tested for errors while it executes.",
              "The catch statement defines a block of code to be executed if an error occurs in the try block.",
              "The finally statement lets you execute code after try...catch, regardless of the result.",
            ],
          },
          {
            type: "callout",
            variant: "warning",
            title: "finally requires try",
            text: "You cannot use finally without a try block. The finally block is optional.",
          },
          {
            type: "code",
            language: "java",
            code: `try {
    FileReader fr = new FileReader("computer.txt");
} catch (FileNotFoundException e) {
    System.out.println("something is wrong");
} finally {
    System.out.println("try-catch is finished");
}
// Output when the file does not exist:
// something is wrong
// try-catch is finished`,
            caption: "Handling a FileNotFoundException",
          },
          {
            type: "code",
            language: "java",
            code: `int[] arr = {1, 2, 3, 4, 5};
try {
    for (int i = 0; i <= arr.length; i++) {
        System.out.print(arr[i] + ",");
    }
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("something is wrong");
}
// Output: 1,2,3,4,5,something is wrong`,
            caption: "Catching an out-of-bounds access",
          },
        ],
      },
      {
        id: "throws",
        title: "The throws Mechanism",
        blocks: [
          {
            type: "paragraph",
            text: "When you write a method that causes an exception and you do not want to handle it there, you can throw it to another method to handle by using the throws keyword. This is the alternative to try-catch for checked exceptions.",
          },
          {
            type: "code",
            language: "java",
            code: `public static void main(String[] args) throws FileNotFoundException {
    FileReader fr = new FileReader("computer.txt");
}`,
          },
          {
            type: "paragraph",
            text: "You can also throw an exception explicitly with the throw statement:",
          },
          {
            type: "code",
            language: "java",
            code: `Scanner sc = new Scanner(System.in);
try {
    int age = Integer.parseInt(sc.nextLine());
    if (age < 20) {
        throw new Exception();
    }
    System.out.println("age is 20 or older");
} catch (Exception e) {
    System.out.println("invalid input");
}`,
          },
        ],
      },
      {
        id: "exception-summary",
        title: "Summary",
        blocks: [
          {
            type: "list",
            items: [
              "A try block is always followed by a catch block, which handles the exception that occurs in the associated try block.",
              "A single try block can have multiple catch blocks associated with it.",
              "A try statement may be nested inside either the try or catch block of another try statement.",
              "Use throws to pass a checked exception up to another method to handle.",
              "You can create your own custom exception classes.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "memory-management",
    title: "Memory Management in Java",
    order: 5,
    module: "Foundations",
    summary:
      "How Java automatically allocates and deallocates memory: static and dynamic heap, the stack, dynamic allocation with new, deallocation, and garbage collection.",
    readingMinutes: 10,
    learningOutcomes: ["LO4"],
    slide: "Memory Management in Java.pptx",
    pdf: "Memory Management in Java.pdf",
    sections: [
      {
        id: "overview",
        title: "Overview",
        blocks: [
          {
            type: "paragraph",
            text: "In Java, memory management is the process of allocation and de-allocation of objects. Java does memory management automatically using an automatic memory management system called a garbage collector, so we are not required to implement memory management logic in our application.",
          },
          {
            type: "paragraph",
            text: "Allocation happens directly when you create an object with the new operator, and indirectly when you call a method that has local variables or arguments. Local data of a method — return data, parameters, and variables declared in the body — is allocated on the stack and discarded when the method exits. Objects are allocated on the heap and have a longer lifetime.",
          },
        ],
      },
      {
        id: "heap-stack",
        title: "Static and Dynamic Heap and Stack",
        blocks: [
          {
            type: "paragraph",
            text: "The static heap contains class declarations when those classes are loaded. We can have a static method, static class, static block or static variable by using the static keyword.",
          },
          {
            type: "paragraph",
            text: "The dynamic heap is the run-time data area from which memory for all Java objects and arrays is allocated. The heap is created when the JVM starts up and may grow or shrink while the application runs. When an object is not used (garbage), its memory can be deallocated.",
          },
          {
            type: "paragraph",
            text: "A Java stack is part of memory where temporary variables live. When a method is invoked, it creates a new block (frame) in the stack for that method, holding local values and references to other objects. When the method ends, that block is erased and becomes available for the next method.",
          },
          {
            type: "code",
            language: "java",
            code: `public class Tester {
    public static void main(String[] args) {
        int age = 20;                    // stored directly on the stack
        Scanner sc = new Scanner(System.in); // reference on stack, object on heap
    }
}`,
            caption: "age is on the stack; the Scanner object lives on the heap",
          },
          {
            type: "callout",
            variant: "note",
            text: "When main finishes, the stack frame is discarded, so age and the reference sc are killed. The Scanner object on the heap still exists and is treated as garbage.",
          },
        ],
      },
      {
        id: "dynamic-allocation",
        title: "Dynamic Allocation",
        blocks: [
          {
            type: "code",
            language: "java",
            code: `public static void main(String[] args) {
    int[] a = new int[5];             // [1]
    String s = new String("hello");   // [2]
}`,
          },
          {
            type: "list",
            items: [
              "The variables a and s are references allocated on the stack.",
              "At [1], new allocates contiguous memory dynamically on the heap for an array of 5 elements and returns the address of the first element; a stores that address.",
              "At [2], new allocates a block on the heap to contain the text \u201Chello\u201D and returns its address.",
            ],
          },
          {
            type: "paragraph",
            text: "If you do not want a reference to point to any address, you can use the keyword null:",
          },
          {
            type: "code",
            language: "java",
            code: `int[] a = null;
String s = null;`,
          },
        ],
      },
      {
        id: "deallocation",
        title: "Dynamic Deallocation",
        blocks: [
          {
            type: "paragraph",
            text: "In Java you never explicitly free the memory that is allocated. Instead, Java provides automatic garbage collection. Local variables are allocated when a method runs and deallocated automatically when the method terminates. Unused objects on the heap are deallocated by the Java system.",
          },
          {
            type: "paragraph",
            text: "The scope of a variable begins where it is declared and ends at the closing bracket of its block. When a variable goes out of scope and no reference points to an object anymore, that object becomes garbage. Setting a reference to null (for example s1 = null) also makes its object eligible for collection.",
          },
        ],
      },
      {
        id: "garbage-collection",
        title: "Garbage Collection",
        blocks: [
          {
            type: "list",
            items: [
              "The JVM supports the garbage collector to free Java programmers from explicitly managing heap memory.",
              "It is called by the JVM only — we cannot activate it directly.",
              "The Java heap is managed by two lists: a free block list and an allocated block list.",
              "After many allocations and deallocations, fragmented and free blocks may not be contiguous.",
              "The runtime system tracks allocated memory and determines whether it is still usable.",
              "The garbage collector has the lowest priority; it runs only when the system heap becomes exhausted.",
            ],
          },
          {
            type: "callout",
            variant: "note",
            title: "Summary",
            text: "Run-time memory consists of static and dynamic heap and stack. Static memory contains class definitions and shared data. The new keyword allocates a region of dynamic memory and returns its starting address, which we store in a reference variable. Deallocation is performed by the garbage collector.",
          },
        ],
      },
    ],
  },
  {
    slug: "encapsulation",
    title: "Encapsulation",
    order: 6,
    module: "Core OOP",
    summary:
      "Classes and objects, designing good classes with high cohesion and low coupling, constructors and constructor overloading, the current object (this), member functions, packages and access modifiers.",
    readingMinutes: 15,
    learningOutcomes: ["LO5", "LO6"],
    slide: "Encapsulation.pptx",
    pdf: "Encapsulation.pdf",
    sections: [
      {
        id: "class-and-object",
        title: "Class and Object",
        blocks: [
          {
            type: "paragraph",
            text: "A class is an organisational unit of an object-oriented design and program. A key task in producing an OO design is the identification and selection of the most appropriate organisational units. There is no single OO solution for a specific problem — just 'good' ones and everything else.",
          },
          {
            type: "paragraph",
            text: "A good class exhibits the following characteristics:",
          },
          {
            type: "list",
            items: [
              "Highly cohesive — the class represents a single useful entity and does that job well.",
              "Minimally coupled — the class limits its interactions with other classes to only those really necessary.",
              "Encapsulated — the class keeps information necessary to its internal operation private and only makes public the information that clients need.",
            ],
          },
          {
            type: "paragraph",
            text: "A formal definition of a class includes two key components: Fields (attributes) and Methods (behaviors).",
          },
        ],
      },
      {
        id: "designing-classes",
        title: "Designing a Class from a Problem",
        blocks: [
          {
            type: "callout",
            variant: "tip",
            title: "Design guideline",
            text: "Step 1: Look for main nouns \u2014 classes are often described by main nouns. Step 2: Look for auxiliary nouns that describe details of the main noun \u2014 these become fields. Step 3: Look for verbs \u2014 these become methods. Step 4: Find the relationships among classes.",
          },
          {
            type: "paragraph",
            text: "Consider a sports car that can be one of several colours, with an engine power between 100 HP and 200 HP, convertible or regular. It has a button that starts the engine and a parking brake. Applying the guideline, the main noun Car becomes the class; auxiliary nouns (colour, power) become fields; and verbs (start engine, press accelerator) become methods.",
          },
          {
            type: "code",
            language: "java",
            code: `public class Car {
    private String colour;
    private int power;          // 100..200
    private boolean convertible;

    public void pressStartButton() {
        System.out.println("Engine started");
    }

    public void pressAcceleratorButton() {
        System.out.println("Driving...");
    }
}`,
            caption: "Car.java — the file is named the same as the class",
          },
          {
            type: "paragraph",
            text: "The public keyword makes the class Car visible anywhere in the app. Using the private keyword on fields restricts their access from other classes — this is encapsulation in action.",
          },
        ],
      },
      {
        id: "the-object",
        title: "What an Object Is",
        blocks: [
          {
            type: "paragraph",
            text: "An object is the block of memory allocated in the dynamic heap. An object is created from a class using the keyword new followed by the class name. You can create multiple objects from one class, and each object contains all the fields declared in that class.",
          },
          {
            type: "code",
            language: "java",
            code: `Car c = new Car();     // first object
c.pressStartButton();

Car c2 = new Car();    // second, independent object
c2.pressAcceleratorButton();`,
          },
          {
            type: "callout",
            variant: "tip",
            title: "Key rule",
            text: "If the reference variable x calls a method, the fields used inside that method belong to x. Each object holds its own copy of the instance variables.",
          },
          {
            type: "paragraph",
            text: "Why create objects? Any program contains data and tasks. In an OO program, data is represented as objects. To make the program operate, we create objects and, through them, invoke or perform tasks.",
          },
        ],
      },
      {
        id: "constructors",
        title: "Constructors and Overloading",
        blocks: [
          {
            type: "paragraph",
            text: "The job of a constructor method is to initialise an object. Depending on the data available when the object is created, it may need to be initialised in different ways. More than one constructor can be created to deal with different scenarios. They all carry the same name as their class but differ in the pattern and/or number of parameters, so the compiler can work out which one to call.",
          },
          {
            type: "code",
            language: "java",
            code: `public class Vase extends Item {
    private int height;
    private String material;

    public Vase() {                 // Vase()
        super();
        height = 0; material = "";
    }
    public Vase(int height, String material) {   // Vase(int, String)
        super();
        this.height = height; this.material = material;
    }
    public Vase(int value, String creator, int height, String material) {
        super(value, creator);      // Vase(int, String, int, String)
        this.height = height; this.material = material;
    }
}`,
            caption: "A polymorphic constructor that appears in three forms",
          },
          {
            type: "callout",
            variant: "warning",
            title: "Signatures must be unique",
            text: "Each constructor signature must be unique or the compiler reports an error. Uniqueness by returned value type alone is not sufficient for method overloading.",
          },
        ],
      },
      {
        id: "this-keyword",
        title: "The Current Object (this)",
        blocks: [
          {
            type: "paragraph",
            text: "The this keyword refers to the current object — the object whose method is being invoked. It is commonly used to distinguish a field from a parameter with the same name, as in this.height = height, where this.height is the field and height is the parameter.",
          },
        ],
      },
      {
        id: "access-modifiers",
        title: "Packages and Access Modifiers",
        blocks: [
          {
            type: "paragraph",
            text: "A package groups related classes together. Access modifiers control the visibility of classes and members from other classes and packages.",
          },
          {
            type: "table",
            headers: ["Modifier", "Same class", "Same package", "Subclass", "Everywhere"],
            rows: [
              ["private", "Yes", "No", "No", "No"],
              ["default (no keyword)", "Yes", "Yes", "No", "No"],
              ["protected", "Yes", "Yes", "Yes", "No"],
              ["public", "Yes", "Yes", "Yes", "Yes"],
            ],
          },
          {
            type: "callout",
            variant: "note",
            text: "Encapsulation is typically implemented by making fields private and exposing controlled access through public getter and setter methods.",
          },
        ],
      },
    ],
  },
  {
    slug: "inheritance",
    title: "Inheritance",
    order: 7,
    module: "Core OOP",
    summary:
      "Reusing structure through inheritance, the is-a relationship, super and derived classes, the extends keyword, functions in a hierarchy, super(), and the instanceof operator.",
    readingMinutes: 13,
    learningOutcomes: ["LO5", "LO6"],
    slide: "Inheritance.pptx",
    pdf: "Inheritance.pdf",
    sections: [
      {
        id: "definition",
        title: "Definition",
        blocks: [
          {
            type: "paragraph",
            text: "Object-oriented languages implement reusability of coding structure through inheritance. Inheritance is the second most prominent concept next to encapsulation. It refers to the relationship between classes where one class inherits the entire structure of another. Inheritance is naturally hierarchical — a tighter relationship than composition and the most highly coupled relationship after friendship.",
          },
          {
            type: "paragraph",
            text: "In OO design, we are interested in hierarchies that represent the progressive design of a set of classes. The root is a relatively abstract entity, and we build upon it to produce progressively more concrete entities. We call higher-level entities parent, base or super classes, and the lower-level ones built from them child, derived or sub classes.",
          },
        ],
      },
      {
        id: "is-a",
        title: "The is-a Relationship",
        blocks: [
          {
            type: "paragraph",
            text: "The key idea is the is-a relationship. In a shop example, HardGood is-a Item and ElectricalGood is-a HardGood, and by extension is-a Item. In type terms, ElectricalGood has type ElectricalGood and also has the type HardGood and ultimately Item. This is the kind of hierarchical relationship Java is designed to capture.",
          },
          {
            type: "callout",
            variant: "warning",
            title: "Not every hierarchy fits",
            text: "A CEO at the head of an organisation does not make sense as a base class \u2014 a senior manager is not also the CEO. Only genuine is-a relationships should be modelled with inheritance.",
          },
          {
            type: "paragraph",
            text: "Polymorphism at the class level is the concept that an object can take on more than one form. If an object of class X has a parent class Y, then X can take the form of an object of type either X or Y.",
          },
        ],
      },
      {
        id: "super-derived",
        title: "Derived and Super Classes",
        blocks: [
          {
            type: "paragraph",
            text: "Where we can identify common attributes and methods across classes, we factorise the design so those shared members form part of the super class. Consider a shop selling antiques — vases, statues and paintings. All three are examples of items. We factorise with an Item superclass, then make each specific class a subclass, reducing unnecessary code duplication.",
          },
          {
            type: "paragraph",
            text: "To implement the is-a relationship we use the keyword extends:",
          },
          {
            type: "code",
            language: "java",
            code: `public class Item {
    int value;
    String creator;

    public Item() {          // default constructor
        value = 0;
        creator = "";
    }
    public Item(int value, String creator) {
        this.value = value;
        this.creator = creator;
    }
}

public class Vase extends Item {
    private int height;
    private String material;
}`,
            caption: "Vase inherits the structure of Item",
          },
        ],
      },
      {
        id: "functions-hierarchy",
        title: "Functions in a Hierarchy",
        blocks: [
          {
            type: "paragraph",
            text: "A subclass constructor can call its superclass constructor with super(...). If you do not call it explicitly, Java inserts a call to the no-argument super() automatically. This ensures the inherited part of the object is initialised before the subclass-specific part.",
          },
          {
            type: "code",
            language: "java",
            code: `public Vase(int value, String creator, int height, String material) {
    super(value, creator);   // initialise the Item part
    this.height = height;
    this.material = material;
}`,
          },
        ],
      },
      {
        id: "instanceof",
        title: "The instanceof Operator",
        blocks: [
          {
            type: "paragraph",
            text: "The instanceof operator tests whether an object is an instance of a particular class or a subclass of it. It is often used before a downcast to verify the object's dynamic type and avoid a ClassCastException.",
          },
          {
            type: "code",
            language: "java",
            code: `Item item = new Vase();
if (item instanceof Vase) {
    Vase v = (Vase) item;   // safe downcast
    System.out.println("This item is a vase");
}`,
          },
        ],
      },
    ],
  },
  {
    slug: "polymorphism",
    title: "Polymorphism",
    order: 8,
    module: "Core OOP",
    summary:
      "Methods appearing in many forms through overloading and overriding, abstract classes and abstract methods, interfaces, and how dynamic binding selects the right implementation at run time.",
    readingMinutes: 14,
    learningOutcomes: ["LO7"],
    slide: "Polymorphism.pptx",
    pdf: "Polymorphism.pdf",
    sections: [
      {
        id: "overloading-overriding",
        title: "Overloading & Overriding",
        blocks: [
          {
            type: "paragraph",
            text: "We have explored how classes can appear in many forms; methods can too. Polymorphism gives us many versions of a method through two techniques:",
          },
          {
            type: "list",
            items: [
              "Overloading — a class can have several methods with the same name but different parameter types.",
              "Overriding — a method in a parent class can be overridden (its body replaced) in a derived class.",
            ],
          },
          {
            type: "paragraph",
            text: "Overloading addresses variations in a function's signature. It binds function calls with the same identifier but different argument types to definitions with correspondingly different parameter types. The compiler binds each call to the matching definition.",
          },
          {
            type: "code",
            language: "java",
            code: `public class Painting extends Item {
    private int width;

    public void trimPainting() {
        width -= 1;
    }
    public void trimPainting(int amount) {   // overloaded
        width -= amount;
    }
}`,
            caption: "Two overloaded methods with unique signatures",
          },
          {
            type: "callout",
            variant: "warning",
            title: "Return type is not enough",
            text: "Overloaded methods must be unique in their formal parameter signature. Uniqueness by returned value type alone is not sufficient.",
          },
        ],
      },
      {
        id: "abstract-class",
        title: "Abstract Class",
        blocks: [
          {
            type: "paragraph",
            text: "An abstract class represents a concept that is too general to instantiate directly — like Item in the antique shop. It is declared with the abstract keyword and may contain abstract methods (declared without a body) that concrete subclasses must implement.",
          },
          {
            type: "code",
            language: "java",
            code: `public abstract class Item {
    int value;
    String creator;

    public abstract void input();   // no body; subclasses must override
    public abstract double appraise();
}

public class Vase extends Item {
    @Override
    public void input() { /* read vase data */ }
    @Override
    public double appraise() { return value * 1.2; }
}`,
          },
          {
            type: "callout",
            variant: "note",
            text: "You cannot create an object of an abstract class directly (new Item() is illegal), but you can declare references of its type to hold subclass objects.",
          },
        ],
      },
      {
        id: "interface",
        title: "Interface",
        blocks: [
          {
            type: "paragraph",
            text: "An interface is a fully abstract type that declares a set of methods a class must implement. A class connects to an interface with the implements keyword, and a class can implement multiple interfaces — a way to achieve multiple inheritance of type in Java.",
          },
          {
            type: "code",
            language: "java",
            code: `public interface Appraisable {
    double appraise();
}

public class Statue extends Item implements Appraisable {
    @Override
    public double appraise() {
        return value * 1.5;
    }
}`,
          },
        ],
      },
      {
        id: "dynamic-binding",
        title: "Dynamic Binding",
        blocks: [
          {
            type: "paragraph",
            text: "When a method is overridden, the JVM selects the implementation to run based on the object's dynamic (run-time) type, not its static (declared) type. This late binding is what makes polymorphism powerful: the same call site behaves differently depending on the actual object.",
          },
          {
            type: "code",
            language: "java",
            code: `Item[] items = { new Vase(), new Statue(), new Painting() };
for (Item it : items) {
    System.out.println(it.appraise());  // calls the right override per object
}`,
          },
        ],
      },
    ],
  },
  {
    slug: "array-of-objects",
    title: "Array of Objects",
    order: 9,
    module: "Applied OOP",
    summary:
      "Managing collections of related objects with an array of superclass references, the basic operations (add, remove, search, update, traverse), and building a menu-driven management program.",
    readingMinutes: 11,
    learningOutcomes: ["LO8"],
    slide: "ArrayOfObjects.pptx",
    pdf: "ArrayOfObjects.pdf",
    sections: [
      {
        id: "concept",
        title: "The Concept",
        blocks: [
          {
            type: "paragraph",
            text: "A systematic technique for accessing objects of different dynamic type within the same hierarchy is through an array of references of their static type. The executable code dereferences each element at run time based on its object's dynamic type.",
          },
          {
            type: "paragraph",
            text: "In the antique shop, we want to manage a list of vases, statues and paintings in an array. The objects pointed to by the array elements may be of differing dynamic type, but are of the same static type — the type of the superclass Item.",
          },
          {
            type: "code",
            language: "java",
            code: `public class ItemList {
    Item[] list;          // array to store all items
    int numOfItem;        // number of items added
    final int MAX = 100;  // capacity of the array

    public ItemList() {
        list = new Item[MAX];
        numOfItem = 0;
    }
}`,
            caption: "An array of superclass references",
          },
        ],
      },
      {
        id: "operations",
        title: "Basic Operations",
        blocks: [
          {
            type: "list",
            items: [
              "Print all the array elements (objects) one by one.",
              "Add an object at the given index.",
              "Delete an object at the given index.",
              "Search for an object using an index or by value.",
              "Update an object at the given index.",
            ],
          },
          {
            type: "code",
            language: "java",
            code: `public void addItem(Item x) {
    if (numOfItem < MAX) {
        list[numOfItem] = x;
        numOfItem++;
    }
}

public void displayAll() {
    for (int i = 0; i < numOfItem; i++) {
        list[i].display();
    }
}`,
          },
        ],
      },
      {
        id: "menu-program",
        title: "A Menu-Driven Program",
        blocks: [
          {
            type: "paragraph",
            text: "A common assignment pattern is a menu loop that lets the user choose one operation at a time and dispatches to the corresponding method.",
          },
          {
            type: "code",
            language: "java",
            code: `ItemList obj = new ItemList();
Scanner sc = new Scanner(System.in);
int choice = 0;
do {
    System.out.println("1. add a new vase");
    System.out.println("2. add a new statue");
    System.out.println("3. add a new painting");
    System.out.println("4. display all items");
    System.out.println("5. find items by creator");
    System.out.println("10. exit");
    choice = sc.nextInt();
    switch (choice) {
        case 1:
            Item tmp = new Vase();
            tmp.input();
            obj.addItem(tmp);
            break;
        case 4:
            obj.displayAll();
            break;
        // ... remaining cases
    }
} while (choice != 10);`,
            caption: "Menu loop dispatching to ItemList operations",
          },
        ],
      },
    ],
  },
  {
    slug: "file-io",
    title: "File Input and Output",
    order: 10,
    module: "Applied OOP",
    summary:
      "Reading from and writing to files using Java I/O streams, character vs. byte streams, and persisting the state of an object collection between program runs.",
    readingMinutes: 9,
    learningOutcomes: ["LO4", "LO5", "LO6", "LO7", "LO8"],
    slide: "File IO.pptx",
    pdf: "File IO.pdf",
    sections: [
      {
        id: "why-files",
        title: "Why File I/O",
        blocks: [
          {
            type: "paragraph",
            text: "Standard I/O interacts with the console, but data disappears when the program ends. File I/O lets a program persist data to disk and read it back later. In the antique shop, file I/O lets us save the item list and reload it the next time the program runs.",
          },
          {
            type: "paragraph",
            text: "As with standard streams, a file stream represents a source or destination. Character streams (Reader/Writer) handle text, while byte streams (InputStream/OutputStream) handle raw bytes such as images or serialized objects.",
          },
        ],
      },
      {
        id: "writing",
        title: "Writing to a File",
        blocks: [
          {
            type: "code",
            language: "java",
            code: `import java.io.*;

try (PrintWriter pw = new PrintWriter(new FileWriter("items.txt"))) {
    pw.println("Vase;bronze;50");
    pw.println("Statue;marble;120");
} catch (IOException e) {
    System.out.println("Error writing file");
}`,
            caption: "Writing text with try-with-resources (auto-closes the stream)",
          },
          {
            type: "callout",
            variant: "tip",
            title: "try-with-resources",
            text: "Declaring the stream in the try(...) header ensures it is closed automatically, even if an exception is thrown \u2014 no manual close() needed.",
          },
        ],
      },
      {
        id: "reading",
        title: "Reading from a File",
        blocks: [
          {
            type: "code",
            language: "java",
            code: `try (BufferedReader br = new BufferedReader(new FileReader("items.txt"))) {
    String line;
    while ((line = br.readLine()) != null) {
        String[] parts = line.split(";");
        System.out.println("Type: " + parts[0]);
    }
} catch (FileNotFoundException e) {
    System.out.println("File not found");
} catch (IOException e) {
    System.out.println("Error reading file");
}`,
            caption: "Reading a text file line by line",
          },
          {
            type: "callout",
            variant: "warning",
            text: "File operations throw checked exceptions (FileNotFoundException, IOException). You must handle them with try-catch or declare them with throws.",
          },
        ],
      },
    ],
  },
  {
    slug: "collections",
    title: "The Java Collections Framework",
    order: 11,
    module: "Applied OOP",
    summary:
      "Abstract data types, the unified Collections Framework, and the three core interfaces: List (with ArrayList), Set (with TreeSet), and Map (with HashMap), plus generics for type safety.",
    readingMinutes: 13,
    learningOutcomes: ["LO9"],
    slide: "Collections.pptx",
    pdf: "Collections.pdf",
    sections: [
      {
        id: "adt",
        title: "Abstract Data Types",
        blocks: [
          {
            type: "paragraph",
            text: "In almost all real problems, data is grouped, and each group contains many objects. A group of objects is called a collection. An abstract data type (ADT) is a mathematical model for a data type defined by its behaviors from a user's point of view, with the underlying data structure omitted.",
          },
          {
            type: "paragraph",
            text: "A group of elements can be viewed in several ways: a list (duplications allowed), a set (distinct objects), or a map (each object accessed by a key). The most common ADT operations for a group are:",
          },
          {
            type: "list",
            items: [
              "Add a new element.",
              "Search for an element.",
              "Remove an element.",
              "Traverse — access all elements one by one.",
              "Sort elements.",
            ],
          },
          {
            type: "callout",
            variant: "note",
            text: "An ADT (the mathematical model, the user's view) contrasts with a data structure, which is the concrete representation of data (the implementer's, physical view).",
          },
        ],
      },
      {
        id: "framework",
        title: "The Collections Framework",
        blocks: [
          {
            type: "paragraph",
            text: "The Java platform includes a collections framework: a unified architecture for representing and manipulating collections independently of implementation details. Advantages of using it include:",
          },
          {
            type: "list",
            items: [
              "Reduces programming effort by providing ready-made data structures and algorithms.",
              "Increases performance with high-performance, interchangeable implementations.",
              "Provides interoperability between unrelated APIs through a common language.",
              "Reduces the effort to learn and design APIs.",
              "Fosters software reuse through standard interfaces.",
            ],
          },
        ],
      },
      {
        id: "list",
        title: "List and ArrayList",
        blocks: [
          {
            type: "paragraph",
            text: "In an ArrayList, all references to elements are stored in a one-dimensional, resizable array. It can store arbitrary elements and allows duplicates. When elements do not belong to the same class, their references behave as references to Object, so calling a subclass method requires an explicit cast.",
          },
          {
            type: "code",
            language: "java",
            code: `import java.util.ArrayList;

// Type-safe list with generics
ArrayList<Rectangle> shapes = new ArrayList<>();
shapes.add(new Rectangle(3, 4));
shapes.add(new Rectangle(5, 6));

for (Rectangle r : shapes) {
    System.out.println(r.area());   // no cast needed
}`,
            caption: "Using generics avoids casts and catches type errors at compile time",
          },
          {
            type: "callout",
            variant: "tip",
            title: "Generics",
            text: "Specifying the element type with <Rectangle> lets the compiler detect type errors at compile time and removes the need for explicit class casting.",
          },
        ],
      },
      {
        id: "set",
        title: "Set and TreeSet",
        blocks: [
          {
            type: "paragraph",
            text: "A Set is a collection of distinct objects — no duplicates allowed. A TreeSet additionally keeps its elements sorted in natural order (or by a supplied comparator).",
          },
          {
            type: "code",
            language: "java",
            code: `import java.util.TreeSet;

TreeSet<Integer> numbers = new TreeSet<>();
numbers.add(5);
numbers.add(2);
numbers.add(5);   // duplicate ignored
System.out.println(numbers);   // [2, 5] — sorted, unique`,
          },
        ],
      },
      {
        id: "map",
        title: "Map and HashMap",
        blocks: [
          {
            type: "paragraph",
            text: "A Map stores key-value pairs, where each value is accessed by a unique key. A HashMap provides fast, unordered access by key.",
          },
          {
            type: "code",
            language: "java",
            code: `import java.util.HashMap;

HashMap<String, Integer> marks = new HashMap<>();
marks.put("Alice", 8);
marks.put("Bob", 6);

System.out.println(marks.get("Alice"));    // 8
for (String key : marks.keySet()) {
    System.out.println(key + " -> " + marks.get(key));
}`,
          },
          {
            type: "callout",
            variant: "note",
            title: "Choosing a collection",
            text: "Use a List when order and duplicates matter, a Set when you need uniqueness, and a Map when you look items up by a key.",
          },
        ],
      },
    ],
  },
]

export function getTopic(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug)
}

export function getSortedTopics(): Topic[] {
  return [...topics].sort((a, b) => a.order - b.order)
}

export function getAdjacentTopics(slug: string) {
  const sorted = getSortedTopics()
  const index = sorted.findIndex((t) => t.slug === slug)
  return {
    prev: index > 0 ? sorted[index - 1] : undefined,
    next: index >= 0 && index < sorted.length - 1 ? sorted[index + 1] : undefined,
  }
}
