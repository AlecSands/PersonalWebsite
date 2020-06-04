import React from 'react';
import './ProjectModule.scss'
import Projects from './Projects';

function ProjectModule(props) {
  let thisProject;
  let contentCards;

  for (var i = 0; i < Projects.length; i++) {
    if (Projects[i].name == props.projectName) {
      thisProject = Projects[i];
      contentCards = Projects[i].content;
    }
  }

  const projectItems = contentCards.map((contentCards) => {
      if (contentCards.format == "desktop" || contentCards.format == "tablet" || contentCards.format == "mobile") {
        return (
          <div className="cardImage card">
            <img src={contentCards.url} />
          </div>
        );
      } else if (contentCards.format == "description") {
        return (
          <div className="cardDesc card">
            <p>
              {contentCards.text}
            </p>
          </div>
        );
      }

    }
  );


  return (
    <div className="ProjectModule">
      <div className="intro">
        <h1>{thisProject.cardTitle}</h1>
        <h3>{thisProject.techStack}</h3>
        <p>{thisProject.cardDescription}</p>
      </div>
      <div className="CardContainer">
        {projectItems}
      </div>
    </div>
  )
}

export default ProjectModule;
