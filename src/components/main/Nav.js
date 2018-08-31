import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <NavLink className="navbar-brand" to="/">
          <i className="fa fa-dice" /> High Roller
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/">
                <i className="fa fa-home" /> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/CRCalculator"
              >
                <i className="fa fa-calculator" /> CR Calculator
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
