import {
  Checkbox as ChakraCheckbox,
  CheckboxProps as ChakraCheckboxProps,
  forwardRef,
} from "@chakra-ui/react";
import React from "react";

/**
 * Creates a checkbox.
 *
 * The checkbox contains its own label, which is passed as a children prop:
 *
 * ```tsx
 * <Checkbox>Accept the terms</Checkbox>
 * ```
 *
 * Unlike regular inputs, it doesn't require its own `FormControl`.
 *
 * You can group several of these together with a `CheckboxGroup`.
 */
export const Checkbox = forwardRef<ChakraCheckboxProps, "input">(
  (props, ref) => {
    return <ChakraCheckbox {...props} ref={ref} />;
  }
);
