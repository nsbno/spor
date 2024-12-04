import {
  Box,
  BoxProps,
  ConditionalValue,
  useFieldContext,
  useSlotRecipe,
} from "@chakra-ui/react";
import React, { forwardRef, PropsWithChildren } from "react";
import { DatePickerVariantProps } from "./DatePicker";
import { datePickerSlotRecipe } from "../theme/components/datepicker";

type StyledFieldProps = BoxProps &
  PropsWithChildren<DatePickerVariantProps> & {
    variant: ConditionalValue<"base" | "floating" | "ghost">;
    isDisabled?: boolean;
    ariaLabelledby?: string;
  };
export const StyledField = forwardRef<HTMLDivElement, StyledFieldProps>(
  function StyledField(props, ref) {
    const { children, variant, isDisabled, ariaLabelledby, ...otherProps } =
      props;
    const { isInvalid } = useFieldContext() ?? {
      isInvalid: false,
    };

    const recipe = useSlotRecipe({ recipe: datePickerSlotRecipe });
    const styles = recipe({ variant });

    return (
      <Box
        {...otherProps}
        css={styles.wrapper}
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
