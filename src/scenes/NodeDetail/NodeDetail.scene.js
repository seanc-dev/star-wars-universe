import React from "react";
import { useQuery } from "@apollo/react-hooks";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { v4 as uuidv4 } from "uuid";

import schema from "./schema/NodeDetail.schema";
import queries from "./NodeDetail.queries.js";

function NodeDetail(props) {
  const { dimension, id } = props.match.params;
  const { loading, error, data } = useQuery(queries[dimension], {
    variables: { id },
  });
  let nodeData;

  if (!loading) {
    nodeData = data[dimension];
    console.log(nodeData);
  }
  if (loading) return <p>Loading...</p>;
  if (error) {
    alert("error");
    console.log(error);
    return <p>Error :(</p>;
  }
  console.log(schema[dimension].detailsDimensions);
  return (
    <div>
      <Card>
        {loading ? (
          <div>Loading..</div>
        ) : (
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h3">
                {nodeData[schema[dimension].displayFieldName]}
              </Typography>
              {schema[dimension].detailsDimensions.map((detailDimObj) => (
                <div>
                  <Typography variant="h7" component="h4">
                    {detailDimObj.detailDimensionDisplayName}
                  </Typography>
                  {detailDimObj.detailsArray.map((detailObj) => (
                    <ul>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        <li key={uuidv4()}>
                          {`${detailObj.detailDisplayName} ${
                            detailObj.accessFn
                              ? detailObj.accessFn(
                                  nodeData[detailObj.detailFieldName]
                                )
                              : nodeData[detailObj.detailFieldName]
                          }`}
                        </li>
                      </Typography>
                    </ul>
                  ))}
                </div>
              ))}
            </CardContent>
          </CardActionArea>
        )}
      </Card>
    </div>
  );
}

export default NodeDetail;
