import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="c-bg_img">
        <div className="container u-padding-top-3x">
          <div className="jumbotron u-text-center">
            <div className="">
              <h3>Dungeons & Dragons DM Tools</h3>
            </div>
            <p>
              <em>
                Bringing automation to a bunch of boring tasks and tables.
              </em>
            </p>
            <p className="u-margin-top-3x">
              Currently, there's a basic{" "}
              <NavLink to="/CRCalculator">
                <i className="fa fa-calculator" /> CR Calculator here
              </NavLink>
              , but there's more to come. <strong>Enjoy!</strong>
            </p>
            <p className="u-margin-top">
              <small>5th Edition</small>
            </p>
          </div>
        </div>
        <div className="c-bg_artist-credits">
          <a
            href="http://noirlac.tumblr.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Image by Noirlac
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
