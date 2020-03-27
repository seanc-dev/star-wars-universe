import React from "react";
import { Switch, Route } from "react-router-dom";

import TopNode from "./TopNode";
import NotFound from "./NotFound";

import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={TopNode} />
        <Route exact path="/:dimension/:id" component={TopNode} />
        <Route path="" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
