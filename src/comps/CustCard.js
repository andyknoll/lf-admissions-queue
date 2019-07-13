// CustCard.js

import React from "react";
import "../css/CustCard.css";

export default function CustCard(props) {
  if (!props.cust) {
    return (
      <div className="cust-card">
        <button 
          className="button-refresh"
          onClick={props.onRefreshClick}>
          Refresh
        </button>
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
        <button 
          className="button-refresh"
          onClick={props.onRefreshClick}>
          Refresh
        </button>
        <button 
          className="button-remove"
          onClick={props.onRemoveClick}>
          Remove
        </button>
      </div>
    );
  }
}

