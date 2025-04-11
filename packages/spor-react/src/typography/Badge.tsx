"use client";

import {
  chakra,
  Badge as ChakraBadge,
  BadgeProps as ChakraBadgeProps,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";

export type BadgeProps = ChakraBadgeProps & {
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
