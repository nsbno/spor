"use client";
import {
  chakra,
  Badge as ChakraBadge,
  RecipeVariantProps,
} from "@chakra-ui/react";
import React, { forwardRef, PropsWithChildren } from "react";
import { badgeRecipie } from "../theme/recipes/badge";

type BadgeVariantProps = RecipeVariantProps<typeof badgeRecipie>;

export type BadgeProps = BadgeVariantProps &
  PropsWithChildren<BadgeVariantProps> & {
    icon?: React.ReactElement;
  };

const StyledChakraBadge = chakra(ChakraBadge, badgeRecipie);

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ icon, children, ...props }, ref) => (
    <StyledChakraBadge ref={ref} {...props}>
      {children}
      {icon}
    </StyledChakraBadge>
  ),
);
