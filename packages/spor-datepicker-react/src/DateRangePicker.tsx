import {
  Box,
  BoxProps,
  FormLabel,
  InputGroup,
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  Portal,
  ResponsiveValue,
  useBreakpointValue,
  useFormControlContext,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import { DateValue } from "@internationalized/date";
import { useDateRangePicker } from "@react-aria/datepicker";
import { useDateRangePickerState } from "@react-stately/datepicker";
import { CalendarOutline24Icon } from "@vygruppen/spor-icon-react";
import React, { useRef } from "react";
import { AriaDateRangePickerProps, I18nProvider } from "react-aria";
import { CalendarTriggerButton } from "./CalendarTriggerButton";
import { DateField } from "./DateField";
import { RangeCalendar } from "./RangeCalendar";
import { StyledField } from "./StyledField";
import { useCurrentLocale } from "./utils";

type DateRangePickerProps = AriaDateRangePickerProps<DateValue> &
  Pick<BoxProps, "minHeight"> & {
    startLabel?: string;
    endLabel?: string;
    variant: ResponsiveValue<"simple" | "with-trigger">;
  };
/**
 * A date range picker component.
 *
 * There are two versions of this component – a simple one, and one with a trigger button for showing the calendar. Use whatever fits your design.
 *
 * ```tsx
 * <DateRangePicker startLabel="From" endLabel="To" variant="simple" />
 * ```
 */
export function DateRangePicker({
  variant,
  minHeight,
  ...props
}: DateRangePickerProps) {
  const formControlProps = useFormControlContext();
  const state = useDateRangePickerState({
    ...props,
    shouldCloseOnSelect: true,
    isRequired: props.isRequired ?? formControlProps?.isRequired,
    validationState: formControlProps.isInvalid ? "invalid" : "valid",
  });
  const ref = useRef(null);
  const {
    groupProps,
    labelProps,
    startFieldProps,
    endFieldProps,
    buttonProps,
    dialogProps,
    calendarProps,
  } = useDateRangePicker(props, state, ref);

  const responsiveVariant =
    useBreakpointValue(typeof variant === "string" ? [variant] : variant) ??
    "simple";

  const styles = useMultiStyleConfig("Datepicker", {
    variant: responsiveVariant,
  });
  const locale = useCurrentLocale();

  const handleEnterClick = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !state.isOpen && responsiveVariant === "simple") {
      // Don't submit the form
      e.stopPropagation();
      state.setOpen(true);
    }
  };

  const onFieldClick = () => {
    if (!hasTrigger) {
      state.setOpen(true);
    }
  };

  const hasTrigger = responsiveVariant === "with-trigger";

  return (
    <I18nProvider locale={locale}>
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
            <PopoverAnchor>
              <StyledField
                alignItems="center"
                paddingX={3}
                variant={responsiveVariant}
                onClick={onFieldClick}
                onKeyPress={handleEnterClick}
                minHeight={minHeight}
              >
                {!hasTrigger && (
                  <CalendarOutline24Icon mr={2} alignSelf="center" />
                )}
                <DateField
                  {...startFieldProps}
                  label={props.startLabel}
                  labelProps={labelProps}
                />
                <Box as="span" aria-hidden="true" px="2">
                  –
                </Box>
                <DateField
                  {...endFieldProps}
                  label={props.endLabel}
                  labelProps={labelProps}
                />
              </StyledField>
            </PopoverAnchor>
            {hasTrigger && <CalendarTriggerButton {...buttonProps} />}
          </InputGroup>
          {state.isOpen && (
            <Portal>
              <PopoverContent
                backgroundColor="white"
                color="darkGrey"
                boxShadow="md"
                maxWidth="none"
              >
                <PopoverArrow backgroundColor="white" />
                <PopoverBody>
                  <RangeCalendar {...calendarProps} />
                </PopoverBody>
              </PopoverContent>
            </Portal>
          )}
        </Popover>
      </Box>
    </I18nProvider>
  );
}
