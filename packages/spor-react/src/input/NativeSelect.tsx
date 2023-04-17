import {
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
  forwardRef,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import React from "react";
import { FormControl, FormLabel } from ".";

export type NativeSelectProps = Exclude<
  ChakraSelectProps,
  "colorScheme" | "variant" | "size"
> & { label?: string };
/**
 * Selects let you choose between several options
 *
 * You should consider only using the Select component when you have more than  4 options. Otherwise, you should use the `<Radio>` component.
 *
 * ```tsx
 * <NativeSelect label="Select level of luxury">
 *  <option>No luxury</option>
 *  <option>Some luxury</option>
 *  <option>Lots of luxury</option>
 *  <option>I'm rich</option>
 * </NativeSelect>
 * ```
 */
export const NativeSelect = forwardRef<NativeSelectProps, "select">(
  ({ label, ...props }, ref) => {
    const styles = useMultiStyleConfig("Select", props);
    return (
      <FormControl>
        <ChakraSelect {...props} rootProps={{ __css: styles.root }} ref={ref} />
        {label && <FormLabel>{label}</FormLabel>}
      </FormControl>
    );
  }
);
