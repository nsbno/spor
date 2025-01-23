"use client";
import React, { forwardRef, PropsWithChildren } from "react";
import {
  Box,
  BoxProps,
  ConditionalValue,
  RecipeVariantProps,
  useRecipe,
} from "@chakra-ui/react";
import { staticCardRecipe } from "../theme/recipes/static-card";

type StaticCardVariants = RecipeVariantProps<typeof staticCardRecipe>;

type ColorPalette = ConditionalValue<
  | "white"
  | "grey"
  | "green"
  | "orange"
  | "red"
  | "yellow"
  | "blue"
  | "darkBlue"
  | "darkGreen"
  | "darkYellow"
>;

export type StaticCardProps = 
  PropsWithChildren<StaticCardVariants> & {
    children: React.ReactNode;
    /** Defaults to "white" */
    colorPalette: ColorPalette;
  };

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

export const StaticCard = forwardRef<HTMLDivElement, StaticCardProps>(
  ({ colorPalette = "white", children, ...props }, ref) => {
    const recipe = useRecipe({ recipe: staticCardRecipe });
    const styles = recipe({ colorPalette });

    return (
      <Box css={styles} {...props} ref={ref}>
        {children}
      </Box>
    );
  },
);