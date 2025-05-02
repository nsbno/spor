"use client";

import {
  FieldLabel,
  RecipeVariantProps,
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
  useRecipe,
} from "@chakra-ui/react";
import React, {
  forwardRef,
  PropsWithChildren,
  ReactNode,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { textareaRecipe } from "../theme/recipes/textarea";
import { Field, FieldProps } from "./Field";

type TextareaVariants = RecipeVariantProps<typeof textareaRecipe>;
export type TextareaProps = Exclude<
  ChakraTextareaProps,
  "size" | "colorPalette"
> &
  FieldProps &
  PropsWithChildren<TextareaVariants> & {
    label: ReactNode;
  };

/**
 * Hook to calculate the height of the label element to adjust spacing for the input for floating label.
 */
const useLabelHeight = (label: ReactNode | undefined) => {
  const labelRef = useRef<HTMLLabelElement>(null);
  const [labelHeight, setLabelHeight] = useState(0);

  useLayoutEffect(() => {
    const updateLabelHeight = () => {
      if (labelRef.current) {
        setLabelHeight(labelRef.current.offsetHeight);
      }
    };

    const observer = new ResizeObserver(updateLabelHeight);
    if (labelRef.current) {
      observer.observe(labelRef.current);
    }

    // Initial calculation with a slight delay to ensure CSS is applied
    setTimeout(updateLabelHeight, 0);

    return () => {
      if (labelRef.current) {
        observer.unobserve(labelRef.current);
      }
    };
  }, [label]);

  return { labelRef, labelHeight };
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

    const { labelRef, labelHeight } = useLabelHeight(label);

    return (
      <Field {...fieldProps} position="relative">
        <ChakraTextarea
          {...props}
          css={styles}
          className="peer"
          ref={ref}
          style={
            { "--label-height": `${labelHeight}px` } as React.CSSProperties
          }
          placeholder=" "
        />
        <FieldLabel ref={labelRef}>{label}</FieldLabel>
      </Field>
    );
  },
);
