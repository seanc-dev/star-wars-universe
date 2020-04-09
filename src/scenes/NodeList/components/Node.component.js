import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { v4 as uuidv4 } from "uuid";

import schema from "../schema/NodeList.schema";
import "../styles/NodeList.css";

const Node = (props) => {
  const { dimension, data, id } = props;
  return (
    <div>
      <Link to={`/app/${dimension}/${id}`}>
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h6" component="h3">
                {data[schema.displayFieldName[dimension]]}
              </Typography>
              <ul>
                <Typography variant="body2" color="textSecondary" component="p">
                  {schema.additionalDetail[dimension].map((detail) => {
                    return (
                      <li key={uuidv4()}>
                        {`${detail.displayName} ${
                          detail.accessFn
                            ? detail.accessFn(data[detail.fieldName])
                            : data[detail.fieldName]
                        }`}
                      </li>
                    );
                  })}
                </Typography>
              </ul>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </div>
  );
};

export default Node;
