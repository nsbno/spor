import React from "react";

import {
  Box,
  BoxProps,
  Popover,
  PopoverContent,
  Portal,
  StylesProvider,
  useFormControl,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import { Calendar } from "./Calendar";
import { DateInput } from "./DateInput";
import {
  DatepickerControlProps,
  DatepickerProvider,
} from "./DatepickerContext";

type DatepickerProps = DatepickerControlProps & BoxProps & { label?: string };

/**
 * A datepicker component.
 *
 * This datepicker is for whenever you want to pick a date. Ranges are not yet allowed.
 *
 * The datepicker will default to today if no date is provided.
 *
 * ```tsx
 * <Datepicker /> // <- Today
 * <Datepicker
 *  value={someDate} // <- Whatever some date is (a Date object)
 *  onChange={setSomeDate} // <- Callback when the date changes
 * />
 * ```
 *
 * You can specify the minimum and/or maximum dates through the min/max props:
 *
 * ```tsx
 * <Datepicker min={new Date()} max={new Date(Date.now() + TWO_DAYS_IN_MS)} />
 * ```
 *
 * You can also specify your own label if you want to:
 *
 * ```tsx
 * <Datepicker label="Departure" />
 * ```
 */
export const Datepicker = ({
  value,
  onChange,
  defaultValue,
  min,
  max,
  height = "3.5rem",
  label,
  ...boxProps
}: DatepickerProps) => {
  const formControlProps = useFormControl(boxProps);
  const styles = useMultiStyleConfig("Datepicker", {
    ...formControlProps,
  });

  return (
    <DatepickerProvider
      value={value}
      onChange={onChange}
      defaultValue={defaultValue}
      min={min}
      max={max}
    >
      <Box {...boxProps}>
        <Popover placement="bottom-start">
          <StylesProvider value={styles}>
            <DateInput height={height} label={label} />
            <Portal>
              <PopoverContent>
                <Calendar />
              </PopoverContent>
            </Portal>
          </StylesProvider>
        </Popover>
      </Box>
    </DatepickerProvider>
  );
};
