import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { BlogPost } from "./BlogPost";
import { render } from "react-testing-library";

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
  expect(getNavLinks).toHaveClass("nav-link");
  expect(getNavLinks).toBeVisible();
});

it("renders a post", () => {
  const post = {
    id: 0,
    title: "Mary had a little lamb, little lamb, little lamb.",
    author: "Charlotte Mickey Mouse",
    createdOn: "2019-01-02",
    body: `No worries.`,
    tags: ["trees", "rocks"]
  };

  const { getByText } = render(<BlogPost post={post} />);
  expect(getByText(post.title)).toBeInTheDocument();
  expect(getByText(post.title)).toHaveClass("post-title");
  expect(getByText(post.author)).toBeInTheDocument();
  expect(getByText(post.author)).toHaveClass("post-author");
  expect(getByText(post.createdOn)).toBeInTheDocument();
  expect(getByText(post.createdOn)).toHaveClass("date-created");
  expect(getByText(post.body)).toBeInTheDocument();
  expect(getByText(post.body)).toHaveClass("post-body");
  // expect(getByText(post.tags)).toBeInTheDocument();
  // expect(getByText(post.tags)).toHaveClass("post-tags");
});
