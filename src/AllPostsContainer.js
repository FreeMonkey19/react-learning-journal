import React, { Component } from "react";
import { data } from "./data.js";
import { AllPosts } from "./AllPosts";

function fetchAllPosts() {
  return data;
}

export class AllPostsContainer extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    const allPosts = fetchAllPosts();
    this.setState({ posts: allPosts });
  }

  render() {
    if (this.state.posts.length === 0) return null;
    return <AllPosts allPosts={this.state.posts} />;
  }
}
