import type { Lesson } from './types';

export const foundations: Lesson = {
  id: 'foundations',
  title: 'Nền tảng Java',
  category: 'Foundations',
  icon: 'cube',
  summary:
    'JVM, Java Platform, chương trình đầu tiên, kiểu dữ liệu, biến, mảng, toán tử và cấu trúc logic.',
  outcomes: [
    'Hiểu JVM và Java Platform',
    'Viết được chương trình Java đầu tiên trong NetBeans',
    'Phân biệt primitive type và reference type',
    'Khai báo và sử dụng mảng một và nhiều chiều',
    'Sử dụng toán tử và cấu trúc điều khiển',
  ],
  sections: [
    {
      id: 'jvm',
      heading: 'Java Virtual Machine',
      blocks: [
        {
          type: 'p',
          text: 'JVM là một máy tính trừu tượng. Giống máy tính thật, nó có tập lệnh và quản lý các vùng nhớ lúc runtime. Việc dùng máy ảo cho ngôn ngữ lập trình là khá phổ biến (ví dụ P-Code của UCSD Pascal).',
        },
        { type: 'img', src: '/images/JVM.png', alt: 'JVM' },
      ],
    },
    {
      id: 'platform',
      heading: 'Java Platform',
      blocks: [
        {
          type: 'p',
          text: 'Platform là môi trường phần cứng/phần mềm mà chương trình chạy trên đó. Java Platform có hai thành phần:',
        },
        {
          type: 'ul',
          items: ['Java Virtual Machine', 'Java Application Programming Interface (API)'],
        },
        { type: 'img', src: '/images/JavaPlatform.png', alt: 'Java Platform' },
      ],
    },
    {
      id: 'first-program',
      heading: 'Chương trình đầu tiên',
      blocks: [
        {
          type: 'p',
          text: 'Chương trình in "Hello World". Các bước: tạo project NetBeans, thêm Java class, viết code, compile/run.',
        },
        { type: 'img', src: '/images/firstProgram.png', alt: 'First program' },
        { type: 'img', src: '/images/step2.png', alt: 'Step 2' },
        { type: 'img', src: '/images/step3.png', alt: 'Step 3' },
        { type: 'img', src: '/images/step4.png', alt: 'Step 4' },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Keyword & Identifier',
          text: 'Java case-sensitive. Identifier phải khác keyword. Tuân thủ naming convention: camelCase cho biến, PascalCase cho class.',
        },
      ],
    },
    {
      id: 'data-types',
      heading: 'Kiểu dữ liệu & Biến',
      blocks: [
        {
          type: 'p',
          text: 'Kiểu trong Java chia làm primitive type và reference type.',
        },
        {
          type: 'p',
          text: 'Primitive là kiểu dữ liệu đơn không phải object, đại diện cho một giá trị đơn lẻ.',
        },
        { type: 'img', src: '/images/datatype.png', alt: 'Primitive types' },
        {
          type: 'code',
          lang: 'java',
          code: '// Khai báo\nint RollID;\nchar type = "A";\n\n// Khởi tạo reference\nString s = new String("Hello");\nint[] ar = new int[3];\nar[0] = 1; ar[1] = 2; ar[2] = 3;',
        },
        {
          type: 'p',
          text: 'Reference type gồm Class, Array, Interface. Biến reference chỉ lưu địa chỉ của object. Giá trị mặc định của reference là null.',
        },
        { type: 'img', src: '/images/referenceDataType.png', alt: 'Reference type' },
      ],
    },
    {
      id: 'scope',
      heading: 'Scope (Phạm vi)',
      blocks: [
        {
          type: 'p',
          text: 'Scope là phần chương trình mà khai báo có thể nhìn thấy. Bao gồm:',
        },
        {
          type: 'ul',
          items: [
            'function scope — nhìn thấy trong hàm',
            'class scope — nhìn thấy trong member function',
            'block scope — nhìn thấy trong khối code',
            'global scope — toàn chương trình',
            'file scope — trong file nguồn',
          ],
        },
        { type: 'img', src: '/images/scope.png', alt: 'Scope' },
      ],
    },
    {
      id: 'arrays',
      heading: 'Mảng (Arrays)',
      blocks: [
        {
          type: 'p',
          text: 'Mảng là container chứa số cố định giá trị của một kiểu. Độ dài mảng xác định khi tạo. Mỗi phần tử truy cập qua index.',
        },
        { type: 'img', src: '/images/array2.png', alt: 'Array' },
        {
          type: 'code',
          lang: 'java',
          code: 'int[] anArray = new int[10];\n\n// copy mảng dùng System.arraycopy\nSystem.arraycopy(copyFrom, 2, copyTo, 0, 7);',
        },
        { type: 'img', src: '/images/copyarray.png', alt: 'Copy array' },
        {
          type: 'p',
          text: 'Mảng nhiều chiều có thể xem là mảng của mảng một chiều. Có thể gán lại từng hàng để thay đổi kích thước.',
        },
        { type: 'img', src: '/images/2Darray.png', alt: '2D array' },
      ],
    },
    {
      id: 'operators',
      heading: 'Toán tử',
      blocks: [
        { type: 'img', src: '/images/operator.png', alt: 'Operators' },
        { type: 'img', src: '/images/operator2.png', alt: 'Operators 2' },
        { type: 'img', src: '/images/operator3.png', alt: 'Operators 3' },
      ],
    },
    {
      id: 'logic-constructs',
      heading: 'Cấu trúc logic',
      blocks: [
        {
          type: 'p',
          text: 'Control flow chia luồng thực thi bằng decision making, looping, branching: if-then, if-then-else, switch; for, while, do-while; break, continue, return.',
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
