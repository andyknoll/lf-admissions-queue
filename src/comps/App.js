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
      contactArray: [], 
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

  // refresh list for now...
  onRemoveClick = () => {
    AjaxObject.readCustomerQueue(this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lollypop Farm Admissions Queue</h1>
        </header>

        <div class="cust-wrapper">
          <CustCard 
            cust={this.state.currCust} 
            onRemoveClick={this.onRemoveClick} 
          />
          <CustList 
            contacts={this.state.contactArray} 
            onClick={this.onContactClick} 
          />
        </div>
      </div>
    );
  }
}

export default App;
