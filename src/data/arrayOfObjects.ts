import type { Lesson } from './types';

export const arrayOfObjects: Lesson = {
  id: 'array-of-objects',
  title: { en: 'Array of Objects', vi: 'Array of Objects' },
  category: { en: 'Array of Objects', vi: 'Array of Objects' },
  icon: 'list',
  summary: {
    en: 'Object arrays in a hierarchy, add/update/remove/sort/find operations, and File I/O (text + object serialization).',
    vi: 'Mảng object trong hierarchy, các thao tác add/update/remove/sort/find, và File I/O (text + object serialization).',
  },
  outcomes: [
    { en: 'Manage a list of objects via a superclass-typed reference array', vi: 'Quản lý danh sách object qua mảng reference kiểu superclass' },
    { en: 'Implement add/display/find/update/remove/sort', vi: 'Triển khai add/display/find/update/remove/sort' },
    { en: 'Read/write text files and objects (serialization)', vi: 'Đọc/ghi file text và object (serialization)' },
  ],
  sections: [
    {
      id: 'array',
      heading: { en: 'Array of objects', vi: 'Mảng object' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'The technique of accessing objects of different dynamic types within the same hierarchy is to use an array of pointers with a static type. The code dereferences each pointer at runtime based on the dynamic type.',
            vi: 'Kỹ thuật truy cập object khác dynamic type trong cùng hierarchy là dùng mảng pointer kiểu static type. Code dereference mỗi pointer lúc runtime dựa trên dynamic type.',
          },
        },
        {
          type: 'code',
          lang: 'java',
          code: 'public class ItemList {\n    Item[] list;     // array storing every item\n    int numOfItem;\n    final int MAX = 100;\n    public ItemList() {\n        list = new Item[MAX];\n        numOfItem = 0;\n    }\n}',
        },
        { type: 'img', src: '/images/array3.png', alt: { en: 'Array of objects', vi: 'Array of objects' } },
        {
          type: 'p',
          text: {
            en: 'Basic operations: print all, add at index, remove at index, find by index/value, update at index.',
            vi: 'Các thao tác cơ bản: in tất cả, thêm tại index, xoá tại index, tìm theo index/giá trị, cập nhật tại index.',
          },
        },
      ],
    },
    {
      id: 'operations',
      heading: { en: 'Basic operations', vi: 'Các thao tác cơ bản' },
      blocks: [
        {
          type: 'code',
          lang: 'java',
          code: 'public boolean addItem(Item item) {\n    if (item == null || numOfItem >= MAX) return false;\n    list[numOfItem] = item;\n    numOfItem++;\n    return true;\n}\n\npublic void displayAll() {\n    if (numOfItem == 0) { System.out.println("empty"); return; }\n    for (int i = 0; i < numOfItem; i++)\n        System.out.println(list[i]);\n}\n\npublic Item findItem(String creator) {\n    for (int i = 0; i < numOfItem; i++)\n        if (list[i].getCreator().equals(creator))\n            return list[i];\n    return null;\n}\n\npublic boolean removeItem(int index) {\n    if (index < 0 || index >= numOfItem) return false;\n    for (int j = index; j < numOfItem; j++)\n        list[j] = list[j + 1];\n    numOfItem--;\n    return true;\n}',
        },
        { type: 'img', src: '/images/array4.png', alt: { en: 'Add item', vi: 'Add item' } },
        { type: 'img', src: '/images/array5.png', alt: { en: 'Operations', vi: 'Operations' } },
        {
          type: 'p',
          text: {
            en: 'sortItems uses bubble sort based on getValue(). displayItemsByType uses instanceof to filter by subclass.',
            vi: 'sortItems dùng bubble sort dựa trên getValue(). displayItemsByType dùng instanceof để lọc theo subclass.',
          },
        },
      ],
    },
    {
      id: 'file-io',
      heading: { en: 'I/O Stream & File', vi: 'I/O Stream & File' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'A file is a group of related data stored on a secondary disk. Anything that holds data is called a file: directory, device (keyboard, monitor, NIC, disk). Data must be persistent.',
            vi: 'File là nhóm dữ liệu liên quan lưu trên đĩa ngoài. Thứ chứa dữ liệu đều gọi file: directory, device (keyboard, monitor, NIC, disk). Dữ liệu phải persistent.',
          },
        },
        {
          type: 'callout',
          variant: 'info',
          title: { en: 'Text format', vi: 'Text format' },
          text: {
            en: 'The data unit is a character/digit (ASCII). A number must be converted to a string before writing. Can be viewed/edited with an editor.',
            vi: 'Đơn vị dữ liệu là ký tự/chữ số (ASCII). Số phải chuyển sang chuỗi trước khi ghi. Có thể xem/sửa bằng editor.',
          },
        },
        {
          type: 'callout',
          variant: 'info',
          title: { en: 'Binary format', vi: 'Binary format' },
          text: {
            en: 'Data is the memory bitmap of a variable. Efficient because no type conversion is needed, only accessible through a matching program.',
            vi: 'Dữ liệu là bitmap bộ nhớ của biến. Hiệu quả vì không cần chuyển kiểu, chỉ truy cập được qua chương trình phù hợp.',
          },
        },
        {
          type: 'p',
          text: {
            en: 'File access steps: (1) open the file, (2) read/write, (3) close the file.',
            vi: 'Bước truy cập file: (1) mở file, (2) đọc/ghi, (3) đóng file.',
          },
        },
        { type: 'img', src: '/images/IO.01.gif', alt: { en: 'Input stream', vi: 'Input stream' } },
        { type: 'img', src: '/images/IO.02.gif', alt: { en: 'Output stream', vi: 'Output stream' } },
      ],
    },
    {
      id: 'serialization',
      heading: { en: 'Object file & Serialization', vi: 'Object file & Serialization' },
      blocks: [
        {
          type: 'callout',
          variant: 'info',
          title: { en: 'Serialization', vi: 'Serialization' },
          text: {
            en: 'The process of converting the binary data bytes of an object into a stream.',
            vi: 'Quá trình chuyển byte dữ liệu binary của object sang stream.',
          },
        },
        {
          type: 'callout',
          variant: 'info',
          title: { en: 'De-serialization', vi: 'De-serialization' },
          text: {
            en: 'The process of converting binary bytes in a stream into fields of an object.',
            vi: 'Quá trình chuyển byte binary trong stream sang field của object.',
          },
        },
        {
          type: 'p',
          text: {
            en: 'A class must implement java.io.Serializable (an empty interface). The compiler automatically adds serialize/deserialize code. static and transient fields are not serialized.',
            vi: 'Class phải implement java.io.Serializable (interface rỗng). Compiler tự thêm code serialize/deserialize. static và transient field không được serialize.',
          },
        },
        { type: 'img', src: '/images/IO.16.gif', alt: { en: 'Object stream model', vi: 'Object stream model' } },
        {
          type: 'callout',
          variant: 'tip',
          text: {
            en: 'Each time an object is written, the package/class information is also written. It is better to load all objects into memory and use override mode when writing.',
            vi: 'Mỗi lần ghi object, thông tin package/class cũng được ghi. Nên load toàn bộ object vào memory và dùng override mode khi ghi.',
          },
        },
      ],
    },
  ],
  resources: [
    { href: '/resource/ArrayOfObjects.pdf', label: 'Array of Objects.pdf' },
    { href: '/resource/File IO.pdf', label: 'File I/O.pdf' },
  ],
};
