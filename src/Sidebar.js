import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-container">
        <div className="sidebar-content">
          <div>
            <h2 className="sidebar-quote">Sidebar Quote</h2>
          </div>
          <div className="sidebar-nav">
            <div>
              <Link
                target="blank"
                className="sidebar-nav-link"
                to="https://github.com/charlottewarfel"
              >
                gitHub
              </Link>
            </div>
            <div>
              <Link
                target="blank"
                className="sidebar-nav-link"
                to="https://www.linkedin.com/in/charlotte-warfel-481120177/"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
