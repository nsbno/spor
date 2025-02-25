import {
  Box,
  BoxProps,
  ResponsiveValue,
  forwardRef,
  useFormControlContext,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import { As } from "@chakra-ui/system";
import React from "react";

type StyledFieldProps = BoxProps & {
  variant: ResponsiveValue<"base" | "floating" | "ghost">;
  isDisabled?: boolean;
  ariaLabelledby?: string;
};
export const StyledField = forwardRef<StyledFieldProps, As>(
  ({ children, variant, isDisabled, ariaLabelledby, ...otherProps }, ref) => {
    const { isInvalid } = useFormControlContext() ?? {
      isInvalid: false,
    };

    const styles = useMultiStyleConfig("Datepicker", { variant });

    return (
      <Box
        {...otherProps}
        __css={styles.wrapper}
        ref={ref}
        aria-invalid={isInvalid}
        aria-disabled={isDisabled}
        aria-labelledby={ariaLabelledby}
      >
        {children}
      </Box>
    );
  },
);
