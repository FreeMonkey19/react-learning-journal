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

    function renderDate(date) {
      const datePieces = date.split("-");
      const [year, month, day] = datePieces;
      return `Publish Date: ${month} - ${day} - ${year}`;
    }

    return (
      <div className="post-container">
        <h2 className="post-title">{post.title}</h2>

        <div className="author-container">
          Publised By:
          <a href="#" className="post-author">{`${post.author}`}</a>
        </div>

        <span className="date-created">{renderDate(post.createdOn)}</span>
        <div className="post-body">{post.body}</div>
        <div className="tags-container">
          <span className="tag-container">
            Key Words:
            <a href="#" className="post-tag">{`${post.tags}`}</a>
          </span>
        </div>
      </div>
    );
  }
}
