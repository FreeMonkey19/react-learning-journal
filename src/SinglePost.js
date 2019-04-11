import React, { Component } from "react";
import { BlogPost } from "./BlogPost.js";
import apiUrl from "./lib/apiUrl.js";

export class SinglePost extends Component {
  state = { post: {} };

  componentDidMount() {
    const id = parseInt(this.props.match.params.id);

    fetch(`${apiUrl()}/blog_posts/${id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ post: data });
      })
      .catch(error => console.error(error));
  }

  render() {
    if (this.state.post.id == null) {
      return null;
    }
    return <BlogPost post={this.state.post} previewMode={false} />;
  }
}
