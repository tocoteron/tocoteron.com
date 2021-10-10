import React from "react";
import { Center, Spinner } from "@chakra-ui/react";

const LoadingDisplay: React.FC = () => (
  <Center h="80vh">
    <Spinner />
  </Center>
);

export default LoadingDisplay;
