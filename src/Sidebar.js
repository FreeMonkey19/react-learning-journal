import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-container">
        <div className="sidebar-quote-container">
          <h2 className="sidebar-quote">Sidebar Quote</h2>
        </div>
        <div className="sidebar-nav">
          <div className="sidebar-nav-link-container">
            <Link
              target="blank"
              className="sidebar-nav-link"
              to="https://github.com/charlottewarfel"
            >
              gitHub
            </Link>
          </div>
          <div className="sidebar-nav-link-container">
            <Link
              target="blank"
              className="sidebar-nav-link"
              to="https://www.linkedin.com/in/charlotte-warfel-481120177/"
            >
              LinkedIn
            </Link>
          </div>
        </div>

        <div className="sidebar-pics-container">
          <div className="sidebar-pic">
            Picture here hard coded for styling purposes
          </div>
          <div className="sidebar-pic">
            Another picture hardcoded for styling purposes
          </div>
        </div>
      </div>
    );
  }
}
