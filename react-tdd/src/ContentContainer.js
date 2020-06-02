import React from 'react';
import './ContentContainer.scss';
import BioModule from "./BioModule";
import PortfolioModule from "./Portfolio";

function ContentContainer (props) {
  let contentModule;
  if (props.name == "Bio") {
    contentModule = <BioModule />;
  } else if (props.name == "Portfolio") {
    contentModule = <PortfolioModule />
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
