import { CheckboxGroup as ChakraCheckboxGroup, Stack } from "@chakra-ui/react";
import React from "react";

export type CheckboxGroupProps = React.ComponentProps<
  typeof ChakraCheckboxGroup
> & {
  direction: "row" | "column"; // Defaults to row
};
/**
 * Used to group several checkboxes together. You can pass the default value, as well as whether or not they're all disabled
 *
 * ```tsx
 * <CheckboxGroup disabled defaultValue={['red', 'blue']}>
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
 * ```
 */

export const CheckboxGroup = (props: CheckboxGroupProps) => {
  // Forwardref caues issue with prop types not working. Forwardref is unessessary here, as ChakraCheckbox already has a ref prop and is deprecated in react 19.
  const { direction = "row", children, gap = 1, ...rest } = props;

  return (
    <ChakraCheckboxGroup {...rest}>
      <Stack direction={direction} gap={gap}>
        {children}
      </Stack>
    </ChakraCheckboxGroup>
  );
};
CheckboxGroup.displayName = "CheckboxGroup";
