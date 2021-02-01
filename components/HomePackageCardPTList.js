import React from "react";
import HomePackageCardPT from "./HomePackageCardPT";

import Sean from "../assets/pics/sean.jpg";




//Trying to decide if I should seperate homePakList and add an id to the diffrent versions
//Still trying to fix background videos
// I feel like I need to break the cards into indvidual components if i'm going to have them fall into the grid vs map everything all the time.
//Was also focusing on props that were not showin up but after focusing on adding list inside of app.js instead of throwing the list in to a section prop and adding that to app.js
//helped get all my props that were not showing onto the page.

// LAST WARNING:-------Warning: Each child in a list should have a unique "key" prop.

/*Check the render method of `HomePackageList`. See https://fb.me/react-warning-keys for more information.
in HomePackage (at HomePackageList.js:60)
in HomePackageList (at HomePackageSection.js:11)
in div (at HomePackageSection.js:10)
in HomePakageSection (at App.js:22)
in div (at App.js:18)
in App (at src/index.js:10)
in div (at src/index.js:9)*/

const HomePackageCardPTList = ({ props }) => {
  const HomePackageCardPTListProps = [
    {
      id: 1,
      text1: "Food",
      text2: "Water",
      text3: "Protien",
      text4: "Carbs",
      text5: "Vegetables",
      homePakHead: "Elite Personal Training",
      homePakPriceBoxOnly: "Only",
      homePakPriceBoxValue: "$1000",
      homePakButton: "Book Now!",
      image: Sean
    },
    
    
  ];
  const renderedHomePackageCardPTList = HomePackageCardPTListProps.map(
    homePackageCardPTPropsClone => {
      return (
        <div>
        <HomePackageCardPT
          key={homePackageCardPTPropsClone.id}
          homeMainHead={homePackageCardPTPropsClone.homeMainHead}
          homePakHead={homePackageCardPTPropsClone.homePakHead}
          homePakList={homePackageCardPTPropsClone.homePakList}
          homePakPriceBoxOnly={homePackageCardPTPropsClone.homePakPriceBoxOnly}
          homePakPriceBoxValue={homePackageCardPTPropsClone.homePakPriceBoxValue}
          homePakButton={homePackageCardPTPropsClone.homePakButton}
          image={homePackageCardPTPropsClone.image}
          text1={homePackageCardPTPropsClone.text1}
          text2={homePackageCardPTPropsClone.text2}
          text3={homePackageCardPTPropsClone.text3}
          text4={homePackageCardPTPropsClone.text4}
          text5={homePackageCardPTPropsClone.text5}

          />
          </div>
          );
        }
      );
      return <div className="">{renderedHomePackageCardPTList}</div>;
    };
    
    


export default HomePackageCardPTList;
