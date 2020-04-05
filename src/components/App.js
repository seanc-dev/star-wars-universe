import React from "react";
import { Switch, Route } from "react-router-dom";

import NodeList from "./NodeList";
import Node from "./Node";
import NotFound from "./NotFound";
import { useQuery } from "@apollo/react-hooks";

import queries from "../queries";

import "../styles/App.css";

function App() {
  const { loading, error, data } = useQuery(queries.nodeList);
  return (
    <div className="App">
      {loading ? (
        <p>Loading..</p>
      ) : (
        <div>
          <NodeList data={data} />
          <Switch>
            <Route exact path="/" component={Node} />
            <Route exact path="/:dimension/:id" component={Node} />
            <Route path="" component={NotFound} />
          </Switch>
        </div>
      )}
    </div>
  );
}

export default App;
