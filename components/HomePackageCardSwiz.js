import React from "react";


const HomePackageCardSwiz = props => {
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
          <li>{props.text6}</li>
          <li>{props.text7}</li>
          <li>{props.text8}</li>
          <li>{props.text9}</li>
          <li>{props.text10}</li>
          <li>{props.text11}</li>
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

export default HomePackageCardSwiz;
