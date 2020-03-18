import React from "react";

import SubNode from './SubNode';

import "./TopNode.css";
import schemaJSON from "./schema.json";

function TopNode(props) {
  const { nodeData, dataType } = props;
  const schema = schemaJSON[dataType].data;
  const generateListItems = (schema, data) => {
    return schema.properties.map(prop => {
      const { displayName, propName } = prop;
      return (
        <li key={propName}>{`${displayName}: ${
          data[schema.propName][propName]
        }`}</li>
      );
    });
  };
  const generateLinks = connections => {
    console.log(connections);
    const subNodes;
    for (let key of connections) {
      const urlData = connections[key]
      subNodes += <SubNode key={key} dim={key} urlData={urlData} />
    }
    return 
  };
  return (
    <div className="TopNode">
      <h1>{schema.name.displayName}</h1>
      {schema.enumerableProperties.map(eProp => {
        return (
          <div key={eProp.displayName}>
            <h3>{eProp.displayName}</h3>
            <ul className="TopNode-list">
              {generateListItems(eProp, nodeData)}
            </ul>
            <div className="TopNode-links">
              {generateLinks(nodeData.connections)}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TopNode;
