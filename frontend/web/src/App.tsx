import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Box, ChakraProvider, Flex, Spacer } from "@chakra-ui/react";
import Routes from "./routes/Routes";
import ColorModeToggleButton from "./components/atoms/ColorModeToggleButton";
import "./App.css";

const App: React.FC = () => (
  <ChakraProvider>
    <Box minW="100vw" minH="100vh">
      <Flex as="header" w="full" px={4} py={4}>
        <Spacer />
        <ColorModeToggleButton />
      </Flex>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Box>
  </ChakraProvider>
);

export default App;
