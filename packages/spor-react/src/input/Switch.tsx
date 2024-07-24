import {
  As,
  Switch as ChakraSwitch,
  SwitchProps as ChakraSwitchProps,
  forwardRef,
} from "@chakra-ui/react";
import React from "react";

export type SwitchProps = Omit<ChakraSwitchProps, "colorScheme" | "variant"> & {
  size?: "sm" | "md" | "lg";
  as?: As;
};

/**
 * A switch lets you toggle between on and off, yes and no. It's an alternative to a checkbox.
 *
 * You can use a Switch component inside of a `FormControl` with an associated `FormLabel`:
 *
 * ```tsx
 * <FormControl>
 *   <FormLabel>Enable alerts?</FormLabel>
 *   <Switch />
 * </FormControl>
 * ```
 *
 * Switches are available in three different sizes - `sm`, `md` and `lg`.
 *
 * ```tsx
 * <FormControl>
 *   <FormLabel>Enable alerts?</FormLabel>
 *   <Switch size="sm" />
 * </FormControl>
 * ```
 */
export const Switch = forwardRef<SwitchProps, "input">(
  ({ size = "md", as = "div", ...props }: SwitchProps, ref) => {
    return <ChakraSwitch as={as} size={size} {...props} ref={ref} />;
  },
);
