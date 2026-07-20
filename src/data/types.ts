export type Block =
  | { type: 'p'; text: string }
  | { type: 'h'; text: string }
  | { type: 'code'; lang?: string; code: string }
  | { type: 'img'; src: string; alt?: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'callout'; variant: 'info' | 'tip' | 'rule' | 'problem'; title?: string; text: string }
  | { type: 'link'; href: string; label: string; external?: boolean };

export interface Section {
  id: string;
  heading: string;
  blocks: Block[];
}

export interface Lesson {
  id: string;
  title: string;
  category: string;
  icon: string;
  summary: string;
  outcomes: string[];
  sections: Section[];
  resources: { href: string; label: string }[];
  workshop?: { href: string; label: string };
}

export interface CourseModule {
  id: string;
  title: string;
  part: string;
  description: string;
  lessons: Lesson[];
}

export interface CourseInfo {
  code: string;
  title: string;
  university: string;
  prerequisite: string;
  description: string;
  outcomes: string[];
}

export const courseInfoEn: CourseInfo = {
  code: 'PRO192',
  title: 'Object-Oriented Programming using Java',
  university: 'FPT University',
  prerequisite: 'PRF192',
  description:
    'This course introduces students to object-oriented programming. Students learn how to build reusable objects, encapsulate data and logic within a class, inherit from other classes, and implement polymorphism.',
  outcomes: [
    'Understand object-oriented programming (OOP) concepts for problem solving and the basic principles of OOP in Java',
    'Practice the basic syntax and semantics of Java to write programs and use concepts such as variables, conditions, and loops',
    'Use streams to read/write data from/to different sources/destinations',
    'Discuss the benefits and usage of Java\'s exception-handling mechanism',
    'Identify classes, objects, class members, and their relationships for a given problem',
    'Explain and illustrate the concepts of Polymorphism, Encapsulation, Abstraction, and Inheritance in Java',
    'Discuss the principles and usage of abstract classes and interfaces in Java',
    'Understand and implement a complete program using an object array',
    'Explain the principles and usage of several abstract data types (list, set, map)',
  ],
};

export const courseInfoVi: CourseInfo = {
  code: 'PRO192',
  title: 'Object-Oriented Programming using Java',
  university: 'FPT University',
  prerequisite: 'PRF192',
  description:
    'Môn học giới thiệu sinh viên với lập trình hướng đối tượng. Sinh viên học cách xây dựng các đối tượng có thể tái sử dụng, đóng gói dữ liệu và logic trong một class, kế thừa từ class khác và triển khai đa hình.',
  outcomes: [
    'Hiểu các khái niệm lập trình hướng đối tượng (OOP) để giải quyết vấn đề và các nguyên lý cơ bản của OOP trong Java',
    'Thực hành cú pháp và ngữ nghĩa cơ bản của Java để viết chương trình và sử dụng các khái niệm như biến, điều kiện và vòng lặp',
    'Sử dụng streams để đọc/ghi dữ liệu từ/towards các nguồn/đích khác nhau',
    'Thảo luận về lợi ích và cách sử dụng cơ chế xử lý ngoại lệ của Java',
    'Xác định các class, object, thành viên của class và mối quan hệ giữa chúng cho một vấn đề cụ thể',
    'Giải thích và minh hoạ khái niệm Đa hình, Đóng gói, Trừu tượng và Kế thừa trong Java',
    'Thảo luận về nguyên lý và cách sử dụng abstract class và interface trong Java',
    'Hiểu và triển khai chương trình hoàn chỉnh sử dụng object array',
    'Giải thích nguyên lý và cách sử dụng một số abstract data types (list, set, map)',
  ],
};
