import type { Lesson } from './types';

export const io: Lesson = {
  id: 'io',
  title: { en: 'Standard I/O', vi: 'Standard I/O' },
  category: { en: 'Foundations', vi: 'Nền tảng' },
  icon: 'terminal',
  summary: {
    en: 'I/O Streams, command-line input/output, Standard Streams and the Scanner class for user input.',
    vi: 'I/O Streams, nhập/xuất từ command line, Standard Streams và lớp Scanner để lấy dữ liệu từ người dùng.',
  },
  outcomes: [
    { en: 'Understand the I/O Stream concept', vi: 'Hiểu khái niệm I/O Stream' },
    { en: 'Use System.in, System.out, System.err', vi: 'Dùng System.in, System.out, System.err' },
    { en: 'Use Scanner to read many data types', vi: 'Sử dụng Scanner để đọc nhiều kiểu dữ liệu' },
    { en: 'Convert String to number with Integer.parseInt', vi: 'Chuyển đổi String sang số bằng Integer.parseInt' },
  ],
  sections: [
    {
      id: 'streams',
      heading: { en: 'I/O Streams', vi: 'I/O Streams' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'An I/O Stream represents an input source or an output destination. A stream can be a disk file, a device, another program, or a memory array.',
            vi: 'I/O Stream đại diện cho nguồn nhập hoặc đích xuất. Stream có thể là file đĩa, thiết bị, chương trình khác, hay mảng bộ nhớ.',
          },
        },
        {
          type: 'p',
          text: {
            en: 'Streams support many data types: bytes, primitives, localized characters, objects. Some streams only pass data along, others transform it.',
            vi: 'Stream hỗ trợ nhiều kiểu dữ liệu: byte, primitive, ký tự localised, object. Một số stream chỉ truyền dữ liệu, số khác biến đổi dữ liệu.',
          },
        },
      ],
    },
    {
      id: 'command-line',
      heading: { en: 'Command Line I/O', vi: 'I/O từ Command Line' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'Java supports command-line interaction through Standard Streams and the Console. There are 3 Standard Streams: System.in (input), System.out (output), System.err (error).',
            vi: 'Java hỗ trợ tương tác command line qua Standard Streams và Console. Có 3 Standard Streams: System.in (nhập), System.out (xuất), System.err (lỗi).',
          },
        },
        {
          type: 'p',
          text: {
            en: 'Both System.out and System.err are for output; separating errors lets you redirect output to a file while still reading error messages.',
            vi: 'System.out và System.err đều để xuất; tách riêng lỗi cho phép chuyển output ra file mà vẫn đọc được error message.',
          },
        },
      ],
    },
    {
      id: 'scanner',
      heading: { en: 'The Scanner class', vi: 'Lớp Scanner' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'Use Scanner to get user input. Common methods:',
            vi: 'Sử dụng Scanner để lấy input người dùng. Bảng các method phổ biến:',
          },
        },
        {
          type: 'callout',
          variant: 'info',
          title: { en: 'Scanner methods', vi: 'Các method của Scanner' },
          text: {
            en: 'nextBoolean(), nextByte(), nextDouble(), nextFloat(), nextInt(), nextLine(), nextLong(), nextShort() — each reads a value of the corresponding type from the user.',
            vi: 'nextBoolean(), nextByte(), nextDouble(), nextFloat(), nextInt(), nextLine(), nextLong(), nextShort() — mỗi method đọc một kiểu tương ứng từ người dùng.',
          },
        },
      ],
    },
    {
      id: 'example',
      heading: { en: 'Example', vi: 'Ví dụ' },
      blocks: [
        { type: 'img', src: '/images/ioexample.png', alt: { en: 'IO example', vi: 'IO example' } },
        {
          type: 'p',
          text: {
            en: 'Import java.util.Scanner. Create a Scanner object, print the prompt "Enter number of elements", use sc.nextLine() to get the string then Integer.parseInt() to convert it to int.',
            vi: 'Import java.util.Scanner. Tạo object Scanner, in thông báo "Enter number of elements", dùng sc.nextLine() lấy chuỗi rồi Integer.parseInt() chuyển sang int.',
          },
        },
        {
          type: 'p',
          text: {
            en: 'System.out.format is used to format the output.',
            vi: 'System.out.format dùng để định dạng output.',
          },
        },
      ],
    },
    {
      id: 'summary',
      heading: { en: 'Summary', vi: 'Tóm tắt' },
      blocks: [
        {
          type: 'ul',
          items: [
            { en: 'Easiest way to get user data: use Scanner', vi: 'Cách dễ lấy dữ liệu người dùng: dùng Scanner' },
            { en: 'Use System.out to print to the console', vi: 'Dùng System.out để in ra console' },
            { en: 'Convert a string to a number using Integer, Float, ...', vi: 'Chuyển chuỗi sang số bằng Integer, Float, ...' },
          ],
        },
      ],
    },
  ],
  resources: [],
  workshop: { href: '/workshop/workshop1.pdf', label: 'workshop1' },
};

