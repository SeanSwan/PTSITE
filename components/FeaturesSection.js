import React from "react";
import FeaturesList from "./FeaturesList";

const FeaturesSection = props => {
  return (
    <div className="section-features">
      <div className="row">
        <FeaturesList />
      </div>
    </div>
  );
};

export default FeaturesSection;
