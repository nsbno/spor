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

/** Badge supports the recipe's size, attached, inverted, and disabled variants. */
export type BadgeProps = Omit<
  ChakraBadgeProps,
  "colorPalette" | keyof BadgeVariantProps
> &
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
