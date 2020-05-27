import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
