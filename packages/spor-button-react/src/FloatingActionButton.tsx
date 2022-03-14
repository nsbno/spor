import { Box, useMultiStyleConfig } from "@chakra-ui/react";
import React from "react";

type FloatingActionButtonProps = {
  colorScheme: "green" | "light" | "dark";
  icon?: React.ReactNode;
  children: React.ReactNode;
};

export const FloatingActionButton = ({
  children,
  icon,
  colorScheme,
}: FloatingActionButtonProps) => {
  const style = useMultiStyleConfig("FloatingActionButton", { colorScheme });
  return (
    <Box __css={style.container} as="button">
      <Box __css={style.icon}>{icon}</Box>
      <Box __css={style.text}>{children}</Box>
    </Box>
  );
};

