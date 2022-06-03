import React from "react";

import { StylesProvider, useMultiStyleConfig } from "@chakra-ui/react";
import { DatepickerProvider } from "./DatepickerContext";
import { Calendar } from "./Calendar";
import { DateInput } from "./DateInput";

export type DatepickerProps = {
  size?: "sm" | "lg";
  variant?: "mobile" | "desktop";
};

const getDefaultProps: ({
  size,
  variant,
}: DatepickerProps) => Required<DatepickerProps> = ({
  size,
  variant,
}: DatepickerProps) => {
  if (size && variant) return { size, variant };
  if (size && !variant)
    return { size, variant: size === "lg" ? "desktop" : "mobile" };
  if (variant && !size)
    return { variant, size: variant === "desktop" ? "lg" : "sm" };
  return { size: "lg", variant: "desktop" };
};

const SporDatepicker: React.VFC<DatepickerProps> = (props) => {
  const { size, variant } = getDefaultProps(props);
  const styles = useMultiStyleConfig("Datepicker", { size, variant });

  return (
    <DatepickerProvider>
      <StylesProvider value={styles}>
        <DateInput variant={variant} />
        <Calendar />
      </StylesProvider>
    </DatepickerProvider>
  );
};

export const Datepicker = SporDatepicker;
