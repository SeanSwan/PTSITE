import React from "react";
import CardList from "./CardList";

const CardSection = props => {
  return (
    
      <div className="row">
        <CardList key={props.id}  />
      </div>
    
  );
};

export default CardSection;