import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class BlogPost extends Component {
  render() {
    const { post, onFilterByAuthor, onFilterByTag } = this.props;

    function renderDate(date) {
      const datePieces = date.split("-");
      const [year, month, day] = datePieces;
      return `Publish Date: ${month} - ${day} - ${year}`;
    }

    return (
      <div className="post-container">
        <h2 className="post-title">
          <Link className="post-title" to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </h2>

        <div className="author-container">
          Published By:
          <button
            className="post-author"
            onClick={() => onFilterByAuthor(post.author)}
          >
            {post.author}
          </button>
        </div>

        <span className="date-created">{renderDate(post.createdOn)}</span>

        <div className="post-body">{post.body}</div>

        <div className="tags-container">
          <span className="tag-container">Key Words:</span>
          {post.tags.map(function(tag) {
            return (
              <button key={tag} onClick={() => onFilterByTag(tag)}>
                {tag}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

// const blogPostPropType = PropTypes.shape({
//   id: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   author: PropTypes.string.isRequired,
//   createdOn: PropTypes.string.isRequired,
//   body: PropTypes.string.isRequired,
//   tags: PropTypes.arrayOf(PropTypes.string).isRequired
// });

// BlogPost.propTypes = {
//   post: blogPostPropType.isRequired,
//   onFilterByAuthor: PropTypes.func.isRequired,
//   onFilterByTag: PropTypes.func.isRequired
// };
