import React, { Component } from "react";
import { data } from "./data";

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
  };

  // function validate(title) {
  //   return {
  //     title: title.length === 0,
  //   };
  // }

  isValid = () => {
    const { title } = this.state;
    return title.length > 0;
  };

  render() {
    // const errors = validate(this.state.title)
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="blog-title">Title</label>
        <input
          id="blog-title"
          type="text"
          name="title"
          placeholder="title"
          value={this.state.title}
          required
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="author-name">Author</label>
        <input
          id="author-name"
          type="text"
          name="author"
          placeholder="author"
          value={this.state.author}
          required
          onChange={this.handleChange}
        />
        <label htmlFor="body-input">Content</label>
        <input
          id="body-input"
          type="textarea"
          name="body"
          placeholder="body"
          value={this.state.body}
          required
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="key-words">
          Key Words Instructions: separate words by comma
        </label>
        <input
          id="key-words"
          type="text"
          name="tags"
          placeholder="tags"
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
          disabled={!this.isValid()}
        >
          Submit
        </button>
      </form>
    );
  }
}
