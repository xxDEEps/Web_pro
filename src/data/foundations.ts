import type { Lesson } from './types';

export const foundations: Lesson = {
  id: 'foundations',
  title: { en: 'Java Foundations', vi: 'Nền tảng Java' },
  category: { en: 'Foundations', vi: 'Nền tảng' },
  icon: 'cube',
  summary: {
    en: 'JVM, Java Platform, first program, data types, variables, arrays, operators and logic constructs.',
    vi: 'JVM, Java Platform, chương trình đầu tiên, kiểu dữ liệu, biến, mảng, toán tử và cấu trúc logic.',
  },
  outcomes: [
    { en: 'Understand JVM and Java Platform', vi: 'Hiểu JVM và Java Platform' },
    { en: 'Write your first Java program in NetBeans', vi: 'Viết được chương trình Java đầu tiên trong NetBeans' },
    { en: 'Distinguish primitive type and reference type', vi: 'Phân biệt primitive type và reference type' },
    { en: 'Declare and use one- and multi-dimensional arrays', vi: 'Khai báo và sử dụng mảng một và nhiều chiều' },
    { en: 'Use operators and control structures', vi: 'Sử dụng toán tử và cấu trúc điều khiển' },
  ],
  sections: [
    {
      id: 'jvm',
      heading: { en: 'Java Virtual Machine', vi: 'Java Virtual Machine' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'The JVM is an abstract computer. Like a real computer, it has an instruction set and manages memory regions at runtime. Using a virtual machine for a programming language is quite common (e.g. UCSD Pascal P-Code).',
            vi: 'JVM là một máy tính trừu tượng. Giống máy tính thật, nó có tập lệnh và quản lý các vùng nhớ lúc runtime. Việc dùng máy ảo cho ngôn ngữ lập trình là khá phổ biến (ví dụ P-Code của UCSD Pascal).',
          },
        },
        { type: 'img', src: '/images/JVM.png', alt: { en: 'JVM', vi: 'JVM' } },
      ],
    },
    {
      id: 'platform',
      heading: { en: 'Java Platform', vi: 'Java Platform' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'A platform is the hardware/software environment in which a program runs. The Java Platform has two components:',
            vi: 'Platform là môi trường phần cứng/phần mềm mà chương trình chạy trên đó. Java Platform có hai thành phần:',
          },
        },
        {
          type: 'ul',
          items: [
            { en: 'Java Virtual Machine', vi: 'Java Virtual Machine' },
            { en: 'Java Application Programming Interface (API)', vi: 'Java Application Programming Interface (API)' },
          ],
        },
        { type: 'img', src: '/images/JavaPlatform.png', alt: { en: 'Java Platform', vi: 'Java Platform' } },
      ],
    },
    {
      id: 'first-program',
      heading: { en: 'First program', vi: 'Chương trình đầu tiên' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'A program that prints "Hello World". Steps: create a NetBeans project, add a Java class, write the code, compile and run.',
            vi: 'Chương trình in "Hello World". Các bước: tạo project NetBeans, thêm Java class, viết code, compile/run.',
          },
        },
        { type: 'img', src: '/images/firstProgram.png', alt: { en: 'First program', vi: 'First program' } },
        { type: 'img', src: '/images/step2.png', alt: { en: 'Step 2', vi: 'Step 2' } },
        { type: 'img', src: '/images/step3.png', alt: { en: 'Step 3', vi: 'Step 3' } },
        { type: 'img', src: '/images/step4.png', alt: { en: 'Step 4', vi: 'Step 4' } },
        {
          type: 'callout',
          variant: 'tip',
          title: { en: 'Keyword & Identifier', vi: 'Keyword & Identifier' },
          text: {
            en: 'Java is case-sensitive. An identifier must differ from keywords. Follow naming conventions: camelCase for variables, PascalCase for classes.',
            vi: 'Java case-sensitive. Identifier phải khác keyword. Tuân thủ naming convention: camelCase cho biến, PascalCase cho class.',
          },
        },
      ],
    },
    {
      id: 'data-types',
      heading: { en: 'Data types & Variables', vi: 'Kiểu dữ liệu & Biến' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'Types in Java are divided into primitive types and reference types.',
            vi: 'Kiểu trong Java chia làm primitive type và reference type.',
          },
        },
        {
          type: 'p',
          text: {
            en: 'A primitive is a simple data type that is not an object, representing a single value.',
            vi: 'Primitive là kiểu dữ liệu đơn không phải object, đại diện cho một giá trị đơn lẻ.',
          },
        },
        { type: 'img', src: '/images/datatype.png', alt: { en: 'Primitive types', vi: 'Primitive types' } },
        {
          type: 'code',
          lang: 'java',
          code: '// Declaration\nint RollID;\nchar type = "A";\n\n// Initialize a reference\nString s = new String("Hello");\nint[] ar = new int[3];\nar[0] = 1; ar[1] = 2; ar[2] = 3;',
        },
        {
          type: 'p',
          text: {
            en: 'Reference types include Class, Array, Interface. A reference variable only stores the address of an object. The default value of a reference is null.',
            vi: 'Reference type gồm Class, Array, Interface. Biến reference chỉ lưu địa chỉ của object. Giá trị mặc định của reference là null.',
          },
        },
        { type: 'img', src: '/images/referenceDataType.png', alt: { en: 'Reference type', vi: 'Reference type' } },
      ],
    },
    {
      id: 'scope',
      heading: { en: 'Scope', vi: 'Scope (Phạm vi)' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'Scope is the part of a program where a declaration is visible. It includes:',
            vi: 'Scope là phần chương trình mà khai báo có thể nhìn thấy. Bao gồm:',
          },
        },
        {
          type: 'ul',
          items: [
            { en: 'function scope — visible within the function', vi: 'function scope — nhìn thấy trong hàm' },
            { en: 'class scope — visible within member functions', vi: 'class scope — nhìn thấy trong member function' },
            { en: 'block scope — visible within a code block', vi: 'block scope — nhìn thấy trong khối code' },
            { en: 'global scope — whole program', vi: 'global scope — toàn chương trình' },
            { en: 'file scope — within a source file', vi: 'file scope — trong file nguồn' },
          ],
        },
        { type: 'img', src: '/images/scope.png', alt: { en: 'Scope', vi: 'Scope' } },
      ],
    },
    {
      id: 'arrays',
      heading: { en: 'Arrays', vi: 'Mảng (Arrays)' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'An array is a container holding a fixed number of values of one type. The array length is set at creation. Each element is accessed by index.',
            vi: 'Mảng là container chứa số cố định giá trị của một kiểu. Độ dài mảng xác định khi tạo. Mỗi phần tử truy cập qua index.',
          },
        },
        { type: 'img', src: '/images/array2.png', alt: { en: 'Array', vi: 'Array' } },
        {
          type: 'code',
          lang: 'java',
          code: 'int[] anArray = new int[10];\n\n// copy an array using System.arraycopy\nSystem.arraycopy(copyFrom, 2, copyTo, 0, 7);',
        },
        { type: 'img', src: '/images/copyarray.png', alt: { en: 'Copy array', vi: 'Copy array' } },
        {
          type: 'p',
          text: {
            en: 'Multi-dimensional arrays can be viewed as arrays of one-dimensional arrays. Each row can be reassigned to change its size.',
            vi: 'Mảng nhiều chiều có thể xem là mảng của mảng một chiều. Có thể gán lại từng hàng để thay đổi kích thước.',
          },
        },
        { type: 'img', src: '/images/2Darray.png', alt: { en: '2D array', vi: '2D array' } },
      ],
    },
    {
      id: 'operators',
      heading: { en: 'Operators', vi: 'Toán tử' },
      blocks: [
        { type: 'img', src: '/images/operator.png', alt: { en: 'Operators', vi: 'Operators' } },
        { type: 'img', src: '/images/operator2.png', alt: { en: 'Operators 2', vi: 'Operators 2' } },
        { type: 'img', src: '/images/operator3.png', alt: { en: 'Operators 3', vi: 'Operators 3' } },
      ],
    },
    {
      id: 'logic-constructs',
      heading: { en: 'Logic constructs', vi: 'Cấu trúc logic' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'Control flow divides the execution stream through decision making, looping, and branching: if-then, if-then-else, switch; for, while, do-while; break, continue, return.',
            vi: 'Control flow chia luồng thực thi bằng decision making, looping, branching: if-then, if-then-else, switch; for, while, do-while; break, continue, return.',
          },
        },
      ],
    },
  ],
  resources: [
    { href: '/resource/Learning the Java Language.pdf', label: 'Learning the Java Language.pdf' },
    { href: '/resource/Download & Install JDK & NetBeans 8.pdf', label: 'Download & Install JDK & NetBeans 8.pdf' },
    { href: '/resource/Get Start.pdf', label: 'How to compile and run a Java program.pdf' },
    { href: '/resource/Numbers and Strings.pdf', label: 'Number and String in Java.pdf' },
  ],
};
