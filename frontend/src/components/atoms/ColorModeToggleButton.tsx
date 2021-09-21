import React from "react";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ColorModeToggleButton: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      variant="outline"
      isRound
      aria-label="Toggle color mode"
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
    />
  );
};

export default ColorModeToggleButton;
