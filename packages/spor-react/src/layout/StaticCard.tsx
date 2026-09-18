"use client";
import { Box, BoxProps, useRecipe } from "@chakra-ui/react";

/**
 * `StaticCard` is a component that renders a static card.
 *
 * The `StaticCard` component can be used to create a card that does not respond to user interactions.
 * It can be rendered as any HTML element by specifying the `as` prop.
 *
 *
 * Example usage:
 *
 * ```tsx
 * <StaticCard>
 *   Content
 * </StaticCard>
 * ```
 *
 * To render the card as a different HTML element, specify the `as` prop:
 *
 * ```tsx
 * <StaticCard as="section">
 *   This is now a <section /> element
 * </StaticCard>
 * ```
 *
 * To change the color palette of the card, specify the `data-color` prop:
 *
 * ```tsx
 * <StaticCard >
 *   An orange card
 * </StaticCard>
 * ```
 *
 * For a card with click functionality, use the `PressableCard` component.
 *
 * @see PressableCard
 */

export type StaticCardProps = BoxProps;

export const StaticCard = ({
  ref,
  ...props
}: StaticCardProps & {
  ref?: React.Ref<HTMLDivElement>;
}) => {
  const recipe = useRecipe({ key: "staticCard" });
  const styles = recipe();

  return <Box css={styles} {...props} ref={ref}></Box>;
};
