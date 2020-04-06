import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

const NodeList = props => {
  const { data } = props;
  const keys = Object.keys(data);
  return (
    <div className="DimensionList">
      <Grid container spacing={2}>
        {keys.map(key => (
          <Grid key={key} item xs={12} sm={4} md={2}>
            <Link to={`/${data[key][0].__typename.toLowerCase()}`}>
              {data[key][0].__typename}
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default NodeList;
