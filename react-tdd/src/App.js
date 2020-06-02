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
import ContentContainer from './ContentContainer';

import lifecycle from './images/Commercial_Lifecycle-Filter.png'
import synergies from './images/Synergies-Highlight.png'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="headerSpacer"></div>
      <ContentContainer name="Bio"/>
    </div>
  );
}

export default App;
