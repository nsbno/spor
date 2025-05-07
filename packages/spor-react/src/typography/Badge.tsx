"use client";
import {
  Badge as ChakraBadge,
  BadgeProps as ChakraBadgeProps,
  Box,
} from "@chakra-ui/react";
import { IconComponent } from "@vygruppen/spor-icon-react";
import React, { forwardRef } from "react";

export type BadgeProps = ChakraBadgeProps & {
  icon?: IconComponent;
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { icon, children, ...props },
  ref,
) {
  return (
    <ChakraBadge ref={ref} {...props}>
      {children}
      {icon && <Box as={icon} />}
    </ChakraBadge>
  );
});
