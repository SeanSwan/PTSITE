import React from "react";

const PopUp = props => {
  return (
    <div className="popup" id="popup">
      <div className="popup_content">
        <div className="popup_left">
          <img
            src={props.PopImage1}
            alt={props.PopAlt1}
            className="popup_img"
          />
          <img src={props.PopImage2} alt={props.PopAlt2} className="popup_img" />
        </div>
        <div className="popup_right">
          <a href="#section-tours" className="popup_close">
            &times;
          </a>
          <h2 className="heading-secondary u-margin-bottom-small">
            {props.PopUpHeading}
          </h2>
          <h3 className="heading-tertiary u-margin-bottom-small">
            {props.PopUpTerm}
          </h3>
          <p className="popup_text">{props.PopUpText}</p>
          <a href="#packages" className="btn btn-white">
            {props.PopUpButton}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
