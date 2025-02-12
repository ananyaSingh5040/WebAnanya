import React from "react";
import cherryImage from '../assets/cherry.jpg';
import './Usercard.css';
const Usercard = (props) => {
  return (
  <>
  <div className="container">
    <p id="user-name">{props.name}</p>
    <img src={cherryImage} alt="user-image" id="image" />
    <p id="desc">Cherry's Description</p>
    <p>{props.children}</p>
  </div>
  </>
  );
};
export default Usercard;
