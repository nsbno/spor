import {
  Box,
  FormLabel,
  InputGroup,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import { DateValue } from "@internationalized/date";
import { useDatePicker } from "@react-aria/datepicker";
import { useDatePickerState } from "@react-stately/datepicker";
import React, { useRef } from "react";
import { AriaDatePickerProps } from "react-aria";
import { Calendar } from "./Calendar";
import { CalendarTriggerButton } from "./CalendarTriggerButton";
import { DateField, StyledField } from "./DateField";

type DatePickerProps = AriaDatePickerProps<DateValue>;
export function DatePicker(props: DatePickerProps) {
  const state = useDatePickerState({
    ...props,
    shouldCloseOnSelect: false,
  });
  const ref = useRef(null);
  const {
    groupProps,
    labelProps,
    fieldProps,
    buttonProps,
    dialogProps,
    calendarProps,
  } = useDatePicker(props, state, ref);

  const styles = useMultiStyleConfig("Datepicker", {});

  return (
    <Box position="relative" display="inline-flex" flexDirection="column">
      <Popover
        {...dialogProps}
        isOpen={state.isOpen}
        onClose={() => state.setOpen(false)}
        onOpen={() => state.setOpen(true)}
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
          <StyledField pr="4.5rem">
            <Box>
              <FormLabel {...labelProps} sx={styles.inputLabel}>
                {props.label}
              </FormLabel>
              <DateField {...fieldProps} />
            </Box>
          </StyledField>
            <CalendarTriggerButton {...buttonProps} />
        </InputGroup>
        {state.isOpen && (
          <PopoverContent
            backgroundColor="alias.white"
            color="alias.darkGrey"
            boxShadow="md"
          >
            <PopoverArrow backgroundColor="white" />
            <PopoverBody>
              <Calendar {...calendarProps} />
            </PopoverBody>
          </PopoverContent>
        )}
      </Popover>
    </Box>
  );
}
