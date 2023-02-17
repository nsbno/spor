import {
  CheckboxGroup as ChakraCheckboxGroup,
  CheckboxGroupProps as ChakraCheckboxGroupProps,
  Stack,
  StackDirection,
} from "@chakra-ui/react";
import React from "react";

export type CheckboxGroupProps = Exclude<
  ChakraCheckboxGroupProps,
  "colorScheme" | "size" | "variant"
> & { direction?: StackDirection };
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
 *
 * By default, checkboxes in a CheckboxGroup show up horizontally. If you want them to show up vertically, please specify the `direction="column"` prop.
 *
 * ```tsx
 * <CheckboxGroup direction="column">
 *   <Checkbox>Economy</Checkbox>
 *   <Checkbox>Business</Checkbox>
 *   <Checkbox>First Class</Checkbox>
 * </CheckboxGroup>
 */
export const CheckboxGroup = ({
  direction = "row",
  children,
  ...props
}: CheckboxGroupProps) => {
  return (
    <ChakraCheckboxGroup {...props}>
      <Stack direction={direction}>{children}</Stack>
    </ChakraCheckboxGroup>
  );
};
