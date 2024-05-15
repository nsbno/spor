import {
  As,
  Box,
  BoxProps,
  forwardRef,
  useStyleConfig,
} from "@chakra-ui/react";
import React from "react";

export type CardProps = Exclude<BoxProps, "size"> & {
  size?: "sm" | "lg";
  children: React.ReactNode;
  colorScheme:
    | "white"
    | "grey"
    | "blue"
    | "green"
    | "teal"
    | "yellow"
    | "orange"
    | "red";
};
/**
 * Renders a card.
 *
 * The most basic version looks like this:
 *
 * ```tsx
 * <Card>
 *   Content
 * </Card>
 * ```
 *
 * There are lots of color schemes available. You can also set the size as either `sm` or `lg`. The default is `sm`.
 *
 * ```tsx
 * <Card colorScheme="orange" size="lg">
 *   A smaller card
 * </Card>
 * ```
 *
 * Cards are not interactive by default. If you specify the `as` prop to be a link or a button, you can make them work as links or buttons respectively. This will also give it a drop shadow.
 *
 * ```tsx
 * <Card colorScheme="blue" as="button" onClick={handleClick}>
 *   Click for profit
 * </Card>
 * <Card colorScheme="green" as="a" href="https://vy.no">
 *   Go to start
 * </Card>
 * ```
 */

/**
 * @deprecated Card is deprecated. Use `StaticCard` or `PressableCard` instead.
 */
export const Card = forwardRef<CardProps, As>(
  ({ size = "sm", colorScheme = "white", children, ...props }, ref) => {
    console.warn(
      "Warning: Card is deprecated. Use `StaticCard` or `PressableCard` instead.",
    );
    const styles = useStyleConfig("Card", {
      colorScheme,
      size,
    });

    return (
      <Box __css={styles} {...props} ref={ref}>
        {children}
      </Box>
    );
  },
);
