import React, { Component } from "react";
import { AllPosts } from "./AllPosts";
import apiUrl from "./lib/apiUrl.js";

export class AllPostsContainer extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    fetch(`${apiUrl()}/blog_posts`)
      .then(response => response.json())
      .then(data => {
        this.setState({ posts: data });
      })
      .catch(error => console.error(error));
  }

  render() {
    if (this.state.posts.length === 0) return null;
    return <AllPosts allPosts={this.state.posts} />;
  }
}
