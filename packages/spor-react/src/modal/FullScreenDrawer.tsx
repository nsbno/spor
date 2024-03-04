import {
  DrawerContent,
  useColorModeValue,
  useModalContext,
  useToken,
} from "@chakra-ui/react";
import { ArrowLeftFill30Icon } from "@vygruppen/spor-icon-react";
import React from "react";
import { Button } from "../button";
import { createTexts, useTranslation } from "../i18n";
import { Drawer } from "./Drawer";

type FullScreenDrawerProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};
export const FullScreenDrawer = ({
  children,
  onClose,
  isOpen,
}: FullScreenDrawerProps) => {
  const fromGradientColor =
    useToken("colors", useColorModeValue("darkTeal", "mint")) + "4C"; // 4C is 30 % opacity
  const toGradientColor = useToken(
    "colors",
    useColorModeValue("white", "black"),
  );
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      isFullHeight={true}
      placement="bottom"
    >
      <DrawerContent
        height="100vh"
        background={`linear-gradient(to bottom, ${fromGradientColor}, ${toGradientColor}), ${toGradientColor}`}
        backgroundSize="100% 285px, 100%"
        backgroundPosition="top"
        backgroundRepeat="no-repeat"
      >
        <DrawerBackButton />
        {children}
      </DrawerContent>
    </Drawer>
  );
};

const DrawerBackButton = () => {
  const { onClose } = useModalContext();
  const { t } = useTranslation();

  return (
    <Button
      variant="primary"
      leftIcon={<ArrowLeftFill30Icon />}
      onClick={onClose}
      aria-label={t(texts.back)}
      width="fit-content"
      position="absolute"
      top={[3, 6]}
      left={[3, 6]}
    >
      {t(texts.back)}
    </Button>
  );
};

const texts = createTexts({
  back: {
    nb: "Tilbake",
    nn: "Tilbake",
    en: "Back",
    sv: "Tillbaka",
  },
});
