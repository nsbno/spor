import React from "react";
import { Box, BoxProps, useStyleConfig } from "@chakra-ui/react";

type PressableCardProps = Omit<BoxProps, "as"> & {
  variant: "floating" | "accent" | "base";
  size?: "sm" | "lg";
  as: "button" | "a" | "label";
};

/**
 * `PressableCard` is a component that renders a pressable card.
 *
 * The `PressableCard` component can be used to create a card that responds to user interactions.
 * It can be rendered as a button, link, label, or any other HTML element by specifying the `as` prop.
 * If no `as` prop is provided, it defaults to a button.
 *
 * The `size` prop can be used to control the size of the card. It defaults to "sm".
 * The `variant` prop can be used to control the style variant of the card. It defaults to "base".
 *
 * Example usage:
 *
 * ```tsx
 * <PressableCard>
 *   Content
 * </PressableCard>
 * ```
 *
 * To render the card as a different HTML element, specify the `as` prop:
 *
 * ```tsx
 * <PressableCard as="a">
 *   This is now a <a /> element
 * </PressableCard>
 * ```
 *
 * For a static card with other color schemes, use the `StaticCard` component.
 *
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
