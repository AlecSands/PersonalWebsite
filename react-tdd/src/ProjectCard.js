import React from 'react';
import './ProjectCard.scss';
import ProjectImage from './images/Synergies-Highlight.png';

function ProjectCard(props) {

  return (
    <a href={props.project.url}>
      <div className="ProjectCard">
        <img className="" src={props.project.cardImage}/>
        <div className="description">
          <h3>{props.project.cardTitle}</h3>
          <p>
            {props.project.cardDescription}
          </p>
        </div>
      </div>
    </a>
  )
}

export default ProjectCard;
