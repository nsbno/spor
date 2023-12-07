import {
  As,
  forwardRef,
  InputElementProps as ChakraInputElementProps,
  InputLeftElement as ChakraInputLeftElement,
  InputRightElement as ChakraInputRightElement,
} from "@chakra-ui/react";
import React from "react";

export type InputElementProps = ChakraInputElementProps;
/**
 * Places an element inside the left side of an input field.
 *
 * Must be used inside of an `InputGroup` component, and before the `Input` component.
 *
 * ```tsx
 * <FormControl>
 *   <InputGroup>
 *     <InputLeftElement>🔎</InputLeftElement>
 *     <Input label="Search" />
 *   </InputGroup>
 * </FormControl>
 * ```
 */
export const InputLeftElement = forwardRef<InputElementProps, "div">(
  (props, ref) => <ChakraInputLeftElement {...props} ref={ref} />,
);

/**
 * Places an element inside the right side of an input field.
 *
 * Must be used inside of an `InputGroup` component, and after the `Input` component.
 *
 * ```tsx
 * <FormControl>
 *   <InputGroup>
 *     <Input label="Search" />
 *     <InputRightElement>🔎</InputRightElement>
 *   </InputGroup>
 * </FormControl>
 * ```
 */
export const InputRightElement = forwardRef<InputElementProps, "div">(
  (props, ref) => <ChakraInputRightElement {...props} ref={ref} />,
);
