import React, { Component } from "react";
import { BlogPost } from "./BlogPost";
import { data } from "./data.js";

export class AllPosts extends Component {
  state = { posts: [] };

  componentDidMount() {
    this.setState({ posts: data });
  }

  onFilterByAuthor = authName => {
    console.log(authName);
    const filteredPosts = this.state.posts.filter(post => {
      return authName === post.author;
    });

    this.setState({
      posts: filteredPosts
    });
  };

  render() {
    return (
      <div className="AllPosts">
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
