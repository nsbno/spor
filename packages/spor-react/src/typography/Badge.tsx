"use client";
import {
  Badge as ChakraBadge,
  BadgeProps as ChakraBadgeProps,
  Box,
} from "@chakra-ui/react";
import { IconComponent } from "@vygruppen/spor-icon-react";

export type BadgeProps = Omit<ChakraBadgeProps, "colorPalette"> & {
  icon?: IconComponent;
  colorPalette?: ChakraBadgeProps["colorPalette"] | "brightRed" | "disabled";
};

export const Badge = function Badge({
  ref,
  icon,
  children,
  ...props
}: BadgeProps & { ref?: React.Ref<HTMLSpanElement> }) {
  return (
    <ChakraBadge ref={ref} {...props}>
      {children}
      {icon && <Box as={icon} />}
    </ChakraBadge>
  );
};
