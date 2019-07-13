// CustListItem.js

import React from "react";
import "../css/CustListItem.css";

// note how we do not need to select a list id now!
export default function CustListItem(props) {
  //const name = props.firstName + " " + props.lastName[0] + ".";
  const name = props.firstName + " " + props.lastName;
  return (
    <div className="cust-list-item" onClick={(e) => {props.onClick(props)}}>
      <span className="col col-pos">{props.pos}</span>
      <span className="col col-name">{name}</span>
      <span className="col col-pet">{props.pet}</span>
      <span className="col col-created">{props.created}</span>
      <span className="col col-wait">{props.waitMins} mins</span>
    </div>
  );
}

