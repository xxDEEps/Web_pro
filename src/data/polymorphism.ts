import type { Lesson } from './types';

export const polymorphism: Lesson = {
  id: 'polymorphism',
  title: { en: 'Polymorphism', vi: 'Polymorphism' },
  category: { en: 'Polymorphism', vi: 'Polymorphism' },
  icon: 'shuffle',
  summary: {
    en: 'Overloading vs overriding, static/dynamic binding, the Object class, toString, abstract class and interface.',
    vi: 'Overloading vs overriding, static/dynamic binding, class Object, toString, abstract class và interface.',
  },
  outcomes: [
    { en: 'Distinguish overloading and overriding', vi: 'Phân biệt overloading và overriding' },
    { en: 'Understand static binding and dynamic binding', vi: 'Hiểu static binding và dynamic binding' },
    { en: 'Use abstract class and abstract method', vi: 'Dùng abstract class và abstract method' },
    { en: 'Define and implement an interface, multiple interfaces', vi: 'Định nghĩa và implement interface, multiple interface' },
  ],
  sections: [
    {
      id: 'overloading-overriding',
      heading: { en: 'Overloading & Overriding', vi: 'Overloading & Overriding' },
      blocks: [
        {
          type: 'callout',
          variant: 'info',
          title: { en: 'Overloading', vi: 'Overloading' },
          text: {
            en: 'A class has multiple methods with the same name but different parameter types. The compiler distinguishes them by signature.',
            vi: 'Một class có nhiều method cùng tên nhưng khác kiểu tham số. Compiler phân biệt theo signature.',
          },
        },
        {
          type: 'callout',
          variant: 'info',
          title: { en: 'Overriding', vi: 'Overriding' },
          text: {
            en: 'A method in the superclass can be overridden in a subclass — the method body is replaced.',
            vi: 'Method ở superclass có thể bị override trong subclass — thân method được thay thế.',
          },
        },
        {
          type: 'code',
          lang: 'java',
          code: 'public class Vase extends Item {\n    public Vase() { super(); height = 0; material = ""; }\n    public Vase(int height, String material) {\n        super();\n        this.height = height;\n        this.material = material;\n    }\n    public Vase(int value, String creator, int height, String material) {\n        super(value, creator);\n        this.height = height;\n        this.material = material;\n    }\n}',
        },
        {
          type: 'p',
          text: {
            en: 'The Vase constructors are polymorphic because they appear in 3 forms. When instantiating, the compiler finds the matching signature. Each signature must be unique.',
            vi: 'Constructor Vase là polymorphic vì xuất hiện 3 hình dạng. Khi instantiate, compiler tìm matching signature. Mỗi signature phải unique.',
          },
        },
      ],
    },
    {
      id: 'overriding',
      heading: { en: 'Overriding in detail', vi: 'Overriding chi tiết' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'Instead of naming input in Item and inputVase in Vase, we override input/output in the subclass for a better design: same purpose → same name, reducing explicit casts.',
            vi: 'Thay vì đặt input ở Item và inputVase ở Vase, ta override input/output ở subclass để có design tốt hơn: cùng mục đích → cùng tên, giảm cast tường minh.',
          },
        },
        {
          type: 'code',
          lang: 'java',
          code: 'public class Item {\n    protected int value;\n    protected String creator;\n    public void input() {\n        Scanner sc = new Scanner(System.in);\n        value = sc.nextInt();\n        creator = sc.nextLine();\n    }\n    public void output() {\n        System.out.println(value + " " + creator);\n    }\n}\n\npublic class Vase extends Item {\n    @Override\n    public void input() {\n        super.input();\n        // ... read height, material\n    }\n    @Override\n    public void output() {\n        super.output();\n        // ...\n    }\n}',
        },
        {
          type: 'callout',
          variant: 'rule',
          text: {
            en: 'An overriding method must not be more restrictive than the method in the superclass.',
            vi: 'Method override không được restrictive hơn method ở superclass.',
          },
        },
      ],
    },
    {
      id: 'binding',
      heading: { en: 'Function binding', vi: 'Function binding' },
      blocks: [
        {
          type: 'ul',
          items: [
            { en: 'Static binding — based on static type, happens at compile time', vi: 'Static binding — dựa trên static type, diễn ra lúc compile' },
            { en: 'Dynamic binding — based on dynamic type, the method call is bound at runtime', vi: 'Dynamic binding — dựa trên dynamic type, method call được bond lúc runtime' },
          ],
        },
        {
          type: 'p',
          text: {
            en: 'getValue() is resolved at compile time (static). input() is only resolved at runtime (dynamic).',
            vi: 'getValue() được xác định lúc compile (static). input() chỉ được xác định lúc runtime (dynamic).',
          },
        },
      ],
    },
    {
      id: 'object-class',
      heading: { en: 'The Object class', vi: 'Class Object' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'Object is the root of the class hierarchy. Every class has Object as a superclass. toString() returns "ClassName@hashCode". It is recommended to override toString() for a readable representation.',
            vi: 'Object là root của class hierarchy. Mọi class đều có Object làm superclass. toString() trả "ClassName@hashCode". Khuyến nghị override toString() để có biểu diễn dễ đọc.',
          },
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
      heading: { en: 'Abstract Class', vi: 'Abstract Class' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'A superclass is often more abstract than its subclasses. When we want to add a displayPrice() method to Item but Item has no width/height/weight field → we need an abstract method.',
            vi: 'Superclass thường trừu tượng hơn subclass. Khi ta muốn thêm method displayPrice() vào Item nhưng Item không có field width/height/weight → cần abstract method.',
          },
        },
        {
          type: 'callout',
          variant: 'info',
          title: { en: 'Abstract method', vi: 'Abstract method' },
          text: {
            en: 'A signature definition with no implementation. The implementation belongs to the inheriting class.',
            vi: 'Là signature definition không có implementation. Implementation thuộc về class kế thừa.',
          },
        },
        {
          type: 'code',
          lang: 'java',
          code: 'public abstract class Item {\n    protected int value;\n    protected String creator;\n    public abstract void displayPrice();\n}\n\npublic class Vase extends Item {\n    public void displayPrice() {\n        if (height < 100)\n            System.out.println("The price is 1000$");\n        else\n            System.out.println("The price is 2000$");\n    }\n}',
        },
        {
          type: 'callout',
          variant: 'rule',
          text: {
            en: 'A subclass is only complete when it has implemented all inherited abstract methods. An abstract class cannot be instantiated.',
            vi: 'Subclass chỉ hoàn thiện khi đã implement tất cả abstract method kế thừa. Abstract class không thể instantiate.',
          },
        },
      ],
    },
    {
      id: 'interface',
      heading: { en: 'Interface', vi: 'Interface' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'An object interacts with the world through methods. Java only allows inheriting from 1 parent class, but a class can implement multiple interfaces — solving "multiple inheritance".',
            vi: 'Object giao tiếp với thế giới qua method. Java chỉ cho kế thừa 1 class cha, nhưng có thể implement nhiều interface — giải quyết "multiple inheritance".',
          },
        },
        {
          type: 'p',
          text: {
            en: 'An interface is a reference type that only contains constants, static methods, abstract methods, default methods, and nested types. Generally no implementation.',
            vi: 'Interface là reference type chỉ chứa constants, static method, abstract method, default method, nested type. Không có implementation (nói chung).',
          },
        },
        {
          type: 'code',
          lang: 'java',
          code: 'public interface Menu {\n    int unitPrice = 10;\n    void getSalad();\n    void getBeefsteak();\n}\n\npublic class Chef implements Menu {\n    public void getSalad() {\n        System.out.println("This is a salad");\n    }\n    public void getBeefsteak() {\n        System.out.println("This is a beefsteak");\n    }\n}\n\nMenu m = new Chef();\nm.getSalad();   // polymorphism',
        },
        {
          type: 'p',
          text: {
            en: 'Multiple interfaces: a class implements several interfaces, separated by commas.',
            vi: 'Multiple interface: class implements nhiều interface, phân tách bằng dấu phẩy.',
          },
        },
        {
          type: 'callout',
          variant: 'info',
          title: { en: 'Notes on interfaces', vi: 'Notes về interface' },
          text: {
            en: 'You cannot create an object from an interface. Interface methods are abstract and public by default. Attributes are public, static, final by default. There is no constructor. An interface can extend another interface.',
            vi: 'Không thể tạo object từ interface. Method interface mặc định abstract và public. Attribute mặc định public, static, final. Không có constructor. Interface có thể extend interface khác.',
          },
        },
      ],
    },
  ],
  resources: [{ href: '/resource/Polymorphism.pdf', label: 'Polymorphism.pdf' }],
  workshop: { href: '/workshop/workshop5.pdf', label: 'workshop5' },
};
