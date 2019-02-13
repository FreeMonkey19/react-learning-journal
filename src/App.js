import React, { Component } from "react";
import { Header } from "./Header.js";
import "./App.css";
import { Route } from "react-router-dom";
import { Home } from "./Home.js";
import { AllPosts } from "./AllPosts";
import { SinglePost } from "./SinglePost.js";
import { About } from "./About.js";
import { Contact } from "./Contact.js";
import { BrowserRouter } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />

            <Route exact path="/" component={Home} />
            <Route exact path="/posts" component={AllPosts} />
            <Route path="/posts/:id" component={SinglePost} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
