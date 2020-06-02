import React from 'react';
import './Portfolio.scss';
import ProjectImage from './images/Synergies-Highlight.png';
import PortLifecycle from './images/Commercial_Lifecycle-Filter.png';
import PortCalendar from './images/ORT-CE_Calendar-Desktop.png';
import PortPrototyping from './images/ezJacket-protyping.png'
import PortIdeaShuffle from './images/idea-shuffle-dots.png'
import ProjectCard from './ProjectCard';

function Portfolio() {
  return (
    <div className="Portfolio">
      <ProjectCard imageName={PortLifecycle}/>
      <ProjectCard imageName={ProjectImage}/>
      <ProjectCard imageName={PortCalendar}/>
      <ProjectCard imageName={PortPrototyping}/>
      <ProjectCard imageName={PortIdeaShuffle}/>
      <ProjectCard imageName={PortLifecycle}/>
      <ProjectCard imageName={ProjectImage}/>
      <ProjectCard imageName={PortCalendar}/>
      <ProjectCard imageName={PortPrototyping}/>
      <ProjectCard imageName={PortIdeaShuffle}/>

    </div>
  )
}

export default Portfolio;
