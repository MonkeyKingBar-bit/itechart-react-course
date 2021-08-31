import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Cards from './components/Card/Cards';
import initialData from './state/CardData';
import Modal from './components/Card/CardModal/Modal';

const App = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="app-wrapper">
      <Header setActive={() => setModalActive(true)} />
      <div className="app-content">
        {initialData.map((data) => (
          <Cards key={data.id} title={data.title} text={data.text} />
        ))}
      </div>
      {/* <AddCardModal active={modalActive} setActive={setModalActive} /> */}
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
};
export default App;
