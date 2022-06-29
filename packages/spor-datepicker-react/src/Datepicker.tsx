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

type DatepickerProps = DatepickerControlProps & BoxProps;

/**  */
export const Datepicker = ({
  value,
  onChange,
  defaultValue,
  minDate,
  maxDate,
  height = "3.5rem",
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
      minDate={minDate}
      maxDate={maxDate}
    >
      <Box {...boxProps}>
        <Popover placement="bottom-start">
          <StylesProvider value={styles}>
            <DateInput height={height} />
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