export const exception: Lesson = {
  id: 'exception',
  title: { en: 'Exception', vi: 'Exception' },
  category: { en: 'Foundations', vi: 'Nền tảng' },
  icon: 'alert',
  summary: {
    en: 'What an exception is, checked vs unchecked, try-catch and throws, real examples and custom exceptions.',
    vi: 'Exception là gì, checked vs unchecked, try-catch và throws, ví dụ thực tế và custom exception.',
  },
  outcomes: [
    { en: 'Understand exceptions and the throw mechanism', vi: 'Hiểu exception và cơ chế throw' },
    { en: 'Distinguish checked and unchecked exceptions', vi: 'Phân biệt checked và unchecked exception' },
    { en: 'Use try-catch-finally and throws', vi: 'Dùng try-catch-finally và throws' },
    { en: 'Create a custom exception class', vi: 'Tạo custom exception class' },
  ],
  sections: [
    {
      id: 'what',
      heading: { en: 'What is an exception', vi: 'Exception là gì' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'An exception is an event that occurs during program execution and disrupts the normal flow. When an error occurs in a method, the method creates an exception object containing error information and hands it to the runtime system — called throwing an exception.',
            vi: 'Exception là sự kiện xảy ra trong khi thực thi chương trình, làm gián đoạn luồng bình thường. Khi lỗi xảy ra trong method, method tạo exception object chứa thông tin lỗi và giao cho runtime system — gọi là throwing an exception.',
          },
        },
        {
          type: 'p',
          text: {
            en: 'Examples: a user enters an invalid file name, the file does not exist or is corrupted, a network link fails. All exceptions inherit from java.lang.Throwable.',
            vi: 'Ví dụ: người dùng nhập tên file không hợp lệ, file không tồn tại hoặc hỏng, network link fail. Tất cả exception kế thừa từ java.lang.Throwable.',
          },
        },
        { type: 'img', src: '/images/exception.png', alt: { en: 'Exception', vi: 'Exception' } },
        {
          type: 'p',
          text: {
            en: 'When the error occurs at line 4, the main method creates an ArithmeticException object and the JVM throws it to main. Since main does not handle it, the stack trace is printed. The statement at line 5 is skipped.',
            vi: 'Khi lỗi xảy ra ở dòng 4, method main tạo exception object kiểu ArithmeticException, JVM ném cho method main. Vì main không xử lý nên in ra stack trace. Câu lệnh ở dòng 5 bị bỏ qua.',
          },
        },
      ],
    },
    {
      id: 'kinds',
      heading: { en: 'Kinds of exceptions', vi: 'Các loại Exception' },
      blocks: [
        {
          type: 'callout',
          variant: 'info',
          title: { en: 'Checked exception', vi: 'Checked exception' },
          text: {
            en: 'Checked at compile time. Must be handled with try-catch or a throws declaration. For example FileReader() throws IOException.',
            vi: 'Kiểm tra lúc compile. Phải xử lý bằng try-catch hoặc throws-declaration. Ví dụ FileReader() ném IOException.',
          },
        },
        { type: 'img', src: '/images/exception2.png', alt: { en: 'Checked exception', vi: 'Checked exception' } },
        {
          type: 'callout',
          variant: 'info',
          title: { en: 'Unchecked exception', vi: 'Unchecked exception' },
          text: {
            en: 'Occurs at runtime (Runtime Exception). No compile error. Usually due to bad user input. For example accessing the 6th element of a 5-element array → ArrayIndexOutOfBoundsException.',
            vi: 'Xảy ra lúc runtime (Runtime Exception). Không lỗi compile. Thường do dữ liệu người dùng nhập sai. Ví dụ truy cập phần tử thứ 6 của mảng 5 phần tử → ArrayIndexOutOfBoundsException.',
          },
        },
        { type: 'img', src: '/images/exception1.png', alt: { en: 'Unchecked exception', vi: 'Unchecked exception' } },
      ],
    },
    {
      id: 'fix',
      heading: { en: 'How to handle', vi: 'Cách xử lý' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'Use try-catch or throws to handle exceptions.',
            vi: 'Dùng try-catch hoặc throws để xử lý.',
          },
        },
        {
          type: 'p',
          text: {
            en: 'try: the code block checked for errors. catch: the block that runs when an error occurs in try. finally: runs after try...catch regardless of the result.',
            vi: 'try: khối code kiểm tra lỗi. catch: khối chạy khi có lỗi trong try. finally: chạy sau try...catch bất kể kết quả.',
          },
        },
        { type: 'img', src: '/images/exception3.png', alt: { en: 'try-catch syntax', vi: 'try-catch syntax' } },
        {
          type: 'callout',
          variant: 'rule',
          text: {
            en: 'You cannot use finally without a try. finally is optional.',
            vi: 'Không thể dùng finally mà không có try. finally là tuỳ chọn.',
          },
        },
        { type: 'img', src: '/images/exception5.png', alt: { en: 'DemoException2', vi: 'DemoException2' } },
        { type: 'img', src: '/images/exception4.png', alt: { en: 'ExceptionDemo_1', vi: 'ExceptionDemo_1' } },
        {
          type: 'p',
          text: {
            en: 'throws: used when you do not want to handle the error in the method, pushing it to another method to handle.',
            vi: 'throws: dùng khi không muốn xử lý lỗi trong method, đẩy cho method khác xử lý.',
          },
        },
        { type: 'img', src: '/images/exception6.png', alt: { en: 'throws mechanism', vi: 'throws mechanism' } },
      ],
    },
    {
      id: 'examples',
      heading: { en: 'Examples', vi: 'Ví dụ' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'Code prints "age is 20 or older" if age is under 20 or text is entered.',
            vi: 'Code in "age is 20 or older" nếu age dưới 20 hoặc nhập text.',
          },
        },
        { type: 'img', src: '/images/exception7.png', alt: { en: 'Example', vi: 'Example' } },
        { type: 'img', src: '/images/exception8.png', alt: { en: 'Output 1', vi: 'Output 1' } },
        { type: 'img', src: '/images/exception9.png', alt: { en: 'Output 2', vi: 'Output 2' } },
      ],
    },
    {
      id: 'summary',
      heading: { en: 'Summary', vi: 'Tóm tắt' },
      blocks: [
        {
          type: 'ul',
          items: [
            { en: 'try is always paired with catch to handle exceptions in try', vi: 'try luôn đi kèm catch xử lý exception trong try' },
            { en: 'A try can have multiple catch (multi-catch)', vi: 'Một try có thể có nhiều catch (multi-catch)' },
            { en: 'try can be nested (nested try/catch)', vi: 'try có thể lồng nhau (nested try/catch)' },
            { en: 'Use throws to push an exception to another method to handle', vi: 'Dùng throws để đẩy exception cho method khác xử lý' },
            { en: 'You can create custom exception classes', vi: 'Có thể tạo custom exception class' },
          ],
        },
      ],
    },
  ],
  resources: [{ href: '/resource/Exception Handling.pdf', label: 'Exceptions.pdf' }],
  workshop: { href: '/workshop/workshop2.pdf', label: 'workshop2' },
};

