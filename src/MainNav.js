import React, { Component } from "react";
import "./MainNav.css";
// import { NavLink } from "react-router-dom";

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

//  export const MainNav = () => (
//   <nav className="main-nav" title="main-nav-bar">
//     <ul>
//       <li className="nav-link"><NavLink to='/'>Home</NavLink></li>
//       <li className="nav-link"><NavLink to='/about'>About</NavLink></li>
//       <li className="nav-link"><NavLink to='/contact'>Contact</NavLink></li>
//     </ul>
//   </nav>
// );
