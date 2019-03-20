import React, { Component } from "react";
import { BlogPost } from "./BlogPost.js";
import { Sidebar } from "./Sidebar.js";
import "./Home.css";

export class Home extends Component {
  state = { post: {} };

  componentDidMount() {
    const allPosts = JSON.parse(localStorage.getItem("posts"));
    const homePagePost = allPosts[0];

    this.setState({ post: homePagePost });
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
