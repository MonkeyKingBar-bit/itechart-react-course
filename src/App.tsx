/* eslint-disable no-console */
import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header/Header";
import Cards from "./components/Card/Cards";
import initialData from "./state/card-data";
import Modal from "./components/Card/CardModal/Modal";

const App = () => {
  const state = [...initialData];
  const [cardList, setCardList] = useState(state);
  const [modalActive, setModalActive] = useState(false);
  const [editCardMode, setEditCardMode] = useState(false);
  const [editCard, setEditCard] = useState(false);
  const [activeCancelBtn, setActiveCancelBtn] = useState(false);
  const [saveCard, setSaveCard] = useState(false);
  const [isCanceled, setIsCanceled] = useState(false);

    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedData = data.map((cardsData: any) => {
          return {
            id: cardsData.id,
            title: cardsData.title,
            text: cardsData.body,
          };
        });
        setCardList(transformedData);
      });

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
  const editCardHandler = (id: string) => {
    initialData.slice(+id, 1);
  };
  const saveCardHandler = (
    id: string,
    enteredTitle: string,
    enteredContent: string
  ) => {
    setCardList(
      state.map((obj) => {
        if (obj.id === id) {
          return { ...obj, title: enteredTitle, text: enteredContent };
        }
        return obj;
      })
    );
    setEditCard(false);
    setSaveCard(false);
  };
  const cancelHandler = () => {
    setIsCanceled(true);
    setEditCardMode(false);
    setActiveCancelBtn(false);
  };
  const exitHandler = () => {
    setIsCanceled(false);
    setEditCardMode(false);
  };

  return (
    <div className="app-wrapper">
      <Header
        setActive={() => setModalActive(true)}
        activeEdit={editCardMode}
        setActiveEdit={() => setEditCardMode(true)}
        activeCancel={activeCancelBtn}
        cancelHandler={cancelHandler}
        exitHandler={exitHandler}
      />
      <div className="app-content">
        {cardList.map((data) => (
          <Cards
            isCanceled={isCanceled}
            key={data.id}
            id={data.id}
            title={data.title}
            text={data.text}
            activeEdit={editCardMode}
            onDeleteCard={deleteCardHandler}
            editCard={editCard}
            setEditCard={() => setEditCard(true)}
            saveCard={saveCard}
            setSaveCard={setSaveCard}
            onSaveCard={saveCardHandler}
            onEditCard={editCardHandler}
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
