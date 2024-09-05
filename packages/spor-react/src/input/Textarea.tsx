import {
  FormLabel,
  forwardRef,
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
  useFormControlContext,
  InputGroup,
} from "@chakra-ui/react";
import React, { useId } from "react";

export type TextareaProps = Exclude<ChakraTextareaProps, "size"> & {
  label?: string;
};
/**
 * Text area that works with the `FormControl` component.
 *
 * Providing a label is optional.
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
  const formControlProps = useFormControlContext();
  const fallbackId = `textarea-${useId()}`;
  const inputId = props.id ?? formControlProps?.id ?? fallbackId;

  return (
    <InputGroup position="relative" {...spacingProps}>
      <ChakraTextarea {...rest} id={inputId} ref={ref} placeholder=" " />
      {label && (
        <FormLabel htmlFor={inputId} id={`${inputId}-label`}>
          {label}
        </FormLabel>
      )}
    </InputGroup>
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
    marginRight,
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
      marginRight,
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
