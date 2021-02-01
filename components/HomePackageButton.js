import React from "react";

const HomePackageButton = props => {
  return (
    <div className="u-center-text u-margin-top-huge">
    <a
      //navLink="packages"
      href="/packages"
      className="nav-item nav-link active btn btn-white btn-animated"
    >
      See all section-packages
    </a>
  </div>
  );
};

export default HomePackageButton;