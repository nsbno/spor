import React from "react";
import { Box, BoxProps, useStyleConfig } from "@chakra-ui/react";

type PressableCardProps = Omit<BoxProps, "as"> & {
  as: "button" | "a" | "label" | React.ComponentType;
};

/**
 * Renders a Pressable card.
 *
 * The most basic version looks like this:
 *
 * ```tsx
 * <PressableCard colorScheme="white">
 *   Content
 * </PressableCard>
 * ```
 *
 *Pressable cards can also be rendered as whatever DOM element you want – like a li (list item) or an article. You do this by specifying the `as` prop:
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
