import React from "react";
import {
  As,
  Box,
  BoxProps,
  useStyleConfig,
  forwardRef,
  Card,
} from "@chakra-ui/react";

export type StaticCardProps = BoxProps & {
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
 * Renders a static card.
 *
 * The most basic version looks like this:
 *
 * ```tsx
 * <StaticCard>
 *   Content
 * </StaticCard>
 * ```
 *
 * Static cards can also be rendered as whatever DOM element you want – like a li (list item) or an article. You do this by specifying the `as` prop:
 *
 * ```tsx
 * <StaticCard colorScheme="green" as="section">
 *   This is now a <section /> element
 * </StaticCard>
 * ```
 * 
 * There are lots of color schemes available. The default is `white`.
 * 
 * ```tsx
 * <StaticCard colorScheme="orange">
 *  An orange card
 * </StaticCard>
 * ```
 * 
 * For click functionality, use the `PressableCard` component.
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
        <Card />
      </Box>
    );
  },
);
