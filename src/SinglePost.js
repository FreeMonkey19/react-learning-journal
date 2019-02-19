import React, { Component } from "react";
import { BlogPost } from "./BlogPost.js";
import { data } from "./data";

export class SinglePost extends Component {
  state = { post: {} };

  componentDidMount() {
    const id = parseInt(this.props.match.params.id);
    const currentPost = data.find(function(post) {
      return id === post.id;
    });
    this.setState({ post: currentPost });
  }
  render() {
    console.log("single post ", this.state.post);
    if (this.state.post.id == null) {
      return null;
    }
    return <BlogPost post={this.state.post} />;
  }
}
