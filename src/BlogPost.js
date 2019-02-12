import React, { Component } from "react";
// import PropTypes from "prop-types";

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
          Published By:
          <a href="#" className="post-author">
            {post.author}
          </a>
        </div>

        <span className="date-created">{renderDate(post.createdOn)}</span>

        <div className="post-body">{post.body}</div>

        <div className="tags-container">
          <span className="tag-container">Key Words:</span>
          {post.tags.map(function(tag) {
            return (
              <a href="#" className="post-tag" key={tag}>
                {tag}
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}
