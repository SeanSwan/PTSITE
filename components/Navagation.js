import React from "react";

const Navagation = props => {
  return (
    <div className="navigation">
      <input type="checkbox" className="navigation_checkbox" id="navi-toggle" />
      <label htmlFor="navi-toggle" className="navigation_button">
        {props.buttonName}
      </label>

      <label htmlFor="navi-toggle" className="navigation_button">
        <span className="navigation_icon">&nbsp;</span>
      </label>

      <div className="navigation_background">&nbsp;</div>

      <nav className="navigation_nav">
        <ul className="navigation_list">
          <li className="navigation_item">
            <a href="http://localhost:3000/" className="navigation_link">
              <span>01</span>{props.link1}
            </a>
          </li>
          <li className="navigation_item">
            <a href="/packages" className="navigation_link">
              <span>02</span>{props.link2}
            </a>
          </li>
          <li className="navigation_item">
            <a href="/videos" className="navigation_link">
              <span>03</span>{props.link3}
            </a>
          </li>
          <li className="navigation_item">
            <a href="/swizzle" className="navigation_link">
              <span>04</span>{props.link4}
            </a>
          </li>
          <li className="navigation_item">
            <a
              href="https://robertsspaceindustries.com/enlist?referral=STAR-LM2V-XX7D"
              target="_blank"
              className="navigation_link"
            >
              <span>05</span>{props.link5}
            </a>
          </li>
          <li className="navigation_item">
            <a href="#" className="navigation_link">
              <span>06</span>{props.link6}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navagation;
