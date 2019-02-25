import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./BlogPost.css";

export class BlogPost extends Component {
  render() {
    const { post, onFilterByAuthor, onFilterByTag, previewMode } = this.props;

    function renderDate(date) {
      const datePieces = date.split("-");
      const [year, month, day] = datePieces;
      return `Publish Date: ${month} - ${day} - ${year}`;
    }
    function summaryBody() {
      if (previewMode === true) {
        return post.body
          .split(" ")
          .slice(0, 51)
          .join(" ")
          .concat("...");
      } else return post.body;
    }

    return (
      <div className="post-container">
        <h2 className="post-title-wrapper">
          <Link className="post-title active" to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </h2>

        <div className="author-tag-date-created-containers">
          Published By:
          <button
            className="author-and-tag-buttons"
            onClick={() => onFilterByAuthor(post.author)}
          >
            {post.author}
          </button>
        </div>

        <span className="post-created-on">{renderDate(post.createdOn)}</span>

        <div className="post-body">{summaryBody()}</div>

        <div className="tags-container">
          <span className="author-tag-date-created-containers">Key Words:</span>
          {post.tags.map(function(tag) {
            return (
              <button
                className="author-and-tag-buttons"
                key={tag}
                onClick={() => onFilterByTag(tag)}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

const blogPostPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  createdOn: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired
});

BlogPost.propTypes = {
  post: blogPostPropType.isRequired,
  onFilterByAuthor: PropTypes.func,
  onFilterByTag: PropTypes.func,
  previewMode: PropTypes.bool.isRequired
};
