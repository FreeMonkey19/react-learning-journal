import React, { Component } from "react";
import { data } from "./data";

export class NewPost extends Component {
  state = {
    id: 0,
    title: "",
    author: "",
    createdOn: "",
    body: "",
    tags: ""
  };

  createDateOnSubmit = () => {
    const date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    const dateNow = `${year}-${month + 1}-${day}`;
    return dateNow;
  };

  createUniqueIdOnSubmit = () => {
    const id = data.length;
    return id;
  };

  convertTagsToArray = tags => {
    let resultArray = [];
    const splitOn = ",";

    resultArray = tags.split(splitOn);
    resultArray = resultArray.map(function(str) {
      return str.trim();
    });

    return resultArray;
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

    data.push(blogPost);
    console.log(blogPost);

    this.setState({
      title: "",
      author: "",
      createdOn: "",
      body: "",
      tags: ""
    });
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
          required
        />
        <br />
        <input
          type="text"
          name="author"
          required="required"
          value={this.state.author}
          onChange={this.handleChange}
        />
        <input
          type="textarea"
          name="body"
          placeholder="body"
          required="required"
          value={this.state.body}
          onChange={this.handleChange}
        />
        <br />
        <label>Tags ex: red, green, blue</label>
        <input
          type="text"
          name="tags"
          placeholder="tags"
          required="required"
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
