import React from 'react';
import './BioModule.scss';
import HeadshotImage from './images/alec-headshot.jpg';

function BioModule () {
  return (
    <div className="BioModule">
      <div className="image">
        <img className="headshot" src={HeadshotImage}/>
      </div>
      <div className="text">
        <h1>Alec Sands</h1>
        <h3>Architect turned frontend developer</h3>
        <p>
          Architect turned software developer, I enjoy the pragmatic and creative
          problem solving process of developing web applications. I bring extensive
          history in collaborative project work and a passion for learning to every
          team I join.
        </p>
      </div>
    </div>
  )
};

export default BioModule;
