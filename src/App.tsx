import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Cards from './components/Card/Cards';
import initialData from './state/CardData';

const App = () => (
  // const [initialData, setNewData] = useState('initialData');
  <div className="app-wrapper">
    <Header />
    <div className="app-content">
      {initialData.map((data) => (
        <Cards key={data.id} title={data.title} text={data.text} />
      ))}
    </div>
  </div>
);

export default App;
