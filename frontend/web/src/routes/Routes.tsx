import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from '../components/pages/HomePage';

const routes: React.FC = () => (
  <Switch>
    <Route exact path="/">
      <HomePage />
    </Route>
  </Switch>
);

export default routes;
