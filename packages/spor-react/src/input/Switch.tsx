import {
  Switch as ChakraSwitch,
  SwitchProps as ChakraSwitchProps,
  forwardRef,
} from "@chakra-ui/react";
import React from "react";

export type SwitchProps = Exclude<
  ChakraSwitchProps,
  "colorScheme" | "variant"
> & {
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
 * Switches are available in three different sizes - `sm`, `md` and `lg`. There are also two variants - `solid` and `outline`.
 *
 * ```tsx
 * <FormControl>
 *   <FormLabel>Enable alerts?</FormLabel>
 *   <Switch variant="outline" size="lg" />
 * </FormControl>
 * ```
 */
export const Switch = forwardRef<SwitchProps, "input">(
  ({ size = "md", ...props }: SwitchProps, ref) => {
    return <ChakraSwitch variant="solid" size={size} {...props} ref={ref} />;
  },
);
