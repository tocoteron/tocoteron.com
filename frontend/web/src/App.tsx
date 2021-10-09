import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Routes from "./routes";
import Header from "./components/templates/Header";
import "./App.css";

const App: React.FC = () => (
  <BrowserRouter>
    <ChakraProvider>
      <Box minW="100vw" minH="100vh">
        <Header />
        <Routes />
      </Box>
    </ChakraProvider>
  </BrowserRouter>
);

export default App;
