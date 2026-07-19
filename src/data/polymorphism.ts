import type { Lesson } from './types';

export const polymorphism: Lesson = {
  id: 'polymorphism',
  title: 'Polymorphism',
  category: 'Polymorphism',
  icon: 'shuffle',
  summary:
    'Overloading vs overriding, static/dynamic binding, class Object, toString, abstract class và interface.',
  outcomes: [
    'Phân biệt overloading và overriding',
    'Hiểu static binding và dynamic binding',
    'Dùng abstract class và abstract method',
    'Định nghĩa và implement interface, multiple interface',
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
          text: 'Một class có nhiều method cùng tên nhưng khác kiểu tham số. Compiler phân biệt theo signature.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Overriding',
          text: 'Method ở superclass có thể bị override trong subclass — thân method được thay thế.',
        },
        {
          type: 'code',
          lang: 'java',
          code: 'public class Vase extends Item {\n    public Vase() { super(); height = 0; material = ""; }\n    public Vase(int height, String material) {\n        super();\n        this.height = height;\n        this.material = material;\n    }\n    public Vase(int value, String creator, int height, String material) {\n        super(value, creator);\n        this.height = height;\n        this.material = material;\n    }\n}',
        },
        {
          type: 'p',
          text: 'Constructor Vase là polymorphic vì xuất hiện 3 hình dạng. Khi instantiate, compiler tìm matching signature. Mỗi signature phải unique.',
        },
      ],
    },
    {
      id: 'overriding',
      heading: 'Overriding chi tiết',
      blocks: [
        {
          type: 'p',
          text: 'Thay vì đặt input ở Item và inputVase ở Vase, ta override input/output ở subclass để có design tốt hơn: cùng mục đích → cùng tên, giảm cast tường minh.',
        },
        {
          type: 'code',
          lang: 'java',
          code: 'public class Item {\n    protected int value;\n    protected String creator;\n    public void input() {\n        Scanner sc = new Scanner(System.in);\n        value = sc.nextInt();\n        creator = sc.nextLine();\n    }\n    public void output() {\n        System.out.println(value + " " + creator);\n    }\n}\n\npublic class Vase extends Item {\n    @Override\n    public void input() {\n        super.input();\n        // ... nhập height, material\n    }\n    @Override\n    public void output() {\n        super.output();\n        // ...\n    }\n}',
        },
        {
          type: 'callout',
          variant: 'rule',
          text: 'Method override không được restrictive hơn method ở superclass.',
        },
      ],
    },
    {
      id: 'binding',
      heading: 'Function binding',
      blocks: [
        {
          type: 'ul',
          items: [
            'Static binding — dựa trên static type, diễn ra lúc compile',
            'Dynamic binding — dựa trên dynamic type, method call được bond lúc runtime',
          ],
        },
        {
          type: 'p',
          text: 'getValue() được xác định lúc compile (static). input() chỉ được xác định lúc runtime (dynamic).',
        },
      ],
    },
    {
      id: 'object-class',
      heading: 'Class Object',
      blocks: [
        {
          type: 'p',
          text: 'Object là root của class hierarchy. Mọi class đều có Object làm superclass. toString() trả "ClassName@hashCode". Khuyến nghị override toString() để có biểu diễn dễ đọc.',
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
          text: 'Superclass thường trừu tượng hơn subclass. Khi ta muốn thêm method displayPrice() vào Item nhưng Item không có field width/height/weight → cần abstract method.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Abstract method',
          text: 'Là signature definition không có implementation. Implementation thuộc về class kế thừa.',
        },
        {
          type: 'code',
          lang: 'java',
          code: 'public abstract class Item {\n    protected int value;\n    protected String creator;\n    public abstract void displayPrice();\n}\n\npublic class Vase extends Item {\n    public void displayPrice() {\n        if (height < 100)\n            System.out.println("The price is 1000$");\n        else\n            System.out.println("The price is 2000$");\n    }\n}',
        },
        {
          type: 'callout',
          variant: 'rule',
          text: 'Subclass chỉ hoàn thiện khi đã implement tất cả abstract method kế thừa. Abstract class không thể instantiate.',
        },
      ],
    },
    {
      id: 'interface',
      heading: 'Interface',
      blocks: [
        {
          type: 'p',
          text: 'Object giao tiếp với thế giới qua method. Java chỉ cho kế thừa 1 class cha, nhưng có thể implement nhiều interface — giải quyết "multiple inheritance".',
        },
        {
          type: 'p',
          text: 'Interface là reference type chỉ chứa constants, static method, abstract method, default method, nested type. Không có implementation (nói chung).',
        },
        {
          type: 'code',
          lang: 'java',
          code: 'public interface Menu {\n    int unitPrice = 10;\n    void getSalad();\n    void getBeefsteak();\n}\n\npublic class Chef implements Menu {\n    public void getSalad() {\n        System.out.println("This is a salad");\n    }\n    public void getBeefsteak() {\n        System.out.println("This is a beefsteak");\n    }\n}\n\nMenu m = new Chef();\nm.getSalad();   // polymorphism',
        },
        {
          type: 'p',
          text: 'Multiple interface: class implements nhiều interface, phân tách bằng dấu phẩy.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Notes về interface',
          text: 'Không thể tạo object từ interface. Method interface mặc định abstract và public. Attribute mặc định public, static, final. Không có constructor. Interface có thể extend interface khác.',
        },
      ],
    },
  ],
  resources: [{ href: '/resource/Polymorphism.pdf', label: 'Polymorphism.pdf' }],
  workshop: { href: '/workshop/workshop5.pdf', label: 'workshop5' },
};
