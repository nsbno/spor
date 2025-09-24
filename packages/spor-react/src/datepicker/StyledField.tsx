"use client";
import {
  Box,
  BoxProps,
  useFieldContext,
  useSlotRecipe,
} from "@chakra-ui/react";
import { forwardRef, PropsWithChildren } from "react";

import { DatePickerVariantProps } from "./DatePicker";
import { CalendarVariants } from "./types";

type StyledFieldProps = BoxProps &
  PropsWithChildren<DatePickerVariantProps> &
  CalendarVariants & {
    isDisabled?: boolean;
    isActive?: boolean;
    overrideBorderColor?: string;
  };
export const StyledField = forwardRef<HTMLDivElement, StyledFieldProps>(
  function StyledField(props, ref) {
    const {
      children,
      variant,
      isDisabled,
      isActive,
      overrideBorderColor,
      ...otherProps
    } = props;
    const { invalid } = useFieldContext() ?? {
      isInvalid: false,
    };

    const recipe = useSlotRecipe({
      key: "datePicker",
    });
    const styles = recipe({ variant });

    return (
      <Box
        {...otherProps}
        css={{
          ...styles.wrapper,
          ...(isActive
            ? {
                outline: "2px solid",
                outlineColor: overrideBorderColor ?? "outline.focus",
              }
            : {}),
        }}
        ref={ref}
        aria-invalid={invalid}
        aria-disabled={isDisabled}
      >
        {children}
      </Box>
    );
  },
);
