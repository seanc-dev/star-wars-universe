import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const ALL_DATA = gql`
  query {
    allPersons {
      id
      name
    }
    allFilms {
      id
      title
    }
    allPlanets {
      id
      name
    }
    allSpecies {
      id
      name
    }
    allStarships {
      id
      name
    }
    allVehicles {
      id
      name
    }
  }
`;

const NodeList = props => {
  const { loading, error, data } = useQuery(ALL_DATA);
  return (
    <div className="NodeList">
      <button onClick={() => props.history.goBack()}>Go Back</button>
    </div>
  );
};

export default NodeList;
