import React from 'react';
import './ProjectCard.scss';
import ProjectImage from './images/Synergies-Highlight.png';

function ProjectCard(props) {

  return (
    <div className="ProjectCard">
      <img className="" src={props.imageName}/>
      <div className="description">
        <h3>Project Title</h3>
        <p>
          Developed website features using SASS, CSS, HTML, jQuery, d3.js, and C#
          to deliver mobile responsive enhancements to support business needs.
        </p>
      </div>
    </div>
  )
}

export default ProjectCard;
