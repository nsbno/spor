import {
  As,
  Box,
  BoxProps,
  forwardRef,
  useFormControlContext,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import React from "react";

type StyledFieldProps = BoxProps & {
  variant: "simple" | "with-trigger";
};
export const StyledField = forwardRef<StyledFieldProps, As<any>>(
  ({ children, variant, ...otherProps }, ref) => {
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
      >
        {children}
      </Box>
    );
  }
);
