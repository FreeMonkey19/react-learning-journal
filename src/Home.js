import React, { Component } from "react";
import { data } from "./data.js";
import { BlogPost } from "./BlogPost.js";

export class Home extends Component {
  state = { post: {} };

  componentDidMount() {
    this.setState({ post: data[0] });
  }
  render() {
    if (!this.state.post.title) {
      return null;
    }
    return <BlogPost post={this.state.post} />;
  }
}
