import {
  Stack as ChakraStack,
  StackProps as ChakraStackProps,
  forwardRef,
} from "@chakra-ui/react";
import React from "react";

export type StackProps = Exclude<ChakraStackProps, "direction"> & {
  flexDirection?: ChakraStackProps["direction"];
};
/**
 * Adds consistent spacing between elements
 *
 * ```tsx
 * <Stack>
 *   <Text>Here's a paragraph</Text>
 *   <Text>Here's another perfectly spaced paragraph</Text>
 * </Stack>
 * ```
 *
 * By default, the stack will be a column. You can change this by setting the `flexDirection` prop to any valid flex direction:
 * ```tsx
 * <Stack flexDirection="row">
 *   <Checkbox>Here's a checkbox</Checkbox>
 *   <Checkbox>Here's another checkbox, almost right next to the first one</Checkbox>
 * </Stack>
 * ```
 *
 * You can specify the spacing between elements with the `spacing` prop:
 *
 * ```tsx
 * <Stack spacing={4}>
 *   <Card>Here's one card</Card>
 *   <Card>Here's another card, with a lot of space between it</Card>
 * </Stack>
 * ```
 */
export const Stack = forwardRef<StackProps, "div">(
  ({ flexDirection, ...props }, ref) => {
    return <ChakraStack {...props} direction={flexDirection} ref={ref} />;
  }
);
