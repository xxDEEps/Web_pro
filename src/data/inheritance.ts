import type { Lesson } from './types';

export const inheritance: Lesson = {
  id: 'inheritance',
  title: { en: 'Inheritance', vi: 'Inheritance' },
  category: { en: 'Inheritance', vi: 'Inheritance' },
  icon: 'git-branch',
  summary: {
    en: 'Definition of inheritance, is-a, derived/super class, functions in inheritance, instanceof, casting.',
    vi: 'Định nghĩa kế thừa, is-a, derived/super class, function trong inheritance, instanceof, casting.',
  },
  outcomes: [
    { en: 'Understand inheritance and the is-a relationship', vi: 'Hiểu kế thừa và is-a relationship' },
    { en: 'Use extends and super to call the parent constructor/method', vi: 'Dùng extends, super để gọi constructor/method cha' },
    { en: 'Use instanceof to check the dynamic type', vi: 'Dùng instanceof để kiểm tra dynamic type' },
    { en: 'Safely cast between super/sub class', vi: 'Cast an toàn giữa super/sub class' },
  ],
  sections: [
    {
      id: 'definition',
      heading: { en: 'Definition', vi: 'Định nghĩa' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'OOP languages implement code structure reuse through inheritance — the second most prominent concept after encapsulation. Inheritance is a relationship between classes where one class inherits the entire structure of another. This relationship is hierarchical and tighter than composition.',
            vi: 'Ngôn ngữ OOP triển khai tái sử dụng cấu trúc code qua inheritance — khái niệm nổi bật thứ hai sau encapsulation. Inheritance là quan hệ giữa các class mà một class kế thừa toàn bộ cấu trúc của class khác. Quan hệ này phân cấp, chặt chẽ hơn composition.',
          },
        },
        { type: 'img', src: '/images/inheritance1.png', alt: { en: 'Hierarchy', vi: 'Hierarchy' } },
        {
          type: 'p',
          text: {
            en: 'In OO design, we care about a hierarchy that shows the progressive design of a set of classes. The root is an abstract entity, built up to create more concrete entities. The higher entity is the "parent", "base" or "super" class; the lower entity is the "child", "derived" or "sub" class.',
            vi: 'Trong OO design, ta quan tâm hierarchy thể hiện thiết kế tiến triển của tập class. Root là entity trừu tượng, xây lên để tạo entity cụ thể hơn. Entity cấp cao là "parent", "base" hay "super" class; entity cấp thấp là "child", "derived" hay "sub" class.',
          },
        },
        { type: 'img', src: '/images/inheritance2.png', alt: { en: 'Item hierarchy', vi: 'Item hierarchy' } },
      ],
    },
    {
      id: 'is-a',
      heading: { en: 'is-a relationship', vi: 'is-a relationship' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'HardGood is-a Item, ElectricalGood is-a HardGood and therefore is-a Item. ElectricalGood has type ElectricalGood, HardGood and Item. This is the hierarchical relationship that Java and OOP are designed to capture.',
            vi: 'HardGood is-a Item, ElectricalGood is-a HardGood và do đó is-a Item. ElectricalGood có type ElectricalGood, HardGood và Item. Đây là quan hệ hierarchy mà Java và OOP thiết kế để nắm bắt.',
          },
        },
        { type: 'img', src: '/images/inheritance3.png', alt: { en: 'is-a', vi: 'is-a' } },
        {
          type: 'callout',
          variant: 'info',
          title: { en: 'Polymorphism at class level', vi: 'Polymorphism ở class level' },
          text: {
            en: 'An object of class X with parent Y can take the form of an X or a Y object — appearing in multiple forms.',
            vi: 'Object của class X có parent Y thì X có thể mang hình dạng object kiểu X hoặc Y — xuất hiện nhiều hình dạng.',
          },
        },
      ],
    },
    {
      id: 'derived',
      heading: { en: 'Derived and Super Class', vi: 'Derived và Super Class' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'Example antique shop: vase, statue, painting. The classes share attributes (value, creator) and have specific ones. Factorise by creating an Item superclass; the other three are subclasses.',
            vi: 'Ví dụ shop bán đồ cổ: vase, statue, painting. Các class có attribute chung (value, creator) và riêng. Factorise bằng Item superclass; ba class kia là subclass.',
          },
        },
        { type: 'img', src: '/images/inheritance4.png', alt: { en: 'Antique shop classes', vi: 'Antique shop classes' } },
        { type: 'img', src: '/images/inheritance5.png', alt: { en: 'Super/sub class', vi: 'Super/sub class' } },
        {
          type: 'p',
          text: {
            en: 'Use the extends keyword to implement is-a.',
            vi: 'Dùng từ khoá extends để triển khai is-a.',
          },
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
      heading: { en: 'Functions in Inheritance', vi: 'Function trong Inheritance' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'A method added to the superclass is also inherited by subclasses. For example, adding output() to Item lets all three subclasses call it.',
            vi: 'Method thêm vào superclass cũng được kế thừa ở subclass. Ví dụ thêm output() vào Item, ba subclass đều gọi được.',
          },
        },
        {
          type: 'callout',
          variant: 'rule',
          title: { en: 'Access modifier rules', vi: 'Quy tắc access modifier' },
          text: {
            en: 'private: only within the class, not guaranteed in subclasses. protected: within the class and subclasses. public: everywhere.',
            vi: 'private: chỉ trong class, không đảm bảo trong subclass. protected: trong class và subclass. public: mọi nơi.',
          },
        },
        {
          type: 'p',
          text: {
            en: 'Use super() to call the superclass constructor — it must be the first line in a subclass constructor. Use super.methodName() to call an overridden method.',
            vi: 'Dùng super() để gọi constructor của superclass — phải là dòng đầu tiên trong constructor subclass. Dùng super.methodName() để gọi method bị override.',
          },
        },
        {
          type: 'code',
          lang: 'java',
          code: 'public class Vase extends Item {\n    private int height;\n    private String material;\n\n    public Vase() {\n        super(); // calls Item default constructor\n        height = 0;\n        material = "";\n    }\n    public Vase(int value, String creator, int height, String material) {\n        super(value, creator); // calls Item 2-arg constructor\n        this.height = height;\n        this.material = material;\n    }\n}',
        },
        {
          type: 'callout',
          variant: 'rule',
          text: {
            en: 'A subclass does NOT inherit the superclass constructor by default. If a constructor does not explicitly call super(), the compiler inserts a call to the no-arg constructor of the superclass.',
            vi: 'Subclass KHÔNG kế thừa constructor của superclass mặc định. Nếu constructor không gọi super() tường minh, compiler tự chèn gọi no-arg constructor của superclass.',
          },
        },
        {
          type: 'p',
          text: {
            en: 'Overriding a method: a subclass redefines a method with the same signature. Use the @Override annotation to signal the intent to the compiler.',
            vi: 'Override method: subclass định nghĩa lại method cùng signature. Dùng @Override annotation để báo compiler ý định override.',
          },
        },
        {
          type: 'p',
          text: {
            en: 'Hidden method: redefining a static method of the superclass.',
            vi: 'Hidden method: định nghĩa lại static method của superclass.',
          },
        },
      ],
    },
    {
      id: 'instanceof',
      heading: { en: 'instanceof and Casting', vi: 'instanceof và Casting' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'A superclass-typed reference variable (Item tmp = v1;) can store the address of a subclass object — this is called the dynamic type. The static type is the type at declaration.',
            vi: 'Biến reference kiểu superclass (Item tmp = v1;) có thể lưu địa chỉ object subclass — gọi là dynamic type. Static type là kiểu khi khai báo.',
          },
        },
        { type: 'img', src: '/images/inheritance6.png', alt: { en: 'Dynamic type', vi: 'Dynamic type' } },
        {
          type: 'p',
          text: {
            en: 'Use instanceof to check which object tmp is currently pointing to.',
            vi: 'Dùng instanceof để kiểm tra tmp đang trỏ tới object nào.',
          },
        },
        {
          type: 'code',
          lang: 'java',
          code: 'Item tmp = v1;\nif (tmp instanceof Vase)\n    System.out.println("tmp is pointing to the Vase object");\nelse if (tmp instanceof Statue)\n    System.out.println("tmp is pointing to the Statue object");\nelse\n    System.out.println("tmp is pointing to the Painting object");',
        },
        {
          type: 'p',
          text: {
            en: 'A superclass-typed variable can only call superclass methods. To call a subclass method, you must cast explicitly: ((Vase)tmp).putFlowers();. A wrong cast throws ClassCastException.',
            vi: 'Biến kiểu superclass chỉ gọi được method của superclass. Để gọi method subclass, phải cast tường minh: ((Vase)tmp).putFlowers();. Cast sai kiểu sẽ ném ClassCastException.',
          },
        },
        {
          type: 'callout',
          variant: 'tip',
          text: {
            en: 'Check the type with instanceof before an explicit cast.',
            vi: 'Kiểm tra type bằng instanceof trước khi cast tường minh.',
          },
        },
      ],
    },
  ],
  resources: [{ href: '/resource/Inheritance.pdf', label: 'Inheritance.pdf' }],
  workshop: { href: '/workshop/workshop4.pdf', label: 'workshop4' },
};
