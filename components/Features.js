import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Features = props => {
  return (
    
      
        <div className="col-1-of-4">
          <div className="feature-box">
            <h2 className="feature-box_heading">{props.title}</h2>
              <FontAwesomeIcon className="feature-box_icon" icon={props.icon} /> 
            <h3 className="heading-tertiary U-margin-bottom-small">
              {props.featHeadTert}
            </h3>
            <p className="feature-box_text">
              {props.featText}
            </p>
          </div>
        </div>
      
    
  );
};

export default Features;
