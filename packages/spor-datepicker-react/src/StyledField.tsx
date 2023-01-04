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
    console.log("wrapper", styles.wrapper);
    return (
      <Box
        sx={styles.wrapper}
        {...otherProps}
        ref={ref}
        aria-invalid={isInvalid}
      >
        {children}
      </Box>
    );
  }
);
