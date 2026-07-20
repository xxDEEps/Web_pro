import type { Lesson } from '../types';

export const inheritanceEn: Lesson = {
  id: 'inheritance',
  title: 'Inheritance',
  category: 'Inheritance',
  icon: 'git-branch',
  summary:
    'Definition of inheritance, is-a, derived/super class, functions in inheritance, instanceof, casting.',
  outcomes: [
    'Understand inheritance and the is-a relationship',
    'Use extends and super to call a parent constructor/method',
    'Use instanceof to check the dynamic type',
    'Safely cast between super/sub classes',
  ],
  sections: [
    {
      id: 'definition',
      heading: 'Definition',
      blocks: [
        {
          type: 'p',
          text: 'OOP languages implement code structure reuse through inheritance — the second most prominent concept after encapsulation. Inheritance is a relationship between classes in which one class inherits the entire structure of another. This relationship is hierarchical and tighter than composition.',
        },
        { type: 'img', src: '/images/inheritance1.png', alt: 'Hierarchy' },
        {
          type: 'p',
          text: 'In OO design, we care about hierarchies that express the progressive design of a set of classes. The root is an abstract entity built up to create more concrete entities. The higher-level entity is the "parent", "base" or "super" class; the lower-level entity is the "child", "derived" or "sub" class.',
        },
        { type: 'img', src: '/images/inheritance2.png', alt: 'Item hierarchy' },
      ],
    },
    {
      id: 'is-a',
      heading: 'is-a Relationship',
      blocks: [
        {
          type: 'p',
          text: 'HardGood is-a Item, ElectricalGood is-a HardGood and therefore is-a Item. ElectricalGood has the types ElectricalGood, HardGood and Item. This is the hierarchical relationship that Java and OOP are designed to capture.',
        },
        { type: 'img', src: '/images/inheritance3.png', alt: 'is-a' },
        {
          type: 'callout',
          variant: 'info',
          title: 'Polymorphism at Class Level',
          text: 'An object of class X whose parent is Y can take the form of an object of type X or Y — it appears in multiple forms.',
        },
      ],
    },
    {
      id: 'derived',
      heading: 'Derived and Super Class',
      blocks: [
        {
          type: 'p',
          text: 'Example: an antique shop sells vases, statues, and paintings. The classes share common attributes (value, creator) and have specific ones. Factor them out into an Item superclass; the other three are subclasses.',
        },
        { type: 'img', src: '/images/inheritance4.png', alt: 'Antique shop classes' },
        { type: 'img', src: '/images/inheritance5.png', alt: 'Super/sub class' },
        {
          type: 'p',
          text: 'Use the extends keyword to implement is-a.',
        },
        {
          type: 'code',
          lang: 'java',
          code: 'public class Item {\n    int value;\n    String creator;\n    public Item() { value = 0; creator = ""; }\n    public Item(int value, String creator) {\n        this.value = value;\n        this.creator = creator;\n    }\n}\n\npublic class Vase extends Item {\n    int height;\n    String material;\n}\n\npublic class Statue extends Item {\n    int weight;\n    String colour;\n}\n\npublic class Painting extends Item {\n    int height;\n    int width;\n    boolean isWatercolour;\n    boolean isFramed;\n}',
        },
      ],
    },
    {
      id: 'functions',
      heading: 'Functions in Inheritance',
      blocks: [
        {
          type: 'p',
          text: 'A method added to a superclass is also inherited by subclasses. For example, adding output() to Item lets all three subclasses call it.',
        },
        {
          type: 'callout',
          variant: 'rule',
          title: 'Access Modifier Rules',
          text: 'private: only within the class, not guaranteed in subclasses. protected: within the class and subclasses. public: everywhere.',
        },
        {
          type: 'p',
          text: 'Use super() to call the superclass constructor — it must be the first line of the subclass constructor. Use super.methodName() to call an overridden method.',
        },
        {
          type: 'code',
          lang: 'java',
          code: 'public class Vase extends Item {\n    private int height;\n    private String material;\n\n    public Vase() {\n        super(); // calls Item\'s default constructor\n        height = 0;\n        material = "";\n    }\n    public Vase(int value, String creator, int height, String material) {\n        super(value, creator); // calls Item\'s 2-arg constructor\n        this.height = height;\n        this.material = material;\n    }\n}',
        },
        {
          type: 'callout',
          variant: 'rule',
          text: 'A subclass does NOT inherit the superclass constructor by default. If a constructor does not explicitly call super(), the compiler inserts a call to the no-arg constructor of the superclass.',
        },
        {
          type: 'p',
          text: 'Override a method: a subclass redefines a method with the same signature. Use the @Override annotation to signal the override intent to the compiler.',
        },
        {
          type: 'p',
          text: 'Hidden method: redefining a static method of the superclass.',
        },
      ],
    },
    {
      id: 'instanceof',
      heading: 'instanceof and Casting',
      blocks: [
        {
          type: 'p',
          text: 'A superclass-typed reference variable (Item tmp = v1;) can store the address of a subclass object — this is called the dynamic type. The static type is the type used in the declaration.',
        },
        { type: 'img', src: '/images/inheritance6.png', alt: 'Dynamic type' },
        {
          type: 'p',
          text: 'Use instanceof to check which object tmp is currently pointing to.',
        },
        {
          type: 'code',
          lang: 'java',
          code: 'Item tmp = v1;\nif (tmp instanceof Vase)\n    System.out.println("tmp is pointing to the Vase object");\nelse if (tmp instanceof Statue)\n    System.out.println("tmp is pointing to the Statue object");\nelse\n    System.out.println("tmp is pointing to the Painting object");',
        },
        {
          type: 'p',
          text: 'A superclass-typed variable can only call superclass methods. To call a subclass method, you must cast explicitly: ((Vase)tmp).putFlowers();. Casting to the wrong type throws ClassCastException.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Check the type with instanceof before casting explicitly.',
        },
      ],
    },
  ],
  resources: [{ href: '/resource/Inheritance.pdf', label: 'Inheritance.pdf' }],
  workshop: { href: '/workshop/workshop4.pdf', label: 'workshop4' },
};
