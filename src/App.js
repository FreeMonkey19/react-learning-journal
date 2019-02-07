import React, { Component } from "react";
import { Header } from "./Header.js";
import "./App.css";
import { AllPosts } from "./AllPosts";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AllPosts />
      </div>
    );
  }
}
