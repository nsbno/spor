import { Box, BoxProps, RecipeVariantProps, TextareaProps, useRecipe, Textarea as ChakraTextarea } from "@chakra-ui/react";
import React, { forwardRef, PropsWithChildren, useId } from "react";
import { textareaRecipe } from "../theme/components";
import { FormLabel, InputGroup } from ".";


  type TextareaVariants = RecipeVariantProps<typeof textareaRecipe>;
export type TextareaPrps = BoxProps & 
PropsWithChildren<TextareaVariants> & {
  children: React.ReactNode;
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


    export const Textarea = forwardRef<HTMLDivElement, TextareaProps>(
      ({ colorPalette = "white", children, ...props }, ref) => {
        const recipe = useRecipe({ recipe: textareaRecipe });
        const styles = recipe({ colorPalette })
      
     const {
    spacingProps,
    remainingProps: { label, ...rest },
  } = getSpacingProps(props);
  const formControlProps = useFormControlContext();
  const fallbackId = `textarea-${useId()}`;
  const inputId = props.id ?? formControlProps?.id ?? fallbackId;

  return (
    <InputGroup position="relative" {...spacingProps}>
      <ChakraTextarea {...rest} id={inputId} placeholder=" " />
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
