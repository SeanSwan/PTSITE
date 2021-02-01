import React from "react";
import StoriesCardList from "./StoriesCardList";
import City from "../assets/pics/la4k22.mp4";

const StoriesSection = props => {
  return (
    <div className="section-stories">
      <div className="bg-video">
        <video className="bg-video_content" autoPlay muted loop>
          <source src={City} type="video/mp4" />
          your browser is not supported
        </video>
      </div>

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">{props.storyTitle}</h2>
      </div>
      <div>
        <React.Fragment>
          <StoriesCardList />
        </React.Fragment>
      </div>
    </div>
  );
};

export default StoriesSection;
