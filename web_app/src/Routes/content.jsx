import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "../Pages/Home";
import NFT from "../Pages/PurschaseArea";
import NotFound from "../Pages/NotFound/NotFound";


const Content = (props) => (
  <main className="Content">
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/page2">
        <NFT />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </main>
);

export default Content;
