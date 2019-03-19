import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { BlogPost } from "./BlogPost";
import { render, fireEvent } from "react-testing-library";
import { AllPosts } from "./AllPosts";
import { SinglePost } from "./SinglePost.js";
import { Router, Route } from "react-router";
import "jest-dom/extend-expect";
import { createMemoryHistory } from "history";
import { NewPost } from "./NewPost";
import saveBlogPost from "./lib/saveBlogPost";

jest.mock("./lib/saveBlogPost");

function renderWithRouter(
  ui,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history
  };
}

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders entire header", () => {
  const { getByText } = render(<App />);
  const title = getByText("A Seattle Coder's Learning Blog");
  expect(title).toBeInTheDocument();
  expect(title).toHaveClass("title");
  expect(title).toBeVisible();
});

it("renders main title and subtitle", () => {
  const { getByText } = render(<App />);
  const subtitle = getByText(
    "A Woman in Tech, Breaking Stereotypes and Broadening Inclusion."
  );
  expect(subtitle).toBeInTheDocument();
  expect(subtitle).toHaveClass("header-subtitle");
  expect(subtitle).toBeVisible();
});

it("renders main nav and nav links", () => {
  const { getByTitle } = render(<App />);
  const getMainNav = getByTitle("main-nav-bar");
  expect(getMainNav).toBeInTheDocument();
  expect(getMainNav).toHaveClass("main-nav");
  expect(getMainNav).toBeVisible();

  const getNavLinks = getByTitle("main-nav-link");
  expect(getNavLinks).toBeInTheDocument();
  expect(getNavLinks).toHaveClass("nav-link-container");
  expect(getNavLinks).toBeVisible();
});

it("renders a post", () => {
  const post = {
    id: 0,
    title: "Mary had a little lamb, little lamb, little lamb.",
    author: "Charlotte Mickey Mouse",
    createdOn: "2019-01-02",
    body: "No worries.",
    tags: ["trees", "rocks"]
  };

  const authorRegex = new RegExp(post.author);

  const { getByText } = renderWithRouter(
    <BlogPost post={post} previewMode={false} />
  );
  expect(getByText(post.title)).toBeInTheDocument();
  expect(getByText(post.title)).toHaveClass("post-title");

  expect(getByText(authorRegex)).toBeInTheDocument();
  expect(getByText(authorRegex)).toHaveClass("author-and-tag-buttons");

  const newDate = new RegExp("Publish Date:");

  expect(getByText(newDate)).toBeInTheDocument();
  expect(getByText(newDate)).toHaveClass("post-created-on");

  expect(getByText(post.body)).toBeInTheDocument();
  expect(getByText(post.body)).toHaveClass("post-body");

  const tagsString = new RegExp("Key Words:");
  expect(getByText(tagsString)).toBeInTheDocument();
  expect(getByText(tagsString)).toHaveClass(
    "author-tag-date-created-containers"
  );

  expect(getByText(post.tags[0])).toBeInTheDocument();
  expect(getByText(post.tags[1])).toBeInTheDocument();
});

it("renders all posts", () => {
  const posts = [
    {
      id: 0,
      title: "Mary had a little lamb, little lamb, little lamb.",
      author: "Charlotte Mickey Mouse",
      createdOn: "2019-01-02",
      body: `No worries. No cares.`,
      tags: ["trees", "rocks"]
    },
    {
      id: 1,
      title: "Two",
      author: "Dan",
      createdOn: "2018-12-28",
      body: `So often we avoid.`,
      tags: ["trees", "water"]
    },
    {
      id: 2,
      title: "Three and three and three and three and three three",
      author: "Charlotte Mickey Mouse",
      createdOn: "2018-12-29",
      body: `Isn't that fantastic`,
      tags: ["trees", "clouds"]
    },
    {
      id: 3,
      title: "Four",
      author: "Charlotte",
      createdOn: "2018-12-12",
      body: `Almost everything is going to`,
      tags: ["trees", "snow"]
    }
  ];

  const { getByText } = renderWithRouter(<AllPosts allPosts={posts} />);
  expect(getByText(posts[0].title)).toBeInTheDocument();
  expect(getByText(posts[1].title)).toBeInTheDocument();
});

it("renders single post after title click", () => {
  const postWeWant = {
    id: 0,
    title: "Mary had a little lamb, little lamb, little lamb.",
    author: "Charlotte Mickey Mouse",
    createdOn: "2019-01-02",
    body: `No worries. No cares.`,
    tags: ["trees", "rocks"]
  };
  const otherPost = {
    id: 1,
    title: "Two",
    author: "Dan",
    createdOn: "2018-12-28",
    body: `So often we avoid running water`,
    tags: ["trees", "water"]
  };
  const posts = [postWeWant, otherPost];

  const route = "/posts";

  const { getByText, queryByText } = renderWithRouter(
    <div>
      <Route
        exact
        path="/posts"
        component={() => <AllPosts allPosts={posts} />}
      />
      <Route path="/posts/:id" component={SinglePost} />
    </div>,
    {
      route: route
    }
  );

  expect(getByText(postWeWant.title)).toBeInTheDocument();
  expect(getByText(otherPost.title)).toBeInTheDocument();

  fireEvent.click(getByText(postWeWant.title));
  expect(getByText(postWeWant.title)).toBeInTheDocument();
  expect(queryByText(otherPost.title)).not.toBeInTheDocument();
});

