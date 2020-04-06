import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";

import queries from "./NodeDetail.queries.js";
import fn from "../../services/helpers";

function TopNode({ match }) {
  const { dimension, id } = match.params;
  const [queryData, setQueryData] = useState({});
  let { loading, error, data } = useQuery(queries[dimension], {
    variables: { id }
  });

  useEffect(() => {
    if (!loading) setQueryData(data[fn.capitaliseEachWord(dimension)]);
  }, [loading, data, dimension]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <div>{queryData.name}</div>;
}

export default TopNode;
