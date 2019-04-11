import React, { Component } from "react";
import { BlogPost } from "./BlogPost.js";
import { Sidebar } from "./Sidebar.js";
import "./Home.css";
import apiUrl from "./lib/apiUrl.js";

export class Home extends Component {
  state = { post: {} };

  componentDidMount() {
    fetch(`${apiUrl()}/current_blog_post`)
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

    return (
      <div className="home-post-page">
        <BlogPost post={this.state.post} previewMode={false} />
        <Sidebar />
      </div>
    );
  }
}
