import React, { ChangeEvent } from "react";
import { HStack, useRadioGroup, useStyleConfig } from "@chakra-ui/react";
import { Box, Radio as ChakraRadio } from "@chakra-ui/react";
import { useRadio } from "@chakra-ui/react";

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

// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
/* export const CardRadio = () => {
  const options = ["react", "vue", "svelte"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "react",
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
}; */

/* export const RadioCard = forwardRef<RadioCardProps, "input">((props, ref) => {
  const styles = useStyleConfig("RadioCard");
  return <Box as={"button"} __css={styles} {...props} ref={ref} />;
}); */
