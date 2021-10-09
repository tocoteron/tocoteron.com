import React from "react";
import { Switch } from "react-router-dom";
import RestrictedRoute from "./RestrictedRoute";
import HomePage from '../components/pages/HomePage';

const Routes: React.FC = () => (
  <Switch>
    <RestrictedRoute exact path="/">
      <HomePage />
    </RestrictedRoute>
  </Switch>
);

export default Routes;
