import React from "react";
import Navagation from "./Navagation";



//Complete Card from scratch becase none of my cards ar flipping to back side
const NavagationList = ({ props }) => {
  const navagationListProps = [
    
    {
      id: 1,
      buttonName: "MENU",
      link1: "Home",
      link2: "Packages",
      link3: "Videos",
      link4: "Swizzle-TV",
      link5: "Star Citizen",
      link6: "Sign-up/Login",
     
    }
  ];
  const renderedNavagationList = navagationListProps.map(
    navagationListPropsClone => {
      return (
        <Navagation
          key={navagationListPropsClone.id}
          buttonName={navagationListPropsClone.buttonName}
          link1={navagationListPropsClone.link1}
          link2={navagationListPropsClone.link2}
          link3={navagationListPropsClone.link3}
          link4={navagationListPropsClone.link4}
          link5={navagationListPropsClone.link5}
          link6={navagationListPropsClone.link6}
          
        />
      );
    }
  );
  return <div className="">{renderedNavagationList}</div>;
};

export default NavagationList;