import React, { Suspense } from 'react';
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

  return (
    <div className="App">
      <Header />
      <div className="bodyContainer">
        <div className="headerSpacer"></div>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={(props) => <ContentContainer {...props} name="Portfolio" />} />
            <Route path="/bio" render={(props) => <ContentContainer {...props} name="Bio" />} />
            <Route path="/ort-website" render={(props) => <ContentContainer {...props} name="Project" projectName="Old Republic Title - Corporate Website" />} />
            <Route path="/ort-ux-design" render={(props) => <ContentContainer {...props} name="Project" projectName="Old Republic Title - UX Design" />} />
            <Route path="/ort-ancillary" render={(props) => <ContentContainer {...props} name="Project" projectName="Old Republic Title - Ancillary Websites" />} />
            <Route path="/ort-commercial-lifecycle" render={(props) => <ContentContainer {...props} name="Project" projectName="Old Republic Title - Commercial Lifecycle" />} />
            <Route path="/interactive-web" render={(props) => <ContentContainer {...props} name="Project" projectName="Interactive Relational Web" />} />
            <Route path="/idea-shuffle" render={(props) => <ContentContainer {...props} name="Project" projectName="Idea Shuffle" />} />
            <Route path="/fix-it-tech" render={(props) => <ContentContainer {...props} name="Project" projectName="Fix-It Tech" />} />
            <Route path="/*" render={(props) => <ContentContainer {...props} name="Portfolio" />} />
          </Switch>
        </Suspense >

      </div>
      <Footer />
    </div>
  );
}

export default App;
