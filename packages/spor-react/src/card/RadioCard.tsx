import React from "react";
import { Box, useStyleConfig } from "@chakra-ui/react";
/**
 * Renders a radio card.
 *
 * The most basic version looks like this:
 *
 * ```tsx
 * <RadioCard>
 *   Content
 * </RadioCard>
 * ```
 *
 * Radio cards can also be rendered as whatever DOM element you want – like a li (list item) or an article. You do this by specifying the `as` prop:
 *
 * ```tsx
 * <RadioCard colorScheme="green" as="section">
 *   This is now a <section /> element
 * </RadioCard>
 * ```
 */
export const RadioCard = ({ colorScheme, ...props }: any) => {
  const styles = useStyleConfig("RadioCard", { colorScheme });
  return <Box __css={styles} {...props} />;
};
