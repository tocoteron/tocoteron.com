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
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons";

const NavigationDrawer: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<HTMLButtonElement>(null)

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
          <DrawerHeader>Where do u wanna visit</DrawerHeader>

          <DrawerBody>
            <div>/</div>
          </DrawerBody>

          <DrawerFooter />
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default NavigationDrawer;
