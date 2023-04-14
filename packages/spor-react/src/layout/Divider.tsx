import { As, Box, BoxProps, forwardRef } from "@chakra-ui/react";
import React from "react";

export type DividerProps = BoxProps;
/** A dividing line, used to divide content.
 *
 * You can specify margins if you need to give the content some space, or use a `Stack` component to do it for you
 *
 * ```tsx
 * <Divider mt={4} mb={6} />
 * ```
 */
export const Divider = forwardRef<BoxProps, As>((props, ref) => {
  return (
    <Box
      as="hr"
      height="2px"
      border="0"
      borderRadius="1px"
      backgroundColor="blackAlpha.200"
      width="100%"
      {...props}
      ref={ref}
    />
  );
});
