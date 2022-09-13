import {
  Box,
  FormLabel,
  forwardRef,
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
} from "@chakra-ui/react";
import React from "react";

export type TextareaProps = Exclude<ChakraTextareaProps, "variant" | "size"> & {
  label: string;
};
/**
 * Text area that works with the `FormControl` component.
 *
 * Note that it requires you to pass a label.
 *
 * ```tsx
 * <FormControl>
 *   <Textarea label="E-mail" />
 * </FormControl>
 * ```
 */
export const Textarea = forwardRef<TextareaProps, "textarea">((props, ref) => {
  const {
    spacingProps,
    remainingProps: { label, ...rest },
  } = getSpacingProps(props);
  return (
    <Box {...spacingProps}>
      <FormLabel>{label}</FormLabel>
      <ChakraTextarea {...rest} ref={ref} />
    </Box>
  );
});

function getSpacingProps<T extends TextareaProps>(props: T) {
  const {
    mt,
    mr,
    mb,
    ml,
    mx,
    my,
    marginTop,
    rightMargin,
    marginBottom,
    marginLeft,
    marginX,
    marginY,
    pt,
    pr,
    pb,
    pl,
    px,
    py,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    paddingX,
    paddingY,
    ...remainingProps
  } = props;
  return {
    spacingProps: {
      mt,
      mr,
      mb,
      ml,
      mx,
      my,
      marginTop,
      rightMargin,
      marginBottom,
      marginLeft,
      marginX,
      marginY,
      pt,
      pr,
      pb,
      pl,
      px,
      py,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      paddingX,
      paddingY,
    },
    remainingProps,
  };
}
