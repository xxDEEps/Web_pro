import type { Lesson } from './types';

export const introduction: Lesson = {
  id: 'introduction',
  title: { en: 'OOP Introduction', vi: 'Giới thiệu OOP' },
  category: { en: 'Introduction', vi: 'Giới thiệu' },
  icon: 'sparkles',
  summary: {
    en: 'Software complexity, object terminology, abstraction, class, UML, encapsulation, inheritance and polymorphism.',
    vi: 'Độ phức tạp của phần mềm, thuật ngữ hướng đối tượng, trừu tượng, class, UML, đóng gói, kế thừa và đa hình.',
  },
  outcomes: [
    {
      en: 'Understand why OOP is needed to manage software complexity',
      vi: 'Hiểu vì sao cần hướng đối tượng để quản lý độ phức tạp của phần mềm',
    },
    {
      en: 'Distinguish object, class, encapsulation, inheritance, polymorphism',
      vi: 'Phân biệt object, class, encapsulation, inheritance, polymorphism',
    },
    {
      en: 'Read a basic UML class diagram',
      vi: 'Đọc được class diagram cơ bản trong UML',
    },
  ],
  sections: [
    {
      id: 'complexity',
      heading: { en: 'Software complexity', vi: 'Độ phức tạp của phần mềm' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'Modern software applications are complex, dynamic and can contain hundreds of thousands or millions of lines of code. They evolve over time, sometimes requiring many years of effort from many programmers. Software engineering principles recommend that each component be highly cohesive and loosely coupled.',
            vi: 'Các ứng dụng phần mềm hiện đại phức tạp, động và có thể chứa hàng trăm nghìn hay hàng triệu dòng code. Chúng tiến hoá theo thời gian, có khi cần nhiều năm công sức của nhiều lập trình viên. Nguyên lý kỹ thuật phần mềm khuyên mỗi thành phần nên có tính gắn kết cao (highly cohesive) và kết nối lỏng (loosely coupled).',
          },
        },
        {
          type: 'p',
          text: {
            en: 'Object-oriented languages provide tools to implement these principles. We handle complexity by identifying the most important features of the problem domain, representing them through data and operations.',
            vi: 'Ngôn ngữ hướng đối tượng cung cấp công cụ để triển khai các nguyên lý này. Ta giải quyết độ phức tạp bằng cách nhận diện các đặc trưng quan trọng nhất của vấn đề (problem domain), biểu diễn chúng qua dữ liệu và hoạt động.',
          },
        },
        { type: 'img', src: '/images/algorithmic.png', alt: { en: 'Activity structure', vi: 'Cấu trúc hoạt động' } },
        {
          type: 'p',
          text: {
            en: 'When shifting focus from activities to objects, we get Course and HybridCourse. Course has a Course Code and uses a Grading Scheme; HybridCourse is a kind of Course. The diagram below shows the relationships: closed circle is "has-a", open circle is "uses-a", arrow is "is-a-kind-of".',
            vi: 'Khi chuyển sự chú ý từ hoạt động sang đối tượng, ta có Course và HybridCourse. Course có Course Code, dùng Grading Scheme; HybridCourse là một loại Course. Sơ đồ dưới đây cho thấy các quan hệ: vòng tròn kín là "has-a", vòng tròn mở là "uses-a", mũi tên là "is-a-kind-of".',
          },
        },
        { type: 'img', src: '/images/class_relationships.png', alt: { en: 'Class relationships', vi: 'Quan hệ giữa các class' } },
      ],
    },
    {
      id: 'object-terminology',
      heading: { en: 'Object terminology', vi: 'Thuật ngữ hướng đối tượng' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'Object-oriented programming reflects how we handle daily tasks. Professor Miller (Princeton) showed that most of us only grasp about 7 chunks of information at a time. Children already learn to break problems into manageable small parts.',
            vi: 'Lập trình hướng đối tượng phản ánh cách ta xử lý công việc hàng ngày. Giáo sư Miller (Princeton) chứng minh đa số chúng ta chỉ nắm được khoảng 7 chunk thông tin cùng lúc. Trẻ em đã học cách chia vấn đề thành các phần nhỏ quản lý được.',
          },
        },
        {
          type: 'p',
          text: {
            en: 'A chunk in OOP is called an object. The general structure of a set of similar objects is called a class. This structure consists of a data structure and logic to process the data.',
            vi: 'Một chunk trong OOP gọi là object. Cấu trúc chung của một tập object tương tự gọi là class. Cấu trúc này gồm cấu trúc dữ liệu và logic xử lý dữ liệu.',
          },
        },
      ],
    },
    {
      id: 'abstraction',
      heading: { en: 'Abstraction', vi: 'Trừu tượng (Abstraction)' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'An OOP solution consists of components called objects. OOP design uses abstraction: we identify the most important features, expose them, and hide less important details inside the object.',
            vi: 'Giải pháp OOP gồm các thành phần gọi là object. Thiết kế OOP dùng trừu tượng: ta nhận diện các đặc trưng quan trọng nhất, công khai chúng và giấu chi tiết ít quan trọng bên trong object.',
          },
        },
        { type: 'img', src: '/images/abstraction.png', alt: { en: 'Abstraction', vi: 'Abstraction' } },
        {
          type: 'p',
          text: {
            en: 'Each object has a clear conceptual boundary and behaves appropriately to itself. Compare a book (pages bound together, fixed order) with a note pad (loose pages that can be rearranged).',
            vi: 'Mỗi object có ranh giới khái niệm rõ ràng và hành xử phù hợp với chính nó. So sánh một cuốn sách (các trang được đóng gáy, thứ tự cố định) với một tập ghi chú (các trang rời, có thể sắp xếp lại).',
          },
        },
      ],
    },
    {
      id: 'classes',
      heading: { en: 'Class', vi: 'Class (Lớp)' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'We describe the structure of similar objects through a class. Objects of the same class have the same structure but different state. Each object is an instance of a class.',
            vi: 'Ta mô tả cấu trúc của các object tương tự thông qua class. Các object cùng class có cùng cấu trúc nhưng trạng thái khác nhau. Mỗi object là một instance của class.',
          },
        },
        { type: 'img', src: '/images/classes.png', alt: { en: 'Classes', vi: 'Classes' } },
      ],
    },
    {
      id: 'uml',
      heading: { en: 'UML and Class Diagram', vi: 'UML và Class Diagram' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'UML (Unified Modelling Language) is a modelling language used to describe object systems and relationships between classes. A class diagram is a rectangle with 3 compartments:',
            vi: 'UML (Unified Modelling Language) là ngôn ngữ mô hình hoá dùng để mô tả hệ thống object và quan hệ giữa các class. Class diagram là hình chữ nhật 3 ngăn:',
          },
        },
        {
          type: 'ol',
          items: [
            { en: 'Top compartment: class name', vi: 'Ngăn trên: tên class' },
            { en: 'Middle: name and type of attributes with visibility', vi: 'Ngăn giữa: tên và kiểu của attribute cùng visibility' },
            { en: 'Bottom: name, return type and parameter types of operations', vi: 'Ngăn dưới: tên, kiểu trả về và kiểu tham số của operation' },
          ],
        },
        {
          type: 'p',
          text: {
            en: 'Visibility: + public, - private, # protected, (blank) default (package).',
            vi: 'Visibility: + public, - private, # protected, (khoảng trắng) default (package).',
          },
        },
        { type: 'img', src: '/images/classUML.png', alt: { en: 'Class UML', vi: 'Class UML' } },
        {
          type: 'callout',
          variant: 'tip',
          title: { en: 'Naming convention', vi: 'Quy ước đặt tên' },
          text: {
            en: 'Start class names with an uppercase letter, member names with a lowercase letter, and use camelCase for all names.',
            vi: 'Bắt đầu tên class bằng chữ HOA, tên member bằng chữ thường, dùng camelCase cho mọi tên.',
          },
        },
      ],
    },
    {
      id: 'encapsulation',
      heading: { en: 'Encapsulation', vi: 'Đóng gói (Encapsulation)' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'Encapsulation is a foundational OOP concept: integrating data and logic within the class implementation, creating a clear boundary between implementation and client. Keep high cohesion within the class and loose coupling with clients.',
            vi: 'Encapsulation là khái niệm nền tảng của OOP: tích hợp dữ liệu và logic trong triển khai class, tạo ranh giới rõ giữa triển khai và client. Giữ tính gắn kết cao trong class và kết nối lỏng với client.',
          },
        },
        {
          type: 'p',
          text: {
            en: 'A class hides all implementation details. The client only sees a clean, simple interface. When a class is well encapsulated, programmers can upgrade internal structure without changing client code.',
            vi: 'Class giấu toàn bộ chi tiết triển khai. Client chỉ thấy giao diện sạch, đơn giản. Khi class được đóng gói tốt, lập trình viên có thể nâng cấp cấu trúc nội bộ mà không cần đổi mã client.',
          },
        },
        { type: 'img', src: '/images/encapsulation.png', alt: { en: 'Encapsulation', vi: 'Encapsulation' } },
      ],
    },
    {
      id: 'inheritance-polymorphism',
      heading: { en: 'Inheritance and Polymorphism', vi: 'Kế thừa và Đa hình' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'Polymorphism links the implementation of an object by type. HybridCourse has a different delivery mode than Course but the same assessment. Both belong to the Course hierarchy.',
            vi: 'Đa hình liên kết triển khai của object theo type. HybridCourse có chế độ giao delivery khác Course nhưng cùng assessment. Cả hai cùng thuộc hierarchy Course.',
          },
        },
        {
          type: 'p',
          text: {
            en: 'Querying mode() on Course returns a different result than HybridCourse, but assessments() is the same. Polymorphism helps reduce code duplication between objects in the same hierarchy.',
            vi: 'Truy vấn mode() trên Course trả kết quả khác với HybridCourse, nhưng assessments() giống nhau. Đa hình giúp giảm trùng lặp mã giữa các object cùng hierarchy.',
          },
        },
        { type: 'img', src: '/images/differentBehavior.png', alt: { en: 'Different behavior', vi: 'Hành vi khác nhau' } },
        { type: 'img', src: '/images/identicalBehavior.png', alt: { en: 'Identical behavior', vi: 'Hành vi giống nhau' } },
        {
          type: 'callout',
          variant: 'rule',
          title: { en: 'OOP foundations', vi: 'Nền tảng OOP' },
          text: {
            en: 'Encapsulation, inheritance and polymorphism are the three foundations of every object-oriented programming language.',
            vi: 'Encapsulation, inheritance và polymorphism là ba nền tảng của mọi ngôn ngữ lập trình hướng đối tượng.',
          },
        },
      ],
    },
  ],
  resources: [{ href: '/resource/Introduction.pdf', label: 'Introduction.pdf' }],
};
