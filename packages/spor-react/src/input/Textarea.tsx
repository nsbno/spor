import {
  RecipeVariantProps,
  useRecipe,
  Textarea as ChakraTextarea,
  Field as ChakraField,
  TextareaProps as ChakraTextareaProps,
} from "@chakra-ui/react";
import React, { forwardRef, useId } from "react";
import { textareaRecipe } from "../theme/components";

type TextareaVariants = RecipeVariantProps<typeof textareaRecipe>;
export type TextareaProps = Exclude<ChakraTextareaProps, "size"> &
  TextareaVariants & {
    label?: string;
  };
/**
 * Text area that works with the `Field` component.
 *
 * Providing a label is optional.
 *
 * ```tsx
 * <Field>
 *   <Textarea label="E-mail" />
 * </Field>
 * ```
 */

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ colorPalette = "white", label, ...props }, ref) => {
    const recipe = useRecipe({ recipe: textareaRecipe });
    const styles = recipe({ colorPalette });

    const fallbackId = `textarea-${useId()}`;

    return (
      <ChakraField.Root position="relative" css={styles}>
        <ChakraTextarea {...props} id={fallbackId} ref={ref} placeholder=" " />
        {label && <ChakraField.Label>{label}</ChakraField.Label>}
      </ChakraField.Root>
    );
  },
);
