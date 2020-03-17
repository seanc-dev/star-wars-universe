import axios from "axios";

import schema from "./schema.json";

const fn = {
  fetchData: async function(url, dataDim) {
    // get data
    const { data } = await axios.get(url);
    const { enumerableProperties, connections } = schema[dataDim].data;
    console.log(data);
    console.log(connections);
    // apply properties
    const dataObj = { name: data.name, connections: {} };
    for (let property in enumerableProperties) {
      const ePropObj = enumerableProperties[property];
      dataObj[ePropObj.propName] = {};
      ePropObj.properties.map(
        prop =>
          (dataObj[ePropObj.propName][prop.propName] = data[prop.propName])
      );
    }
    // apply connections
    connections.map(connection => {
      dataObj.connections[connection.name] = data[connection.name];
    });
    return dataObj;
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
