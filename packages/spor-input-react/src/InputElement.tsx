import {
  InputElementProps,
  InputLeftElement as ChakraInputLeftElement,
  InputRightElement as ChakraInputRightElement,
} from "@chakra-ui/react";

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
export const InputLeftElement = (props: InputElementProps) => (
  <ChakraInputLeftElement height="100%" {...props} />
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
export const InputRightElement = (props: InputElementProps) => (
  <ChakraInputRightElement height="100%" {...props} />
);
