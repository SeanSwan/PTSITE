import React from "react";


const HomePackageCardSC = props => {
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
            <p>{props.homePakList}</p>
          </div>
        </div>
        <div className="cardMain_side cardMain_side--back cardMain_side--back">
          <div className="cardMain_cta">
            <div className="card_price-box">
              <p className="class cardMain_price-only">
                {props.homePakPriceBoxOnly} + {props.homePakPriceBoxValue}
              </p>
            </div>
            <a
              href="https://robertsspaceindustries.com/enlist?referral=STAR-LM2V-XX7D"
              target="_blank"
              className="btn btn-white">
              {props.homePakButton}
            </a>
            
          </div>
        </div>
      </div>
    
  );
};

export default HomePackageCardSC;
