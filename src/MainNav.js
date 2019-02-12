import React, { Component } from "react";
import "./MainNav.css";

export class MainNav extends Component {
  render() {
    return (
      <nav className="main-nav" title="main-nav-bar">
        <a className="nav-link" title="main-nav-link'" href="#home-page">
          Home
        </a>
        <a className="nav-link" title="main-nav-link" href="#about-page">
          About
        </a>
        <a className="nav-link" title="main-nav-link" href="#contact-page">
          Contact
        </a>
      </nav>
    );
  }
}
