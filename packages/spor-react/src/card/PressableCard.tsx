import React from "react";
import { Box, BoxProps, useStyleConfig } from "@chakra-ui/react";

type PressableCardProps = Omit<BoxProps, "as"> & {
  size?: "sm" | "lg";
  as: "button" | "a" | "label" | React.ComponentType;
};

/**
 * Renders a Pressable card.
 *
 * The most basic version looks like this:
 *
 * ```tsx
 * <PressableCard>
 *   Content
 * </PressableCard>
 * ```
 *
 * There are lots of color schemes available. You can also set the size as either `sm` or `lg`. The default is `sm`.
 *
 * ```tsx
 * <PressableCard colorScheme="orange" size="lg">
 *   A smaller card
 * </PressableCard>
 * ```
 *
 * Pressable cards can also be rendered as button, link or label – like a li (list item) or an article. You do this by specifying the `as` prop:
 *
 * ```tsx
 * <PressableCard colorScheme="green" as="section">
 *   This is now a <section /> element
 * </PressableCard>
 * ```
 */
export const PressableCard = ({ ...props }: PressableCardProps) => {
  const styles = useStyleConfig("PressableCard");
  return <Box __css={styles} {...props} />;
};
