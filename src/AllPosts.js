import React, { Component } from "react";
import { BlogPost } from "./BlogPost";
import { data } from "./data.js";

export class AllPosts extends Component {
  state = { posts: [], filteredAuthorName: null };

  componentDidMount() {
    this.setState({ posts: data });
  }

  onFilterByAuthor = authName => {
    const filteredPosts = this.state.posts.filter(post => {
      return authName === post.author;
    });

    this.setState({
      posts: filteredPosts,
      filteredAuthorName: authName
    });
  };

  render() {
    return (
      <div className="AllPosts">
        {this.state.filteredAuthorName != null && (
          <div className="authAndTagDiv">
            {`Showing all posts by: ${this.state.filteredAuthorName}`}
          </div>
        )}

        {this.state.posts.map(post => {
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
