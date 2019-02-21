import React, { Component } from "react";
import { BlogPost } from "./BlogPost";

export class AllPosts extends Component {
  state = {
    postsToBeRendered: this.props.allPosts,
    filteredAuthorName: null,
    filteredTagName: null
  };

  onFilterByAuthor = authName => {
    const filteredPosts = this.props.allPosts.filter(post => {
      return authName === post.author;
    });
    this.setState({
      postsToBeRendered: filteredPosts,
      filteredAuthorName: authName,
      filteredTagName: null
    });
  };

  onFilterByTag = tagName => {
    const filteredPosts = this.props.allPosts.filter(post => {
      return post.tags.includes(tagName);
    });

    this.setState({
      postsToBeRendered: filteredPosts,
      filteredTagName: tagName,
      filteredAuthorName: null
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="AllPosts">
        {this.state.filteredAuthorName != null && (
          <div className="authAndTagDiv">
            {`Showing all posts by: ${this.state.filteredAuthorName}`}
          </div>
        )}
        {this.state.filteredTagName != null && (
          <div className="authAndTagDiv">
            {`Showing all posts by Key Word: ${this.state.filteredTagName}`}
          </div>
        )}

        {this.state.postsToBeRendered.map(post => {
          return (
            <BlogPost
              onFilterByAuthor={this.onFilterByAuthor}
              onFilterByTag={this.onFilterByTag}
              post={post}
              key={post.id}
            />
          );
        })}
      </div>
    );
  }
}
