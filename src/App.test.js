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
    body: `No worries. No cares. Just float and wait for the wind to blow you around. Just use the old one inch brush. Now we don't want him to get lonely, so we'll give him a little friend. In life you need colors.
      When things happen - enjoy them. They're little gifts. Just a happy little shadow that lives in there. Little trees and bushes grow however makes them happy. They say everything looks better with odd numbers of things. But sometimes I put even numbers—just to upset the critics. It's all a game of angles.
      These trees are so much fun. I get started on them and I have a hard time stopping. You can do it. Only eight colors that you need. Be so very light. Be a gentle whisper.
      Decide where your cloud lives. Maybe he lives right in here. Trees get lonely too, so we'll give him a little friend. Get tough with it, get strong.
      Everybody's different. Trees are different. Let them all be individuals. Trees live in your fan brush, but you have to scare them out. All you have to do is let your imagination go wild.
      Only God can make a tree - but you can paint one. Don't be afraid to make these big decisions. Once you start, they sort of just make themselves. There is no right or wrong - as long as it makes you happy and doesn't hurt anyone. Work on one thing at a time. Don't get carried away - we have plenty of time. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul.
      Let your heart take you to wherever you want to be. Zip. That easy. I guess I'm a little weird. I like to talk to trees and animals. That's okay though; I have more fun than most people. Let's make some happy little clouds in our world. And just raise cain. We artists are a different breed of people. We're a happy bunch.`,
    tags: ["trees", "rocks"]
  };

  const { getByText } = render(<BlogPost post={post} />);
  expect(getByText(post.title)).toBeInTheDocument();
  expect(getByText(post.title)).toHaveClass("post-title");
});
