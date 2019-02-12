import React, { Component } from "react";
import "./MainNav.css";
import { NavLink } from "react-router-dom";

export class MainNav extends Component {
  render() {
    return (
      <nav className="main-nav" title="main-nav-bar">
        <span className="nav-link" title="main-nav-link">
          <NavLink to="/home">Home</NavLink>
        </span>
        <span className="nav-link" title="main-nav-link">
          <NavLink to="/allPosts">All Posts</NavLink>
        </span>

        <span className="nav-link" title="main-nav-link">
          <NavLink to="/about">About</NavLink>
        </span>

        <span className="nav-link" title="main-nav-link">
          <NavLink to="/contact">Contact</NavLink>
        </span>
      </nav>
    );
  }
}
