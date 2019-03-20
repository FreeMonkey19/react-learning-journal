import React, { Component } from "react";
import { AllPosts } from "./AllPosts";

export class AllPostsContainer extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    const allPosts = JSON.parse(localStorage.getItem("posts"));
    this.setState({ posts: allPosts });
  }

  render() {
    if (this.state.posts.length === 0) return null;
    return <AllPosts allPosts={this.state.posts} />;
  }
}
