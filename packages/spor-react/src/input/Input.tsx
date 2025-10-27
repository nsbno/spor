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
  forwardRef,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

type ChakraInputProps = ComponentProps<typeof ChakraInput>;

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

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      startElement,
      endElement,
      label,
      invalid,
      helperText,
      errorText,
      required,
      hidden,
      ...props
    },
    ref,
  ) => {
    const recipe = useRecipe({ key: "input" });
    const [recipeProps, restProps] = recipe.splitVariantProps(props);
    const styles = recipe(recipeProps);

    const [focused, setFocused] = useState(false);
    const isControlled = props.value !== undefined;
    const [uncontrolledValue, setUncontrolledValue] = useState(
      props.defaultValue ? String(props.defaultValue) : "",
    );
    const inputValue = isControlled
      ? String(props.value ?? "")
      : uncontrolledValue;
    const shouldFloat = inputValue.length > 0 || focused;

    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement, []);

    useEffect(() => {
      if (
        !isControlled &&
        inputRef.current &&
        uncontrolledValue === "" &&
        inputRef.current.value !== ""
      ) {
        setUncontrolledValue(inputRef.current.value);
      }
    }, [isControlled, uncontrolledValue]);

    return (
      <Field
        invalid={invalid}
        helperText={helperText}
        required={required}
        hidden={hidden}
        errorText={errorText}
        id={props.id}
        label={
          <Flex>
            <Box visibility="hidden">{startElement}</Box>
            {label}
          </Flex>
        }
        floatingLabel={true}
        shouldFloat={shouldFloat}
      >
        {startElement && (
          <InputElement pointerEvents="none" paddingX={2}>
            {startElement}
          </InputElement>
        )}
        <ChakraInput
          data-attachable
          ref={inputRef}
          focusVisibleRing="outside"
          overflow="hidden"
          paddingLeft={startElement ? "2.6rem" : undefined}
          paddingRight={endElement ? "2.6rem" : undefined}
          {...restProps}
          className={`peer ${props.className || ""}`}
          value={isControlled ? props.value : undefined}
          onFocus={(e) => {
            props.onFocus?.(e);
            setFocused(true);
          }}
          onBlur={(e) => {
            props.onBlur?.(e);
            setFocused(false);
          }}
          onChange={(e) => {
            props.onChange?.(e);
            if (!isControlled) {
              setUncontrolledValue(e.target.value);
            }
          }}
          placeholder=""
          css={styles}
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
