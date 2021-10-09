import React from "react";
import { Flex, HStack, Spacer } from "@chakra-ui/react";
import NavigationDrawer from "../organisms/NavigationDrawer";
import ColorModeToggleButton from "../atoms/ColorModeToggleButton";
import { navigations } from "../../routes";

const Header: React.FC = () => (
  <Flex as="header" w="full" px={4} py={4}>
    <HStack>
      <NavigationDrawer navigations={navigations} />
      <ColorModeToggleButton />
    </HStack>
    <Spacer />
  </Flex>
);

export default Header;
