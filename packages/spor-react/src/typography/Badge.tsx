"use client";

import {
  Badge as ChakraBadge,
  BadgeProps as ChakraBadeProps,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";

export type BadgeProps = ChakraBadeProps & {
  icon?: React.ReactElement;
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ icon, children, ...props }, ref) => (
    <ChakraBadge ref={ref} {...props}>
      {children}
      {icon}
    </ChakraBadge>
  ),
);
