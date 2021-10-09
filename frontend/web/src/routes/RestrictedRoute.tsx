import React from "react";
import { Route } from "react-router-dom";
import { RoutePath } from ".";

interface Props extends React.ComponentProps<typeof Route> {
  path: RoutePath;
}

// Use this component to define route instead of react-router-dom's Route component
// eslint-disable-next-line react/jsx-props-no-spreading
const RestrictedRoute: React.FC<Props> = props => <Route {...props} />;

export default RestrictedRoute
