import React from "react";
import { Box, Button, Flex, Spacer, useColorMode } from "@chakra-ui/react";

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
    </Box>
  );
}
