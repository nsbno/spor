import {
  Box,
  FormLabel,
  InputGroup,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import { DateValue } from "@internationalized/date";
import { useDateRangePicker } from "@react-aria/datepicker";
import { useDateRangePickerState } from "@react-stately/datepicker";
import React, { useRef } from "react";
import { AriaDateRangePickerProps } from "react-aria";
import { CalendarTriggerButton } from "./CalendarTriggerButton";
import { DateField, StyledField } from "./DateField";
import { RangeCalendar } from "./RangeCalendar";

type DateRangePickerProps = AriaDateRangePickerProps<DateValue> & {
  startLabel?: string;
  endLabel?: string;
};
export function DateRangePicker(props: DateRangePickerProps) {
  let state = useDateRangePickerState({
    ...props,
    shouldCloseOnSelect: false,
  });
  let ref = useRef(null);
  let {
    groupProps,
    labelProps,
    startFieldProps,
    endFieldProps,
    buttonProps,
    dialogProps,
    calendarProps,
  } = useDateRangePicker(props, state, ref);

  const styles = useMultiStyleConfig("Datepicker", {});

  return (
    <Box position="relative" display="inline-flex" flexDirection="column">
      {props.label && (
        <FormLabel {...labelProps} sx={styles.inputLabel}>
          {props.label}
        </FormLabel>
      )}
      <Popover
        {...dialogProps}
        isOpen={state.isOpen}
        onClose={() => state.setOpen(false)}
        closeOnBlur
        closeOnEsc
        returnFocusOnClose
      >
        <InputGroup
          {...groupProps}
          ref={ref}
          width="auto"
          display="inline-flex"
        >
          <StyledField alignItems="center">
            <Box>
              {props.startLabel && (
                <FormLabel {...labelProps} sx={styles.inputLabel}>
                  {props.startLabel}
                </FormLabel>
              )}
              <DateField {...startFieldProps} />
            </Box>
            <Box as="span" aria-hidden="true" px="2">
              –
            </Box>
            <Box>
              {props.endLabel && (
                <FormLabel {...labelProps} sx={styles.inputLabel}>
                  {props.endLabel}
                </FormLabel>
              )}
              <DateField {...endFieldProps} />
            </Box>
          </StyledField>
          <CalendarTriggerButton {...buttonProps} />
        </InputGroup>
        {state.isOpen && (
          <PopoverContent
            backgroundColor="alias.white"
            color="alias.darkGrey"
            boxShadow="md"
            maxWidth="none"
          >
            <PopoverArrow backgroundColor="white" />
            <PopoverBody>
              <RangeCalendar {...calendarProps} />
            </PopoverBody>
          </PopoverContent>
        )}
      </Popover>
    </Box>
  );
}
