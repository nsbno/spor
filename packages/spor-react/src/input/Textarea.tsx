"use client";

import {
  Flex,
  RecipeVariantProps,
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
  useRecipe,
} from "@chakra-ui/react";
import {
  forwardRef,
  PropsWithChildren,
  ReactNode,
  useId,
  useImperativeHandle,
  useRef,
} from "react";

import { textareaRecipe } from "../theme/recipes/textarea";
import { Field, FieldProps } from "./Field";
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
      floatingLabel = true,
      ...restProps
    } = props;
    const recipe = useRecipe({ key: "textarea" });
    const styles = recipe({ variant });

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
        label={
          <Flex fontSize="mobile.md" id={labelId} aria-hidden>
            {label}
          </Flex>
        }
        id={restProps.id}
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
          placeholder=""
          fontSize="mobile.md"
          aria-labelledby={labelId}
        />
      </Field>
    );
  },
);

Textarea.displayName = "Textarea";
