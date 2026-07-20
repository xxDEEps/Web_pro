import type { Lesson } from './types';

export const encapsulation: Lesson = {
  id: 'encapsulation',
  title: 'Encapsulation',
  category: 'Encapsulation',
  icon: 'box',
  summary:
    'Class và object, constructor, overloading constructor, this, member function, package, access modifier.',
  outcomes: [
    'Thiết kế class với field và method',
    'Viết constructor mặc định và có tham số',
    'Dùng this để phân biệt instance và local variable',
    'Hiểu package và access modifier (private/default/protected/public)',
  ],
  sections: [
    {
      id: 'class-object',
      heading: 'Class và Object',
      blocks: [
        {
          type: 'callout',
          variant: 'info',
          title: 'Class',
          text: 'Class là đơn vị tổ chức của thiết kế và chương trình OOP.',
        },
        {
          type: 'p',
          text: 'Một class tốt có 3 đặc điểm: highly cohesive (đại diện một entity duy nhất), minimally coupled (chỉ tương tác khi cần), encapsulated (giấu thông tin nội bộ).',
        },
        {
          type: 'p',
          text: 'Định nghĩa class gồm 2 thành phần: Fields (Attributes) và Methods (Behaviors).',
        },
        {
          type: 'callout',
          variant: 'problem',
          title: 'Bài toán Sports Car',
          text: 'Xe thể thao có nhiều màu, công suất 100-200 HP, có thể là convertible hoặc regular. Có nút start, parking brake. Khi nhả parking brake và đạp accelerator, xe chạy theo transmission.',
        },
        {
          type: 'p',
          text: 'Hướng dẫn thiết kế: (1) tìm main noun → class, (2) tìm auxiliary noun → field, (3) tìm verb → method, (4) tìm quan hệ giữa các class.',
        },
        { type: 'img', src: '/images/encapsulation1.png', alt: 'Car design' },
        { type: 'img', src: '/images/encapsulation2.png', alt: 'Car UML' },
        { type: 'img', src: '/images/demoCarClass.png', alt: 'Car class' },
        { type: 'img', src: '/images/outputCarClass.png', alt: 'Car output' },
        {
          type: 'callout',
          variant: 'info',
          title: 'Object',
          text: 'Object là block memory trong dynamic heap, tạo từ class bằng từ khoá new. Có thể tạo nhiều object từ một class.',
        },
      ],
    },
    {
      id: 'constructor',
      heading: 'Constructor',
      blocks: [
        {
          type: 'p',
          text: 'Encapsulation đầy đủ cần cơ chế khởi tạo field lúc tạo object. Constructor là member function đặc biệt mà object gọi lúc tạo.',
        },
        {
          type: 'p',
          text: 'Constructor mặc định (no-argument) có tên trùng class: ClassName(). Nếu class không khai báo constructor nào, compiler tự chèn constructor rỗng.',
        },
      ],
    },
    {
      id: 'overloading',
      heading: 'Overloading Constructor',
      blocks: [
        {
          type: 'p',
          text: 'Overloading constructor cho phép client chọn tập tham số phù hợp nhất lúc tạo object.',
        },
        { type: 'img', src: '/images/Encapsulation8.png', alt: 'Constructor with params' },
        { type: 'img', src: '/images/encapsulation9.png', alt: 'Using constructor' },
        {
          type: 'callout',
          variant: 'rule',
          title: 'Quy tắc compiler',
          text: 'Nếu class khai báo constructor có tham số mà không khai báo no-arg constructor, compiler KHÔNG tự chèn no-arg rỗng. Compiler chỉ chèn no-arg rỗng khi class không khai báo constructor nào.',
        },
      ],
    },
    {
      id: 'this',
      heading: 'The current object & this',
      blocks: [
        {
          type: 'p',
          text: 'Khi c1.pressAcceleratorButton() chạy, object mà c1 quản lý là current object. this trả về địa chỉ của current object.',
        },
        {
          type: 'p',
          text: 'this được tạo khi member method được gọi và bị huỷ khi method kết thúc.',
        },
        { type: 'img', src: '/images/Encapsulation12.png', alt: 'this' },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Dùng this để phân biệt local variable và instance variable khi trùng tên.',
        },
      ],
    },
    {
      id: 'member-functions',
      heading: 'Member functions',
      blocks: [
        {
          type: 'p',
          text: 'Member function là hàm khai báo trong class và hoạt động trên data member. Thêm getter/setter để truy cập private field.',
        },
        {
          type: 'code',
          lang: 'java',
          code: 'public class Car {\n    private String Colour;\n    private int EnginePower;\n    private boolean Convertible;\n    private boolean parkingBrake;\n\n    public Car() {\n        Colour = "";\n        EnginePower = 0;\n        Convertible = false;\n        parkingBrake = false;\n    }\n\n    public Car(String Colour, int EnginePower,\n               boolean Convertible, boolean parkingBrake) {\n        this.Colour = Colour;\n        this.EnginePower = EnginePower;\n        this.Convertible = Convertible;\n        this.parkingBrake = parkingBrake;\n    }\n\n    public void setColour(String Colour) { this.Colour = Colour; }\n    public String getColour() { return Colour; }\n    // ... các getter/setter khác\n}',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Một class thường có 4 nhóm method: constructor, getter, setter, và logic method. Mọi method trong class đều hoạt động trên field của class.',
        },
      ],
    },
    {
      id: 'package',
      heading: 'Package',
      blocks: [
        {
          type: 'p',
          text: 'Package là namespace tổ chức tập class và interface liên quan. Tương tự folder trên máy tính.',
        },
        {
          type: 'p',
          text: 'Khai báo package phải là dòng đầu tiên của file: package mypkg;. Mỗi file chỉ một package statement.',
        },
        { type: 'img', src: '/images/package.png', alt: 'Package' },
      ],
    },
    {
      id: 'access-modifier',
      heading: 'Access modifier',
      blocks: [
        {
          type: 'ul',
          items: [
            'private (-): chỉ truy cập trong class',
            'public (+): truy cập mọi nơi',
            'protected (#): trong package và ngoài package qua inheritance',
            'default: trong package',
          ],
        },
        { type: 'img', src: '/images/encapsulation20.png', alt: 'Access modifier' },
        { type: 'img', src: '/images/encapsulation21.png', alt: 'Access modifier table' },
        {
          type: 'callout',
          variant: 'rule',
          text: 'private field không thể truy cập từ class khác. Truy cập phải qua public getter/setter.',
        },
      ],
    },
  ],
  resources: [{ href: '/resource/Encapsulation.pdf', label: 'Encapsulation.pdf' }],
  workshop: { href: '/workshop/workshop3.pdf', label: 'workshop3' },
};
