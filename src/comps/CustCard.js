// CustCard.js

import React from "react";
import "../css/CustCard.css";

export default function CustCard(props) {
  let fName = "";
  let lName = "";
  let pet = "";
  let created = "";
  let waitMins = "";

  if (props.cust) {
    fName = props.cust.firstName;
    lName = props.cust.lastName;
    pet = props.cust.pet;
    created = props.cust.created;
    waitMins = props.cust.waitMins + " minutes";
  }

  return (
    <div className="cust-card">
      <h1>{fName}</h1>
      <h1>{lName}</h1>
      <br/>
      <h2>{pet}</h2>
      <h2>{created}</h2>
      <h2>{waitMins}</h2>
      <button 
        className="button-remove"
        onClick={props.onRemoveClick}>
        Remove
      </button>
    </div>
  );
}

/*
      <button 
        className="button-refresh"
        onClick={props.onRefreshClick}>
        Refresh
      </button>
*/
