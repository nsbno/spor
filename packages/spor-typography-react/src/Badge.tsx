import {
  As,
  Badge as ChakraBadge,
  BadgeProps as ChakraBadgeProps,
  forwardRef,
} from "@chakra-ui/react";
import React from "react";

export type BadgeProps = Omit<ChakraBadgeProps, "variant" | "colorScheme"> & {
  /**
   * The color scheme of the badge.
   */
  colorScheme?:
    | "yellow"
    | "light-yellow"
    | "red"
    | "green"
    | "orange"
    | "blue"
    | "grey"
    | "white";
  /** The design variant – "solid" by default.
   *
   * Can be specified as `outline` to render a border around the badge. */
  variant?: "solid" | "outline";
  /** The badge size – "sm" by default.
   *
   * Can be specified as `md` to render a larger badge.
   */
  size?: "sm" | "md";
};
/**
 * Shows some additional information about the component it's used within.
 *
 * You have to specify some content (icons should be placed to the left, if present), and a colorScheme.
 *
 * ```tsx
 * <Badge colorScheme="green">Hello</Badge>
 * ```
 *
 * You can specify the `size` (`sm` by default) and the `variant` (`solid` by default) props if required.
 *
 *
 * ```tsx
 * <Badge colorScheme="red" size="md" variant="outline">Special</Badge>
 * ```
 *
 * If you want an icon, just pass it as a child:
 *
 * ```tsx
 * <Badge colorScheme="blue">
 *   <InformationOutline24Icon /> Information
 * </Badge>
 * ```
 */
export const Badge = forwardRef<BadgeProps, As<any>>((props, ref) => (
  <ChakraBadge {...props} ref={ref} />
));
