import type { Lesson } from '../types';

export const polymorphismEn: Lesson = {
  id: 'polymorphism',
  title: 'Polymorphism',
  category: 'Polymorphism',
  icon: 'shuffle',
  summary:
    'Overloading vs overriding, static/dynamic binding, the Object class, toString, abstract classes and interfaces.',
  outcomes: [
    'Distinguish overloading and overriding',
    'Understand static binding and dynamic binding',
    'Use abstract classes and abstract methods',
    'Define and implement interfaces, multiple interfaces',
  ],
  sections: [
    {
      id: 'overloading-overriding',
      heading: 'Overloading & Overriding',
      blocks: [
        {
          type: 'callout',
          variant: 'info',
          title: 'Overloading',
          text: 'A class may have multiple methods with the same name but different parameter types. The compiler distinguishes them by signature.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Overriding',
          text: 'A method in a superclass can be overridden in a subclass — the method body is replaced.',
        },
        {
          type: 'code',
          lang: 'java',
          code: 'public class Vase extends Item {\n    public Vase() { super(); height = 0; material = ""; }\n    public Vase(int height, String material) {\n        super();\n        this.height = height;\n        this.material = material;\n    }\n    public Vase(int value, String creator, int height, String material) {\n        super(value, creator);\n        this.height = height;\n        this.material = material;\n    }\n}',
        },
        {
          type: 'p',
          text: 'The Vase constructor is polymorphic because it appears in 3 forms. When instantiating, the compiler looks for the matching signature. Each signature must be unique.',
        },
      ],
    },
    {
      id: 'overriding',
      heading: 'Overriding in Detail',
      blocks: [
        {
          type: 'p',
          text: 'Instead of placing input in Item and inputVase in Vase, we override input/output in the subclass for a better design: same purpose → same name, reducing explicit casts.',
        },
        {
          type: 'code',
          lang: 'java',
          code: 'public class Item {\n    protected int value;\n    protected String creator;\n    public void input() {\n        Scanner sc = new Scanner(System.in);\n        value = sc.nextInt();\n        creator = sc.nextLine();\n    }\n    public void output() {\n        System.out.println(value + " " + creator);\n    }\n}\n\npublic class Vase extends Item {\n    @Override\n    public void input() {\n        super.input();\n        // ... read height, material\n    }\n    @Override\n    public void output() {\n        super.output();\n        // ...\n    }\n}',
        },
        {
          type: 'callout',
          variant: 'rule',
          text: 'An overriding method must not be more restrictive than the method in the superclass.',
        },
      ],
    },
    {
      id: 'binding',
      heading: 'Function Binding',
      blocks: [
        {
          type: 'ul',
          items: [
            'Static binding — based on the static type, occurs at compile time',
            'Dynamic binding — based on the dynamic type, the method call is bound at runtime',
          ],
        },
        {
          type: 'p',
          text: 'getValue() is determined at compile time (static). input() is only determined at runtime (dynamic).',
        },
      ],
    },
    {
      id: 'object-class',
      heading: 'The Object Class',
      blocks: [
        {
          type: 'p',
          text: 'Object is the root of the class hierarchy. Every class has Object as a superclass. toString() returns "ClassName@hashCode". It is recommended to override toString() for a readable representation.',
        },
        {
          type: 'code',
          lang: 'java',
          code: 'public class Item {\n    @Override\n    public String toString() {\n        return value + "-" + creator;\n    }\n}',
        },
      ],
    },
    {
      id: 'abstract-class',
      heading: 'Abstract Class',
      blocks: [
        {
          type: 'p',
          text: 'A superclass is often more abstract than its subclasses. When we want to add a displayPrice() method to Item but Item has no width/height/weight field → we need an abstract method.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Abstract Method',
          text: 'A signature definition without an implementation. The implementation belongs to the inheriting class.',
        },
        {
          type: 'code',
          lang: 'java',
          code: 'public abstract class Item {\n    protected int value;\n    protected String creator;\n    public abstract void displayPrice();\n}\n\npublic class Vase extends Item {\n    public void displayPrice() {\n        if (height < 100)\n            System.out.println("The price is 1000$");\n        else\n            System.out.println("The price is 2000$");\n    }\n}',
        },
        {
          type: 'callout',
          variant: 'rule',
          text: 'A subclass is only complete when it has implemented all inherited abstract methods. An abstract class cannot be instantiated.',
        },
      ],
    },
    {
      id: 'interface',
      heading: 'Interface',
      blocks: [
        {
          type: 'p',
          text: 'An object interacts with the world through methods. Java allows inheriting only one parent class, but a class can implement multiple interfaces — solving "multiple inheritance".',
        },
        {
          type: 'p',
          text: 'An interface is a reference type that contains only constants, static methods, abstract methods, default methods, and nested types. It has no implementation (in general).',
        },
        {
          type: 'code',
          lang: 'java',
          code: 'public interface Menu {\n    int unitPrice = 10;\n    void getSalad();\n    void getBeefsteak();\n}\n\npublic class Chef implements Menu {\n    public void getSalad() {\n        System.out.println("This is a salad");\n    }\n    public void getBeefsteak() {\n        System.out.println("This is a beefsteak");\n    }\n}\n\nMenu m = new Chef();\nm.getSalad();   // polymorphism',
        },
        {
          type: 'p',
          text: 'Multiple interfaces: a class implements several interfaces, separated by commas.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Notes on Interfaces',
          text: 'You cannot create an object from an interface. Interface methods are implicitly abstract and public. Attributes are implicitly public, static, and final. There are no constructors. An interface can extend another interface.',
        },
      ],
    },
  ],
  resources: [{ href: '/resource/Polymorphism.pdf', label: 'Polymorphism.pdf' }],
  workshop: { href: '/workshop/workshop5.pdf', label: 'workshop5' },
};