it("filter by author", () => {
  const postWeWant = {
    id: 0,
    title: "Mary had a little lamb, little lamb, little lamb.",
    author: "Charlotte Mickey Mouse",
    createdOn: "2019-01-02",
    body: `No worries. No cares.`,
    tags: ["trees", "rocks"]
  };
  const otherPost = {
    id: 1,
    title: "Two",
    author: "Dan",
    createdOn: "2018-12-28",
    body: `So often we avoid running water`,
    tags: ["trees", "water"]
  };
  const posts = [postWeWant, otherPost];

  const { getByText, queryByText } = renderWithRouter(
    <AllPosts allPosts={posts} />
  );

  expect(getByText(postWeWant.author)).toBeInTheDocument();
  expect(getByText(otherPost.author)).toBeInTheDocument();

  fireEvent.click(getByText(postWeWant.author));
  expect(getByText(postWeWant.author)).toBeInTheDocument();
  expect(queryByText(otherPost.author)).not.toBeInTheDocument();
});

it("filter by tag", () => {
  const postWeWant = {
    id: 0,
    title: "Mary had a little lamb, little lamb, little lamb.",
    author: "Charlotte Mickey Mouse",
    createdOn: "2019-01-02",
    body: `No worries. No cares.`,
    tags: ["pink", "purple"]
  };
  const otherPost = {
    id: 1,
    title: "Two",
    author: "Dan",
    createdOn: "2018-12-28",
    body: `So often we avoid running water`,
    tags: ["yellow", "red"]
  };
  const posts = [postWeWant, otherPost];

  const { getByText, queryByText } = renderWithRouter(
    <AllPosts allPosts={posts} />
  );

  expect(getByText(postWeWant.tags[0])).toBeInTheDocument();
  expect(getByText(otherPost.tags[1])).toBeInTheDocument();

  fireEvent.click(getByText(postWeWant.tags[0]));
  expect(getByText(postWeWant.tags[0])).toBeInTheDocument();
  expect(queryByText(otherPost.tags[1])).not.toBeInTheDocument();
});

it("allows submission of form when required form fields have a value", () => {
  const { queryByLabelText, getByText } = renderWithRouter(<NewPost />);
  const title = queryByLabelText("Title");
  expect(title).toBeInTheDocument();
  expect(title.value).toBe("");

  const author = queryByLabelText("Author");
  expect(author).toBeInTheDocument();
  expect(author.value).toBe("");

  const body = queryByLabelText("Content");
  expect(body).toBeInTheDocument();
  expect(body.value).toBe("");

  const button = getByText("Submit");
  expect(button).toBeInTheDocument();

  fireEvent.change(title, { target: { value: "a" } });
  expect(title.value).toBe("a");

  fireEvent.change(author, { target: { value: "a" } });
  expect(author.value).toBe("a");

  fireEvent.change(body, { target: { value: "a" } });
  expect(body.value).toBe("a");

  fireEvent.click(button);
  expect(saveBlogPost).toHaveBeenCalledWith(
    expect.objectContaining({
      title: "a",
      author: "a",
      body: "a"
    })
  );
});

it("allows submission of form when tags field has a value", () => {
  const { queryByLabelText, getByText } = renderWithRouter(<NewPost />);
  const title = queryByLabelText("Title");
  const author = queryByLabelText("Author");
  const body = queryByLabelText("Content");

  const tags = queryByLabelText("Key Words:");
  expect(tags).toBeInTheDocument();
  expect(tags.value).toBe("");

  const button = getByText("Submit");
  expect(button).toBeInTheDocument();

  fireEvent.change(title, { target: { value: "a" } });
  expect(title.value).toBe("a");

  fireEvent.change(author, { target: { value: "a" } });
  expect(author.value).toBe("a");

  fireEvent.change(body, { target: { value: "a" } });
  expect(body.value).toBe("a");

  fireEvent.change(tags, { target: { value: "a" } });
  expect(tags.value).toBe("a");

  fireEvent.click(button);
  expect(saveBlogPost).toHaveBeenCalledWith(
    expect.objectContaining({
      title: "a",
      author: "a",
      body: "a",
      tags: ["a"]
    })
  );
});

it("prevents submission of form and shows errors when required form fields are empty", () => {
  const { queryByLabelText, getByText } = renderWithRouter(<NewPost />);
  const title = queryByLabelText("Title");
  expect(title.value).toBe("");

  const author = queryByLabelText("Author");
  expect(author.value).toBe("");

  const body = queryByLabelText("Content");
  expect(body.value).toBe("");

  const tags = queryByLabelText("Key Words:");
  expect(tags.value).toBe("");

  const button = getByText("Submit");
  expect(button).toBeInTheDocument();

  fireEvent.click(button);
  expect(title).toHaveClass("error");
  expect(author).toHaveClass("error");
  expect(body).toHaveClass("error");
  expect(tags).not.toHaveClass("error");

  expect(saveBlogPost).not.toHaveBeenCalledWith(
    expect.objectContaining({
      title: "",
      author: "",
      body: "",
      tags: [""]
    })
  );
});
