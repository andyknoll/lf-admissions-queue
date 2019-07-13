// CustCard.js

import React from "react";
//import PropTypes from "prop-types";
import "../css/CustCard.css";

export default function CustCard(props) {
  if (!props.cust) {
    return (
      <div className="cust-card">
        <button 
          className="button-remove"
          onClick={props.onRemoveClick}>
          Remove
        </button>
      </div>
    );
  } else {
    let name = props.cust.firstName + " " + props.cust.lastName;
    return (
      <div className="cust-card">
        <h1>{name}</h1>
        <h2>{props.cust.pet}</h2>
        <h2>{props.cust.created}</h2>
        <h2>{props.cust.waitMins} minutes</h2>
        <br/>
        <br/>
        <br/>
        <button 
          className="button-remove"
          onClick={props.onRemoveClick}>
          Remove
        </button>
      </div>
    );
  }
}

/*
Card.propTypes = {
  cust:   PropTypes.object.isRequired,
  name:   PropTypes.string.isRequired,
  pet:    PropTypes.string.isRequired,
  timeIn: PropTypes.string.isRequired
};
*/

