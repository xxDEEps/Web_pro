export type Lang = 'en' | 'vi';

export type Localized = { en: string; vi: string };

export type Block =
  | { type: 'p'; text: Localized }
  | { type: 'h'; text: Localized }
  | { type: 'code'; lang?: string; code: string }
  | { type: 'img'; src: string; alt?: Localized }
  | { type: 'ul'; items: Localized[] }
  | { type: 'ol'; items: Localized[] }
  | { type: 'callout'; variant: 'info' | 'tip' | 'rule' | 'problem'; title?: Localized; text: Localized }
  | { type: 'link'; href: string; label: Localized; external?: boolean };

export interface Section {
  id: string;
  heading: Localized;
  blocks: Block[];
}

export interface Lesson {
  id: string;
  title: Localized;
  category: Localized;
  icon: string;
  summary: Localized;
  outcomes: Localized[];
  sections: Section[];
  resources: { href: string; label: string }[];
  workshop?: { href: string; label: string };
}

export interface CourseModule {
  id: string;
  title: Localized;
  part: Localized;
  description: Localized;
  lessons: Lesson[];
}

export const courseInfo = {
  code: 'PRO192',
  title: {
    en: 'Object-Oriented Programming using Java',
    vi: 'Lập trình hướng đối tượng với Java',
  },
  university: { en: 'FPT University', vi: 'Đại học FPT' },
  prerequisite: 'PRF192',
  description: {
    en: 'This course introduces students to object-oriented programming. Students learn how to build reusable objects, encapsulate data and logic within a class, inherit from another class, and implement polymorphism.',
    vi: 'Môn học giới thiệu sinh viên với lập trình hướng đối tượng. Sinh viên học cách xây dựng các đối tượng có thể tái sử dụng, đóng gói dữ liệu và logic trong một class, kế thừa từ class khác và triển khai đa hình.',
  },
  outcomes: [
    {
      en: 'Understand object-oriented programming (OOP) concepts to solve problems and the basic principles of OOP in Java',
      vi: 'Hiểu các khái niệm lập trình hướng đối tượng (OOP) để giải quyết vấn đề và các nguyên lý cơ bản của OOP trong Java',
    },
    {
      en: 'Practice basic Java syntax and semantics to write programs and use concepts such as variables, conditions, and loops',
      vi: 'Thực hành cú pháp và ngữ nghĩa cơ bản của Java để viết chương trình và sử dụng các khái niệm như biến, điều kiện và vòng lặp',
    },
    {
      en: 'Use streams to read/write data from/to different sources/destinations',
      vi: 'Sử dụng streams để đọc/ghi dữ liệu từ/towards các nguồn/đích khác nhau',
    },
    {
      en: 'Discuss the benefits and usage of Java exception handling mechanism',
      vi: 'Thảo luận về lợi ích và cách sử dụng cơ chế xử lý ngoại lệ của Java',
    },
    {
      en: 'Identify classes, objects, class members and their relationships for a specific problem',
      vi: 'Xác định các class, object, thành viên của class và mối quan hệ giữa chúng cho một vấn đề cụ thể',
    },
    {
      en: 'Explain and demonstrate Polymorphism, Encapsulation, Abstraction and Inheritance in Java',
      vi: 'Giải thích và minh hoạ khái niệm Đa hình, Đóng gói, Trừu tượng và Kế thừa trong Java',
    },
    {
      en: 'Discuss the principles and usage of abstract class and interface in Java',
      vi: 'Thảo luận về nguyên lý và cách sử dụng abstract class và interface trong Java',
    },
    {
      en: 'Understand and implement a complete program using object array',
      vi: 'Hiểu và triển khai chương trình hoàn chỉnh sử dụng object array',
    },
    {
      en: 'Explain the principles and usage of some abstract data types (list, set, map)',
      vi: 'Giải thích nguyên lý và cách sử dụng một số abstract data types (list, set, map)',
    },
  ],
};

export const ui = {
  brandSub: { en: 'FPT · OOP Java', vi: 'FPT · OOP Java' },
  searchPlaceholder: { en: 'Search lessons...', vi: 'Tìm bài học...' },
  noResults: { en: 'No results found', vi: 'Không tìm thấy kết quả' },
  overview: { en: 'Overview', vi: 'Tổng quan' },
  home: { en: 'Home', vi: 'Trang chủ' },
  resources: { en: 'Resources', vi: 'Tài nguyên' },
  workshops: { en: 'Workshops', vi: 'Workshops' },
  references: { en: 'References', vi: 'Tài liệu tham khảo' },
  about: { en: 'About course', vi: 'Giới thiệu môn' },
  progress: { en: 'Learning progress', vi: 'Tiến độ học tập' },
  lessons: { en: 'lessons', vi: 'bài' },
  done: { en: 'done', vi: 'hoàn thành' },
  learningJourney: { en: 'Learning journey', vi: 'Hành trình học tập' },
  learningOutcomes: { en: 'Learning outcomes', vi: 'Mục tiêu học tập' },
  lessonOutcomes: { en: 'Lesson outcomes', vi: 'Mục tiêu bài học' },
  contents: { en: 'Contents', vi: 'Nội dung' },
  materials: { en: 'Materials & Workshop', vi: 'Tài liệu & Workshop' },
  markDone: { en: 'Mark as completed', vi: 'Đánh dấu hoàn thành' },
  completed: { en: 'Completed', vi: 'Đã hoàn thành' },
  aboutCourse: { en: 'About the course', vi: 'Về môn học' },
  academicPolicy: { en: 'Academic policy', vi: 'Chính sách học thuật' },
  policyText: {
    en: 'Cheating, plagiarism and copyright infringement are serious violations. Cheating in a test is defined as talking, looking at a peer paper, or any secret means of communication. Plagiarism is using another person work without citation. Copyright infringement is copying material without the owner permission.',
    vi: 'Gian lận, đạo văn và vi phạm bản quyền là các vi phạm nghiêm trọng. Gian lận trong kiểm tra được hiểu là nói chuyện, nhìn bài bạn hay bất kỳ cách truyền thông bí mật nào. Đạo văn là sử dụng công sức người khác mà không trích dẫn. Vi phạm bản quyền là sao chép tài liệu mà không xin phép chủ sở hữu.',
  },
  library: { en: 'Library', vi: 'Thư viện' },
  practice: { en: 'Practice', vi: 'Thực hành' },
  courseCode: { en: 'Course code', vi: 'Mã môn' },
  prerequisite: { en: 'Prerequisite', vi: 'Tiên quyết' },
  numLessons: { en: 'Lessons', vi: 'Số bài học' },
  completedCount: { en: 'Completed', vi: 'Đã hoàn thành' },
  lectureSlides: { en: 'Lecture slides', vi: 'Slide bài giảng' },
  reading: { en: 'Reading', vi: 'Tài liệu đọc thêm' },
  referenceDesc: {
    en: 'Official books and references for the course.',
    vi: 'Sách và nguồn tham khảo chính thức của môn học.',
  },
  resourcesDesc: {
    en: 'Lecture slides and reading materials for the whole course.',
    vi: 'Slide bài giảng và tài liệu đọc thêm cho toàn bộ môn học.',
  },
  workshopsDesc: {
    en: 'Practice exercises applying knowledge from each chapter.',
    vi: 'Bài thực hành áp dụng kiến thức từng chương.',
  },
  saveLesson: { en: 'Save lesson', vi: 'Lưu bài' },
  copy: { en: 'copy', vi: 'sao chép' },
  copied: { en: 'copied', vi: 'đã sao chép' },
} as const;

export type UIKey = keyof typeof ui;
