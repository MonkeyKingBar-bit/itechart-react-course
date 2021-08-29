interface CARD_DATA {
   id: number;
   title: string;
   text: string;
 }
const initialData: Array<CARD_DATA> = [
  {
    id: 1,
    title: 'Heading1',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, harum eligendi accusantium tempora provident iste nam eius id sit iusto accusamus cum nostrum, consequatur eaque dicta doloribus hic ex voluptate!',
  },
  {
    id: 2,
    title: 'Heading2',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, harum eligendi accusantium tempora provident iste nam eius id sit iusto accusamus cum nostrum, consequatur eaque dicta doloribus hic ex voluptate!',
  },
  {
    id: 3,
    title: 'Heading3',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, harum eligendi accusantium tempora provident iste nam eius id sit iusto accusamus cum nostrum, consequatur eaque dicta doloribus hic ex voluptate!',
  },
];

export default initialData;
