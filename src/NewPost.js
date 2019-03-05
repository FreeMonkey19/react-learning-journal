import React, { Component } from "react";
import { data } from "./data";
import "./NewPost.css";

function saveBlogPost(blogPost) {
  return data.push(blogPost);
}

export class NewPost extends Component {
  state = {
    title: "",
    author: "",
    createdOn: "",
    body: "",
    tags: ""
  };

  createDateOnSubmit = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month}-${day}`;
  };

  createUniqueIdOnSubmit = () => {
    return data.length;
  };

  convertTagsToArray = tags => {
    const splitOn = ",";
    return tags.split(splitOn).map(function(str) {
      return str.trim();
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const resultArray = this.convertTagsToArray(this.state.tags);
    const blogPost = Object.assign({}, this.state);
    blogPost.tags = resultArray;

    const newId = this.createUniqueIdOnSubmit(this.state.id);
    blogPost.id = newId;

    const todaysDate = this.createDateOnSubmit(this.state.createdOn);
    blogPost.createdOn = todaysDate;

    saveBlogPost(blogPost);
    console.log(blogPost);
  };

  validate = () => {
    // console.log(this.isTitleValid());

    return {
      title: !this.isTitleValid(),
      author: !this.isAuthorValid(),
      body: !this.isBodyValid()
    };
  };

  isValid = () => {
    return this.isTitleValid() && this.isAuthorValid() && this.isBodyValid();
  };

  isTitleValid = () => this.state.title.length > 0;
  isAuthorValid = () => this.state.author.length > 0;
  isBodyValid = () => this.state.body.length > 0;

  render() {
    const errors = this.validate();
    console.log(errors);

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="blog-title">Title</label>
        <input
          id="blog-title"
          type="text"
          name="title"
          placeholder="title"
          className={errors.title ? "error" : ""}
          value={this.state.title}
          required
          onChange={this.handleChange}
        />
        {errors.title && <div className="errorDiv">Title is required!</div>}
        <br />
        <label htmlFor="author-name">Author</label>
        <input
          id="author-name"
          type="text"
          name="author"
          placeholder="author"
          className={errors.author ? "error" : ""}
          value={this.state.author}
          required
          onChange={this.handleChange}
        />
        {errors.author && (
          <div className="errorDiv">Author name is required!</div>
        )}

        <label htmlFor="body-input">Content</label>
        <textarea
          id="body-input"
          type="textarea"
          name="body"
          placeholder="body"
          className={errors.body ? "error" : ""}
          value={this.state.body}
          required
          onChange={this.handleChange}
        />
        {errors.body && <div className="errorDiv">Content is required!</div>}
        <br />
        <label htmlFor="key-words">
          Key Words Instructions: separate words by comma
        </label>
        <input
          id="key-words"
          type="text"
          name="tags"
          placeholder="ex: moon, stars, purple"
          value={this.state.tags}
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
          disabled={!this.isValid()}
        >
          Submit
        </button>
      </form>
    );
  }
}
