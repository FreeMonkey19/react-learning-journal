import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-container">
        <div className="sidebar-quote-container">
          <p className="sidebar-quote">
            It's a wonderful day in the neighborhood, a wonderful day in the
            neighborhood...a wonderful day!
          </p>
        </div>
        <ul className="sidebar-nav">
          <li>
            <a
              className="sidebar-a-link"
              href="https://github.com/charlottewarfel"
              target="_blank"
            >
              gitHub
            </a>

            <a
              className="sidebar-a-link"
              href="https://www.linkedin.com/in/charlotte-warfel-481120177/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
        </ul>
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
