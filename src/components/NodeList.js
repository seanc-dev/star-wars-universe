import React from "react";

const NodeList = props => {
  return (
    <div className="NodeList">
      <button onClick={() => props.history.goBack()}>Go Back</button>
    </div>
  );
};

export default NodeList;
