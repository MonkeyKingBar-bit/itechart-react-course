/* eslint-disable no-debugger */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-use-before-define */
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Cards from './components/Card/Cards';

interface CardData {
  id: number;
  title: string;
  text: string;
}
const cardData: Array<CardData> = [
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

const App = () => (
  <div className="app-wrapper">
    <Header />
    <div className="app-content">
      {cardData.map((data) => (
        <Cards title={data.title} text={data.text} />
      ))}
      {/* key={data} */}
    </div>
  </div>
);
export default App;
