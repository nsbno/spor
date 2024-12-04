import {
  Box,
  BoxProps,
  Field as ChakraField,
  RecipeVariantProps,
} from "@chakra-ui/react";
import * as React from "react";
import { fieldSlotRecipe } from "../theme/components/field";

type FieldVariantProps = RecipeVariantProps<typeof fieldSlotRecipe>;

export type FieldProps = Omit<ChakraField.RootProps, "label"> &
  React.PropsWithChildren<FieldVariantProps> & {
    label?: React.ReactNode;
    helperText?: React.ReactNode;
    errorText?: React.ReactNode;
    optionalText?: React.ReactNode;
  };

export const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  function Field(props, ref) {
    const { label, children, helperText, errorText, optionalText, ...rest } =
      props;
    return (
      <ChakraField.Root ref={ref} {...rest}>
        {label && (
          <ChakraField.Label>
            {label}
            <ChakraField.RequiredIndicator fallback={optionalText} />
          </ChakraField.Label>
        )}
        {children}
        {helperText && (
          <ChakraField.HelperText>{helperText}</ChakraField.HelperText>
        )}
        {errorText && (
          <Box position="relative">
            <ChakraField.ErrorText>
              <Arrow position="absolute" top="-0.25em" left="1em" />
              {errorText}
            </ChakraField.ErrorText>
          </Box>
        )}
      </ChakraField.Root>
    );
  },
);

export const FieldLabel = ChakraField.Label;

const Arrow = (props: BoxProps) => {
  return (
    <Box
      {...(props as any)}
      as="svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      transform="rotate(45deg)"
    >
      <Box
        as="path"
        fill="lightRed"
        d="M 0 0 Q 2.4 6 0 12 Q 6 9.6 12 12 Q 9.6 6 12 0 Q 6 2.4 0 0 z"
      />
    </Box>
  );
};
