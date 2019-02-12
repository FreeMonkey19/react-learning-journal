import React, { Component } from "react";
import { Header } from "./Header.js";
import "./App.css";
import { AllPosts } from "./AllPosts";
import { BlogPost } from "./BlogPost";
import { data } from "./data.js";

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

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AllPosts allPosts={data} />
      </div>
    );
  }
}