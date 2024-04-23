import React from "react";
import { Box, BoxProps, Card, useStyleConfig } from "@chakra-ui/react";

type PressableRole = "button" | "a" | "label" | React.ComponentType;

type PressableCardProps = Omit<BoxProps, "as"> & {
  variant: "floating" | "accent" | "base";
  size?: "sm" | "lg";
  role: PressableRole;
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
 * Pressable cards can also be rendered as button, link or label – like a li (list item) or an article.
 * You do this by specifying the `as` prop. If no `as` is specified, button is chosen as default:
 *
 *
 * ```tsx
 * <PressableCard colorScheme="green" as="section">
 *   This is now a <section /> element
 * </PressableCard>
 * ```
 */
export const PressableCard = ({
  children,
  role = "button",
  size = "sm",
  variant = "base",
  ...props
}: PressableCardProps) => {
  const styles = useStyleConfig("PressableCard", { variant, size });
  return (
    <Box as={role} __css={styles} {...props}>
      {children}
    </Box>
  );
};
