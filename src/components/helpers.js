import axios from "axios";

import schema from "../displaySchema.json";

const fn = {
  formatData: function(data, dataDim) {
    // get formats
    const {
      dimensionEnumerablePropertiesArray,
      dimensionConnectionsArray
    } = schema[dataDim].data;
    // apply properties
    const dataObj = { name: data.name, connections: {} };
    dimensionEnumerablePropertiesArray.map(ePropObj => {
      dataObj[ePropObj.enumerablePropertyDimensionName] = {};
      ePropObj.enumerablePropertiesArray.map(prop => {
        dataObj[ePropObj.enumerablePropertyDimensionName][
          prop.enumerablePropertyName
        ] = data[prop.enumerablePropertyName];
      });
    });
    // apply connections
    const connectionNamesArray = dimensionConnectionsArray.map(
      a => a.connectionName
    );
    connectionNamesArray.map(connectionName => {
      const {
        connectionDisplayName,
        isConnectionIterable
      } = dimensionConnectionsArray.find(
        obj => obj.connectionName === connectionName
      );
      // convert url strings to single object arrays
      const urlArray = isConnectionIterable
        ? data[connectionName]
        : [data[connectionName]];
      // omit if empty
      if (urlArray.length >= 1)
        dataObj.connections[connectionName] = {
          displayName: connectionDisplayName,
          urlArray: urlArray
        };
    });
    return dataObj;
  },
  getDataList: async function(url) {
    function getDetail(apiURL) {
      axios.get(apiURL).then(function(response) {
        showDetail(response.data);
      });
    }
    function showDetail(apiResponse) {
      for (let i = 0; i < apiResponse.results.length; i++) {
        data.push(apiResponse.results[i].name);
      }
      if (apiResponse.next) {
        getDetail(apiResponse.next);
      } else {
        return data;
      }
    }
    let data = [];
    getDetail("https://swapi.co/api/people");
  },
  capitaliseEachWord: function(str) {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
};

export default fn;

// data: {
//   name,
//   demographics: {
//     height,
//     mass,
//     hair_color,
//     skin_color,
//     eye_color,
//     birth_year,
//     gender
//   },
//   connections: {
//     species: []
//     homeworld: ""
//     starships: []
//     vehicles: []
//   }
// },
