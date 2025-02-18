import {
  Switch as ChakraSwitch,
  SwitchProps as ChakraSwitchProps,
  forwardRef,
} from "@chakra-ui/react";
import { As } from "@chakra-ui/system";
import React from "react";

export type SwitchProps = Omit<ChakraSwitchProps, "colorScheme" | "variant"> & {
  size?: "sm" | "md" | "lg";
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
  ({ size = "md", as, ...props }, ref) => {
    return <ChakraSwitch as={as} size={size} {...props} ref={ref} />;
  },
);
