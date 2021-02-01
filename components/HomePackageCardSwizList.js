import React from "react";
import HomePackageCardSwiz from "./HomePackageCardSwiz";


import Film from "../assets/pics/film.jpg";

//Complete Card from scratch becase none of my cards ar flipping to back side
const HomePackageCardSwizList = ({ props }) => {
  const homePackageCardSwizListProps = [
    
    {
      id: 2,

      homePakHead: "Swizzle TV",
      
        text6: "Personal Training",
        text7: "Tech Reviews",
        text8: "Star Citizen",
        text9: "Food Reviews",
        text10: "Acting",
        text11: "Coding",
      
      homePakPriceBoxOnly: "Subscribe",
      homePakPriceBoxValue: "Free!",
      homePakButton: "Subscribe Now!",
      image: Film
    },
  ];
  const renderedHomePackageCardList = homePackageCardSwizListProps.map(
    homePackageCardSwizPropsClone => {
      return (
        <HomePackageCardSwiz
          key={homePackageCardSwizPropsClone.id}
          homePakHead={homePackageCardSwizPropsClone.homePakHead}
          homePakList={homePackageCardSwizPropsClone.homePakList}
          homePakPriceBoxOnly={homePackageCardSwizPropsClone.homePakPriceBoxOnly}
          homePakPriceBoxValue={homePackageCardSwizPropsClone.homePakPriceBoxValue}
          homePakButton={homePackageCardSwizPropsClone.homePakButton}
          image={homePackageCardSwizPropsClone.image}
          text6={homePackageCardSwizPropsClone.text6}
          text7={homePackageCardSwizPropsClone.text7}
          text8={homePackageCardSwizPropsClone.text8}
          text9={homePackageCardSwizPropsClone.text9}
          text10={homePackageCardSwizPropsClone.text10}
          text11={homePackageCardSwizPropsClone.text11}
        />
      );
    }
  );
  return <div className="">{renderedHomePackageCardList}</div>;
};

export default HomePackageCardSwizList;