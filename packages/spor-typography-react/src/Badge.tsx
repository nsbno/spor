import {
  As,
  Badge as ChakraBadge,
  BadgeProps as ChakraBadgeProps,
  forwardRef,
} from "@chakra-ui/react";
import React from "react";

export type BadgeProps = Omit<ChakraBadgeProps, "variant" | "colorScheme"> & {
  variant?: "solid" | "outline";
  colorScheme?: "grey" | "teal" | "green" | "blue" | "yellow" | "orange";
};
/**
 * Shows some additional information about the component it's used within.
 *
 * You can specify two different variants - `solid` and `outline`. The default is `solid`, and there are no set rules about when to use what.
 */
export const Badge = forwardRef<BadgeProps, As<"div">>((props, ref) => (
  <ChakraBadge {...props} ref={ref} />
));
