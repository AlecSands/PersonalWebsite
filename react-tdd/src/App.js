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
import Footer from './Footer';

import lifecycle from './images/Commercial_Lifecycle-Filter.png'
import synergies from './images/Synergies-Highlight.png'

function App() {
  // const BioContent = "<p>test</p>";
  const BioContent = <ContentContainer name='Bio' />;

  return (
    <div className="App">
      <Header />
      <div className="bodyContainer">
        <div className="headerSpacer"></div>
        <Switch>
          <Route exact path="/" component={ImageCard} />
          <Route path="/bio" render={(props) => <ContentContainer {...props} name="Bio" />} />
        </Switch>

      </div>
      <Footer />
    </div>
  );
}

export default App;
