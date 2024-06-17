import {
  Box,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  useColorModeValue,
  useMediaQuery,
  useModalContext,
} from "@chakra-ui/react";
import tokens from "@vygruppen/spor-design-tokens";
import { CloseFill24Icon, CloseFill30Icon } from "@vygruppen/spor-icon-react";
import React, { useEffect, useState } from "react";
import { Button, IconButton } from "../button";
import { createTexts, useTranslation } from "../i18n";
import { Drawer } from "./Drawer";
import { DrawerBodyProps } from "./SimpleDrawer";

type DrawerPlacement = "top" | "right" | "bottom" | "left";

type FullScreenDrawerProps = {
  /** The content inside the drawer */
  children: React.ReactNode;
  /** The title in the middle of the top menu */
  title?: String;
  /** Determines which side the drawer slides from */
  placement?: DrawerPlacement;
  /** A React component that will be placed to the left in the modal header */
  leftButton?: React.ReactNode;
  /** A React component that will be placed to the right in the modal header */
  rightButton?: React.ReactNode;
  /** Determines if the drawer is open or closed */
  isOpen: boolean;
  /** Function that will be called when the drawer closes */
  onClose: () => void;
  /** Props for drawer body */
  body?: DrawerBodyProps;
};

export const FullScreenDrawer = ({
  children,
  title,
  placement = "bottom",
  leftButton = null,
  rightButton = <DrawerCloseButton />,
  isOpen,
  onClose,
  body,
}: FullScreenDrawerProps) => {
  const [isContentBoxScrolled, setContentBoxScrolled] = useState(false);

  const onContentScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const target = e.target as HTMLDivElement;

    if (target.scrollTop <= 0) {
      setContentBoxScrolled(false);
      return;
    }
    setContentBoxScrolled(true);
  };

  useEffect(() => {
    setContentBoxScrolled(false);
  }, [isOpen]);

  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement={placement} size="full">
      <DrawerOverlay />
      <DrawerContent
        height="100vh"
        backgroundSize="100% 285px, 100%"
        backgroundPosition="top"
        backgroundRepeat="no-repeat"
      >
        <DrawerTopMenu
          isScrolled={isContentBoxScrolled}
          title={title}
          leftButton={leftButton}
          rightButton={rightButton}
        />
        <DrawerBody overflow="auto" onScroll={onContentScroll} {...body}>
          {children}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

type DrawerTopMenuProps = {
  /** Optional title */
  title?: String;
  leftButton?: React.ReactNode;
  rightButton?: React.ReactNode;
  /** Whether or not the context this menu is placed in is scrolled */
  isScrolled: boolean;
};

const DrawerTopMenu = ({
  title,
  leftButton,
  rightButton,
  isScrolled,
}: DrawerTopMenuProps) => {
  const backgroundColor = useColorModeValue(
    "bg.default.light",
    "bg.default.dark",
  );

  return (
    <Flex
      width="100%"
      backgroundColor={backgroundColor}
      position="static"
      paddingTop={[1.5, 2.5, 3, 3]}
      paddingBottom={[1.5, 2.5, 3, 3]}
      paddingLeft={[2, 3, 6, 9]}
      paddingRight={[2, 3, 6, 9]}
      transition="box-shadow 0.2s"
      boxShadow={isScrolled ? "md" : undefined}
      fontFamily="Vy Sans"
    >
      <Box flex="1">{leftButton}</Box>
      <DrawerHeader
        as="h2"
        fontSize="md"
        fontWeight="bold"
        textAlign="center"
        flex="1"
        margin={0}
        padding={0}
      >
        {title}
      </DrawerHeader>
      <Box flex="1">
        <Box width="fit-content" marginLeft="auto">
          {rightButton}
        </Box>
      </Box>
    </Flex>
  );
};

const DrawerCloseButton = () => {
  const { onClose } = useModalContext();
  const { t } = useTranslation();

  const [isScreenSizeMinSm] = useMediaQuery(
    `(min-width: ${tokens.size.breakpoint.sm})`,
  );

  if (isScreenSizeMinSm) {
    return (
      <Button
        variant="ghost"
        leftIcon={<CloseFill24Icon />}
        onClick={onClose}
        aria-label={t(texts.close)}
        width="fit-content"
        marginLeft="auto"
      >
        {t(texts.close)}
      </Button>
    );
  }

  return (
    <IconButton
      variant="ghost"
      icon={<CloseFill30Icon />}
      onClick={onClose}
      aria-label={t(texts.close)}
    />
  );
};

const texts = createTexts({
  close: {
    nb: "Lukk",
    nn: "Lukk",
    en: "Close",
    sv: "Stäng",
  },
});
