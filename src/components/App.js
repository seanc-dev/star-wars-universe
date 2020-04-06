import React from "react";
import { Switch, Route } from "react-router-dom";

import DimensionList from "./DimensionList";
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
      <h1>Explore the Star Wars Universe</h1>
      {loading ? (
        <p>Loading..</p>
      ) : (
        <div>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <DimensionList data={data} />}
            />
            <Route exact path="/:dimension" component={NodeList} />
            <Route exact path="/:dimension/:id" component={Node} />
            <Route path="" component={NotFound} />
          </Switch>
        </div>
      )}
    </div>
  );
}

export default App;
