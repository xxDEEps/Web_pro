import type { Lesson } from '../types';

export const encapsulationEn: Lesson = {
  id: 'encapsulation',
  title: 'Encapsulation',
  category: 'Encapsulation',
  icon: 'box',
  summary:
    'Class and object, constructor, constructor overloading, this, member functions, package, access modifiers.',
  outcomes: [
    'Design a class with fields and methods',
    'Write default and parameterized constructors',
    'Use this to distinguish instance and local variables',
    'Understand packages and access modifiers (private/default/protected/public)',
  ],
  sections: [
    {
      id: 'class-object',
      heading: 'Class and Object',
      blocks: [
        {
          type: 'callout',
          variant: 'info',
          title: 'Class',
          text: 'A class is the unit of organization of OOP design and programs.',
        },
        {
          type: 'p',
          text: 'A good class has 3 traits: highly cohesive (represents a single entity), minimally coupled (interacts only when needed), encapsulated (hides internal information).',
        },
        {
          type: 'p',
          text: 'A class definition has 2 components: Fields (Attributes) and Methods (Behaviors).',
        },
        {
          type: 'callout',
          variant: 'problem',
          title: 'Sports Car Problem',
          text: 'A sports car comes in many colors, has 100-200 HP, and may be convertible or regular. It has a start button and a parking brake. When the parking brake is released and the accelerator is pressed, the car moves according to the transmission.',
        },
        {
          type: 'p',
          text: 'Design guide: (1) find the main noun → class, (2) find auxiliary nouns → fields, (3) find verbs → methods, (4) find relationships between classes.',
        },
        { type: 'img', src: '/images/encapsulation1.png', alt: 'Car design' },
        { type: 'img', src: '/images/encapsulation2.png', alt: 'Car UML' },
        { type: 'img', src: '/images/demoCarClass.png', alt: 'Car class' },
        { type: 'img', src: '/images/outputCarClass.png', alt: 'Car output' },
        {
          type: 'callout',
          variant: 'info',
          title: 'Object',
          text: 'An object is a block of memory in the dynamic heap, created from a class using the new keyword. Multiple objects can be created from one class.',
        },
      ],
    },
    {
      id: 'constructor',
      heading: 'Constructor',
      blocks: [
        {
          type: 'p',
          text: 'Full encapsulation requires a mechanism to initialize fields when an object is created. A constructor is a special member function that an object calls when it is created.',
        },
        {
          type: 'p',
          text: 'A default (no-argument) constructor has the same name as the class: ClassName(). If a class declares no constructors, the compiler automatically inserts an empty constructor.',
        },
      ],
    },
    {
      id: 'overloading',
      heading: 'Constructor Overloading',
      blocks: [
        {
          type: 'p',
          text: 'Constructor overloading lets the client choose the most suitable set of parameters when creating an object.',
        },
        { type: 'img', src: '/images/Encapsulation8.png', alt: 'Constructor with params' },
        { type: 'img', src: '/images/encapsulation9.png', alt: 'Using constructor' },
        {
          type: 'callout',
          variant: 'rule',
          title: 'Compiler Rule',
          text: 'If a class declares a parameterized constructor but no no-arg constructor, the compiler does NOT insert an empty no-arg constructor. The compiler only inserts an empty no-arg constructor when the class declares no constructors at all.',
        },
      ],
    },
    {
      id: 'this',
      heading: 'The Current Object & this',
      blocks: [
        {
          type: 'p',
          text: 'When c1.pressAcceleratorButton() runs, the object that c1 manages is the current object. this returns the address of the current object.',
        },
        {
          type: 'p',
          text: 'this is created when a member method is called and destroyed when the method ends.',
        },
        { type: 'img', src: '/images/Encapsulation12.png', alt: 'this' },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Use this to distinguish a local variable from an instance variable when they share a name.',
        },
      ],
    },
    {
      id: 'member-functions',
      heading: 'Member Functions',
      blocks: [
        {
          type: 'p',
          text: 'A member function is a function declared in a class that operates on data members. Add getter/setter methods to access private fields.',
        },
        {
          type: 'code',
          lang: 'java',
          code: 'public class Car {\n    private String Colour;\n    private int EnginePower;\n    private boolean Convertible;\n    private boolean parkingBrake;\n\n    public Car() {\n        Colour = "";\n        EnginePower = 0;\n        Convertible = false;\n        parkingBrake = false;\n    }\n\n    public Car(String Colour, int EnginePower,\n               boolean Convertible, boolean parkingBrake) {\n        this.Colour = Colour;\n        this.EnginePower = EnginePower;\n        this.Convertible = Convertible;\n        this.parkingBrake = parkingBrake;\n    }\n\n    public void setColour(String Colour) { this.Colour = Colour; }\n    public String getColour() { return Colour; }\n    // ... other getters/setters\n}',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'A class typically has 4 groups of methods: constructors, getters, setters, and logic methods. Every method in a class operates on the fields of the class.',
        },
      ],
    },
    {
      id: 'package',
      heading: 'Package',
      blocks: [
        {
          type: 'p',
          text: 'A package is a namespace that organizes a set of related classes and interfaces. It is similar to a folder on a computer.',
        },
        {
          type: 'p',
          text: 'The package declaration must be the first line of the file: package mypkg;. Each file may have only one package statement.',
        },
        { type: 'img', src: '/images/package.png', alt: 'Package' },
      ],
    },
    {
      id: 'access-modifier',
      heading: 'Access Modifiers',
      blocks: [
        {
          type: 'ul',
          items: [
            'private (-): accessible only within the class',
            'public (+): accessible everywhere',
            'protected (#): within the package and outside via inheritance',
            'default: within the package',
          ],
        },
        { type: 'img', src: '/images/encapsulation20.png', alt: 'Access modifier' },
        { type: 'img', src: '/images/encapsulation21.png', alt: 'Access modifier table' },
        {
          type: 'callout',
          variant: 'rule',
          text: 'A private field cannot be accessed from another class. Access must go through public getter/setter methods.',
        },
      ],
    },
  ],
  resources: [{ href: '/resource/Encapsulation.pdf', label: 'Encapsulation.pdf' }],
  workshop: { href: '/workshop/workshop3.pdf', label: 'workshop3' },
};
