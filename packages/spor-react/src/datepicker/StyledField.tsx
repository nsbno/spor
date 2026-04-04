"use client";
import {
  Box,
  BoxProps,
  useFieldContext,
  useSlotRecipe,
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";

import { DatePickerVariantProps } from "./DatePicker";
import { CalendarVariants } from "./types";

type StyledFieldProps = BoxProps &
  PropsWithChildren<DatePickerVariantProps> &
  CalendarVariants & {
    isDisabled?: boolean;
    isActive?: boolean;
    overrideBorderColor?: string;
  };
export const StyledField = function StyledField({
  ref,
  ...props
}: StyledFieldProps & {
  ref?: React.RefObject<HTMLDivElement>;
}) {
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
        outlineColor: overrideBorderColor || undefined,
      }}
      data-active={isActive ? "" : undefined}
      ref={ref}
      aria-invalid={invalid}
      aria-disabled={isDisabled}
      fontSize={["mobile.md", "desktop.md"]}
    >
      {children}
    </Box>
  );
};
