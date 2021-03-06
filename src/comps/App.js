// App.js

import React, { Component } from "react";
import "../css/App.css";

import { AjaxObject } from "./AxiosAjax";
import CustCard from "./CustCard";
import CustList from "./CustList";

// put this is Config.js
const Config = {
  POLLING_MSECS: 3000
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      custArray: [], 
      currCust: null
    };
    this.onCustClick = this.onCustClick.bind(this);       // must bind!
    this.onRemoveClick = this.onRemoveClick.bind(this);   // must bind!
  }

  // note how we do not need to select a list id now!
  // the current selected object is passed back up
  onCustClick = (cust) => {
    this.setState({currCust: cust});
  }

  onRefreshClick = () => {
    this.makeReadCustomerQueueRequest();     // make Ajax call
  }

  onRemoveClick = () => {
    this.makeDeleteCustomerRequest();     // make Ajax call
  }

  componentDidMount() {
    this.makeReadCustomerQueueRequest();     // make initial Ajax call
    setInterval(() => { 
      this.makeReadCustomerQueueRequest();   // make polling Ajax calls
    }, Config.POLLING_MSECS);
  }

  makeReadCustomerQueueRequest() {
    AjaxObject.readCustomerQueue(this);
  }

  makeDeleteCustomerRequest() {
    if (!this.state.currCust) return;
    AjaxObject.deleteCustomer(this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="App-title">Lollypop Farm Admissions Queue - staff</h2>
        </header>

        <div className="cust-wrapper">
          <CustCard 
            cust={this.state.currCust} 
            onRefreshClick={this.onRefreshClick} 
            onRemoveClick={this.onRemoveClick} 
          />
          <CustList 
            custs={this.state.custArray} 
            onClick={this.onCustClick} 
          />
        </div>
      </div>
    );
  }
}

export default App;
