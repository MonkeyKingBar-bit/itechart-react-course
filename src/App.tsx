/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-use-before-define */
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Cards from './components/Card/Cards';

const App = () => (
  <div className="app-wrapper">
    <Header />
    <div className="app-content">
      <Cards
        title="Heading1"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil soluta, quae corrupti quo voluptatem eius sint sed
                    accusantium eveniet animi vero maiores dignissimos obcaecati
                    blanditiis dolorem quos esse sequi nostrum?"
      />
      <Cards
        title="Heading2"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil soluta, quae corrupti quo voluptatem eius sint sed
                    accusantium eveniet animi vero maiores dignissimos obcaecati
                    blanditiis dolorem quos esse sequi nostrum?"
      />
      <Cards
        title="Heading3"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil soluta, quae corrupti quo voluptatem eius sint sed
                    accusantium eveniet animi vero maiores dignissimos obcaecati
                    blanditiis dolorem quos esse sequi nostrum?"
      />
    </div>
  </div>
);

export default App;
