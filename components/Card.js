import React from "react";

const Card = props => {
  return (
    <div className="col-1-of-3">
      <div className="cardMain1">
        <div className="cardMain1_side cardMain1_side--front">
          <div>
            <br></br>
            <div className="cardMain1_picture cardMain1_picture">
              &nbsp;
              <img
                className="cardMain1_picture cardMain1_picture"
                src={props.image}
                alt="product"
              />
              <br></br>
            </div>
          </div>
          <h4 className="cardMain1_heading">
            <span className="cardMain1_heading-span cardMain1_heading-span">
              {props.name}
            </span>
          </h4>

          <div className="cardMain1_details">
            <br></br>
            <a href="#popup" className="btn btn-white btn-animated">
              {props.homePakButton}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
