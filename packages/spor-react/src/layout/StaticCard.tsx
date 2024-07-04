import React from "react";
import {
  As,
  Box,
  BoxProps,
  useStyleConfig,
  forwardRef,
} from "@chakra-ui/react";

export type StaticCardProps = BoxProps & {
  children: React.ReactNode;
  /** Defaults to "white" */
  colorScheme:
    | "white"
    | "grey"
    | "green"
    | "orange"
    | "red"
    | "yellow"
    | "blue"
    | "darkBlue"
    | "darkGreen"
    | "darkYellow";
};

/**
 * `StaticCard` is a component that renders a static card.
 *
 * The `StaticCard` component can be used to create a card that does not respond to user interactions.
 * It can be rendered as any HTML element by specifying the `as` prop.
 *
 * The `colorScheme` prop can be used to control the color scheme of the card. It defaults to "white".
 *
 * Example usage:
 *
 * ```tsx
 * <StaticCard>
 *   Content
 * </StaticCard>
 * ```
 *
 * To render the card as a different HTML element, specify the `as` prop:
 *
 * ```tsx
 * <StaticCard as="section">
 *   This is now a <section /> element
 * </StaticCard>
 * ```
 *
 * To change the color scheme of the card, specify the `colorScheme` prop:
 *
 * ```tsx
 * <StaticCard colorScheme="orange">
 *   An orange card
 * </StaticCard>
 * ```
 *
 * For a card with click functionality, use the `PressableCard` component.
 *
 * @see PressableCard
 */

export const StaticCard = forwardRef<StaticCardProps, As>(
  ({ colorScheme = "white", children, ...props }, ref) => {
    const styles = useStyleConfig("StaticCard", {
      colorScheme,
    });

    return (
      <Box __css={styles} {...props} ref={ref}>
        {children}
      </Box>
    );
  },
);
