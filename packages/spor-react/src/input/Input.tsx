"use client";

import {
  Box,
  Flex,
  Input as ChakraInput,
  InputElement,
  useRecipe,
} from "@chakra-ui/react";
import React, {
  ComponentProps,
  ReactNode,
  useId,
  useImperativeHandle,
  useRef,
} from "react";

type ChakraInputProps = ComponentProps<typeof ChakraInput>;

import { Field, FieldProps } from "./Field";
import { useFloatingInputState } from "./useFLoatingInputState";

export type InputProps = FieldProps &
  Exclude<ChakraInputProps, "label" | "colorPalette" | "placeholder"> & {
    /** The input's label */
    label?: ReactNode;
    /** Element that shows up to the left */
    startElement?: React.ReactNode;
    /** Element that shows up to the right */
    endElement?: React.ReactNode;
    /** Override the font size of the start and end elements */
    fontSize?: string;

    //size?: "sm" | "md";
  };
/**
 * Inputs let you enter text or other data.
 *
 * You need to specify the label as a prop, since it doubles as the placeholder.
 *
 * ```tsx
 * <Input label="E-mail" />
 * ```
 *
 * You can also add icons to the left and right of the input. Please use the 24 px icons for this.
 *
 * ```tsx
 * <Input label="E-mail" startElement={<EmailOutline24Icon />} />
 * ```
 *
 * Input has two variants core, and floating.
 *
 * ```tsx
 * <Input label="E-mail" startElement={<EmailOutline24Icon />} variant="floating" />
 * ```
 *
 * Field is added to Input, so you can add helperText, errorText, and optionalText.
 *
 * ```tsx
 * <Input label="E-mail" startElement={<EmailOutline24Icon />} helperText="We will never share your email." />
 * ```
 *
 * @see https://spor.vy.no/components/input
 */

export const Input = ({
  ref,
  startElement,
  endElement,
  label,
  invalid,
  helperText,
  errorText,
  required,
  hidden,
  fontSize,
  labelAsChild,
  size = "md",
  ...props
}: InputProps & {
  ref?: React.Ref<HTMLInputElement | null>;
}) => {
  const recipe = useRecipe({ key: "input" });
  const [recipeProps, restProps] = recipe.splitVariantProps({ size, ...props });
  const styles = recipe(recipeProps);

  const labelId = useId();

  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => inputRef.current as HTMLInputElement, []);

  const { shouldFloat, handleFocus, handleBlur, handleChange, isControlled } =
    useFloatingInputState<HTMLInputElement>({
      value: props.value,
      defaultValue: props.defaultValue,
      onFocus: props.onFocus,
      onBlur: props.onBlur,
      onChange: props.onChange,
      inputRef: inputRef as React.RefObject<HTMLInputElement>,
    });

  const fontSizeBySize: Record<string, string> = {
    sm: "xs",
    md: "mobile.md",
  };

  const elementPaddingBySize: Record<string, string> = {
    sm: "2.3rem",
    md: "2.6rem",
  };
  const elementPadding = elementPaddingBySize[size as string] ?? "2.6rem";
  const paddingLeft = elementPadding;
  const paddingRight = elementPadding;

  return (
    <Field
      invalid={invalid}
      helperText={helperText}
      required={required}
      hidden={hidden}
      errorText={errorText}
      id={props.id}
      labelAsChild={labelAsChild}
      label={
        <Flex
          id={labelId}
          paddingX={startElement && size === "sm" ? 1 : undefined}
        >
          <Box visibility="hidden">{startElement}</Box>
          {label}
        </Flex>
      }
      floatingLabel={true}
      shouldFloat={shouldFloat}
      size={size}
    >
      {startElement && (
        <InputElement
          aria-hidden="true"
          aria-labelledby={labelId}
          paddingX={2}
          fontSize={fontSize ?? fontSizeBySize[size as string]}
        >
          {startElement}
        </InputElement>
      )}
      <ChakraInput
        data-attachable
        ref={inputRef}
        focusVisibleRing="outside"
        overflow="hidden"
        {...restProps}
        css={styles}
        paddingLeft={startElement ? paddingLeft : undefined}
        paddingRight={endElement ? paddingRight : undefined}
        className={`peer ${props.className || ""}`}
        value={isControlled ? props.value : undefined}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder=""
        fontSize={fontSize}
      />
      {endElement && (
        <InputElement
          paddingX={2}
          placement="end"
          fontSize={fontSize ?? fontSizeBySize[size as string]}
        >
          {endElement}
        </InputElement>
      )}
    </Field>
  );
};