export const dynamicMemory: Lesson = {
  id: 'dynamic-memory',
  title: { en: 'Dynamic Memory', vi: 'Dynamic Memory' },
  category: { en: 'Foundations', vi: 'Nền tảng' },
  icon: 'database',
  summary: {
    en: 'Static/dynamic heap and stack, dynamic allocation, deallocation and Garbage Collection in Java.',
    vi: 'Static/dynamic heap và stack, cấp phát động, giải phóng và Garbage Collection trong Java.',
  },
  outcomes: [
    { en: 'Distinguish static heap, dynamic heap and stack', vi: 'Phân biệt static heap, dynamic heap và stack' },
    { en: 'Understand dynamic allocation with new', vi: 'Hiểu cấp phát động với new' },
    { en: 'Understand the Garbage Collection mechanism', vi: 'Hiểu cơ chế Garbage Collection' },
  ],
  sections: [
    {
      id: 'overview',
      heading: { en: 'Overview', vi: 'Tổng quan' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'Java manages memory automatically through a garbage collector. Allocation happens when creating an object with new or when calling a method with local variables/arguments.',
            vi: 'Java quản lý bộ nhớ tự động qua garbage collector. Cấp phát diễn ra khi tạo object bằng new hoặc khi gọi method có biến/argument cục bộ.',
          },
        },
        {
          type: 'p',
          text: {
            en: 'Local data of a method (return, parameter, local variable) is allocated on the stack and destroyed when the method ends. Objects are allocated on the heap and live longer.',
            vi: 'Local data của method (return, parameter, biến cục bộ) được cấp phát trên stack và huỷ khi method kết thúc. Object được cấp phát trên heap và sống lâu hơn.',
          },
        },
      ],
    },
    {
      id: 'heap-stack',
      heading: { en: 'Static & Dynamic Heap, Stack', vi: 'Static & Dynamic Heap, Stack' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'The static heap holds class declarations when the class is loaded. You can have static methods, static classes, static blocks, static variables using the static keyword.',
            vi: 'Static heap chứa class declaration khi class được load. Có thể có static method, static class, static block, static variable bằng từ khoá static.',
          },
        },
        {
          type: 'p',
          text: {
            en: 'The dynamic heap is the runtime region allocated for every object and array. The heap is created when the JVM starts and can grow/shrink. Unused (garbage) objects are released automatically.',
            vi: 'Dynamic heap là vùng runtime cấp phát cho mọi object và array. Heap tạo khi JVM khởi động và có thể tăng/giảm. Object không dùng (garbage) được giải phóng tự động.',
          },
        },
        {
          type: 'p',
          text: {
            en: 'The stack holds temporary variables. When a method is called, a new block is created on the stack for that method, holding local values and references to objects. When the method ends, the block is destroyed.',
            vi: 'Stack chứa biến tạm. Khi method được gọi, một block mới tạo trên stack cho method đó, chứa local value và reference tới object. Khi method kết thúc, block bị xoá.',
          },
        },
        { type: 'img', src: '/images/memory.png', alt: { en: 'Memory', vi: 'Memory' } },
        { type: 'img', src: '/images/memory2.png', alt: { en: 'Memory 2', vi: 'Memory 2' } },
      ],
    },
    {
      id: 'allocation',
      heading: { en: 'Dynamic allocation', vi: 'Cấp phát động' },
      blocks: [
        {
          type: 'code',
          lang: 'java',
          code: 'public static void main(String[] args){\n    int a[] = new int[5];        // [1]\n    String s = new String("hello"); // [2]\n}',
        },
        {
          type: 'p',
          text: {
            en: '[1] new allocates a 5-element array in the heap and returns the address of the first element. a stores this address. [2] new allocates a block containing "hello".',
            vi: '[1] new cấp phát mảng 5 phần tử trong heap, trả địa chỉ phần tử đầu. a lưu địa chỉ này. [2] new cấp phát block chứa "hello".',
          },
        },
        { type: 'img', src: '/images/allocation.png', alt: { en: 'Allocation', vi: 'Allocation' } },
        {
          type: 'p',
          text: {
            en: 'Use null so a variable points to nothing: int a[] = null; String s = null;',
            vi: 'Dùng null để biến không trỏ tới gì: int a[] = null; String s = null;',
          },
        },
      ],
    },
    {
      id: 'deallocation',
      heading: { en: 'Dynamic deallocation', vi: 'Giải phóng động' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'Java does not require explicit memory freeing. Garbage collection is automatic. Local variables are destroyed when the method ends; unused objects on the heap are reclaimed by the GC.',
            vi: 'Java không yêu cầu free bộ nhớ tường minh. Garbage collection tự động. Biến cục bộ được huỷ khi method kết thúc; object không dùng trên heap được GC thu hồi.',
          },
        },
        { type: 'img', src: '/images/memory3.png', alt: { en: 'Deallocation', vi: 'Deallocation' } },
      ],
    },
    {
      id: 'gc',
      heading: { en: 'Garbage Collection', vi: 'Garbage Collection' },
      blocks: [
        {
          type: 'ul',
          items: [
            { en: 'The JVM supports GC to free programmers from heap management', vi: 'JVM hỗ trợ GC để giải phóng lập trình viên khỏi quản lý heap' },
            { en: 'GC is only invoked by the JVM; you cannot trigger it', vi: 'GC chỉ được JVM gọi, ta không thể kích hoạt' },
            { en: 'The Java heap is managed with 2 lists: Free block list, Allocated block list', vi: 'Java heap quản lý bằng 2 list: Free block list, Allocated block list' },
            { en: 'After many allocations/deallocations, blocks become fragmented', vi: 'Sau nhiều lần cấp phát/giải phóng, block bị phân mảnh' },
            { en: 'GC has the lowest priority and runs when the heap is nearly full', vi: 'GC có priority thấp nhất, chạy khi heap sắp đầy' },
          ],
        },
      ],
    },
  ],
  resources: [{ href: '/resource/Memory Management in Java.pdf', label: 'Memory Management in Java.pdf' }],
};
