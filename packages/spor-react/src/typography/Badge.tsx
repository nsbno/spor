"use client";
import { Badge as ChakraBadge, RecipeVariantProps } from "@chakra-ui/react";
import React, { forwardRef, PropsWithChildren } from "react";
import { badgeRecipie } from "../theme/recipes/badge";

type BadgeVariantProps = RecipeVariantProps<typeof badgeRecipie>;

export type BadgeProps = BadgeVariantProps &
  PropsWithChildren<BadgeVariantProps> & {
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
