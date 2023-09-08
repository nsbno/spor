import {
  As,
  BoxProps,
  Divider as ChakraDivider,
  DividerProps as ChakraDividerProps,
  forwardRef,
} from "@chakra-ui/react";
import React from "react";

export type DividerProps = ChakraDividerProps & {
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "dashed";
};
/** A dividing line, used to divide content.
 *
 * You can specify margins if you need to give the content some space, or use a `Stack` component to do it for you
 *
 * ```tsx
 * <Divider marginTop={4} marginBottom={6} />
 * ```
 *
 * There are three different sizes available: `sm`, `md` and `lg`. The default is `md`.
 * There are two different variants available: `solid` and `dashed`. The default is `solid`.
 */
export const Divider = forwardRef<BoxProps, As>((props, ref) => {
  return <ChakraDivider {...props} ref={ref} />;
});
