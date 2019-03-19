import React, { Component } from "react";
import { MainNav } from "./MainNav.js";
import "./MainHeader.css";

export class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <div className="title-container">
          <div className="main-page-title">
            <h1 className="title">A Seattle Coder's Learning Blog</h1>
          </div>
          <div className="page-subtitle">
            <h2 className="header-subtitle">
              A Woman in Tech, Breaking Stereotypes and Broadening Inclusion.
            </h2>
          </div>
        </div>
        <MainNav />
      </header>
    );
  }
}
