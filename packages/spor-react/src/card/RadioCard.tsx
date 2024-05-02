import React, { forwardRef } from "react";
import {
  useStyleConfig,
  Radio as ChakraRadio,
  RadioProps as ChakraRadioProps,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useRadio } from "@chakra-ui/react";

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

export const RadioCard = (props: any) => {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const radio = getRadioProps();

  const styles = useStyleConfig("RadioCard");

  return (
    <Box as="label">
      <input {...input} />
      <Box __css={styles} {...radio} {...props}>
        {props.children}
      </Box>
    </Box>
  );
};

export const RadioTestCard = forwardRef<RadioProps>((props, ref) => {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const radio = getRadioProps();
  const styles = useStyleConfig("RadioCard");
  return <Box __css={styles} {...radio} {...input} {...props} />;
});
