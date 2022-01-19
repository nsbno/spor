import {
  CheckboxGroup as ChakraCheckboxGroup,
  CheckboxGroupProps as ChakraCheckboxGroupProps,
} from "@chakra-ui/react";
import React from "react";

export type CheckboxGroupProps = Exclude<
  ChakraCheckboxGroupProps,
  "colorScheme" | "size" | "variant"
>;
/**
 * Used to group several checkboxes together. You can pass the default value, as well as whether or not they're all disabled
 *
 * ```tsx
 * <CheckboxGroup isDisabled defaultValue={['red', 'blue']}>
 *   <Checkbox value="red">Red</Checkbox>
 *   <Checkbox value="blue">Blue</Checkbox>
 *   <Checkbox value="green">Green</Checkbox>
 * </CheckboxGroup>
 * ```
 */
export const CheckboxGroup = (props: ChakraCheckboxGroupProps) => {
  return <ChakraCheckboxGroup {...props} />;
};
