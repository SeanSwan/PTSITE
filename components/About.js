import React from "react";
import CardSection from "./CardSection";

//create props for paragraph and all that need props still fixing grid layou
// compare vh for about splash pic.

const About = props => {
  return (
    <div className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">{props.headingSecond}</h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            {props.headingTert1}
          </h3>
          <p className="paragraph">{props.aboutGraph1}</p>

          <h3 className="heading-tertiary  u-margin-bottom-small">
            {props.headingTert2}
          </h3>
          <p className="paragraph">{props.aboutGraph2}</p>
          <a
            href=""
            className="nav-item nav-link active btn btn-white btn-animated"
          >
            Learn more &rarr;
          </a>
        </div>
      </div>
      <div className="u-margin-top-huge"></div>

      <div className="">
        <div className="col-1-of-3">
          <CardSection key={props.id}  />
        </div>
      </div>
    </div>
  );
};

export default About;
