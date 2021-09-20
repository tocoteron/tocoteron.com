import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import HomePage from "./components/pages/Home";

function App(): JSX.Element {
  return (
    <ChakraProvider>
      <HomePage />
    </ChakraProvider>
  );
}

export default App;
