import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Box, ChakraProvider, Flex, HStack, Spacer } from "@chakra-ui/react";
import Routes, { navigations } from "./routes";
import NavigationDrawer from "./components/organisms/NavigationDrawer";
import ColorModeToggleButton from "./components/atoms/ColorModeToggleButton";
import "./App.css";

const App: React.FC = () => (
  <BrowserRouter>
    <ChakraProvider>
      <Box minW="100vw" minH="100vh">
        <Flex as="header" w="full" px={4} py={4}>
          <HStack>
            <NavigationDrawer navigations={navigations} />
            <ColorModeToggleButton />
          </HStack>
          <Spacer />
        </Flex>
        <Routes />
      </Box>
    </ChakraProvider>
  </BrowserRouter>
);

export default App;
