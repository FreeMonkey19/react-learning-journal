import React, { Component } from "react";
import { BlogPost } from "./BlogPost";
import { data } from "./data.js";

export class AllPosts extends Component {
  state = { allPosts: [] };

  componentDidMount() {
    this.setState({ allPosts: data });
  }

  render() {
    return (
      <div className="AllPosts">
        {this.state.allPosts.map(function(post) {
          return <BlogPost post={post} key={post.id} />;
        })}
      </div>
    );
  }
}
