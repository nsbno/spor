import {
  Box,
  DrawerContent,
  Flex,
  Text,
  useColorModeValue,
  useMediaQuery,
  useModalContext,
  useToken,
} from "@chakra-ui/react";
import { CloseFill30Icon } from "@vygruppen/spor-icon-react";
import React, { useEffect, useState } from "react";
import { Button, IconButton } from "../button";
import { createTexts, useTranslation } from "../i18n";
import { Drawer } from "./Drawer";
import tokens from "@vygruppen/spor-design-tokens";

type DrawerPlacement = "top" | "right" | "bottom" | "left";
type DrawerSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";

type FullScreenDrawerProps = {
  children: React.ReactNode;
  title?: String;
  placement?: DrawerPlacement;
  size?: DrawerSize;
  leftButton?: React.ReactNode;
  rightButton?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export const FullScreenDrawer = ({
  children,
  title,
  placement = "bottom",
  size = "full",
  leftButton = null,
  rightButton = <DrawerCloseButton />,
  isOpen,
  onClose,
}: FullScreenDrawerProps) => {
  const [isContentBoxScrolled, setIsContentBoxScrolled] = useState(false);

  const OnContentScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
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
    <Drawer isOpen={isOpen} onClose={onClose} placement={placement} size={size}>
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
        <Box overflow="auto" onScroll={(e) => OnContentScroll(e)}>
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
  const backgroundColor = useToken(
    "colors",
    useColorModeValue("white", "black"),
  );

  const boxShadowColor = useToken(
    "colors",
    useColorModeValue("black", "white"),
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
      boxShadow={isScrolled ? `0px 1px 4px 0px ${boxShadowColor}26` : undefined} // 26 is 15 % opacity
    >
      <Box flex="1">{leftButton}</Box>
      <Text fontSize="md" fontWeight="bold" textAlign="center" flex="1">
        {title}
      </Text>
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
