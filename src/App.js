import React, { Component } from "react";
import { Route } from "react-router-dom";

import Nav from "./components/main/Nav";
import CrCalculator from "./components/crCalculator/calc";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />

        <Route path="/crCalculator" component={CrCalculator} />
      </div>
    );
  }
}

export default App;
