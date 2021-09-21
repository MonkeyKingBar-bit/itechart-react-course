import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";

import Header from "./components/Header/Header";
import Cards from "./components/Card/Cards";
import initialData from "./state/card-data";
import Modal from "./components/Card/CardModal/Modal";
import useHttp from "./hooks/use-http";
import MainPage from "./components/MainPage/MainPage";
import TemporaryDrawer from "./components/Card/Sidebar/Sidebar";
import CardTabs from "./components/Card/Tabs/Tabs";
import CardDetail from "./components/Card/CardsDetail/CardsDetail";
import { commonActions } from "./store/slice/common";

const App = () => {
  const modalSelector = useAppSelector((state) => state.common.isModalActive);
  const dispatch = useAppDispatch();

  const state = [...initialData];
  const [cardList, setCardList] = useState(state);

  // const [editCardMode, setEditCardMode] = useState(false);
  const [editCard, setEditCard] = useState(false);
  const [activeCancelBtn, setActiveCancelBtn] = useState(false);
  const [saveCard, setSaveCard] = useState(false);
  const [isCanceled, setIsCanceled] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

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
    dispatch(commonActions.setEditCardMode())
    // setEditCardMode(false);
    setActiveCancelBtn(false);
  };
  const exitHandler = () => {
    setIsCanceled(false);
    dispatch(commonActions.setEditCardMode())
    // setEditCardMode(false);
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
        {activeTab === 0 &&
          cardList.map((data) => (
            <Cards
              isCanceled={isCanceled}
              key={data.id}
              id={data.id}
              title={data.title}
              text={data.text}
              onDeleteCard={deleteCardHandler}
              editCard={editCard}
              setEditCard={() => setEditCard(true)}
              saveCard={saveCard}
              setSaveCard={setSaveCard}
              onSaveCard={saveCardHandler}
              loading={isLoading}
              error={error}
            />
          ))}
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
          <Header
            activeCancel={activeCancelBtn}
            cancelHandler={cancelHandler}
            exitHandler={exitHandler}
          />
          <section className="container">
            <TemporaryDrawer />
            <CardTabs
              cardList={cardList}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            {content}
          </section>
        </Route>
        <Route exact path="/cards/:cardId">
          <Header
            activeCancel={activeCancelBtn}
            cancelHandler={cancelHandler}
            exitHandler={exitHandler}
          />
          <section className="container">
            <TemporaryDrawer />
            <CardTabs
              cardList={cardList}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            {content}
            {cardList[activeTab] && (
              <CardDetail
                {...cardList[activeTab]}
                isCanceled={isCanceled}
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
          </section>
        </Route>
      </Switch>
      {modalSelector && <Modal onAddCard={addCardHandler} />}
    </div>
  );
};
export default App;
