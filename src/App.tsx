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
// import { addCardActions } from "./store/slice/addCard";
import { cardsDataActions } from "./store/slice/cardsData";

const App = () => {
  const cardsData = useAppSelector((state) => state.cardsData.cards);
  const modalSelector = useAppSelector((state) => state.common.isModalActive);
  const tabSelector = useAppSelector((state) => state.tab.activeTab);
  const dispatch = useAppDispatch();

  // const state = [...initialData];
  // const [cardList, setCardList] = useState(state);

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
      dispatch(cardsDataActions.setCardsData(loadedTasks));
      // setCardList(loadedTasks);
    };
    fetchTasks(
      { url: "https://jsonplaceholder.typicode.com/posts/" },
      transformTasks
    );
  }, [fetchTasks, dispatch]);
  const cancelHandler = () => {
    dispatch(commonActions.isCanceled());
    dispatch(commonActions.setEditCardMode());
    dispatch(commonActions.setCancelBtn());
  };
  const exitHandler = () => {
    dispatch(commonActions.setIsCanceled());
    dispatch(commonActions.setEditCardMode());
  };
  let content = <p>Found no cards.</p>;
  if (error) content = <p className="error">{error}</p>;
  if (isLoading) content = <p>Loading...</p>;
  if (cardsData.length > 0) {
    content = (
      <div className="app-content">
        {tabSelector === 0 &&
          cardsData.map((data) => (
            <Cards
              key={data.id}
              id={data.id}
              title={data.title}
              text={data.text}
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
          <Header cancelHandler={cancelHandler} exitHandler={exitHandler} />
          <section className="container">
            <TemporaryDrawer />
            <CardTabs />
            {content}
          </section>
        </Route>
        <Route exact path="/cards/:cardId">
          <Header cancelHandler={cancelHandler} exitHandler={exitHandler} />
          <section className="container">
            <TemporaryDrawer />
            <CardTabs />
            {content}
            {cardsData[tabSelector] && (
              <CardDetail
                {...cardsData[tabSelector]}
                loading={isLoading}
                error={error}
              />
            )}
          </section>
        </Route>
      </Switch>
      {modalSelector && <Modal/>}
    </div>
  );
};
export default App;
