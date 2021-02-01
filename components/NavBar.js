import React from 'react';
import "../style/style.css";

const NavBar = props => {
  return (
  <div >
    <a className=" btn btn-white btn-animated heading-primary-sub u-margin-bottom-small"  href="/">{props.name}</a>
  </div>
      
  
    );
  }


export default NavBar;