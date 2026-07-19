import type { Lesson } from './types';

export const collection: Lesson = {
  id: 'collection',
  title: { en: 'Collections', vi: 'Collections' },
  category: { en: 'Collections in Java', vi: 'Collections in Java' },
  icon: 'layers',
  summary: {
    en: 'ADT, Java Collections Framework, List/ArrayList, Set/TreeSet, Map/HashMap and supporting classes.',
    vi: 'ADT, Java Collections Framework, List/ArrayList, Set/TreeSet, Map/HashMap và các supporting class.',
  },
  outcomes: [
    { en: 'Understand Abstract Data Type and the Collections Framework', vi: 'Hiểu Abstract Data Type và Collections Framework' },
    { en: 'Use ArrayList for lists that allow duplicates', vi: 'Dùng ArrayList cho danh sách cho phép trùng' },
    { en: 'Use TreeSet for distinct + sorted sets', vi: 'Dùng TreeSet cho tập distinct + sorted' },
    { en: 'Use HashMap for key-value pairs', vi: 'Dùng HashMap cho cặp key-value' },
    { en: 'Use Collections and Arrays for helper operations', vi: 'Dùng Collections và Arrays cho thao tác phụ' },
  ],
  sections: [
    {
      id: 'overview',
      heading: { en: 'Abstract Data Types', vi: 'Abstract Data Types' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'An ADT is a mathematical model for a data type, ignoring storage structure. An ADT describes a general concept, defined by behavior from the user point of view. Java defines ADTs through interfaces.',
            vi: 'ADT là mô hình toán học cho kiểu dữ liệu, bỏ qua cấu trúc lưu trữ. ADT mô tả khái niệm chung, định nghĩa qua hành vi từ góc nhìn người dùng. Java định nghĩa ADT qua interface.',
          },
        },
        {
          type: 'p',
          text: {
            en: 'A group of elements can be viewed in several ways: list (allows duplicates), set (distinct), map (<Key, Value>).',
            vi: 'Một nhóm phần tử có thể xem theo các cách: list (cho phép trùng), set (distinct), map (<Key, Value>).',
          },
        },
        {
          type: 'p',
          text: {
            en: 'Common operations: add, find, remove, traverse, sort. An ADT (mathematical model, user view) contrasts with a data structure (concrete implementation, implementer view).',
            vi: 'Thao tác phổ biến: thêm, tìm, xoá, traverse, sort. ADT (mô hình toán, user view) đối lập với data structure (triển khai cụ thể, implementer view).',
          },
        },
      ],
    },
    {
      id: 'framework',
      heading: { en: 'Java Collections Framework', vi: 'Java Collections Framework' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'A collection is an object that represents a group of objects. The collections framework is a unified architecture for representing and manipulating collections independent of implementation details.',
            vi: 'Collection là object đại diện nhóm object. Collections framework là kiến trúc thống nhất để biểu diễn và thao tác collection độc lập với chi tiết triển khai.',
          },
        },
        {
          type: 'ul',
          items: [
            { en: 'Reduces programming effort — provides data structures and algorithms', vi: 'Giảm công sức lập trình — cung cấp data structure và algorithm' },
            { en: 'Increases performance — high-performance implementations, interchangeable', vi: 'Tăng performance — triển khai hiệu năng cao, có thể thay thế lẫn nhau' },
            { en: 'Interoperability between APIs', vi: 'Interoperability giữa các API' },
            { en: 'Reduces effort to learn/design APIs', vi: 'Giảm effort học/thiết kế API' },
            { en: 'Fosters software reuse', vi: 'Thúc đẩy tái sử dụng phần mềm' },
          ],
        },
        { type: 'img', src: '/images/7.01.gif', alt: { en: 'Framework structure', vi: 'Framework structure' } },
      ],
    },
    {
      id: 'list',
      heading: { en: 'List & ArrayList', vi: 'List & ArrayList' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'ArrayList stores references in a one-dimensional array, allows duplicate elements and mixed types (when not using generics).',
            vi: 'ArrayList lưu reference trong mảng 1 chiều, cho phép phần tử trùng và hỗn hợp kiểu (khi không khai báo generic).',
          },
        },
        { type: 'img', src: '/images/7.02.gif', alt: { en: 'ArrayList', vi: 'ArrayList' } },
        {
          type: 'p',
          text: {
            en: 'When elements are not of the same class, references behave as Object. You must cast explicitly to call specific methods (e.g. area()). Use generics <Rectangle> so the compiler recognizes the type and removes the cast.',
            vi: 'Khi phần tử không cùng class, reference hành xử như Object. Phải cast tường minh để gọi method riêng (vd area()). Dùng generic <Rectangle> để compiler nhận biết kiểu và loại bỏ cast.',
          },
        },
        { type: 'img', src: '/images/7.04.gif', alt: { en: 'Generic ArrayList', vi: 'Generic ArrayList' } },
        {
          type: 'callout',
          variant: 'tip',
          text: {
            en: 'Specifying the element type helps catch bugs at compile time and removes the need to cast.',
            vi: 'Chỉ định kiểu phần tử giúp phát hiện bug lúc compile và không cần cast.',
          },
        },
      ],
    },
    {
      id: 'set',
      heading: { en: 'Set & TreeSet', vi: 'Set & TreeSet' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'A Set is a group of distinct objects, no duplicates. A tree is a structure of nodes and edges, describing father-child relationships.',
            vi: 'Set là nhóm object distinct, không cho trùng. Tree là cấu trúc gồm node và edge, mô tả quan hệ father-child.',
          },
        },
        {
          type: 'p',
          text: {
            en: 'TreeSet implements a self-balancing tree, guaranteeing log(n) for add/remove/contains. Elements must implement Comparable (compareTo).',
            vi: 'TreeSet triển khai cây tự cân bằng, đảm bảo log(n) cho add/remove/contains. Yêu cầu phần tử implement Comparable (compareTo).',
          },
        },
        { type: 'img', src: '/images/7.14.gif', alt: { en: 'TreeSet', vi: 'TreeSet' } },
        {
          type: 'callout',
          variant: 'rule',
          text: {
            en: 'Two elements equal by compareTo are considered equal by TreeSet.',
            vi: 'Hai phần tử equal theo compareTo được TreeSet xem là bằng nhau.',
          },
        },
      ],
    },
    {
      id: 'map',
      heading: { en: 'Map & HashMap', vi: 'Map & HashMap' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'A Map does not implement Collection. A Map combines two collections: keys (set K) and values (collection V). Each key maps to exactly one value. Key uniqueness is checked via equals().',
            vi: 'Map không implement Collection. Map kết hợp hai collection: keys (set K) và values (collection V). Mỗi key ánh xạ đúng một value. Kiểm tra key duy nhất qua equals().',
          },
        },
        {
          type: 'p',
          text: {
            en: 'A hash-table is a subset collection, position determined by a hash function h. Modulo (%) is commonly used in hash functions.',
            vi: 'Hash-table là tập subset, vị trí xác định bởi hash function h. Modulo (%) thường dùng trong hash function.',
          },
        },
        { type: 'img', src: '/images/7.17.gif', alt: { en: 'Hash function', vi: 'Hash function' } },
        {
          type: 'p',
          text: {
            en: 'HashMap implements Map with a hash-table. Constant-time performance for get/put if the hash is well distributed. Order is not guaranteed.',
            vi: 'HashMap triển khai Map bằng hash-table. Hiệu năng constant-time cho get/put nếu hash phân tán tốt. Không đảm bảo thứ tự.',
          },
        },
        {
          type: 'callout',
          variant: 'tip',
          text: {
            en: 'HashMap is best for searching because finding within a small subset is more efficient than finding in a large set.',
            vi: 'HashMap tốt nhất cho tìm kiếm vì tìm trong subset nhỏ hiệu quả hơn tìm trong tập lớn.',
          },
        },
      ],
    },
    {
      id: 'support',
      heading: { en: 'Supporting classes', vi: 'Supporting classes' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'java.util.Collections and java.util.Arrays contain many static methods for collection/array operations: sort, shuffle, copy, search, min, max, ...',
            vi: 'java.util.Collections và java.util.Arrays chứa nhiều method static cho thao tác collection/array: sort, shuffle, copy, search, min, max, ...',
          },
        },
        {
          type: 'callout',
          variant: 'info',
          title: { en: 'Choosing a class', vi: 'Gợi ý chọn class' },
          text: {
            en: 'Duplicates → ArrayList. Distinct + sorted + high performance → TreeSet. Unique keys + very high performance → HashMap.',
            vi: 'Phần tử trùng → ArrayList. Distinct + sorted + performance cao → TreeSet. Key duy nhất + performance rất cao → HashMap.',
          },
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
