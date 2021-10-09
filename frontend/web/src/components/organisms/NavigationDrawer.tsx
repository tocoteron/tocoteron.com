import React, { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { RoutePathWithDescription } from "../../routes";
import RestrictedLink from "../../routes/RestrictedLink";

interface Props {
  navigations: RoutePathWithDescription[];
}

const NavigationDrawer: React.FC<Props> = ({ navigations }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <IconButton
        ref={btnRef}
        onClick={onOpen}
        variant="outline"
        isRound
        icon={<HamburgerIcon />}
        aria-label="Open navigation drawer"
      />
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>You gonna go:</DrawerHeader>

          <DrawerBody>
            {navigations.map((navigation) => (
              <RestrictedLink key={navigation.path} to={navigation.path}>
                <Heading>{navigation.summary}</Heading>
              </RestrictedLink>
            ))}
          </DrawerBody>

          <DrawerFooter />
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavigationDrawer;
