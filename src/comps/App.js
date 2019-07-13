// App.js

import React, { Component } from "react";
import "../css/App.css";

import { AjaxObject } from "./AxiosAjax";
import CustCard from "./CustCard";
import CustList from "./CustList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      custArray: [], 
      currCust: null
    };
    this.onContactClick = this.onContactClick.bind(this);   // must bind!
    this.onRemoveClick = this.onRemoveClick.bind(this);   // must bind!
  }

  // note how we do not need to select a list id now!
  // the current selected object is passed back up
  onContactClick = (cust) => {
    this.setState({currCust: cust});
  }

  onRefreshClick = () => {
    //alert("App.onRefreshClick");
    AjaxObject.readCustomerQueue(this);   // make Ajax call
  }

  onRemoveClick = () => {
    //alert("App.onRemoveClick");
    AjaxObject.getServerTime(this);   // make Ajax call
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lollypop Farm Admissions Queue</h1>
        </header>

        <div className="cust-wrapper">
          <CustCard 
            cust={this.state.currCust} 
            onRefreshClick={this.onRefreshClick} 
            onRemoveClick={this.onRemoveClick} 
          />
          <CustList 
            custs={this.state.custArray} 
            onClick={this.onContactClick} 
          />
        </div>
      </div>
    );
  }
}

export default App;
