import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header/Header";
import Cards from "./components/Card/Cards";
import initialData from "./state/card-data";
import Modal from "./components/Card/CardModal/Modal";
import useHttp from "./hooks/use-http";
import MainPage from "./components/MainPage/MainPage";
import TemporaryDrawer from "./components/Card/Sidebar/Sidebar";
import CardTabs from "./components/Card/Tabs/Tabs";
import CardDetail from "./components/Card/CardsDetail/CardsDetail";

const App = () => {
  const state = [...initialData];
  const [cardList, setCardList] = useState(state);
  const [modalActive, setModalActive] = useState(false);
  const [editCardMode, setEditCardMode] = useState(false);
  const [editCard, setEditCard] = useState(false);
  const [activeCancelBtn, setActiveCancelBtn] = useState(false);
  const [saveCard, setSaveCard] = useState(false);
  const [isCanceled, setIsCanceled] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  let history = useHistory();

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();
  useEffect(() => {
    const transformTasks = (tasksObj: any) => {
      const loadedTasks = [];
      for (const taskKey in tasksObj) {
        loadedTasks.push({
          id: taskKey,
          title: tasksObj[taskKey].title,
          text: tasksObj[taskKey].body,
        });
      }
      setCardList(loadedTasks);
    };
    fetchTasks(
      { url: "https://jsonplaceholder.typicode.com/posts/" },
      transformTasks
    );
  }, [fetchTasks]);

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
  // const tabsCard = (id: )
  const saveCardHandler = (
    id: string,
    enteredTitle: string,
    enteredContent: string
  ) => {
    setCardList(
      cardList.map((obj) => {
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

  let content = <p>Found no cards.</p>;

  if (error) {
    content = <p className="error">{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (cardList.length > 0) {
    content = (
      <div className="app-content">
        <CardTabs
          cardList={cardList}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        {/* {cardList.map((data) => (
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
            loading={isLoading}
            error={error}
          />
        ))} */}
      </div>
    );
  }
  return (
    <div className="app-wrapper">
      <Switch>
        <Route path="/" exact>
          <Redirect to="/main" />
        </Route>
        <Route path="/main" exact>
          <MainPage />
        </Route>
        <Route path="/cards" exact>
          {/* <Header
            setActive={() => setModalActive(true)}
            activeEdit={editCardMode}
            setActiveEdit={() => setEditCardMode(true)}
            activeCancel={activeCancelBtn}
            cancelHandler={cancelHandler}
            exitHandler={exitHandler}
          /> */}
          {/* <CardTabs items={cardList} />*/}
          {/* <section className="container"> */}
          {/* <CardDetail /> */}
          {/* <TemporaryDrawer /> */}
          {content}
          {/* <CardDetails items={cardList} />*/}
          {/* </section> */}
        </Route>
        <Route exact path="/cards/:cardId">
          <Header
            setActive={() => setModalActive(true)}
            activeEdit={editCardMode}
            setActiveEdit={() => setEditCardMode(true)}
            activeCancel={activeCancelBtn}
            cancelHandler={cancelHandler}
            exitHandler={exitHandler}
          />
          {/* <CardTabs items={cardList} />*/}
          <section className="container">
            <TemporaryDrawer />
            {cardList[activeTab] && (
              <CardDetail
                {...cardList[activeTab]}
                isCanceled={isCanceled}
                activeEdit={editCardMode}
                onDeleteCard={deleteCardHandler}
                editCard={editCard}
                setEditCard={() => setEditCard(true)}
                saveCard={saveCard}
                setSaveCard={setSaveCard}
                onSaveCard={saveCardHandler}
                loading={isLoading}
                error={error}
              />
            )}
            <CardTabs
              cardList={cardList}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            {/* {content} */}
            {/* <CardDetails items={cardList} />*/}
          </section>
          {/* <CardDetail /> */}
          {/* <CardDetail
            isCanceled={isCanceled}
            activeEdit={editCardMode}
            onDeleteCard={deleteCardHandler}
            editCard={editCard}
            setEditCard={() => setEditCard(true)}
            saveCard={saveCard}
            setSaveCard={setSaveCard}
            onSaveCard={saveCardHandler}
            loading={isLoading}
            error={error}
          /> */}
        </Route>
      </Switch>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        onAddCard={addCardHandler}
      />
    </div>
  );
};
export default App;
