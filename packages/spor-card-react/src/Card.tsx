import { As, forwardRef, useStyleConfig } from "@chakra-ui/react";
import { Box, BoxProps } from "@vygruppen/spor-layout-react";
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
    | "orange";
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
 * There are lots of color schemes available. You can also set the size as either `sm` or `lg`. The default is `lg`.
 *
 * ```tsx
 * <Card colorScheme="orange" size="sm">
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
export const Card = forwardRef<CardProps, As<any>>(
  ({ size = "lg", colorScheme = "white", children, ...props }, ref) => {
    const styles = useStyleConfig("Card", {
      colorScheme,
      size,
    });
    return (
      <Box __css={styles} {...props} ref={ref}>
        {children}
      </Box>
    );
  }
);
