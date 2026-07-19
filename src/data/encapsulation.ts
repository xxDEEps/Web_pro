import type { Lesson } from './types';

export const encapsulation: Lesson = {
  id: 'encapsulation',
  title: { en: 'Encapsulation', vi: 'Encapsulation' },
  category: { en: 'Encapsulation', vi: 'Encapsulation' },
  icon: 'box',
  summary: {
    en: 'Class and object, constructor, constructor overloading, this, member functions, package, access modifiers.',
    vi: 'Class và object, constructor, overloading constructor, this, member function, package, access modifier.',
  },
  outcomes: [
    { en: 'Design a class with fields and methods', vi: 'Thiết kế class với field và method' },
    { en: 'Write default and parameterized constructors', vi: 'Viết constructor mặc định và có tham số' },
    { en: 'Use this to distinguish instance and local variables', vi: 'Dùng this để phân biệt instance và local variable' },
    { en: 'Understand packages and access modifiers (private/default/protected/public)', vi: 'Hiểu package và access modifier (private/default/protected/public)' },
  ],
  sections: [
    {
      id: 'class-object',
      heading: { en: 'Class and Object', vi: 'Class và Object' },
      blocks: [
        {
          type: 'callout',
          variant: 'info',
          title: { en: 'Class', vi: 'Class' },
          text: {
            en: 'A class is the organizational unit of OOP design and programs.',
            vi: 'Class là đơn vị tổ chức của thiết kế và chương trình OOP.',
          },
        },
        {
          type: 'p',
          text: {
            en: 'A good class has 3 traits: highly cohesive (represents a single entity), minimally coupled (interacts only when needed), encapsulated (hides internal information).',
            vi: 'Một class tốt có 3 đặc điểm: highly cohesive (đại diện một entity duy nhất), minimally coupled (chỉ tương tác khi cần), encapsulated (giấu thông tin nội bộ).',
          },
        },
        {
          type: 'p',
          text: {
            en: 'A class definition has two parts: Fields (Attributes) and Methods (Behaviors).',
            vi: 'Định nghĩa class gồm 2 thành phần: Fields (Attributes) và Methods (Behaviors).',
          },
        },
        {
          type: 'callout',
          variant: 'problem',
          title: { en: 'Sports Car problem', vi: 'Bài toán Sports Car' },
          text: {
            en: 'A sports car has many colors, 100-200 HP, and can be a convertible or regular. It has a start button and a parking brake. When the parking brake is released and the accelerator is pressed, the car moves according to the transmission.',
            vi: 'Xe thể thao có nhiều màu, công suất 100-200 HP, có thể là convertible hoặc regular. Có nút start, parking brake. Khi nhả parking brake và đạp accelerator, xe chạy theo transmission.',
          },
        },
        {
          type: 'p',
          text: {
            en: 'Design guide: (1) find the main noun → class, (2) find auxiliary nouns → fields, (3) find verbs → methods, (4) find relationships between classes.',
            vi: 'Hướng dẫn thiết kế: (1) tìm main noun → class, (2) tìm auxiliary noun → field, (3) tìm verb → method, (4) tìm quan hệ giữa các class.',
          },
        },
        { type: 'img', src: '/images/encapsulation1.png', alt: { en: 'Car design', vi: 'Car design' } },
        { type: 'img', src: '/images/encapsulation2.png', alt: { en: 'Car UML', vi: 'Car UML' } },
        { type: 'img', src: '/images/demoCarClass.png', alt: { en: 'Car class', vi: 'Car class' } },
        { type: 'img', src: '/images/outputCarClass.png', alt: { en: 'Car output', vi: 'Car output' } },
        {
          type: 'callout',
          variant: 'info',
          title: { en: 'Object', vi: 'Object' },
          text: {
            en: 'An object is a memory block in the dynamic heap, created from a class using the new keyword. You can create many objects from one class.',
            vi: 'Object là block memory trong dynamic heap, tạo từ class bằng từ khoá new. Có thể tạo nhiều object từ một class.',
          },
        },
      ],
    },
    {
      id: 'constructor',
      heading: { en: 'Constructor', vi: 'Constructor' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'Full encapsulation requires a mechanism to initialize fields when an object is created. A constructor is a special member function that the object calls upon creation.',
            vi: 'Encapsulation đầy đủ cần cơ chế khởi tạo field lúc tạo object. Constructor là member function đặc biệt mà object gọi lúc tạo.',
          },
        },
        {
          type: 'p',
          text: {
            en: 'A default (no-argument) constructor has the same name as the class: ClassName(). If a class declares no constructor, the compiler inserts an empty one.',
            vi: 'Constructor mặc định (no-argument) có tên trùng class: ClassName(). Nếu class không khai báo constructor nào, compiler tự chèn constructor rỗng.',
          },
        },
      ],
    },
    {
      id: 'overloading',
      heading: { en: 'Constructor Overloading', vi: 'Overloading Constructor' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'Constructor overloading lets the client pick the most suitable set of parameters when creating an object.',
            vi: 'Overloading constructor cho phép client chọn tập tham số phù hợp nhất lúc tạo object.',
          },
        },
        { type: 'img', src: '/images/Encapsulation8.png', alt: { en: 'Constructor with params', vi: 'Constructor with params' } },
        { type: 'img', src: '/images/encapsulation9.png', alt: { en: 'Using constructor', vi: 'Using constructor' } },
        {
          type: 'callout',
          variant: 'rule',
          title: { en: 'Compiler rule', vi: 'Quy tắc compiler' },
          text: {
            en: 'If a class declares a parameterized constructor but no no-arg constructor, the compiler does NOT insert an empty no-arg constructor. The compiler only inserts an empty no-arg constructor when the class declares no constructors at all.',
            vi: 'Nếu class khai báo constructor có tham số mà không khai báo no-arg constructor, compiler KHÔNG tự chèn no-arg rỗng. Compiler chỉ chèn no-arg rỗng khi class không khai báo constructor nào.',
          },
        },
      ],
    },
    {
      id: 'this',
      heading: { en: 'The current object & this', vi: 'The current object & this' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'When c1.pressAcceleratorButton() runs, the object managed by c1 is the current object. this returns the address of the current object.',
            vi: 'Khi c1.pressAcceleratorButton() chạy, object mà c1 quản lý là current object. this trả về địa chỉ của current object.',
          },
        },
        {
          type: 'p',
          text: {
            en: 'this is created when a member method is called and destroyed when the method ends.',
            vi: 'this được tạo khi member method được gọi và bị huỷ khi method kết thúc.',
          },
        },
        { type: 'img', src: '/images/Encapsulation12.png', alt: { en: 'this', vi: 'this' } },
        {
          type: 'callout',
          variant: 'tip',
          text: {
            en: 'Use this to distinguish a local variable from an instance variable when they share a name.',
            vi: 'Dùng this để phân biệt local variable và instance variable khi trùng tên.',
          },
        },
      ],
    },
    {
      id: 'member-functions',
      heading: { en: 'Member functions', vi: 'Member functions' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'A member function is a function declared in a class that operates on the data members. Add getters/setters to access private fields.',
            vi: 'Member function là hàm khai báo trong class và hoạt động trên data member. Thêm getter/setter để truy cập private field.',
          },
        },
        {
          type: 'code',
          lang: 'java',
          code: 'public class Car {\n    private String Colour;\n    private int EnginePower;\n    private boolean Convertible;\n    private boolean parkingBrake;\n\n    public Car() {\n        Colour = "";\n        EnginePower = 0;\n        Convertible = false;\n        parkingBrake = false;\n    }\n\n    public Car(String Colour, int EnginePower,\n               boolean Convertible, boolean parkingBrake) {\n        this.Colour = Colour;\n        this.EnginePower = EnginePower;\n        this.Convertible = Convertible;\n        this.parkingBrake = parkingBrake;\n    }\n\n    public void setColour(String Colour) { this.Colour = Colour; }\n    public String getColour() { return Colour; }\n    // ... other getters/setters\n}',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: {
            en: 'A class usually has 4 groups of methods: constructors, getters, setters, and logic methods. Every method in a class operates on the class fields.',
            vi: 'Một class thường có 4 nhóm method: constructor, getter, setter, và logic method. Mọi method trong class đều hoạt động trên field của class.',
          },
        },
      ],
    },
    {
      id: 'package',
      heading: { en: 'Package', vi: 'Package' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'A package is a namespace that organizes a set of related classes and interfaces. It is similar to a folder on a computer.',
            vi: 'Package là namespace tổ chức tập class và interface liên quan. Tương tự folder trên máy tính.',
          },
        },
        {
          type: 'p',
          text: {
            en: 'The package declaration must be the first line of the file: package mypkg;. Each file can have only one package statement.',
            vi: 'Khai báo package phải là dòng đầu tiên của file: package mypkg;. Mỗi file chỉ một package statement.',
          },
        },
        { type: 'img', src: '/images/package.png', alt: { en: 'Package', vi: 'Package' } },
      ],
    },
    {
      id: 'access-modifier',
      heading: { en: 'Access modifier', vi: 'Access modifier' },
      blocks: [
        {
          type: 'ul',
          items: [
            { en: 'private (-): accessible only within the class', vi: 'private (-): chỉ truy cập trong class' },
            { en: 'public (+): accessible everywhere', vi: 'public (+): truy cập mọi nơi' },
            { en: 'protected (#): within the package and outside via inheritance', vi: 'protected (#): trong package và ngoài package qua inheritance' },
            { en: 'default: within the package', vi: 'default: trong package' },
          ],
        },
        { type: 'img', src: '/images/encapsulation20.png', alt: { en: 'Access modifier', vi: 'Access modifier' } },
        { type: 'img', src: '/images/encapsulation21.png', alt: { en: 'Access modifier table', vi: 'Access modifier table' } },
        {
          type: 'callout',
          variant: 'rule',
          text: {
            en: 'A private field cannot be accessed from another class. Access must go through public getters/setters.',
            vi: 'private field không thể truy cập từ class khác. Truy cập phải qua public getter/setter.',
          },
        },
      ],
    },
  ],
  resources: [{ href: '/resource/Encapsulation.pdf', label: 'Encapsulation.pdf' }],
  workshop: { href: '/workshop/workshop3.pdf', label: 'workshop3' },
};
