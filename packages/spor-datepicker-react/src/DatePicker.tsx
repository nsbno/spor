import {
  Box,
  FormLabel,
  InputGroup,
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import { DateValue } from "@internationalized/date";
import { useDatePicker } from "@react-aria/datepicker";
import { useDatePickerState } from "@react-stately/datepicker";
import { CalendarOutline24Icon } from "@vygruppen/spor-icon-react";
import React, { useRef } from "react";
import { AriaDatePickerProps } from "react-aria";
import { Calendar } from "./Calendar";
import { CalendarTriggerButton } from "./CalendarTriggerButton";
import { DateField, StyledField } from "./DateField";

type DatePickerProps = AriaDatePickerProps<DateValue> & {
  variant: "simple" | "with-trigger";
};
/**
 * A date picker component.
 *
 * There are two versions of this component – a simple one, and one with a trigger button for showing the calendar. Use whatever fits your design.
 *
 * ```tsx
 * <DatePicker date={date} onChange={setDate} variant="simple" />
 * ```
 *
 * There are a lot of props you can pass, please check the documentation or auto-complete for more details.
 */
export function DatePicker({ variant, ...props }: DatePickerProps) {
  const state = useDatePickerState({
    ...props,
    shouldCloseOnSelect: true,
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

  const styles = useMultiStyleConfig("Datepicker", {
    variant: variant,
  });

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
          <PopoverAnchor>
            <StyledField
              variant={variant}
              onClick={() => {
                if (variant === "simple") {
                  state.setOpen(true);
                }
              }}
            >
              {variant === "simple" && (
                <CalendarOutline24Icon mr={2} alignSelf="center" />
              )}
              <Box>
                <FormLabel {...labelProps} sx={styles.inputLabel}>
                  {props.label}
                </FormLabel>
                <Box
                  onKeyPress={(e) => {
                    if (
                      e.key === "Enter" &&
                      !state.isOpen &&
                      variant === "simple"
                    ) {
                      // Don't submit the form
                      e.stopPropagation();
                      state.setOpen(true);
                    }
                  }}
                >
                  <DateField {...fieldProps} />
                </Box>
              </Box>
            </StyledField>
          </PopoverAnchor>
          {variant === "with-trigger" && (
            <CalendarTriggerButton {...buttonProps} />
          )}
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
