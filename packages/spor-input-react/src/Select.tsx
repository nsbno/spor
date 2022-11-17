import {
  forwardRef,
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import React from "react";
import { FormControl, FormLabel } from ".";

export type SelectProps = Exclude<
  ChakraSelectProps,
  "colorScheme" | "variant" | "size"
> & { label?: string };
/**
 * Selects let you choose between several options
 *
 * You should consider only using the Select component when you have more than  4 options. Otherwise, you should use the `<Radio>` component.
 *
 * ```tsx
 * <Select label="Select level of luxury">
 *  <option>No luxury</option>
 *  <option>Some luxury</option>
 *  <option>Lots of luxury</option>
 *  <option>I'm rich</option>
 * </Select>
 * ```
 */
export const Select = forwardRef<SelectProps, "select">(
  ({ label, ...props }: SelectProps, ref) => {
    const styles = useMultiStyleConfig("Select", props);
    return (
      <FormControl>
        <ChakraSelect {...props} rootProps={{ __css: styles.root }} ref={ref} />
        {label && <FormLabel>{label}</FormLabel>}
      </FormControl>
    );
  }
);
