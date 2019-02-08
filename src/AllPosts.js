import React, { Component } from "react";
import { BlogPost } from "./BlogPost";

export class AllPosts extends Component {
  render() {
    // function renderALlPosts() {
    //   AllPosts.
    // }
    const { allPosts } = this.props;
    return (
      <div className="AllPosts">
        {allPosts.map(function(post) {
          return <BlogPost post={post} key={post.id} />;
        })}
      </div>
    );
  }
}
