import React from 'react';
import './Portfolio.scss';
import ProjectCard from './ProjectCard';
import Projects from './Projects';

function Portfolio() {
  const portfolioProjects = Projects;
  const portfolioItems = portfolioProjects.map((portfolioProjects) =>
    <ProjectCard project={portfolioProjects} key={portfolioProjects.name} />
  );

  return (
    <div className="Portfolio">
      <h1>Project Portfolio</h1>
      <div className="ColumnLayout">
        {portfolioItems}
      </div>
    </div>
  )
}

export default Portfolio;
