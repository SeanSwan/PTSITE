import React from "react";
import StoriesSection from "./StoriesSection";
import LADRONE from "../assets/pics/la4k22.mp4";
//import CA from "../assets/pics/la4k22.webm";

//leving off on finding why my map function is not working for my stories i look in inspector and it syas items
// are not being mapped into an array thinking of hard coding to fix the issue but would rather use props
// I still need to redo grid as well as figure out why cards are not flipining in animation to back side
//

const StorySectionList = ({ props }) => {
  const storySectionListProps = [
    {
      id: 1,
      storyTitle: "What Everyone is talking about",
      storyVideoMp4: LADRONE,
      
    }
  ];
  const renderedStorySectionList = storySectionListProps.map(
    storySectionListPropsClone => {
      return (
        <StoriesSection
          key={storySectionListPropsClone.id}
          storyTitle={storySectionListPropsClone.storyTitle}
          storyVideoMp4={storySectionListPropsClone.storyVideoMp4}
          
        />
      );
    }
  );
  return <div className="">{renderedStorySectionList}</div>;
};

export default StorySectionList;
