import React from "react";
import Card from "./Card";

import Stretch from "../assets/pics/stretch.jpg";
import Toxins from "../assets/pics/toxins.jpeg";
import CardioDog from "../assets/pics/cardio-dog.jpeg";
import Lean from "../assets/pics/lean.jpeg";
import Balance2 from "../assets/pics/balance2.jpeg";
import Sports from "../assets/pics/basketball.jpeg";
import KetteleBell from "../assets/pics/kettle-bell-shoe.jpeg";
import SwimTurtle from "../assets/pics/swim-turtle.jpeg";
import Forest from "../assets/pics/strecthing-out-forest.jpeg";

const CardList = ({ props }) => {
  const datas = [
    {
      id: 1,
      name: "Flexability",
      cardinfo: "Flexibility is very important in 2020",
      image: Stretch,
      homePakButton: "INFO"
    },
    {
      id: 2,
      name: "Chems & Preserves",
      cardinfo: "There are chemicals and presevatives everywhere",
      image: Toxins,
      homePakButton: "INFO"
    },
    {
      id: 3,
      name: "Cardio",
      cardinfo: "Using a heartrate moniter to get optimal results",
      image: CardioDog,
      homePakButton: "INFO"
    },
    {
      id: 4,
      name: "Lean Muscle",
      cardinfo: "Build lean muscle using plant protien for healthier gains",
      image: Lean,
      homePakButton: "INFO"
    },
    {
      id: 5,
      name: "Balance & Rehab",
      cardinfo:
        "Maintainin balance and stability is important for preventing thos unwanted slips and falls",
      image: Balance2,
      homePakButton: "INFO"
    },
    {
      id: 6,
      name: "Sports Training",
      cardinfo:
        "You play sports so did I lets find the optimal workout for your specific sport goals",
      image: Sports,
      homePakButton: "INFO"
    },
    {
      id: 7,
      name: "Home Training",
      cardinfo: "Yes we will come to you!",
      image: KetteleBell,
      homePakButton: "INFO"
    },
    {
      id: 8,
      name: "Swimming Classes",
      cardinfo: "Never too late to learn to swim",
      image: SwimTurtle,
      homePakButton: "INFO"
    },
    {
      id: 9,
      name: "Personal PT Videos",
      cardinfo:
        "Let's create videos based on your goals so if were not working out or if your allways busy we can always stay connected online.",
      image: Forest,
      homePakButton: "INFO"
    }
  ];
  const renderedList = datas.map(datasClone => {
    return (
      <div className="">
        <Card
          key={datasClone.id}
          image={datasClone.image}
          name={datasClone.name}
          cardinfo={datasClone.cardinfo}
          homePakButton={datasClone.homePakButton}
        />
      </div>
    );
  });
  return <div className="">{renderedList}</div>;
};

export default CardList;
