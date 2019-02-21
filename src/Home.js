import React, { Component } from "react";
import { data } from "./data.js";
import { BlogPost } from "./BlogPost.js";
import { Sidebar } from "./Sidebar.js";
import "./Home.css";

export class Home extends Component {
  state = { post: {} };

  componentDidMount() {
    this.setState({ post: data[0] });
  }
  render() {
    if (this.state.post.id == null) {
      return null;
    }
    return (
      <div className="home-post-page">
        <BlogPost post={this.state.post} />
        <Sidebar />
      </div>
    );
  }
}
