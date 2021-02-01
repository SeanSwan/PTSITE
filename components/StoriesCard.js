import React from "react";

const StoriesCard = props => {
  return (
    <div className="row">
    <div className="story">
      <figure className="story_shape">
        <img
          className="story_img"
          src={props.storyImage}
          alt={props.storyAlt}
        />
        <figcaption className="story_caption">{props.storyName}</figcaption>
      </figure>
      <div className="story_text">
        <h3 className="heading-tertiary u-margin-bottom-small">
          {props.storyHeading2}
        </h3>
        <p>{props.storyText}</p>
      </div>
    </div>
    </div>
  );
};

export default StoriesCard;
