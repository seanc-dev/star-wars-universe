import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import Node from "./components/Node.component";
import NotFound from "../../NotFound.component";

import queries from "./NodeList.queries.js";
import schema from "./schema/NodeList.schema.js";

const NodeList = (props) => {
  const { dimension } = props.match.params;
  const { loading, error, data } = useQuery(queries[dimension]);
  let dimKey, nodeArray;
  if (error) {
    alert(`Error!`);
    console.log(error);
  }
  if (!loading) {
    [dimKey] = Object.keys(data);
    nodeArray = data[dimKey];
    nodeArray.sort(schema.sortingFunctions[dimKey][0].fn);
    console.log(nodeArray);
  }
  return (
    <div className="NodeList">
      <Container>
        {error ? (
          <NotFound />
        ) : loading ? (
          <Typography gutterBottom variant="h5" component="h2">
            Loading...
          </Typography>
        ) : (
          <div>
            <Grid container>
              <Grid item xs={12}>
                <Link to="/app">Back</Link>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              {nodeArray.map((node) => (
                <Grid key={node.name} item xs={12} sm={4} md={2}>
                  <Node dimKey={dimKey} data={node} />
                </Grid>
              ))}
            </Grid>
          </div>
        )}
      </Container>
    </div>
  );
};

export default NodeList;
