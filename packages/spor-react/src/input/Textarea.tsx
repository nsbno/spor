"use client";

import {
  RecipeVariantProps,
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
  useRecipe,
} from "@chakra-ui/react";
import React, {
  forwardRef,
  PropsWithChildren,
  ReactNode,
  useId,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { textareaRecipe } from "../theme/recipes/textarea";
import { Field, FieldProps } from "./Field";
import { FloatingLabel } from "./FloatingLabel";
import { useFloatingInputState } from "./useFLoatingInputState";

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
    const currentLabelRef = labelRef.current;
    if (currentLabelRef) {
      observer.observe(currentLabelRef);
    }

    // Initial calculation with a slight delay to ensure CSS is applied
    setTimeout(updateLabelHeight, 0);

    return () => {
      if (currentLabelRef) {
        observer.unobserve(currentLabelRef);
      }
    };
  }, [label]);

  return { labelRef, labelHeight };
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const {
      label,
      variant = "core",
      invalid,
      required,
      errorText,
      readOnly,
      helperText,
      floatingLabel,
      id,
      ...restProps
    } = props;
    const recipe = useRecipe({ key: "textarea" });
    const styles = recipe({ variant });

    const { labelRef, labelHeight } = useLabelHeight(label);

    const reactId = useId();

    const inputRef = useRef<HTMLTextAreaElement>(null);
    useImperativeHandle(ref, () => inputRef.current as HTMLTextAreaElement, []);

    const { shouldFloat, handleFocus, handleBlur, handleChange, isControlled } =
      useFloatingInputState<HTMLTextAreaElement>({
        value: props.value,
        defaultValue: props.defaultValue,
        onFocus: props.onFocus,
        onBlur: props.onBlur,
        onChange: props.onChange,
        inputRef,
      });

    const labelId = useId();

    return (
      <Field
        errorText={errorText}
        helperText={helperText}
        invalid={invalid}
        required={required}
        readOnly={readOnly}
        floatingLabel={floatingLabel}
        shouldFloat={shouldFloat}
        position="relative"
      >
        <ChakraTextarea
          {...restProps}
          css={styles}
          className="peer"
          ref={inputRef}
          value={isControlled ? props.value : undefined}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          style={
            { "--label-height": `${labelHeight}px` } as React.CSSProperties
          }
          placeholder=" "
          id={id ?? reactId}
          aria-labelledby={labelId}
        />
        <FloatingLabel
          ref={labelRef}
          data-float={shouldFloat ? true : undefined}
          htmlFor={id ?? reactId}
          aria-hidden
          id={labelId}
        >
          {label}
        </FloatingLabel>
      </Field>
    );
  },
);

Textarea.displayName = "Textarea";
