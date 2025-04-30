"use client";
import {
  Box,
  BoxProps,
  useFieldContext,
  useSlotRecipe,
} from "@chakra-ui/react";
import React, { forwardRef, PropsWithChildren } from "react";

import { datePickerSlotRecipe } from "../theme/slot-recipes/datepicker";
import { DatePickerVariantProps } from "./DatePicker";
import { CalendarVariants } from "./types";

type StyledFieldProps = BoxProps &
  PropsWithChildren<DatePickerVariantProps> &
  CalendarVariants & {
    isDisabled?: boolean;
    ariaLabelledby?: string;
  };
export const StyledField = forwardRef<HTMLDivElement, StyledFieldProps>(
  function StyledField(props, ref) {
    const { children, variant, isDisabled, ariaLabelledby, ...otherProps } =
      props;
    const { invalid } = useFieldContext() ?? {
      isInvalid: false,
    };

    const recipe = useSlotRecipe({
      key: "datePicker",
      recipe: datePickerSlotRecipe,
    });
    const styles = recipe({ variant });

    return (
      <Box
        {...otherProps}
        css={styles.wrapper}
        ref={ref}
        aria-invalid={invalid}
        aria-disabled={isDisabled}
        aria-labelledby={ariaLabelledby}
      >
        {children}
      </Box>
    );
  },
);
