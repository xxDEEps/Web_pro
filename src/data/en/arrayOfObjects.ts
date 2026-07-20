import type { Lesson } from '../types';

export const arrayOfObjectsEn: Lesson = {
  id: 'array-of-objects',
  title: 'Array of Objects',
  category: 'Array of Objects',
  icon: 'list',
  summary:
    'Arrays of objects in a hierarchy, add/update/remove/sort/find operations, and File I/O (text + object serialization).',
  outcomes: [
    'Manage a list of objects via a superclass-typed reference array',
    'Implement add/display/find/update/remove/sort',
    'Read/write text files and objects (serialization)',
  ],
  sections: [
    {
      id: 'array',
      heading: 'Array of Objects',
      blocks: [
        {
          type: 'p',
          text: 'The technique for accessing objects of different dynamic types within the same hierarchy is to use an array of pointers of the static type. The code dereferences each pointer at runtime based on the dynamic type.',
        },
        {
          type: 'code',
          lang: 'java',
          code: 'public class ItemList {\n    Item[] list;     // array storing all items\n    int numOfItem;\n    final int MAX = 100;\n    public ItemList() {\n        list = new Item[MAX];\n        numOfItem = 0;\n    }\n}',
        },
        { type: 'img', src: '/images/array3.png', alt: 'Array of objects' },
        {
          type: 'p',
          text: 'Basic operations: print all, add at index, remove at index, find by index/value, update at index.',
        },
      ],
    },
    {
      id: 'operations',
      heading: 'Basic Operations',
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
          text: 'sortItems uses bubble sort based on getValue(). displayItemsByType uses instanceof to filter by subclass.',
        },
      ],
    },
    {
      id: 'file-io',
      heading: 'I/O Stream & File',
      blocks: [
        {
          type: 'p',
          text: 'A file is a group of related data stored on secondary storage. Anything that holds data is called a file: a directory, a device (keyboard, monitor, NIC, disk). Data must be persistent.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Text Format',
          text: 'The unit of data is a character/digit (ASCII). Numbers must be converted to strings before writing. Can be viewed/edited with a text editor.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Binary Format',
          text: 'Data is the memory bitmap of a variable. Efficient because no type conversion is needed, but only accessible through a suitable program.',
        },
        {
          type: 'p',
          text: 'Steps to access a file: (1) open the file, (2) read/write, (3) close the file.',
        },
        { type: 'img', src: '/images/IO.01.gif', alt: 'Input stream' },
        { type: 'img', src: '/images/IO.02.gif', alt: 'Output stream' },
      ],
    },
    {
      id: 'serialization',
      heading: 'Object File & Serialization',
      blocks: [
        {
          type: 'callout',
          variant: 'info',
          title: 'Serialization',
          text: 'The process of converting the binary data bytes of an object into a stream.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'De-serialization',
          text: 'The process of converting binary bytes in a stream into the fields of an object.',
        },
        {
          type: 'p',
          text: 'A class must implement java.io.Serializable (an empty interface). The compiler adds serialization/deserialization code automatically. static and transient fields are not serialized.',
        },
        { type: 'img', src: '/images/IO.16.gif', alt: 'Object stream model' },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Each time an object is written, the package/class information is also written. It is best to load all objects into memory and use override mode when writing.',
        },
      ],
    },
  ],
  resources: [
    { href: '/resource/ArrayOfObjects.pdf', label: 'Array of Objects.pdf' },
    { href: '/resource/File IO.pdf', label: 'File I/O.pdf' },
  ],
};
