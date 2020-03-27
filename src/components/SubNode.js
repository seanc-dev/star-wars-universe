import React from "react";
import { Link } from "react-router-dom";

import "../styles/SubNode.css";

function SubNode(props) {
  console.log(props);
  const { dim, displayName, urlArray } = props;
  return (
    <div className="SubNode">
      <h3 className="SubNode-header">{displayName}</h3>
      <ul className="SubNode-list">
        {urlArray.map(url => (
          <li>{url}</li>
        ))}
      </ul>
    </div>
  );
}

export default SubNode;
