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
    | "light-green"
    /** @deprecated Use "light-green" instead */
    | "green"
    | "dark-green"
    | "orange"
    | "light-blue"
    /** @deprecated Use "light-blue" instead */
    | "blue"
    | "dark-blue"
    | "grey"
    | "white";
  /** The design variant – "solid" by default.
   *
   * Can be specified as `outline` to render a border around the badge. */
  variant?: "solid" | "outline";
  /**
   * @deprecated Size is automatically set based on screen size.
   */
  size?: "sm" | "md";
  /** Optional badge icon. Will be rendered to the left of the text.
   *
   * Make sure you pass in the 18px version of the icon.
   */
  icon?: React.ReactElement;
};
/**
 * Shows some additional information about the component it's used within.
 *
 * You have to specify some content (icons should be placed to the left, if present), and a colorScheme.
 *
 * ```tsx
 * <Badge colorScheme="light-green">Hello</Badge>
 * ```
 *
 * If you want an icon, pass it in through the `icon` prop:
 *
 * ```tsx
 * <Badge colorScheme="light-blue" icon={<InformationOutline18Icon />}>
 *   Information
 * </Badge>
 * ```
 */
export const Badge = forwardRef<BadgeProps, As>(
  ({ icon, colorScheme = "grey", children, ...props }, ref) => {
    if (colorScheme === "blue" || colorScheme === "green") {
      if (process.env.NODE_ENV !== "production") {
        console.warn(
          `⚠️ You're using a deprecated Badge colorScheme – ${colorScheme}. Please use "light-${colorScheme}" instead.`
        );
      }
      colorScheme = `light-${colorScheme}`;
    }
    return (
      <ChakraBadge
        colorScheme={colorScheme}
        {...props}
        paddingLeft={icon ? 1 : undefined}
        ref={ref}
      >
        {icon && React.cloneElement(icon, { marginRight: 1 })}
        {children}
      </ChakraBadge>
    );
  }
);

<Badge colorScheme="blue" />;