import React from 'react';
import './Portfolio.scss';
import ProjectCard from './ProjectCard';
import Projects from './Projects';

function Portfolio() {
  const portfolioProjects = Projects;
  const portfolioItems = portfolioProjects.map((portfolioProjects) =>
    <ProjectCard project={portfolioProjects} />
  );

  return (
    <div className="Portfolio">
      {portfolioItems}
    </div>
  )
}

export default Portfolio;
