import React, { Component } from "react";
import { Route } from "react-router-dom";

import TopNode from "./TopNode";

import "./App.css";
import fn from "./helpers";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: {}
    };
  }
  render() {
    return (
      <div className="App">
        <Route exact path="/:dimension/:id" component={TopNode} />
        {this.state.loading ? (
          <div>Loading..</div>
        ) : (
          <TopNode nodeData={this.state.data} dataType={"people"} />
        )}
      </div>
    );
  }
  componentDidMount() {
    fn.fetchData("https://swapi.co/api/people/5", "people").then(data => {
      this.setState({ data: data, loading: false });
    });
  }
}

export default App;
