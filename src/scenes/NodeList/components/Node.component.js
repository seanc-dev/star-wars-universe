import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import schema from "../schema/NodeList.schema";
import "../styles/NodeList.css";

const Node = props => {
  const { data, dimKey } = props;
  return (
    <div>
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h3">
              {data[schema.displayFieldName[dimKey]]}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <ul>
                {schema.additionalDetail[dimKey].map(detail => {
                  debugger;
                  return (
                    <li>
                      {`${detail.displayName} ${
                        detail.accessFn
                          ? detail.accessFn(data[detail.fieldName])
                          : data[detail.fieldName]
                      }`}
                    </li>
                  );
                })}
              </ul>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Node;
