import type { Lesson } from './types';

export const inheritance: Lesson = {
  id: 'inheritance',
  title: 'Inheritance',
  category: 'Inheritance',
  icon: 'git-branch',
  summary:
    'Định nghĩa kế thừa, is-a, derived/super class, function trong inheritance, instanceof, casting.',
  outcomes: [
    'Hiểu kế thừa và is-a relationship',
    'Dùng extends, super để gọi constructor/method cha',
    'Dùng instanceof để kiểm tra dynamic type',
    'Cast an toàn giữa super/sub class',
  ],
  sections: [
    {
      id: 'definition',
      heading: 'Định nghĩa',
      blocks: [
        {
          type: 'p',
          text: 'Ngôn ngữ OOP triển khai tái sử dụng cấu trúc code qua inheritance — khái niệm nổi bật thứ hai sau encapsulation. Inheritance là quan hệ giữa các class mà một class kế thừa toàn bộ cấu trúc của class khác. Quan hệ này phân cấp, chặt chẽ hơn composition.',
        },
        { type: 'img', src: '/images/inheritance1.png', alt: 'Hierarchy' },
        {
          type: 'p',
          text: 'Trong OO design, ta quan tâm hierarchy thể hiện thiết kế tiến triển của tập class. Root là entity trừu tượng, xây lên để tạo entity cụ thể hơn. Entity cấp cao là "parent", "base" hay "super" class; entity cấp thấp là "child", "derived" hay "sub" class.',
        },
        { type: 'img', src: '/images/inheritance2.png', alt: 'Item hierarchy' },
      ],
    },
    {
      id: 'is-a',
      heading: 'is-a relationship',
      blocks: [
        {
          type: 'p',
          text: 'HardGood is-a Item, ElectricalGood is-a HardGood và do đó is-a Item. ElectricalGood có type ElectricalGood, HardGood và Item. Đây là quan hệ hierarchy mà Java và OOP thiết kế để nắm bắt.',
        },
        { type: 'img', src: '/images/inheritance3.png', alt: 'is-a' },
        {
          type: 'callout',
          variant: 'info',
          title: 'Polymorphism ở class level',
          text: 'Object của class X có parent Y thì X có thể mang hình dạng object kiểu X hoặc Y — xuất hiện nhiều hình dạng.',
        },
      ],
    },
    {
      id: 'derived',
      heading: 'Derived và Super Class',
      blocks: [
        {
          type: 'p',
          text: 'Ví dụ shop bán đồ cổ: vase, statue, painting. Các class có attribute chung (value, creator) và riêng. Factorise bằng Item superclass; ba class kia là subclass.',
        },
        { type: 'img', src: '/images/inheritance4.png', alt: 'Antique shop classes' },
        { type: 'img', src: '/images/inheritance5.png', alt: 'Super/sub class' },
        {
          type: 'p',
          text: 'Dùng từ khoá extends để triển khai is-a.',
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
      heading: 'Function trong Inheritance',
      blocks: [
        {
          type: 'p',
          text: 'Method thêm vào superclass cũng được kế thừa ở subclass. Ví dụ thêm output() vào Item, ba subclass đều gọi được.',
        },
        {
          type: 'callout',
          variant: 'rule',
          title: 'Quy tắc access modifier',
          text: 'private: chỉ trong class, không đảm bảo trong subclass. protected: trong class và subclass. public: mọi nơi.',
        },
        {
          type: 'p',
          text: 'Dùng super() để gọi constructor của superclass — phải là dòng đầu tiên trong constructor subclass. Dùng super.methodName() để gọi method bị override.',
        },
        {
          type: 'code',
          lang: 'java',
          code: 'public class Vase extends Item {\n    private int height;\n    private String material;\n\n    public Vase() {\n        super(); // gọi constructor mặc định của Item\n        height = 0;\n        material = "";\n    }\n    public Vase(int value, String creator, int height, String material) {\n        super(value, creator); // gọi constructor 2 tham số của Item\n        this.height = height;\n        this.material = material;\n    }\n}',
        },
        {
          type: 'callout',
          variant: 'rule',
          text: 'Subclass KHÔNG kế thừa constructor của superclass mặc định. Nếu constructor không gọi super() tường minh, compiler tự chèn gọi no-arg constructor của superclass.',
        },
        {
          type: 'p',
          text: 'Override method: subclass định nghĩa lại method cùng signature. Dùng @Override annotation để báo compiler ý định override.',
        },
        {
          type: 'p',
          text: 'Hidden method: định nghĩa lại static method của superclass.',
        },
      ],
    },
    {
      id: 'instanceof',
      heading: 'instanceof và Casting',
      blocks: [
        {
          type: 'p',
          text: 'Biến reference kiểu superclass (Item tmp = v1;) có thể lưu địa chỉ object subclass — gọi là dynamic type. Static type là kiểu khi khai báo.',
        },
        { type: 'img', src: '/images/inheritance6.png', alt: 'Dynamic type' },
        {
          type: 'p',
          text: 'Dùng instanceof để kiểm tra tmp đang trỏ tới object nào.',
        },
        {
          type: 'code',
          lang: 'java',
          code: 'Item tmp = v1;\nif (tmp instanceof Vase)\n    System.out.println("tmp is pointing to the Vase object");\nelse if (tmp instanceof Statue)\n    System.out.println("tmp is pointing to the Statue object");\nelse\n    System.out.println("tmp is pointing to the Painting object");',
        },
        {
          type: 'p',
          text: 'Biến kiểu superclass chỉ gọi được method của superclass. Để gọi method subclass, phải cast tường minh: ((Vase)tmp).putFlowers();. Cast sai kiểu sẽ ném ClassCastException.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Kiểm tra type bằng instanceof trước khi cast tường minh.',
        },
      ],
    },
  ],
  resources: [{ href: '/resource/Inheritance.pdf', label: 'Inheritance.pdf' }],
  workshop: { href: '/workshop/workshop4.pdf', label: 'workshop4' },
};
