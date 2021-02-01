import React from "react";
import HomePackageCardSC from "./HomePackageCardSC";

import Jav from "../assets/pics/Javelin.jpg";

//Complete Card from scratch becase none of my cards ar flipping to back side
const HomePackageCardSCList = ({ props }) => {
  const homePackageCardSCListProps = [
    
    {
      id: 3,
      homePakHead: "Star Citizen",
      homePakList: "GET STAR CITIZEN NOW! Recieve Bonus 5000 UEC in Game Credits with my Referral Code",
      homePakPriceBoxOnly: "Only",
      homePakPriceBoxValue: "$65",
      homePakButton: "Join The Verse!",
      image: Jav
    }
  ];
  const renderedHomePackageCardSCList = homePackageCardSCListProps.map(
    homePackageCardSCListPropsClone => {
      return (
        <HomePackageCardSC
          key={homePackageCardSCListPropsClone.id}
          homePakHead={homePackageCardSCListPropsClone.homePakHead}
          homePakList={homePackageCardSCListPropsClone.homePakList}
          homePakPriceBoxOnly={homePackageCardSCListPropsClone.homePakPriceBoxOnly}
          homePakPriceBoxValue={homePackageCardSCListPropsClone.homePakPriceBoxValue}
          homePakButton={homePackageCardSCListPropsClone.homePakButton}
          image={homePackageCardSCListPropsClone.image}
        />
      );
    }
  );
  return <div className="">{renderedHomePackageCardSCList}</div>;
};

export default HomePackageCardSCList;