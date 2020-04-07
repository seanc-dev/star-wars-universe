import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Explore the Star Wars Universe</h1>
      <h2>
        This app provides an interactive walkthrough of the Star Wars Universe.
      </h2>
      <Link to="/app">
        <h3>Click here to get started</h3>
      </Link>
    </div>
  );
};

export default Home;
