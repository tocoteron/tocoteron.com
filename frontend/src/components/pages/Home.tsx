import React from "react";
import { Container } from "@chakra-ui/react";
import HomeTemplate from "../templates/Home";

export default function HomePage(): JSX.Element {
  // const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container>
      <HomeTemplate />
    </Container>
  );
}
