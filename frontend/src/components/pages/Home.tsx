import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import HomeTemplate from "../templates/Home";

export default function HomePage(): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box minW="100vw" minH="100vh">
      <Flex as="header" w="full" px={8} py={4}>
        <Spacer />
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </Flex>
      <Container>
        <HomeTemplate />
      </Container>
    </Box>
  );
}
