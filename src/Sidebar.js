import React, { Component } from "react";
import "./Sidebar.css";
import charlottePic from "./images/charlotte-work.PNG";
import linkedin from "./images/linkedin.png";
import octocat from "./images/octo-cat.png";

export class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-container">
        <div className="sidebar-wrapper">
          <div className="sidebar-quote-container">
            <p className="sidebar-quote">
              "It's a wonderful day in the neighborhood, a wonderful day in the
              neighborhood...a wonderful day!"
            </p>
            <p className="quote-author">-Author Unknown</p>
          </div>

          <div className="sidebar-pics-container">
            <div className="sidebar-pic">
              <img src={charlottePic} alt="Site's author" />
            </div>{" "}
            <span className="author-description">
              Charlotte Adams-Learning Blog Creator
            </span>
          </div>
          <div className="sidebar-nav-container">
            <a
              className="sidebar-a-link"
              href="https://github.com/charlottewarfel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={octocat} alt="gitHub icon" height="28px" width="28px" />
            </a>

            <a
              className="sidebar-a-link"
              href="https://www.linkedin.com/in/charlotte-warfel-481120177/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="linkedin icon" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
