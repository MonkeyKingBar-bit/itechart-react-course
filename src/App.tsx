import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Cards from './components/Card/Cards';
import initialData from './state/CardData';
import Modal from './components/Card/CardModal/Modal';

const App = () => {
  const [modalActive, setModalActive] = useState(false);
  const [cardList, setCardList] = useState(initialData);
  const addCardHandler = (enteredTitle: any, enteredContent: any) => {
    setCardList((prevCardList) => [
      ...prevCardList,
      { id: Math.random().toString(), title: enteredTitle, text: enteredContent },
    ]);
  };
  return (
    <div className="app-wrapper">
      <Header setActive={() => setModalActive(true)} />
      <div className="app-content">
        {cardList.map((data) => (
          <Cards key={data.id} title={data.title} text={data.text} />
        ))}
      </div>
      <Modal active={modalActive} setActive={setModalActive} onAddCard={addCardHandler} />
    </div>
  );
};
export default App;
