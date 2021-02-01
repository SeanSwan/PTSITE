import React from "react";
import NavBarList from "./NavBarList";

const NavBarSection = props => {
  return (
    <header className="header">
      <div className="row">
        <div className="text-box">
          <div className="u-margin-bottom-small">
          <h1 className="heading-primary">
            <span className="heading-primary-main">Swan Vitality PT</span>
          </h1>
          </div>
          
          <NavBarList key={props.id} />
        </div>
      </div>
    </header>
  );
};

export default NavBarSection;
