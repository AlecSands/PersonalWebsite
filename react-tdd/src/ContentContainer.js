import React from 'react';
import './ContentContainer.scss';
import BioModule from "./BioModule";
import PortfolioModule from "./Portfolio";
import ProjectModule from "./ProjectModule";

function ContentContainer (props) {
  window.scrollTo(0, 0);
  let contentModule;
  if (props.name == "Bio") {
    contentModule = <BioModule />;
  } else if (props.name == "Portfolio") {
    contentModule = <PortfolioModule />
  } else if (props.name == "Project") {
    contentModule = <ProjectModule projectName={props.projectName} />
  }

  return (
    <div className="ContentContainer section">
      <div className="container">
        <div className="content">
          {contentModule}
        </div>
      </div>
    </div>
  );
}

export default ContentContainer;
