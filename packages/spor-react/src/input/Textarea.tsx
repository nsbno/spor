import {
  RecipeVariantProps,
  useRecipe,
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { textareaRecipe } from "../theme/components/textarea";

type TextareaVariants = RecipeVariantProps<typeof textareaRecipe>;
export type TextareaProps = Exclude<
  ChakraTextareaProps,
  "size" | "variant" | "colorPalette"
> &
  TextareaVariants & {
    placeholder?: string;
  };
/**
 * Text area that works with the `Field` component.
 *
 * To use Textarea with a label, wrap it in a `Field` component:
 *
 * ```tsx
 * <Field label="Description">
 *   <Textarea />
 * </Field>
 * ```
 */

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ placeholder, ...props }, ref) => {
    const recipe = useRecipe({ recipe: textareaRecipe });
    const styles = recipe({});

    return (
      <ChakraTextarea
        {...props}
        css={styles}
        ref={ref}
        placeholder={placeholder}
      />
    );
  },
);
