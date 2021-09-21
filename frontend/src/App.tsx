import React from "react";
import { Box, ChakraProvider, Flex, Spacer } from "@chakra-ui/react";
import "./App.css";
import HomePage from "./components/pages/HomePage";
import ColorModeToggleButton from "./components/atoms/ColorModeToggleButton";

const App: React.FC = () => (
  <ChakraProvider>
    <Box w="100vw" h="100vh">
      <Flex as="header" w="full" px={4} py={4}>
        <Spacer />
        <ColorModeToggleButton />
      </Flex>
      <HomePage />
    </Box>
  </ChakraProvider>
);

export default App;
