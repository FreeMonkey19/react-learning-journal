import React, { Component } from "react";
import { BlogPost } from "./BlogPost.js";

export class SinglePost extends Component {
  state = { post: {} };

  componentDidMount() {
    const allPosts = JSON.parse(localStorage.getItem("posts"));
    const id = parseInt(this.props.match.params.id);
    const currentPost = allPosts.find(function(post) {
      return id === post.id;
    });
    this.setState({ post: currentPost });
  }
  render() {
    if (this.state.post.id == null) {
      return null;
    }
    return <BlogPost post={this.state.post} previewMode={false} />;
  }
}
