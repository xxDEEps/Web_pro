import type { Lesson } from './types';

export const collection: Lesson = {
  id: 'collection',
  title: 'Collections',
  category: 'Collections in Java',
  icon: 'layers',
  summary:
    'ADT, Java Collections Framework, List/ArrayList, Set/TreeSet, Map/HashMap và các supporting class.',
  outcomes: [
    'Hiểu Abstract Data Type và Collections Framework',
    'Dùng ArrayList cho danh sách cho phép trùng',
    'Dùng TreeSet cho tập distinct + sorted',
    'Dùng HashMap cho cặp key-value',
    'Dùng Collections và Arrays cho thao tác phụ',
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Abstract Data Types',
      blocks: [
        {
          type: 'p',
          text: 'ADT là mô hình toán học cho kiểu dữ liệu, bỏ qua cấu trúc lưu trữ. ADT mô tả khái niệm chung, định nghĩa qua hành vi từ góc nhìn người dùng. Java định nghĩa ADT qua interface.',
        },
        {
          type: 'p',
          text: 'Một nhóm phần tử có thể xem theo các cách: list (cho phép trùng), set (distinct), map (<Key, Value>).',
        },
        {
          type: 'p',
          text: 'Thao tác phổ biến: thêm, tìm, xoá, traverse, sort. ADT (mô hình toán, user view) đối lập với data structure (triển khai cụ thể, implementer view).',
        },
      ],
    },
    {
      id: 'framework',
      heading: 'Java Collections Framework',
      blocks: [
        {
          type: 'p',
          text: 'Collection là object đại diện nhóm object. Collections framework là kiến trúc thống nhất để biểu diễn và thao tác collection độc lập với chi tiết triển khai.',
        },
        {
          type: 'ul',
          items: [
            'Giảm công sức lập trình — cung cấp data structure và algorithm',
            'Tăng performance — triển khai hiệu năng cao, có thể thay thế lẫn nhau',
            'Interoperability giữa các API',
            'Giảm effort học/thiết kế API',
            'Thúc đẩy tái sử dụng phần mềm',
          ],
        },
        { type: 'img', src: '/images/7.01.gif', alt: 'Framework structure' },
      ],
    },
    {
      id: 'list',
      heading: 'List & ArrayList',
      blocks: [
        {
          type: 'p',
          text: 'ArrayList lưu reference trong mảng 1 chiều, cho phép phần tử trùng và hỗn hợp kiểu (khi không khai báo generic).',
        },
        { type: 'img', src: '/images/7.02.gif', alt: 'ArrayList' },
        {
          type: 'p',
          text: 'Khi phần tử không cùng class, reference hành xử như Object. Phải cast tường minh để gọi method riêng (vd area()). Dùng generic <Rectangle> để compiler nhận biết kiểu và loại bỏ cast.',
        },
        { type: 'img', src: '/images/7.04.gif', alt: 'Generic ArrayList' },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Chỉ định kiểu phần tử giúp phát hiện bug lúc compile và không cần cast.',
        },
      ],
    },
    {
      id: 'set',
      heading: 'Set & TreeSet',
      blocks: [
        {
          type: 'p',
          text: 'Set là nhóm object distinct, không cho trùng. Tree là cấu trúc gồm node và edge, mô tả quan hệ father-child.',
        },
        {
          type: 'p',
          text: 'TreeSet triển khai cây tự cân bằng, đảm bảo log(n) cho add/remove/contains. Yêu cầu phần tử implement Comparable (compareTo).',
        },
        { type: 'img', src: '/images/7.14.gif', alt: 'TreeSet' },
        {
          type: 'callout',
          variant: 'rule',
          text: 'Hai phần tử equal theo compareTo được TreeSet xem là bằng nhau.',
        },
      ],
    },
    {
      id: 'map',
      heading: 'Map & HashMap',
      blocks: [
        {
          type: 'p',
          text: 'Map không implement Collection. Map kết hợp hai collection: keys (set K) và values (collection V). Mỗi key ánh xạ đúng một value. Kiểm tra key duy nhất qua equals().',
        },
        {
          type: 'p',
          text: 'Hash-table là tập subset, vị trí xác định bởi hash function h. Modulo (%) thường dùng trong hash function.',
        },
        { type: 'img', src: '/images/7.17.gif', alt: 'Hash function' },
        {
          type: 'p',
          text: 'HashMap triển khai Map bằng hash-table. Hiệu năng constant-time cho get/put nếu hash phân tán tốt. Không đảm bảo thứ tự.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'HashMap tốt nhất cho tìm kiếm vì tìm trong subset nhỏ hiệu quả hơn tìm trong tập lớn.',
        },
      ],
    },
    {
      id: 'support',
      heading: 'Supporting classes',
      blocks: [
        {
          type: 'p',
          text: 'java.util.Collections và java.util.Arrays chứa nhiều method static cho thao tác collection/array: sort, shuffle, copy, search, min, max, ...',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Gợi ý chọn class',
          text: 'Phần tử trùng → ArrayList. Distinct + sorted + performance cao → TreeSet. Key duy nhất + performance rất cao → HashMap.',
        },
      ],
    },
  ],
  resources: [
    { href: '/resource/Collections.pdf', label: 'Collections.pdf' },
    { href: '/resource/Support Classes.pdf', label: 'Support Classes.pdf' },
  ],
  workshop: { href: '/workshop/workshop6.pdf', label: 'workshop6' },
};
