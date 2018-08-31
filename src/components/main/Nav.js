import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  handleClick = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <NavLink className="navbar-brand" to="/">
          <i className="fa fa-dice" /> High Roller
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.handleClick}
        >
          <i className="fa fa-bars" />
        </button>

        <div
          className={
            "collapse navbar-collapse" + (this.state.showMenu ? " show" : "")
          }
          id="navbarColor01"
        >
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
