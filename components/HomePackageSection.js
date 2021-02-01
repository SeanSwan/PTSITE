import React from "react";
import HomePackageCardPTList from "./HomePackageCardPTList";
import HomePackageCardSCList from "./HomePackageCardSCList";
import HomePackageCardSwizList from "./HomePackageCardSwizList";
import HomePackageButton from "./HomePackageButton";

//blah now i'm understanding the key a bit more im getting an error but thinking of doing key 1,2,3,
//for my card components
const HomePakageSection = props => {
  return (
    <div className="section-packages-home">
      <div className="u-center-text u-margin-bottom-huge">
        <h2 className="heading-packages u-margin-top-big">Reap The Rewards Of Champions</h2>
      </div>
      <div className="row">
        <div className="col-1-of-3">
          <HomePackageCardPTList />
        </div>
        <div className="col-1-of-3">
          <HomePackageCardSCList />
        </div>
        <div className="col-1-of-3">
          <HomePackageCardSwizList />
        </div>
      </div>
      <div>
        <HomePackageButton />
      </div>
    </div>
  );
};
export default HomePakageSection;
