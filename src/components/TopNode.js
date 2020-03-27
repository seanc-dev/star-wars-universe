import React, { Component } from "react";
import axios from "axios";

import SubNode from "./SubNode";

import "../styles/TopNode.css";
import schemaJSON from "../schema.json";
import fn from "./helpers";

class TopNode extends Component {
  static defaultProps = {
    seedURL: "https://swapi.co/api/people/4"
  };
  state = {
    loading: true,
    data: {}
  };
  async componentDidMount() {
    const response = await axios.get(this.props.seedURL);
    // format incoming data according to shape in schema.json
    const formattedData = fn.formatData(response.data, "people");
    const connectionKeysArray = Object.keys(formattedData.connections);
    const promises = Promise.all(
      connectionKeysArray.map(key => {
        const { urlArray } = formattedData.connections[key];
        // coerce to array where only 1 URL given as string
        if (typeof urlArray === "string")
          return Promise.all([axios.get(urlArray)]);
        return Promise.all(urlArray.map(url => axios.get(url)));
      })
    );
    promises.then(groupPromiseResult => {
      console.log(groupPromiseResult);
    });
    this.setState({ data: formattedData, loading: false }, () => {});
  }
  generateListItems = (schema, data) => {
    return schema.enumerablePropertiesArray.map(prop => {
      const { enumerablePropertyDisplayName, enumerablePropertyName } = prop;
      debugger;
      return (
        <li key={enumerablePropertyName}>{`${enumerablePropertyDisplayName}: ${
          data[schema.enumerablePropertyDimensionName][enumerablePropertyName]
        }`}</li>
      );
    });
  };
  generateSubNodes = (
    connectionNames,
    connectionData,
    connectionSchemaArray
  ) => {
    return connectionNames.map(connectionName => {
      const { connectionDisplayName } = connectionData.find(
        obj => obj.connectionName === connectionName
      );
      const connectionUrlArray = connectionData[connectionName];
      return (
        <SubNode
          key={connectionName}
          dim={connectionName}
          name={connectionDisplayName}
          urlArray={connectionUrlArray}
        />
      );
    });
  };
  render() {
    const { data, loading } = this.state;
    const connectionKeys = !loading ? Object.keys(data.connections) : null;
    // const { dimension } = this.props.match.params;
    // console.log(dimension);
    const dimension = "people";
    const schema = schemaJSON[dimension].data;
    return (
      <div className="TopNode">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <h1>{data.name}</h1>
            {schema.dimensionEnumerablePropertiesArray.map(eProp => {
              debugger;
              return (
                <div key={eProp.enumerablePropertyDisplayName}>
                  <h3>{eProp.enumerablePropertyDisplayName}</h3>
                  <ul className="TopNode-list">
                    {this.generateListItems(eProp, data)}
                  </ul>
                </div>
              );
            })}
            <div>
              {this.generateSubNodes(
                connectionKeys,
                data.connections,
                schema.dimensionConnectionsArray
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default TopNode;
