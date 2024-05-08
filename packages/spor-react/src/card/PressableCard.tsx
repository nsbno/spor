import React from "react";
import { Box, BoxProps, useStyleConfig } from "@chakra-ui/react";

type PressableCardProps = Omit<BoxProps, "as"> & {
  variant: "floating" | "accent" | "base";
  size?: "sm" | "lg";
  as: "button" | "a" | "label";
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
 * Pressable cards can also be rendered as button, link or label – like a li (list item) or an article.
 * You do this by specifying the `as` prop. If no `as` is specified, button is chosen as default:
 *
 * ```tsx
 * <PressableCard as="a">
 *   This is now a <a /> element
 * </PressableCard>
 * ```
 * 
 * For a static card with other color schemes, use the `StaticCard` component.
 * @see StaticCard
 */

export const PressableCard = ({
  children,
  as = "button",
  size = "sm",
  variant = "base",
  ...props
}: PressableCardProps) => {
  const styles = useStyleConfig("PressableCard", { variant, size });
  return (
    <Box as={as} __css={styles} {...props}>
      {children}
    </Box>
  );
};
