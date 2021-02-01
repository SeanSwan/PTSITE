import React from "react";
import PopUp from "./PopUp";

import WaterMan from "../assets/pics/watermanhappy.jpeg";
import ManAtTop from "../assets/pics/man-at-the-top.jpeg";
//Complete Card from scratch becase none of my cards ar flipping to back side
const PopUpList = ({ props }) => {
  const popUpListProps = [
    {
      id: 1,
      PopUpHeading: "Start booking now",
      PopImage1: WaterMan,
      PopImage2: ManAtTop,
      PopAlt1:
        "GET STAR CITIZEN NOW! Recieve Bonus 5000 UEC in Game Credits with my Referral Code",
      PopAlt2: "Only",
      PopUpText:
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
        "Deserunt praesentium neque dolorum ",

      PopUpButton: "Book Now!",
      PopUpTerms: "Important &ndash; Please read these terms before booking"
    }
  ];
  const renderedPopUpList = popUpListProps.map(renderedPopUpListPropsClone => {
    return (
      <PopUp
        key={renderedPopUpListPropsClone.id}
        PopUpHeading={renderedPopUpListPropsClone.PopUpHeading}
        PopImage1={renderedPopUpListPropsClone.PopImage1}
        PopImage2={renderedPopUpListPropsClone.PopImage2}
        PopAlt1={renderedPopUpListPropsClone.PopAlt1}
        PopAlt2={renderedPopUpListPropsClone.PopAlt2}
        PopUpText={renderedPopUpListPropsClone.PopUpText}
        PopUpButton={renderedPopUpListPropsClone.PopUpButton}
        PopUpTerms={renderedPopUpListPropsClone.PopUpTerms}
      />
    );
  });
  return <div className="">{renderedPopUpList}</div>;
};

export default PopUpList;
