import React from 'react';
import './ProjectCard.scss';

function ProjectCard(props) {

  return (
    <a href={props.project.url}>
      <div className="ProjectCard">
        <img className="" alt={props.project.cardTitle} src={props.project.cardImage}/>
        <div className="description">
          <h3>{props.project.cardTitle}</h3>
          <p>
            {props.project.cardDescription}
          </p>
          <p className="linkText">Learn More Here</p>
        </div>
      </div>
    </a>
  )
}

export default ProjectCard;
