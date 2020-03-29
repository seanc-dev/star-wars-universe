import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";

import "./styles/index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

const client = new ApolloClient({
  uri: "https://swapi.graph.cool/"
});

client
  .query({
    query: gql`
      {
        Person(id: "cj0nv9pa9ewco0130v4ocnhed") {
          id
          name
          hairColor
          eyeColor
          gender
          mass
          height
          homeworld {
            id
            name
          }
          films {
            id
            title
          }
          species {
            id
            name
          }
          starships {
            id
            name
          }
          vehicles {
            id
            name
          }
        }
      }
    `
  })
  .then(result => console.log(result));

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
