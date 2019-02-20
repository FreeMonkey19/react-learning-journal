import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-do";
import "./Sidebar.css";

export class Sidebar extends Component {
  render() {
    return (
      <div class="sidebar-container">
        <div class="sidebar-content">
          <div>
            <h2 class="sidebar-quote">Sidebar Quote</h2>
          </div>
          <div class="sidebar-nav">
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
