import {
  FormLabel,
  forwardRef,
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
  useFormControlContext,
  InputGroup,
} from "@chakra-ui/react";
import React, { useId, useLayoutEffect, useRef, useState } from "react";

export type TextareaProps = Exclude<ChakraTextareaProps, "size"> & {
  label?: string;
};

/**
 * Hook to calculate the height of the label element to adjust spacing for the input for floating label
 */
const useLabelHeight = (label: string | undefined) => {
  const labelRef = useRef<HTMLLabelElement>(null);
  const [labelHeight, setLabelHeight] = useState(0);

  useLayoutEffect(() => {
    const updateLabelHeight = () => {
      if (labelRef.current) {
        setLabelHeight(labelRef.current.offsetHeight);
      }
    };

    updateLabelHeight(); // Initial calculation

    window.addEventListener("resize", updateLabelHeight);
    return () => {
      window.removeEventListener("resize", updateLabelHeight);
    };
  }, [label]);

  return { labelRef, labelHeight };
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

  const { labelRef, labelHeight } = useLabelHeight(label);

  return (
    <InputGroup
      position="relative"
      {...spacingProps}
      style={{ "--label-height": `${labelHeight}px` } as React.CSSProperties}
    >
      <ChakraTextarea {...rest} id={inputId} ref={ref} placeholder=" " />
      {label && (
        <FormLabel ref={labelRef} htmlFor={inputId} id={`${inputId}-label`}>
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
