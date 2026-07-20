import type { Lesson } from './types';

export const io: Lesson = {
  id: 'io',
  title: 'Standard I/O',
  category: 'Foundations',
  icon: 'terminal',
  summary:
    'I/O Streams, nhập/xuất từ command line, Standard Streams và lớp Scanner để lấy dữ liệu từ người dùng.',
  outcomes: [
    'Hiểu khái niệm I/O Stream',
    'Dùng System.in, System.out, System.err',
    'Sử dụng Scanner để đọc nhiều kiểu dữ liệu',
    'Chuyển đổi String sang số bằng Integer.parseInt',
  ],
  sections: [
    {
      id: 'streams',
      heading: 'I/O Streams',
      blocks: [
        {
          type: 'p',
          text: 'I/O Stream đại diện cho nguồn nhập hoặc đích xuất. Stream có thể là file đĩa, thiết bị, chương trình khác, hay mảng bộ nhớ.',
        },
        {
          type: 'p',
          text: 'Stream hỗ trợ nhiều kiểu dữ liệu: byte, primitive, ký tự localised, object. Một số stream chỉ truyền dữ liệu, số khác biến đổi dữ liệu.',
        },
      ],
    },
    {
      id: 'command-line',
      heading: 'I/O từ Command Line',
      blocks: [
        {
          type: 'p',
          text: 'Java hỗ trợ tương tác command line qua Standard Streams và Console. Có 3 Standard Streams: System.in (nhập), System.out (xuất), System.err (lỗi).',
        },
        {
          type: 'p',
          text: 'System.out và System.err đều để xuất; tách riêng lỗi cho phép chuyển output ra file mà vẫn đọc được error message.',
        },
      ],
    },
    {
      id: 'scanner',
      heading: 'Lớp Scanner',
      blocks: [
        {
          type: 'p',
          text: 'Sử dụng Scanner để lấy input người dùng. Bảng các method phổ biến:',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Các method của Scanner',
          text: 'nextBoolean(), nextByte(), nextDouble(), nextFloat(), nextInt(), nextLine(), nextLong(), nextShort() — mỗi method đọc một kiểu tương ứng từ người dùng.',
        },
      ],
    },
    {
      id: 'example',
      heading: 'Ví dụ',
      blocks: [
        { type: 'img', src: '/images/ioexample.png', alt: 'IO example' },
        {
          type: 'p',
          text: 'Import java.util.Scanner. Tạo object Scanner, in thông báo "Enter number of elements", dùng sc.nextLine() lấy chuỗi rồi Integer.parseInt() chuyển sang int.',
        },
        {
          type: 'p',
          text: 'System.out.format dùng để định dạng output.',
        },
      ],
    },
    {
      id: 'summary',
      heading: 'Tóm tắt',
      blocks: [
        {
          type: 'ul',
          items: [
            'Cách dễ lấy dữ liệu người dùng: dùng Scanner',
            'Dùng System.out để in ra console',
            'Chuyển chuỗi sang số bằng Integer, Float, ...',
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
  title: 'Exception',
  category: 'Foundations',
  icon: 'alert',
  summary:
    'Exception là gì, checked vs unchecked, try-catch và throws, ví dụ thực tế và custom exception.',
  outcomes: [
    'Hiểu exception và cơ chế throw',
    'Phân biệt checked và unchecked exception',
    'Dùng try-catch-finally và throws',
    'Tạo custom exception class',
  ],
  sections: [
    {
      id: 'what',
      heading: 'Exception là gì',
      blocks: [
        {
          type: 'p',
          text: 'Exception là sự kiện xảy ra trong khi thực thi chương trình, làm gián đoạn luồng bình thường. Khi lỗi xảy ra trong method, method tạo exception object chứa thông tin lỗi và giao cho runtime system — gọi là throwing an exception.',
        },
        {
          type: 'p',
          text: 'Ví dụ: người dùng nhập tên file không hợp lệ, file không tồn tại hoặc hỏng, network link fail. Tất cả exception kế thừa từ java.lang.Throwable.',
        },
        { type: 'img', src: '/images/exception.png', alt: 'Exception' },
        {
          type: 'p',
          text: 'Khi lỗi xảy ra ở dòng 4, method main tạo exception object kiểu ArithmeticException, JVM ném cho method main. Vì main không xử lý nên in ra stack trace. Câu lệnh ở dòng 5 bị bỏ qua.',
        },
      ],
    },
    {
      id: 'kinds',
      heading: 'Các loại Exception',
      blocks: [
        {
          type: 'callout',
          variant: 'info',
          title: 'Checked exception',
          text: 'Kiểm tra lúc compile. Phải xử lý bằng try-catch hoặc throws-declaration. Ví dụ FileReader() ném IOException.',
        },
        { type: 'img', src: '/images/exception2.png', alt: 'Checked exception' },
        {
          type: 'callout',
          variant: 'info',
          title: 'Unchecked exception',
          text: 'Xảy ra lúc runtime (Runtime Exception). Không lỗi compile. Thường do dữ liệu người dùng nhập sai. Ví dụ truy cập phần tử thứ 6 của mảng 5 phần tử → ArrayIndexOutOfBoundsException.',
        },
        { type: 'img', src: '/images/exception1.png', alt: 'Unchecked exception' },
      ],
    },
    {
      id: 'fix',
      heading: 'Cách xử lý',
      blocks: [
        {
          type: 'p',
          text: 'Dùng try-catch hoặc throws để xử lý.',
        },
        {
          type: 'p',
          text: 'try: khối code kiểm tra lỗi. catch: khối chạy khi có lỗi trong try. finally: chạy sau try...catch bất kể kết quả.',
        },
        { type: 'img', src: '/images/exception3.png', alt: 'try-catch syntax' },
        {
          type: 'callout',
          variant: 'rule',
          text: 'Không thể dùng finally mà không có try. finally là tuỳ chọn.',
        },
        { type: 'img', src: '/images/exception5.png', alt: 'DemoException2' },
        { type: 'img', src: '/images/exception4.png', alt: 'ExceptionDemo_1' },
        {
          type: 'p',
          text: 'throws: dùng khi không muốn xử lý lỗi trong method, đẩy cho method khác xử lý.',
        },
        { type: 'img', src: '/images/exception6.png', alt: 'throws mechanism' },
      ],
    },
    {
      id: 'examples',
      heading: 'Ví dụ',
      blocks: [
        {
          type: 'p',
          text: 'Code in "age is 20 or older" nếu age dưới 20 hoặc nhập text.',
        },
        { type: 'img', src: '/images/exception7.png', alt: 'Example' },
        { type: 'img', src: '/images/exception8.png', alt: 'Output 1' },
        { type: 'img', src: '/images/exception9.png', alt: 'Output 2' },
      ],
    },
    {
      id: 'summary',
      heading: 'Tóm tắt',
      blocks: [
        {
          type: 'ul',
          items: [
            'try luôn đi kèm catch xử lý exception trong try',
            'Một try có thể có nhiều catch (multi-catch)',
            'try có thể lồng nhau (nested try/catch)',
            'Dùng throws để đẩy exception cho method khác xử lý',
            'Có thể tạo custom exception class',
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
  title: 'Dynamic Memory',
  category: 'Foundations',
  icon: 'database',
  summary:
    'Static/dynamic heap và stack, cấp phát động, giải phóng và Garbage Collection trong Java.',
  outcomes: [
    'Phân biệt static heap, dynamic heap và stack',
    'Hiểu cấp phát động với new',
    'Hiểu cơ chế Garbage Collection',
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Tổng quan',
      blocks: [
        {
          type: 'p',
          text: 'Java quản lý bộ nhớ tự động qua garbage collector. Cấp phát diễn ra khi tạo object bằng new hoặc khi gọi method có biến/argument cục bộ.',
        },
        {
          type: 'p',
          text: 'Local data của method (return, parameter, biến cục bộ) được cấp phát trên stack và huỷ khi method kết thúc. Object được cấp phát trên heap và sống lâu hơn.',
        },
      ],
    },
    {
      id: 'heap-stack',
      heading: 'Static & Dynamic Heap, Stack',
      blocks: [
        {
          type: 'p',
          text: 'Static heap chứa class declaration khi class được load. Có thể có static method, static class, static block, static variable bằng từ khoá static.',
        },
        {
          type: 'p',
          text: 'Dynamic heap là vùng runtime cấp phát cho mọi object và array. Heap tạo khi JVM khởi động và có thể tăng/giảm. Object không dùng (garbage) được giải phóng tự động.',
        },
        {
          type: 'p',
          text: 'Stack chứa biến tạm. Khi method được gọi, một block mới tạo trên stack cho method đó, chứa local value và reference tới object. Khi method kết thúc, block bị xoá.',
        },
        { type: 'img', src: '/images/memory.png', alt: 'Memory' },
        { type: 'img', src: '/images/memory2.png', alt: 'Memory 2' },
      ],
    },
    {
      id: 'allocation',
      heading: 'Cấp phát động',
      blocks: [
        {
          type: 'code',
          lang: 'java',
          code: 'public static void main(String[] args){\n    int a[] = new int[5];        // [1]\n    String s = new String("hello"); // [2]\n}',
        },
        {
          type: 'p',
          text: '[1] new cấp phát mảng 5 phần tử trong heap, trả địa chỉ phần tử đầu. a lưu địa chỉ này. [2] new cấp phát block chứa "hello".',
        },
        { type: 'img', src: '/images/allocation.png', alt: 'Allocation' },
        {
          type: 'p',
          text: 'Dùng null để biến không trỏ tới gì: int a[] = null; String s = null;',
        },
      ],
    },
    {
      id: 'deallocation',
      heading: 'Giải phóng động',
      blocks: [
        {
          type: 'p',
          text: 'Java không yêu cầu free bộ nhớ tường minh. Garbage collection tự động. Biến cục bộ được huỷ khi method kết thúc; object không dùng trên heap được GC thu hồi.',
        },
        { type: 'img', src: '/images/memory3.png', alt: 'Deallocation' },
      ],
    },
    {
      id: 'gc',
      heading: 'Garbage Collection',
      blocks: [
        {
          type: 'ul',
          items: [
            'JVM hỗ trợ GC để giải phóng lập trình viên khỏi quản lý heap',
            'GC chỉ được JVM gọi, ta không thể kích hoạt',
            'Java heap quản lý bằng 2 list: Free block list, Allocated block list',
            'Sau nhiều lần cấp phát/giải phóng, block bị phân mảnh',
            'GC có priority thấp nhất, chạy khi heap sắp đầy',
          ],
        },
      ],
    },
  ],
  resources: [{ href: '/resource/Memory Management in Java.pdf', label: 'Memory Management in Java.pdf' }],
};
