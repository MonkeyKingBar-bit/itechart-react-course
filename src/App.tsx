/* eslint-disable no-unused-vars */
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
  const [editCard, setEditCard] = useState(false);

  const addCardHandler = (enteredTitle: string, enteredContent: string) => {
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
  // const editCardHandler = (id: string) => {
  //   setEditCard(false)
  // };
  const saveCardHandler = (
    id: string,
    enteredTitle: string,
    enteredContent: string,
  ) => {
    setCardList((prevCardList) => [
      ...prevCardList.filter((elem) => elem.id !== id),
      { id: uuidv4(), title: enteredTitle, text: enteredContent },
    ]);
    setEditCard(false);
    setEditCardMode(false);
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
            onDeleteCard={deleteCardHandler}
            editCard={editCard}
            setEditCard={() => setEditCard(true)}
            // editContent={editContent}
            // setEditContent={() => setEditContent(true)}
            // onEditCard={editCardHandler}
            onSaveCard={saveCardHandler}
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
