import {
  Box,
  FormLabel,
  forwardRef,
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
  InputProps as ChakraInputProps,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";

export type InputProps = Exclude<ChakraInputProps, "variant" | "size"> & {
  /** The input's label */
  label: string;
  /** Icon that shows up to the left */
  leftIcon?: React.ReactNode;
  /** Icon that shows up to the right */
  rightIcon?: React.ReactNode;
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
 * <Input label="E-mail" leftIcon={<EmailOutline24Icon />} />
 * ```
 */
export const Input = forwardRef<InputProps, "input">(
  ({ label, leftIcon, rightIcon, id, ...props }, ref) => {
    const Container = leftIcon || rightIcon ? InputGroup : Box;
    return (
      <Container position="relative">
        {leftIcon && <InputLeftElement>{leftIcon}</InputLeftElement>}
        <ChakraInput
          pl={leftIcon ? 7 : undefined}
          pr={rightIcon ? 7 : undefined}
          id={id}
          {...props}
          ref={ref}
          placeholder=" " // This is needed to make the label work as expected
        />
        <FormLabel htmlFor={id} pointerEvents="none">
          {label}
        </FormLabel>
        {rightIcon && <InputRightElement>{rightIcon}</InputRightElement>}
      </Container>
    );
  }
);
