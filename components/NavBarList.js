import React from "react";
import NavBar from "./NavBar";

const NavBarList = ({ props }) => {
  const navBarProps = [
    {
      id: 1,
      name: "Home"
    },
    {
      id: 2,
      name: "Packages"
    },
    {
      id: 3,
      name: "Videos"
    },
    {
      id: 4,
      name: "Swizzle TV",
      navLink: "https://www.youtube.com/channel/UCAB2fPfEIlBCDWiUeLYgIQQ?view_as=subscriber",
      target: "_blank"
    },
    {
      id: 5,
      name: "About"
    },
    {
      id: 6,
      name: "Sign-up / Log-in"
    }
  ];
  const renderedList = navBarProps.map(navBarPropsClone => {
    return (
      <div className="">
        <NavBar
          key={navBarPropsClone.id}
          name={navBarPropsClone.name}
          navLink={navBarPropsClone.navLink}
          target={navBarPropsClone.target}
          
         
        />
      </div>
    );
  });
  return <div className="">{renderedList}</div>;
};

export default NavBarList;
