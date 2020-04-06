import React from "react";
import { gql } from "apollo-boost";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

import config from "../../config.js";

const DimensionsMenu = () => {
  const { dimensions } = config;
  return (
    <div className="DimensionsMenu">
      <Grid container spacing={2}>
        {dimensions.map(dim => (
          <Grid key={dim} item xs={12} sm={4} md={2}>
            <Link to={`/app/${dim}`}>{dim}</Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DimensionsMenu;
