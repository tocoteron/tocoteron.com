import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react"
import { RoutePath } from ".";

interface Props extends React.ComponentProps<typeof Link> {
  to: RoutePath;
}

// Use this component to define route instead of react-router-dom's Link component
// eslint-disable-next-line react/jsx-props-no-spreading
const RestrictedLink: React.FC<Props> = props => <Link as={ReactRouterLink} {...props} />

export default RestrictedLink
