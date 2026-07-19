import type { Lesson } from './types';

export const arrayOfObjects: Lesson = {
  id: 'array-of-objects',
  title: 'Array of Objects',
  category: 'Array of Objects',
  icon: 'list',
  summary:
    'Mảng object trong hierarchy, các thao tác add/update/remove/sort/find, và File I/O (text + object serialization).',
  outcomes: [
    'Quản lý danh sách object qua mảng reference kiểu superclass',
    'Triển khai add/display/find/update/remove/sort',
    'Đọc/ghi file text và object (serialization)',
  ],
  sections: [
    {
      id: 'array',
      heading: 'Mảng object',
      blocks: [
        {
          type: 'p',
          text: 'Kỹ thuật truy cập object khác dynamic type trong cùng hierarchy là dùng mảng pointer kiểu static type. Code dereference mỗi pointer lúc runtime dựa trên dynamic type.',
        },
        {
          type: 'code',
          lang: 'java',
          code: 'public class ItemList {\n    Item[] list;     // mảng lưu mọi item\n    int numOfItem;\n    final int MAX = 100;\n    public ItemList() {\n        list = new Item[MAX];\n        numOfItem = 0;\n    }\n}',
        },
        { type: 'img', src: '/images/array3.png', alt: 'Array of objects' },
        {
          type: 'p',
          text: 'Các thao tác cơ bản: in tất cả, thêm tại index, xoá tại index, tìm theo index/giá trị, cập nhật tại index.',
        },
      ],
    },
    {
      id: 'operations',
      heading: 'Các thao tác cơ bản',
      blocks: [
        {
          type: 'code',
          lang: 'java',
          code: 'public boolean addItem(Item item) {\n    if (item == null || numOfItem >= MAX) return false;\n    list[numOfItem] = item;\n    numOfItem++;\n    return true;\n}\n\npublic void displayAll() {\n    if (numOfItem == 0) { System.out.println("empty"); return; }\n    for (int i = 0; i < numOfItem; i++)\n        System.out.println(list[i]);\n}\n\npublic Item findItem(String creator) {\n    for (int i = 0; i < numOfItem; i++)\n        if (list[i].getCreator().equals(creator))\n            return list[i];\n    return null;\n}\n\npublic boolean removeItem(int index) {\n    if (index < 0 || index >= numOfItem) return false;\n    for (int j = index; j < numOfItem; j++)\n        list[j] = list[j + 1];\n    numOfItem--;\n    return true;\n}',
        },
        { type: 'img', src: '/images/array4.png', alt: 'Add item' },
        { type: 'img', src: '/images/array5.png', alt: 'Operations' },
        {
          type: 'p',
          text: 'sortItems dùng bubble sort dựa trên getValue(). displayItemsByType dùng instanceof để lọc theo subclass.',
        },
      ],
    },
    {
      id: 'file-io',
      heading: 'I/O Stream & File',
      blocks: [
        {
          type: 'p',
          text: 'File là nhóm dữ liệu liên quan lưu trên đĩa ngoài. Thứ chứa dữ liệu đều gọi file: directory, device (keyboard, monitor, NIC, disk). Dữ liệu phải persistent.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Text format',
          text: 'Đơn vị dữ liệu là ký tự/chữ số (ASCII). Số phải chuyển sang chuỗi trước khi ghi. Có thể xem/sửa bằng editor.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Binary format',
          text: 'Dữ liệu là bitmap bộ nhớ của biến. Hiệu quả vì không cần chuyển kiểu, chỉ truy cập được qua chương trình phù hợp.',
        },
        {
          type: 'p',
          text: 'Bước truy cập file: (1) mở file, (2) đọc/ghi, (3) đóng file.',
        },
        { type: 'img', src: '/images/IO.01.gif', alt: 'Input stream' },
        { type: 'img', src: '/images/IO.02.gif', alt: 'Output stream' },
      ],
    },
    {
      id: 'serialization',
      heading: 'Object file & Serialization',
      blocks: [
        {
          type: 'callout',
          variant: 'info',
          title: 'Serialization',
          text: 'Quá trình chuyển byte dữ liệu binary của object sang stream.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'De-serialization',
          text: 'Quá trình chuyển byte binary trong stream sang field của object.',
        },
        {
          type: 'p',
          text: 'Class phải implement java.io.Serializable (interface rỗng). Compiler tự thêm code serialize/deserialize. static và transient field không được serialize.',
        },
        { type: 'img', src: '/images/IO.16.gif', alt: 'Object stream model' },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Mỗi lần ghi object, thông tin package/class cũng được ghi. Nên load toàn bộ object vào memory và dùng override mode khi ghi.',
        },
      ],
    },
  ],
  resources: [
    { href: '/resource/ArrayOfObjects.pdf', label: 'Array of Objects.pdf' },
    { href: '/resource/File IO.pdf', label: 'File I/O.pdf' },
  ],
};
