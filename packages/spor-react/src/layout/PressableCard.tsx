"use client";
import React, { forwardRef } from "react";
import { ButtonProps, chakra, RecipeVariantProps } from "@chakra-ui/react";
import { pressableCardRecipe } from "../theme/recipes/pressable-card";

/**
 * `PressableCard` is a component that renders a pressable card.
 *
 * The `PressableCard` component can be used to create a card that responds to user interactions.
 * It can be rendered as a button, link, label, or any other HTML element by specifying the `as` prop.
 * If no `as` prop is provided, it defaults to a button.
 *
 * The `variant` prop can be used to control the style variant of the card. It defaults to "core".
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
 * For a static card with other color palette, use the `StaticCard` component.
 *
 * @see StaticCard
 */

const PressableCardButton = chakra("button", pressableCardRecipe);

type PressableCardProps = RecipeVariantProps<typeof pressableCardRecipe> &
  ButtonProps;

export const PressableCard = forwardRef<HTMLDivElement, PressableCardProps>(
  (props, ref) => <PressableCardButton {...props} ref={ref} />,
);
