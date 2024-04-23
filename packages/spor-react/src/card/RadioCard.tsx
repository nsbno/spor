import React from "react";
import {
  RadioProps as ChakraRadioProps,
  Radio as ChakraRadio,
  forwardRef,
  Card,
} from "@chakra-ui/react";
import { Box, useStyleConfig } from "@chakra-ui/react";

export type RadioProps = Exclude<
  ChakraRadioProps,
  "colorScheme" | "size" | "variant"
>;
/**
 * Renders a radio card.
 *
 * The most basic version looks like this:
 *
 * ```tsx
 * <RadioCard>
 *   Content
 * </RadioCard>
 * ```
 *
 * Radio cards can also be rendered as whatever DOM element you want – like a li (list item) or an article. You do this by specifying the `as` prop:
 *
 * ```tsx
 * <RadioCard colorScheme="green" as="section">
 *   This is now a <section /> element
 * </RadioCard>
 * ```
 */

/* export const RadioCard = ({ colorScheme, ...props }: RadioProps) => {
  const styles = useStyleConfig("RadioCard", { colorScheme });
  return <Box __css={styles} {...props} />;
}; */

export const RadioCard = forwardRef<RadioProps, "input">((props, ref) => {
  const styles = useStyleConfig("RadioCard");
  return <Box __css={styles} {...props} ref={ref} />;
});
