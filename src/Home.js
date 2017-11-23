import React, { Component } from "react";

import "./Home.css";

import Store from "./mobx-playground";

class Home extends Component {
  createStore() {
    // create an instance from a snapshot
    const store = Store.create({
      todos: [
        {
          title: "Get coffee"
        },
        {
          title: "Get carrots"
        }
      ]
    });

    console.log("new store", store);
  }

  render() {
    return (
      <div className="Home">
        <br />
        <br />
        <br />
        <button onClick={this.createStore}>
          Click me, then look at console
        </button>
      </div>
    );
  }
}

export default Home;
