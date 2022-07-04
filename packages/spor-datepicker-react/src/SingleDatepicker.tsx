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
import React from "react";
import { Calendar } from "./Calendar";
import { DateInput } from "./DateInput";
import { DatepickerProvider, useDatepicker } from "./DatepickerContext";

export type SingleDatepickerProps = BoxProps & {
  label?: string;
  date?: Date;
  defaultDate?: Date;
  onChange?: (date: Date | null) => void;
  min?: Date;
  max?: Date;
};

export const SingleDatepicker = ({
  label,
  date,
  defaultDate,
  onChange,
  min,
  max,
  height,
  ...boxProps
}: SingleDatepickerProps) => {
  const formControlProps = useFormControl(boxProps);
  const styles = useMultiStyleConfig("Datepicker", {
    ...formControlProps,
  });

  const { setStartDate, state } = useDatepicker();

  return (
    <StylesProvider value={styles}>
      <DatepickerProvider
        startDate={date}
        endDate={date}
        defaultStartDate={defaultDate}
        defaultEndDate={defaultDate}
        min={min}
        max={max}
        mode="single"
      >
        <Box {...boxProps}>
          <Popover placement="bottom-start">
            <DateInput
              height={height}
              label={label}
              value={state.startDate}
              onChange={setStartDate}
            />
            <Portal>
              <PopoverContent>
                <Calendar />
              </PopoverContent>
            </Portal>
          </Popover>
        </Box>
      </DatepickerProvider>
    </StylesProvider>
  );
};
