import React, { Component } from "react";
import { Route } from "react-router-dom";

import Nav from "./components/main/Nav";
import Home from "./components/main/Home";
import CrCalculator from "./components/crCalculator/calc";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />

        <div className="container">
          <Route exact path="/" component={Home} />
          <Route path="/CRCalculator" component={CrCalculator} />
        </div>
      </div>
    );
  }
}

export default App;
