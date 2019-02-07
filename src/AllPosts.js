import React, { Component } from "react";
import { BlogPost } from "./BlogPost";

export class AllPosts extends Component {
  render() {
    return (
      <div className="AllPosts">
        <BlogPost />
      </div>
    );
  }
}
