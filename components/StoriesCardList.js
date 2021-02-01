import React from "react";
import StoriesCard from "./StoriesCard";

import Ocean from "../assets/pics/ocean-man.jpeg";
import BasketBall from "../assets/pics/basketball.jpeg";
import City from "../assets/pics/la4k22.mp4";
import Turtle from "../assets/pics/swim-turtle.jpeg";

const StoriesCardList = ({ props }) => {
  const storiesProps = [
    

    {
      storyTitle: "What everyone is talking about",
      storyVideoMp4: City,
      id: 1,
      storyName: "Jasmine Swan",
      storyImage: Ocean,
      storyAlt: "An in shape blackman standing under a beautiful waterfall spray with his hands spread open and a smile",
      storyHeading: " Wow completly positivly Life changing!",
      storyText:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt" +
        "praesentium neque dolorum expedita maxime sunt voluptatem aut" +
        "adipisci nobis magnam! Eum cumque necessitatibus architecto dolorem" +
        "hic ab fugit aliquid itaque! Lorem ipsum dolor sit amet consectetur" +
        "adipisicing elit. Deserunt praesentium neque dolorum expedita maxime" +
        "sunt voluptatem aut adipisci nobis magnam! Eum cumque necessitatibus" +
        "architecto dolorem hic ab fugit aliquid itaque! Lorem ipsum dolor" +
        "sit amet consectetur adipisicing elit. Deserunt praesentium neque" +
        "dolorum expedita maxime sunt voluptatem aut adipisci nobis magnam!" +
        "Eum cumque necessitatibus architecto dolorem hic ab fugit aliquid" +
        "itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit." +
        "Deserunt praesentium neque dolorum expedita maxime sunt voluptatem" +
        "aut adipisci nobis magnam! Eum cumque necessitatibus architecto" +
        "dolorem hic ab fugit aliquid itaque! Lorem ipsum dolor sit amet" +
        "consectetur adipisicing elit. Deserunt praesentium neque dolorum" +
        "expedita maxime sunt voluptatem aut adipisci nobis magnam! Eum" +
        "cumque necessitatibus architecto dolorem hic ab fugit aliquid" +
        "itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit." +
        "Deserunt praesentium neque dolorum expedita maxime sunt voluptatem" +
        "aut adipisci nobis magnam! Eum cumque necessitatibus architecto" +
        "dolorem hic ab fugit aliquid itaque! Lorem ipsum dolor sit amet" +
        "consectetur adipisicing elit. Deserunt praesentium neque dolorum" +
        "expedita maxime sunt voluptatem aut adipisci nobis magnam! Eum" +
        "cumque necessitatibus architecto dolorem hic ab fugit aliquid" +
        "itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit." +
        "Deserunt praesentium neque dolorum expedita maxime sunt voluptatem" +
        "aut adipisci nobis magnam! Eum cumque necessitatibus architecto" +
        "dolorem hic ab fugit aliquid itaque! Lorem ipsum dolor sit amet" +
        "consectetur adipisicing elit. Deserunt praesentium neque dolorum" +
        "expedita maxime sunt voluptatem aut adipisci nobis magnam! Eum" +
        "cumque necessitatibus architecto dolorem hic ab fugit aliquid" +
        "itaque!"
    },
    {
      id: 2,
      storyName: "Sean Swan",
      storyImage: BasketBall,
      storyAlt: "Black dude diving for basket ball in a game",
      storyHeading: "SVPT is stright to the point and results",
      storyText:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt" +
        "praesentium neque dolorum expedita maxime sunt voluptatem aut" +
        "adipisci nobis magnam! Eum cumque necessitatibus architecto dolorem" +
        "hic ab fugit aliquid itaque! Lorem ipsum dolor sit amet consectetur" +
        "adipisicing elit. Deserunt praesentium neque dolorum expedita maxime" +
        "sunt voluptatem aut adipisci nobis magnam! Eum cumque necessitatibus" +
        "architecto dolorem hic ab fugit aliquid itaque! Lorem ipsum dolor" +
        "sit amet consectetur adipisicing elit. Deserunt praesentium neque" +
        "dolorum expedita maxime sunt voluptatem aut adipisci nobis magnam!" +
        "Eum cumque necessitatibus architecto dolorem hic ab fugit aliquid" +
        "itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit." +
        "Deserunt praesentium neque dolorum expedita maxime sunt voluptatem" +
        "aut adipisci nobis magnam! Eum cumque necessitatibus architecto" +
        "dolorem hic ab fugit aliquid itaque! Lorem ipsum dolor sit amet" +
        "consectetur adipisicing elit. Deserunt praesentium neque dolorum" +
        "expedita maxime sunt voluptatem aut adipisci nobis magnam! Eum" +
        "cumque necessitatibus architecto dolorem hic ab fugit aliquid" +
        "itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit." +
        "Deserunt praesentium neque dolorum expedita maxime sunt voluptatem" +
        "aut adipisci nobis magnam! Eum cumque necessitatibus architecto" +
        "dolorem hic ab fugit aliquid itaque! Lorem ipsum dolor sit amet" +
        "consectetur adipisicing elit. Deserunt praesentium neque dolorum" +
        "expedita maxime sunt voluptatem aut adipisci nobis magnam! Eum" +
        "cumque necessitatibus architecto dolorem hic ab fugit aliquid" +
        "itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit." +
        "Deserunt praesentium neque dolorum expedita maxime sunt voluptatem" +
        "aut adipisci nobis magnam! Eum cumque necessitatibus architecto" +
        "dolorem hic ab fugit aliquid itaque! Lorem ipsum dolor sit amet" +
        "consectetur adipisicing elit. Deserunt praesentium neque dolorum" +
        "expedita maxime sunt voluptatem aut adipisci nobis magnam! Eum" +
        "cumque necessitatibus architecto dolorem hic ab fugit aliquid" +
        "itaque!"
    },
    {
      id: 3,
      storyName: "Kai Swan",
      storyImage: Turtle,
      storyAlt:
        "ocean turtle swiming towards the camera looking cute and happy with a turtle smile.",
      storyHeading2: "SVPT is stright to the point and results",
      storyText:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt" +
        "praesentium neque dolorum expedita maxime sunt voluptatem aut" +
        "adipisci nobis magnam! Eum cumque necessitatibus architecto dolorem" +
        "hic ab fugit aliquid itaque! Lorem ipsum dolor sit amet consectetur" +
        "adipisicing elit. Deserunt praesentium neque dolorum expedita maxime" +
        "sunt voluptatem aut adipisci nobis magnam! Eum cumque necessitatibus" +
        "architecto dolorem hic ab fugit aliquid itaque! Lorem ipsum dolor" +
        "sit amet consectetur adipisicing elit. Deserunt praesentium neque" +
        "dolorum expedita maxime sunt voluptatem aut adipisci nobis magnam!" +
        "Eum cumque necessitatibus architecto dolorem hic ab fugit aliquid" +
        "itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit." +
        "Deserunt praesentium neque dolorum expedita maxime sunt voluptatem" +
        "aut adipisci nobis magnam! Eum cumque necessitatibus architecto" +
        "dolorem hic ab fugit aliquid itaque! Lorem ipsum dolor sit amet" +
        "consectetur adipisicing elit. Deserunt praesentium neque dolorum" +
        "expedita maxime sunt voluptatem aut adipisci nobis magnam! Eum" +
        "cumque necessitatibus architecto dolorem hic ab fugit aliquid" +
        "itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit." +
        "Deserunt praesentium neque dolorum expedita maxime sunt voluptatem" +
        "aut adipisci nobis magnam! Eum cumque necessitatibus architecto" +
        "dolorem hic ab fugit aliquid itaque! Lorem ipsum dolor sit amet" +
        "consectetur adipisicing elit. Deserunt praesentium neque dolorum" +
        "expedita maxime sunt voluptatem aut adipisci nobis magnam! Eum" +
        "cumque necessitatibus architecto dolorem hic ab fugit aliquid" +
        "itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit." +
        "Deserunt praesentium neque dolorum expedita maxime sunt voluptatem" +
        "aut adipisci nobis magnam! Eum cumque necessitatibus architecto" +
        "dolorem hic ab fugit aliquid itaque! Lorem ipsum dolor sit amet" +
        "consectetur adipisicing elit. Deserunt praesentium neque dolorum" +
        "expedita maxime sunt voluptatem aut adipisci nobis magnam! Eum" +
        "cumque necessitatibus architecto dolorem hic ab fugit aliquid" +
        "itaque!"
    }
  ];
  const renderedStoriesList = storiesProps.map(storiesPropsClone => {
    return (
      <StoriesCard
        key={storiesPropsClone.id}
        storyName={storiesPropsClone.storyName}
        storyHeading={storiesPropsClone.storyHeading}
        storyText={storiesPropsClone.storyText}
        storyImage={storiesPropsClone.storyImage}
        storyAlt={storiesPropsClone.storyAlt}
        storyTitle={storiesPropsClone.storyTitle}
        storyVideoMp4={storiesPropsClone.storyVideoMp4}
      />
    );
  });
  return <div className="">{renderedStoriesList}</div>;
};

export default StoriesCardList;
