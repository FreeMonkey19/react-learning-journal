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

  render() {
    return (
      <form>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          name="author"
          placeholder="author"
          value={this.state.author}
          onChange={this.handleChange}
        />
        <input
          type="textarea"
          name="body"
          placeholder="body"
          value={this.state.body}
          onChange={this.handleChange}
        />
        <br />
        <label>Tags ex: red, green, blue</label>
        <input
          type="text"
          name="tags"
          placeholder="tags"
          value={this.state.tags}
          onChange={this.handleChange}
        />
        <br />

        <button onClick={this.handleSubmit} type="submit">
          Submit
        </button>
      </form>
    );
  }
}
