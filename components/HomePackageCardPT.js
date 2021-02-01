import React from "react";

// looks like i'm going to have to make individual card components for the packages
// So that means tweeking the homePakage card component to be three diffrent cards
// making 3 new components from them.
const HomePackageCardPT = props => {
  return (
    <div className="cardMain">
      <div className="cardMain_side cardMain_side--front">
       
        <div className="cardMain_picture cardMain_picture">&nbsp;
        <img
          className="cardMain_picture cardMain_picture"
          src={props.image}
          alt="product"
        />
        </div>
        <h4 className="cardMain_heading">
          <span className="cardMain_heading-span cardMain_heading-span">
            {props.homePakHead}
          </span>
        </h4>
        <div className="cardMain_details">
          <ul>
            <li>{props.text1}</li>
            <li>{props.text2}</li>
            <li>{props.text3}</li>
            <li>{props.text4}</li>
            <li>{props.text5}</li>
          </ul>
        </div>
      </div>
      <div className="cardMain_side cardMain_side--back cardMain_side--back">
        <div className="cardMain_cta">
          <div className="card_price-box">
            <p className="class cardMain_price-only">
              {props.homePakPriceBoxOnly}
            </p>
            <p className="class cardMain_price-value">
              {props.homePakPriceBoxValue}
            </p>
          </div>
          <a href="#popup" className="btn btn-white">
            {props.homePakButton}
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePackageCardPT;
