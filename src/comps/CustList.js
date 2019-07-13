// CustList.js

import React from "react";
import "../css/CustList.css";

import CustListItem from "./CustListItem.js";

// not using PropTypes!

// generate a new <CustListItem> for each item (if any)
export default function CustList(props) {
  if (!props.custs) {
    return <div className="cust-list"></div>
  }
  return (
    <div className="cust-list">
    { props.custs.map(c => 
      <CustListItem 
        key={c.id} 
        id={c.id} 
        pos={c.position} 
        firstName={c.firstName} 
        lastName={c.lastName} 
        pet={c.pet} 
        created={c.created} 
        waitMins={c.waitMins} 
        onClick={props.onClick} 
      />)
    }
    </div>
  )
}

