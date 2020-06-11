import React from 'react';
import './BioModule.scss';
import HeadshotImage from './images/alec-headshot.jpg';

function BioModule () {
  return (
    <div className="BioModule">
      <div className="image">
        <img className="headshot" alt="headshot" src={HeadshotImage}/>
      </div>
      <div className="text">
        <h1>Alec Sands</h1>
        <h3>
          Architect turned software developer, I enjoy the pragmatic and creative
        problem solving process of developing web applications.
        </h3>
        <p>
          I come from a unique background that blends technical and design expertise. I have 11 years of design experience coming from my previous career in architecture and three years of experience in front end web development. This unique background has set me up to be an exceptional front-end engineer with a precise eye for design, user experience, and technical precision.
        </p>
        <p>
          For the past three years, I've been working as a web developer honing my technical skills. While working to maintain and build enhancements for 5+ corporate websites across various technical stacks, I'm able to adapt quickly to differing development languages from HTML/CSS/javascript/jQuery to C#/Razor/SASS and more. In my position at Old Republic Title, I developed new features that leverage APIs, are consistent with design standards, and are mobile responsive.
        </p>
        <p>
          I bring a unique mix of skills from an architecture background, which I also leverage in my development work. Speaking the language of design, I understand the importance of design clarity, consistency, and intuitive design. I leverage my systems thinking from architecture, optimizing many constraints to deliver an optimized solution. Balancing the structural, mechanical, and aesthetic requirements for a building is remarkably similar to coordinating the technical, security, and design constraints across a wide array of teams when working as a front end developer.
        </p>
        <a href="#/portfolio">Check out my portfolio here.</a>
      </div>
    </div>
  )
};

export default BioModule;
