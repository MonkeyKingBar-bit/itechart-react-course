/* eslint-disable no-console */
import React, { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header/Header';
import Cards from './components/Card/Cards';
import initialData from './state/card-data';
import Modal from './components/Card/CardModal/Modal';

const App = () => {
  const [cardList, setCardList] = useState(initialData);
  const [modalActive, setModalActive] = useState(false);
  const [editCardMode, setEditCardMode] = useState(false);
  const [deleteCard, setDeleteCard] = useState(false);
  const addCardHandler = (enteredTitle: any, enteredContent: any) => {
    setCardList((prevCardList) => [
      ...prevCardList,
      { id: uuidv4(), title: enteredTitle, text: enteredContent },
    ]);
  };
  const deleteCardHandler = (id: string) => {
    setCardList((prevCardList) => [
      ...prevCardList.filter((elem) => elem.id !== id),
    ]);
  };
  return (
    <div className="app-wrapper">
      <Header
        setActive={() => setModalActive(true)}
        setActiveEdit={() => setEditCardMode(true)}
      />
      <div className="app-content">
        {cardList.map((data) => (
          <Cards
            key={data.id}
            id={data.id}
            title={data.title}
            text={data.text}
            activeEdit={editCardMode}
            deleteCard={deleteCard}
            setDeleteCard={() => setDeleteCard(true)}
            onDeleteCard={deleteCardHandler}
          />
        ))}
      </div>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        onAddCard={addCardHandler}
      />
    </div>
  );
};
export default App;
