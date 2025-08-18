"use client";
import { Box, BoxProps, RecipeVariantProps, useRecipe } from "@chakra-ui/react";
import { forwardRef } from "react";

import { staticCardRecipe } from "../theme/recipes/static-card";

/**
 * `StaticCard` is a component that renders a static card.
 *
 * The `StaticCard` component can be used to create a card that does not respond to user interactions.
 * It can be rendered as any HTML element by specifying the `as` prop.
 *
 * The `colorPalette` prop can be used to control the color palette of the card. It defaults to "white".
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
 * To change the color palette of the card, specify the `colorPalette` prop:
 *
 * ```tsx
 * <StaticCard colorPalette="orange">
 *   An orange card
 * </StaticCard>
 * ```
 *
 * For a card with click functionality, use the `PressableCard` component.
 *
 * @see PressableCard
 */

export type StaticCardProps = RecipeVariantProps<typeof staticCardRecipe> &
  BoxProps;

export const StaticCard = forwardRef<HTMLDivElement, StaticCardProps>(
  (props, ref) => {
    const recipe = useRecipe({ key: "staticCard" });
    const [recipeProps, restProps] = recipe.splitVariantProps(props);
    const styles = recipe(recipeProps);

    return <Box css={styles} {...restProps} ref={ref}></Box>;
  },
);
StaticCard.displayName = "StaticCard";
