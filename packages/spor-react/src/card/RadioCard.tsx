import {
  As,
  Box,
  Radio as ChakraRadio,
  RadioProps as ChakraRadioProps,
  forwardRef,
  useRadio,
  useStyleConfig,
} from "@chakra-ui/react";
import React from "react";

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

/* export const RadioCard = (props: any) => {
  const { state, getInputProps, getRadioProps } = useRadio(props);

  const styles = useStyleConfig("RadioCard");

  return (
    <Box as="label">
      <input {...getInputProps} />
      <Box __css={styles} {...getRadioProps} {...props}>
        {props.children}
      </Box>
    </Box>
  );
}; */

export const RadioCard = forwardRef<ChakraRadioProps, "input">((props, ref) => {
  const { getInputProps, getRadioProps, htmlProps } = useRadio(props);

  return (
    <Box as="label" {...htmlProps}>
      <input {...getInputProps()} ref={ref} />
      <Box
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "teal.600",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        p={5}
        textAlign="center"
        transition="all 0.3s cubic-bezier(.08,.52,.52,1)"
        {...getRadioProps()}
      >
        {props.children}
      </Box>
    </Box>
  );
});
