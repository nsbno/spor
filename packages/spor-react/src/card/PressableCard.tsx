import React from "react";
import { Box, useStyleConfig } from "@chakra-ui/react";
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
export const PressableCard = ({ colorScheme, ...props }: any) => {
  const styles = useStyleConfig("PressableCard", { colorScheme });
  return <Box __css={styles} {...props} />;
};
