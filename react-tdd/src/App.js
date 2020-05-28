import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Header';
import ImageCard from './ImageCard';
import HeadingCard from './HeadingCard';
import DescriptionCard from './DescriptionCard';

import lifecycle from './images/Commercial_Lifecycle-Filter.png'
import synergies from './images/Synergies-Highlight.png'

function App() {
  return (
    <div className="App">
      <Header />
      <ImageCard />
      <HeadingCard />
      <DescriptionCard />
      <div id="columns" className="flexContainer">
        <div className="flexChild">
          <img src={lifecycle} />
          <h3 className="HeadingCard">Personal Project</h3>
          <p className="DescriptionCard">Created a personal project to experiment with styling and
          interactivity with a force directed graph using HTML, CSS,
          JavaScript and d3.js.</p>
        </div>
        <div className="flexChild">
          <img src={synergies} />
        </div>
        <div className="flexChild">
          <img src={synergies} />
        </div>
        <div className="flexChild">
          <img src={synergies} />
        </div>
        <div className="flexChild">
          <img src={lifecycle} />
        </div><div className="flexChild">
          <img src={lifecycle} />
        </div>
      </div>
    </div>
  );
}

export default App;
