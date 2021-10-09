import React from "react";
import { Switch } from "react-router-dom";
import RestrictedRoute from "./RestrictedRoute";
import HomePage from "../components/pages/HomePage";
import BlogPage from "../components/pages/BlogPage";

const Routes: React.FC = () => (
  <Switch>
    <RestrictedRoute exact path="/">
      <HomePage />
    </RestrictedRoute>
    <RestrictedRoute exact path="/blog">
      <BlogPage />
    </RestrictedRoute>
  </Switch>
);

export default Routes;
