"use client";
import {
  Badge as ChakraBadge,
  BadgeProps as ChakraBadgeProps,
  Box,
} from "@chakra-ui/react";
import { IconComponent } from "@vygruppen/spor-icon-react";

import { useColorMode } from "@/color-mode";

export type BadgeProps = ChakraBadgeProps & {
  icon?: IconComponent;
};

export const Badge = function Badge({
  ref,
  icon,
  children,
  inverted = false,
  ...props
}: BadgeProps & {
  ref?: React.Ref<HTMLSpanElement>;
}) {
  const { colorMode } = useColorMode();
  const shouldInvert = inverted ? colorMode !== "dark" : colorMode === "dark";
  const className = shouldInvert ? "dark" : "light";
  return (
    <ChakraBadge ref={ref} className={className} {...props}>
      {children}
      {icon && <Box as={icon} />}
    </ChakraBadge>
  );
};
