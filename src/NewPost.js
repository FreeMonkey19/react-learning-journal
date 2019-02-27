import React, { Component } from "react";

export class NewPost extends Component {
  state = {
    title: "",
    author: "",
    createdOn: "",
    body: "",
    tags: ""
  };

  convertTagsToArray = tags => {
    let resultArray = [];

    if (tags != null) {
      const splitOn = ",";

      resultArray = tags.split(splitOn);
      resultArray = resultArray.map(function(str) {
        return str.trim();
      });
    }

    return resultArray;
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    //manipulate state, to prepare for saving
    const resultArray = this.convertTagsToArray(this.state.tags);
    let blogPost = Object.assign({}, this.state);
    blogPost.tags = resultArray;
    console.log(blogPost);

    // save blogPost

    //clearing the form
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
        />
        <br />
        <input
          type="text"
          name="author"
          placeholder="author"
          value={this.state.author}
          onChange={this.handleChange}
        />
        <br />
        <input
          name="createdOn"
          placeholder="createdOn"
          value={this.state.createdOn}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="textarea"
          name="body"
          placeholder="body"
          value={this.state.body}
          onChange={this.handleChange}
        />
        <br />
        <label>Tags eg: red, green, blue</label>
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
