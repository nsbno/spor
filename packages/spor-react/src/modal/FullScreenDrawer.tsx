import {
  Box,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  useColorModeValue,
  useMediaQuery,
  useModalContext,
} from "@chakra-ui/react";
import tokens from "@vygruppen/spor-design-tokens";
import { CloseFill30Icon } from "@vygruppen/spor-icon-react";
import React, { useEffect, useState } from "react";
import { Button, IconButton } from "../button";
import { createTexts, useTranslation } from "../i18n";
import { Drawer } from "./Drawer";

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
};

export const FullScreenDrawer = ({
  children,
  title = "",
  placement = "bottom",
  leftButton = null,
  rightButton = <DrawerCloseButton />,
  isOpen,
  onClose,
}: FullScreenDrawerProps) => {
  const [isContentBoxScrolled, setIsContentBoxScrolled] = useState(false);

  const onContentScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const target = e.target as HTMLDivElement;

    if (target.scrollTop <= 0) {
      setIsContentBoxScrolled(false);
      return;
    }
    setIsContentBoxScrolled(true);
  };

  useEffect(() => {
    setIsContentBoxScrolled(false);
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
        <Box overflow="auto" onScroll={onContentScroll}>
          {children}
        </Box>
      </DrawerContent>
    </Drawer>
  );
};

type DrawerTopMenuProps = {
  title?: String;
  leftButton?: React.ReactNode;
  rightButton?: React.ReactNode;
  isScrolled: boolean;
};

const DrawerTopMenu = ({
  title,
  leftButton,
  rightButton,
  isScrolled,
}: DrawerTopMenuProps) => {
  const { headerId, setHeaderMounted } = useModalContext();
  useEffect(() => {
    setHeaderMounted(true);
    return () => setHeaderMounted(false);
  });
  const backgroundColor = useColorModeValue(
    "bg.default.light",
    "bg.default.light",
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
    >
      <Box flex="1">{leftButton}</Box>
      <Heading
        as="h2"
        fontSize="md"
        fontWeight="bold"
        textAlign="center"
        flex="1"
        id={headerId}
      >
        {title}
      </Heading>
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
        leftIcon={<CloseFill30Icon />}
        onClick={onClose}
        aria-label={t(texts.close)}
        width="fit-content"
        marginLeft={"auto"}
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
