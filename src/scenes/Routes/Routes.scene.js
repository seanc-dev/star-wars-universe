import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../Home/Home.scene.js";
import DimensionsMenu from "../Dimensions/Dimensions.scene";
import NodeList from "../NodeList/NodeList.scene";
import NodeDetail from "../NodeDetail/NodeDetail.scene";
import NotFound from "../../NotFound.component";

const RoutesScene = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />} />
        <Route exact path="/app" component={DimensionsMenu} />} />
        <Route exact path="/app/:dimension" component={NodeList} />
        <Route exact path="/app/:dimension/:id" component={NodeDetail} />
        <Route path="" component={NotFound} />
      </Switch>
    </div>
  );
};

export default RoutesScene;
