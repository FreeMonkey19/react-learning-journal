import React, { Component } from "react";
import { BlogPost } from "./BlogPost";
import { data } from "./data.js";

export class AllPosts extends Component {
  state = { allPosts: [] };

  componentDidMount() {
    this.setState({ allPosts: data });
  }

  onFilterByAuthor = authName => {
    console.log(authName);
  };

  render() {
    return (
      <div className="AllPosts">
        {this.state.allPosts.map(post => {
          return (
            <BlogPost
              onFilterByAuthor={this.onFilterByAuthor}
              post={post}
              key={post.id}
            />
          );
        })}
      </div>
    );
  }
}
