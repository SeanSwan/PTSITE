import React from "react";
import FootVid1 from "../assets/pics/cubes.mp4" 
const Footer = props => {
  return (
    
    <footer className="footer">
      <div className="row">
        <div className="col-1-of-1">
       <video className="footer_logo" autoPlay muted loop>
          <source src={FootVid1} type="video/mp4" />
          <source src={FootVid1} type="video/webm" />
          your browser is not supported!
        </video>
        </div>
        </div>
      <div className="footer__logo-box">
      <img src={props.footerLogo} alt="Full logo" className="footer__logo">
       </img>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  {props.footerLink1}
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  {props.footerLink2}
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  {props.footerLink3}
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  {props.footerLink4}
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  {props.footerLink5}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            {props.copyright1}
            <a href="#" className="footer__link">
              {props.copyright2}
            </a>
            {props.copyright3}
            <a href="#" className="footer__link">
              {props.copyright4}
            </a>
            {props.copyright5}
          </p>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
