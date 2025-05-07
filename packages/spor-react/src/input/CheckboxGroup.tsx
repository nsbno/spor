import {
  CheckboxGroup as ChakraCheckboxGroup,
  CheckboxGroupProps as ChakraCheckboxGroupProps,
  Stack,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";

export type CheckboxGroupProps = Exclude<
  ChakraCheckboxGroupProps,
  "colorPalette" | "size" | "variant"
> & {
  /* Defaults to row */
  direction?: "row" | "column";
  children: React.ReactNode;
  /* Defaults to 1 */
  gap?: number | string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; //Find a way to not use type any
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
 */

export const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>(
  (props, ref) => {
    CheckboxGroup.displayName = "CheckboxGroup";
    const { direction = "row", children, gap = 1, ...rest } = props;

    return (
      <ChakraCheckboxGroup ref={ref} {...rest}>
        <Stack direction={direction} gap={gap}>
          {children}
        </Stack>
      </ChakraCheckboxGroup>
    );
  },
);
