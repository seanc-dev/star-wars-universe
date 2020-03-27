import React from "react";
import { Link } from "react-router-dom";

import "../styles/SubNode.css";

function SubNode(props) {
  console.log(props);
  const { dim, name, urlArray } = props;
  return (
    <div className="SubNode">
      <h3 className="SubNode-header">{name}</h3>
      <ul className="SubNode-list">
        {urlArray.map(url => (
          <div>{url}</div>
        ))}
      </ul>
    </div>
  );
}

export default SubNode;
