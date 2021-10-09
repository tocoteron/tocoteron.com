import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";
import { RoutePath } from ".";

interface Props extends React.ComponentProps<typeof Link> {
  to: RoutePath;
}

// Use this component to define route instead of react-router-dom's Link component
const RestrictedLink: React.FC<Props> = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Link as={ReactRouterLink} {...props} />
);

export default RestrictedLink;
