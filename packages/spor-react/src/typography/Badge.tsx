"use client";
import {
  Badge as ChakraBadge,
  BadgeProps as ChakraBadgeProps,
  Box,
  RecipeVariantProps,
} from "@chakra-ui/react";
import { IconComponent } from "@vygruppen/spor-icon-react";

import { badgeRecipie } from "../theme/recipes/badge";

type BadgeVariantProps = RecipeVariantProps<typeof badgeRecipie>;

export type BadgeProps = Omit<ChakraBadgeProps, "colorPalette"> &
  BadgeVariantProps & {
    icon?: IconComponent;
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
