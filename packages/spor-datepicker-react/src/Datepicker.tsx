import React from "react";

import {
  Box,
  BoxProps,
  Popover,
  PopoverContent,
  StylesProvider,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import {
  DatepickerControlProps,
  DatepickerProvider,
} from "./DatepickerContext";
import { Calendar } from "./Calendar";
import { DateInput } from "./DateInput";

export type DatepickerStylingProps = {
  size?: "sm" | "lg";
  variant?: "mobile" | "desktop";
};

const getDefaultProps: (
  props: DatepickerStylingProps
) => Required<DatepickerStylingProps> = ({ size, variant }) => {
  if (size && variant) return { size, variant };
  if (size && !variant)
    return { size, variant: size === "lg" ? "desktop" : "mobile" };
  if (variant && !size)
    return { variant, size: variant === "desktop" ? "lg" : "sm" };
  return { size: "lg", variant: "desktop" };
};

const SporDatepicker: React.VFC<
  DatepickerControlProps & DatepickerStylingProps & BoxProps
> = ({
  value,
  onChange,
  size: sizeProp,
  variant: variantProp,
  ...boxProps
}) => {
  const { size, variant } = getDefaultProps({
    size: sizeProp,
    variant: variantProp,
  });
  const styles = useMultiStyleConfig("Datepicker", { size, variant });

  return (
    <DatepickerProvider value={value} onChange={onChange}>
      <Box {...boxProps}>
        <Popover placement={"bottom-start"}>
          <StylesProvider value={styles}>
            <DateInput variant={variant} />
            <PopoverContent>
              <Calendar />
            </PopoverContent>
          </StylesProvider>
        </Popover>
      </Box>
    </DatepickerProvider>
  );
};

export const Datepicker = SporDatepicker;
