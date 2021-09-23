import { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import useHttp from "./hooks/use-http";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { fetchCardData } from "./store/slice/thunk";
import { cardsDataActions } from "./store/slice/cardsData";

import Header from "./components/Header/Header";
import Cards from "./components/Card/Cards";
import Modal from "./components/Card/CardModal/Modal";
import MainPage from "./components/MainPage/MainPage";
import TemporaryDrawer from "./components/Card/Sidebar/Sidebar";
import CardTabs from "./components/Card/Tabs/Tabs";
import CardDetail from "./components/Card/CardsDetail/CardsDetail";

import "./App.css";

const App = () => {
  const dispatch = useAppDispatch();
  const cardsData = useAppSelector((state) => state.cardsData.cards);
  const modalSelector = useAppSelector((state) => state.common.isModalActive);
  const tabSelector = useAppSelector((state) => state.tab.activeTab);
  // const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    fetchCardData(cardsData);
  }, [cardsData]);

  // useEffect(() => {
  //   const transformTasks = (tasksObj: any) => {
  //     const loadedTasks = [];
  //     for (const taskKey in tasksObj) {
  //       loadedTasks.push({
  //         id: taskKey,
  //         title: tasksObj[taskKey].title,
  //         text: tasksObj[taskKey].body,
  //       });
  //     }
  //     dispatch(cardsDataActions.setCardsData(loadedTasks));
  //   };
  //   fetchTasks(
  //     { url: "https://jsonplaceholder.typicode.com/posts/" },
  //     transformTasks
  //   );
  // }, [fetchTasks, dispatch]);

  let content = <p>Found no cards.</p>;

  // if (cardsData.loading) content = <p>Loading...</p>;
  // if (cardsData.error) content = <p className="error">{cardData.error}</p>;
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
              // loading={isLoading}
              // error={error}
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
          <Header />
          <section className="container">
            <TemporaryDrawer />
            <CardTabs />
            {content}
          </section>
        </Route>
        <Route exact path="/cards/:cardId">
          <Header />
          <section className="container">
            <TemporaryDrawer />
            <CardTabs />
            {content}
            {cardsData[tabSelector] && (
              <CardDetail
                {...cardsData[tabSelector]}
                // loading={isLoading}
                // error={error}
              />
            )}
          </section>
        </Route>
      </Switch>
      {modalSelector && <Modal />}
    </div>
  );
};
export default App;
