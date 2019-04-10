import React, { Component } from "react";
import "./NewPost.css";
import saveBlogPost from "./lib/saveBlogPost";

export class NewPost extends Component {
  state = {
    values: {
      title: "",
      author: "",
      body: "",
      tags: ""
    },
    touched: {
      title: false,
      author: false,
      body: false,
      tags: false
    },
    submitted: false
  };

  convertTagsToArray = tags => {
    const splitOn = ",";
    return tags.split(splitOn).map(function(str) {
      return str.trim();
    });
  };

  handleChange = e => {
    this.setState({
      values: {
        ...this.state.values,
        [e.target.name]: e.target.value
      }
    });
  };

  handleBlur = e => {
    this.setState({
      touched: {
        ...this.state.touched,
        [e.target.name]: true
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      submitted: true
    });

    if (this.isTitleValid() && this.isAuthorValid() && this.isBodyValid()) {
      const resultArray = this.convertTagsToArray(this.state.values.tags);
      const blogPost = Object.assign({}, this.state.values);
      blogPost.tags = resultArray;

      saveBlogPost(blogPost);
    }
  };

  validate = () => {
    return {
      title:
        (!this.isTitleValid() && this.state.touched.title) ||
        (this.state.submitted && !this.isTitleValid()),
      author:
        (!this.isAuthorValid() && this.state.touched.author) ||
        (this.state.submitted && !this.isAuthorValid()),
      body:
        (!this.isBodyValid() && this.state.touched.body) ||
        (this.state.submitted && !this.isBodyValid())
    };
  };

  isTitleValid = () => this.state.values.title.length > 0;
  isAuthorValid = () => this.state.values.author.length > 0;
  isBodyValid = () => this.state.values.body.length > 0;

  render() {
    const errors = this.validate();

    return (
      <div className="form-wrapper">
        <h3 className="form-header">Would you like to submit a blog?</h3>
        <form className="newBlogForm" onSubmit={this.handleSubmit}>
          <label htmlFor="blog-title">Title</label>
          <input
            id="blog-title"
            type="text"
            name="title"
            placeholder="title"
            className={errors.title ? "error" : ""}
            value={this.state.values.title}
            required
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />
          {errors.title && (
            <div className="errorMsgDiv">Title is required!</div>
          )}
          <br />
          <label htmlFor="author-name">Author</label>
          <input
            id="author-name"
            type="text"
            name="author"
            placeholder="author"
            className={errors.author ? "error" : ""}
            value={this.state.values.author}
            required
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />
          {errors.author && (
            <div className="errorMsgDiv">Author name is required!</div>
          )}

          <label htmlFor="body-input">Content</label>
          <textarea
            id="body-input"
            type="textarea"
            name="body"
            placeholder="body"
            className={errors.body ? "error" : ""}
            value={this.state.values.body}
            required
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />
          {errors.body && (
            <div className="errorMsgDiv">Content is required!</div>
          )}
          <br />
          <label htmlFor="key-words">Key Words:</label>
          <input
            id="key-words"
            type="text"
            name="tags"
            placeholder="ex: moon, stars, purple"
            value={this.state.values.tags}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="submit-button" />
          <button
            id="submit-button"
            onClick={this.handleSubmit}
            type="submit"
            title="submitButton"
            className="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
