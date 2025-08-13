"use client";

import {
  Box,
  chakra,
  Flex,
  Input as ChakraInput,
  InputElement,
} from "@chakra-ui/react";
import React, { ComponentProps, forwardRef, ReactNode } from "react";

type ChakraInputProps = ComponentProps<typeof ChakraInput>;

import { inputRecipe } from "@/theme/recipes/input";

import { Field, FieldProps } from "./Field";

export type InputProps = FieldProps &
  Exclude<
    ChakraInputProps,
    "size" | "label" | "colorPalette" | "placeholder"
  > & {
    /** The input's label */
    label?: ReactNode;
    /** Element that shows up to the left */
    startElement?: React.ReactNode;
    /** Element that shows up to the right */
    endElement?: React.ReactNode;
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

const StyledInput = chakra(ChakraInput, inputRecipe);

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      startElement,
      endElement,
      label,
      invalid,
      helperText,
      errorText,
      ...props
    },
    ref,
  ) => {
    return (
      <Field
        invalid={invalid}
        helperText={helperText}
        errorText={errorText}
        label={
          // Render startElement invisibly to align label text with input content when an icon is present
          <Flex>
            <Box visibility="hidden">{startElement}</Box>
            {label}
          </Flex>
        }
        floatingLabel={true}
      >
        {startElement && (
          <InputElement pointerEvents="none" paddingX={2}>
            {startElement}
          </InputElement>
        )}
        <StyledInput
          data-attachable
          ref={ref}
          focusVisibleRing="outside"
          overflow="hidden"
          paddingLeft={startElement ? "2.6rem" : undefined}
          paddingRight={endElement ? "2.6rem" : undefined}
          {...props}
          className={`peer ${props.className}`}
          placeholder=""
        />
        {endElement && (
          <InputElement placement="end" paddingX={2}>
            {endElement}
          </InputElement>
        )}
      </Field>
    );
  },
);
Input.displayName = "Input";
