import React, { Component } from "react";

// props: {
//   post: {
//     id: number,
//     title: string,
//     author: string,
//     createdOn: string,
//     body: string,
//     tags: arrayOf(string),
//   }
// }

export class BlogPost extends Component {
  render() {
    const { post } = this.props;

    return (
      <div className="post-container">
        <h2 className="post-title">{post.title}</h2>
        <div className="post-author">{post.author}</div>
        <span className="date-created">{post.createdOn}</span>
        <div className="post-body">{post.body}</div>
        <span className="post-tags">{post.tags}</span>
      </div>
    );
  }
}
