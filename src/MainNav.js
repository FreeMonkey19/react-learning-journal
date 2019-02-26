import React, { Component } from "react";
import "./MainNav.css";
import { NavLink } from "react-router-dom";

export class MainNav extends Component {
  render() {
    return (
      <nav className="main-nav" title="main-nav-bar">
        <span className="nav-link-container" title="main-nav-link">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </span>
        <span className="nav-link-container" title="main-nav-link">
          <NavLink className="nav-link" to="/posts">
            All Posts
          </NavLink>
        </span>

        <span className="nav-link-container" title="main-nav-link">
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </span>

        <span className="nav-link-container" title="main-nav-link">
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
        </span>
        <span className="nav-link-container" title="main-nav-link">
          <NavLink className="nav-link" to="/newblog">
            Blog Form
          </NavLink>
        </span>
      </nav>
    );
  }
}
