import React from "react";
import { Box, useStyleConfig } from "@chakra-ui/react";
/**
 * Renders a static card.
 *
 * The most basic version looks like this:
 *
 * ```tsx
 * <StaticCard colorScheme="white">
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
 */
export const StaticCard = ({ colorScheme, ...props }: any) => {
  const styles = useStyleConfig("StaticCard", { colorScheme });
  return <Box __css={styles} {...props} />;
};
