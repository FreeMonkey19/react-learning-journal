import React, { Component } from "react";
import { Post } from "./Blogpost";

export class AllPosts extends Component {
  render() {
    return (
      <div className="AllPosts">
        <Post />
      </div>
    );
  }
}
