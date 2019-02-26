import React, { Component } from "react";

export class NewPost extends Component {
  state = {
    title: "",
    author: "",
    createdOn: "",
    body: "",
    tags: []
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      title: "",
      author: "",
      createdOn: "",
      body: "",
      tags: []
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
        <input
          type="text"
          placeholder="tags"
          value={this.state.tags}
          onChange={e => this.setState({ tags: e.target.value })}
        />
        <br />
        <button onClick={this.handleSubmit} type="submit">
          Submit
        </button>
      </form>
    );
  }
}
