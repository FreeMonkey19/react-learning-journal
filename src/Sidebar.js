import React, { Component } from "react";
import "./Sidebar.css";
import rollerCoaster from "./images/roller-coaster.png";
import staggerPic from "./images/stagger.png";

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

        <div className="sidebar-pics-container">
          <div className="sidebar-pic">
            <img
              src={staggerPic}
              alt="Cartoon roller coaster"
              height="150"
              width="200"
            />
          </div>
          <div className="sidebar-pic">
            <img
              src={rollerCoaster}
              alt="Cartoon roller coaster"
              height="150"
              width="200"
            />
          </div>
        </div>
        <div className="sidebar-nav">
          <a
            className="sidebar-a-link"
            href="https://github.com/charlottewarfel"
            target="_blank"
            rel="noopener noreferrer"
          >
            gitHub
          </a>

          <a
            className="sidebar-a-link"
            href="https://www.linkedin.com/in/charlotte-warfel-481120177/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    );
  }
}
