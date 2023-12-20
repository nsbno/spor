import {
  Box,
  BoxProps,
  FocusLock,
  FormLabel,
  InputGroup,
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  ResponsiveValue,
  useFormControlContext,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import { DateValue } from "@internationalized/date";
import React, { useRef } from "react";
import {
  AriaDateRangePickerProps,
  I18nProvider,
  useDateRangePicker,
} from "react-aria";
import { useDateRangePickerState } from "react-stately";
import { CalendarTriggerButton } from "./CalendarTriggerButton";
import { DateField } from "./DateField";
import { RangeCalendar } from "./RangeCalendar";
import { StyledField } from "./StyledField";
import { useCurrentLocale } from "./utils";

type DateRangePickerProps = Omit<
  AriaDateRangePickerProps<DateValue>,
  "onChange"
> &
  Pick<BoxProps, "minHeight"> & {
    startLabel?: string;
    startName?: string;
    endLabel?: string;
    endName?: string;
    variant: ResponsiveValue<"base" | "floating" | "ghost">;
    withPortal?: boolean;
    onChange?: (dates: {
      start: DateValue | null;
      end: DateValue | null;
    }) => void;
  };
/**
 * A date range picker component.
 *
 * There are three variants to choose from – `base`, `floating` and `ghost`.
 *
 * ```tsx
 * <DateRangePicker startLabel="From" startName="from" endLabel="To" endName="to" variant="base" />
 * ```
 */
export function DateRangePicker({
  variant,
  minHeight,
  startName,
  endName,
  withPortal = true,
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

  const styles = useMultiStyleConfig("Datepicker", { variant });
  const locale = useCurrentLocale();

  const handleEnterClick = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !state.isOpen && variant === "base") {
      // Don't submit the form
      e.stopPropagation();
      state.setOpen(true);
    }
  };

  const onFieldClick = () => {
    state.setOpen(true);
  };

  const popoverContent = (
    <PopoverContent sx={styles.calendarPopover} maxWidth="none">
      <PopoverArrow sx={styles.arrow} />
      <PopoverBody>
        <FocusLock>
          <RangeCalendar variant={"base"} {...calendarProps} />
        </FocusLock>
      </PopoverBody>
    </PopoverContent>
  );

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
          onOpen={state.open}
          onClose={state.close}
        >
          <InputGroup {...groupProps} width="auto" display="inline-flex">
            <PopoverAnchor>
              <StyledField
                alignItems="center"
                paddingX={3}
                variant={variant}
                onClick={onFieldClick}
                onKeyPress={handleEnterClick}
                minHeight={minHeight}
              >
                {variant && (
                  <PopoverTrigger>
                    <CalendarTriggerButton
                      paddingLeft={1}
                      paddingRight={1}
                      variant={variant}
                      ref={ref}
                      {...buttonProps}
                    />
                  </PopoverTrigger>
                )}
                <DateField
                  {...startFieldProps}
                  name={startName}
                  label={props.startLabel}
                  labelProps={labelProps}
                />
                <Box as="span" aria-hidden="true" paddingRight="2">
                  –
                </Box>
                <DateField
                  {...endFieldProps}
                  name={endName}
                  label={props.endLabel}
                  labelProps={labelProps}
                />
              </StyledField>
            </PopoverAnchor>
          </InputGroup>
          {state.isOpen && withPortal && <Portal>{popoverContent}</Portal>}
          {state.isOpen && !withPortal && popoverContent}
        </Popover>
      </Box>
    </I18nProvider>
  );
}
