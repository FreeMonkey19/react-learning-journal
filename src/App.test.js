import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { render } from "react-testing-library";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders a message", () => {
  const { getByText } = render(<App />);
  const message = getByText("Hello there");
  expect(message).toBeInTheDocument();
  expect(message).toHaveClass("message");
  expect(message).toBeVisible();
});
