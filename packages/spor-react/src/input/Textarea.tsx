"use client";

import {
  RecipeVariantProps,
  useRecipe,
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
  FieldLabel,
} from "@chakra-ui/react";
import React, { forwardRef, PropsWithChildren, ReactNode } from "react";
import { textareaRecipe } from "../theme/recipes/textarea";
import { Field, FieldProps } from "./Field";

type TextareaVariants = RecipeVariantProps<typeof textareaRecipe>;
export type TextareaProps = Exclude<
  ChakraTextareaProps,
  "size" | "colorPalette"
> &
  FieldProps &
  PropsWithChildren<TextareaVariants> & {
    /* A label for the textarea */
    label: ReactNode;
  };

/**
 *
 * A simple Textarea component:
 *
 * ```tsx
 *   <Textarea label="Description" />
 * ```
 *
 * Textarea has two variants core, and floating.
 *
 */

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const { label, variant = "core", ...fieldProps } = props;
    const recipe = useRecipe({ key: "textarea" });
    const styles = recipe({ variant });

    return (
      <Field {...fieldProps}>
        <ChakraTextarea
          {...props}
          css={styles}
          className="peer"
          ref={ref}
          placeholder=" "
        />
        <FieldLabel>{label}</FieldLabel>
      </Field>
    );
  },
);
