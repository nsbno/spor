import React from "react";

import {
  Box,
  BoxProps,
  Popover,
  PopoverContent,
  StylesProvider,
  useBreakpointValue,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import {
  DatepickerControlProps,
  DatepickerProvider,
} from "./DatepickerContext";
import { Calendar } from "./Calendar";
import { DateInput } from "./DateInput";

type Size = "sm" | "lg";
type Variant = "mobile" | "desktop";

export type DatepickerStylingProps = {
  size?: Size;
  variant?: Variant;
};

const getDefaultProps: (
  props: DatepickerStylingProps
) => Required<DatepickerStylingProps> = ({ size, variant }) => {
  if (size && variant) return { size, variant };
  const defaultVariant: Variant =
    useBreakpointValue({
      base: "mobile",
      sm: "desktop",
      md: "desktop",
      lg: "desktop",
    }) || "mobile";
  const defaultSize: Size =
    useBreakpointValue({
      base: "sm",
      sm: "lg",
      md: "lg",
      lg: "lg",
    }) || "sm";
  if (size && !variant) return { size, variant: defaultVariant };
  if (variant && !size) return { variant, size: defaultSize };
  return { size: defaultSize, variant: defaultVariant };
};

const SporDatepicker: React.VFC<
  DatepickerControlProps & DatepickerStylingProps & BoxProps
> = ({
  value,
  onChange,
  defaultValue,
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
    <DatepickerProvider
      value={value}
      onChange={onChange}
      defaultValue={defaultValue}
    >
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
