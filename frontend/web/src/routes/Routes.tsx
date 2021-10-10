import React from "react";
import { Switch } from "react-router-dom";
import RestrictedRoute from "./RestrictedRoute";
import HomePage from "../components/pages/HomePage";
import BlogPage from "../components/pages/BlogPage";
import BlogPostPage from "../components/pages/BlogPostPage";

const Routes: React.FC = () => (
  <Switch>
    <RestrictedRoute exact path="/">
      <HomePage />
    </RestrictedRoute>
    <RestrictedRoute exact path="/blog">
      <BlogPage />
    </RestrictedRoute>
    <RestrictedRoute exact path="/blog/:postId">
      <BlogPostPage />
    </RestrictedRoute>
  </Switch>
);

export default Routes;
