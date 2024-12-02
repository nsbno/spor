import React, { forwardRef, PropsWithChildren } from "react";
import { Box, BoxProps, RecipeVariantProps, useRecipe } from "@chakra-ui/react";
import { radioRecipe } from "../theme/components";
type RadioVariants = RecipeVariantProps<typeof radioRecipe>;

export type RadioProps = BoxProps &
PropsWithChildren<RadioVariants> &{
  children: ReactNode.ReactNode;
   
}
/* export type RadioProps = Exclude<
  ChakraRadioProps,
  "colorScheme" | "size" | "variant"
>; */

/**
 * The humble radio button.
 *
 * Specify the label as `children` and the value as `value`.
 *
 * ```tsx
 * <Radio value="#f00">Red</Radio>
 * ```
 *
 * You typically want to place Radio components in a group with several other Radio components. You can do that with the `RadioGroup` component.
 *
 * ```tsx
 * <RadioGroup name="ticket">
 *   <Radio value="economy">Economy</Radio>
 *   <Radio value="business">Business</Radio>
 *   <Radio value="first-class">First Class</Radio>
 * </RadioGroup>
 */
export const RadioCard = forwardRef<HTMLDivElement, RadioProps>(
  ({ colorPalette = "white", children, ...props }, ref) => {
    const recipe = useRecipe({ recipe: radioRecipe });
    const styles = recipe({ colorPalette });
    return (
      <Radio {...props} ref={ref} />
    )});

