import {
  Box,
  BoxProps,
  InputGroup,
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
import {
  DateValue,
  createCalendar,
  getWeeksInMonth,
} from "@internationalized/date";
import { useDatePickerState } from "@react-stately/datepicker";
import { CalendarOutline24Icon } from "@vygruppen/spor-icon-react";
import React, { forwardRef, useRef } from "react";
import {
  AriaDatePickerProps,
  I18nProvider,
  useButton,
  useCalendar,
  useCalendarCell,
  useCalendarGrid,
  useDatePicker,
  useLocale,
} from "react-aria";
import { FormErrorMessage } from "..";
import { CalendarTriggerButton } from "./CalendarTriggerButton";
import { DateField } from "./DateField";
import { StyledField } from "./StyledField";
import { useCurrentLocale } from "./utils";
import { Dialog } from "../input/Dialog";
import { useCalendarState } from "react-stately";
import { Popover } from "../input/Popover";
import { Calendar } from "./Calendar";

type DatePickerProps = AriaDatePickerProps<DateValue> &
  Pick<BoxProps, "minHeight" | "width"> & {
    variant: ResponsiveValue<"simple" | "with-trigger">;
    name?: string;
    showYearNavigation?: boolean;
  };
/**
 * A date picker component.
 *
 * There are two versions of this component – a simple one, and one with a trigger button for showing the calendar. Use whatever fits your design.
 *
 * ```tsx
 * <DatePicker label="Dato" variant="simple" />
 * ```
 */
export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  (
    {
      variant,
      errorMessage,
      minHeight,
      showYearNavigation,
      width = "auto",
      ...props
    },
    externalRef
  ) => {
    const formControlProps = useFormControlContext();
    const state = useDatePickerState({
      ...props,
      shouldCloseOnSelect: true,
      errorMessage,
      isRequired: props.isRequired ?? formControlProps?.isRequired,
      validationState: formControlProps?.isInvalid ? "invalid" : "valid",
    });
    const internalRef = useRef<HTMLDivElement>(null);
    const ref = externalRef ?? internalRef;
    const {
      groupProps,
      labelProps,
      fieldProps,
      buttonProps,
      dialogProps,
      calendarProps,
      errorMessageProps,
    } = useDatePicker(
      props,
      state,
      ref as React.MutableRefObject<HTMLDivElement>
    );


    const responsiveVariant =
      useBreakpointValue(typeof variant === "string" ? [variant] : variant) ??
      "simple";

    const locale = useCurrentLocale();

    const onFieldClick = () => {
      if (!hasTrigger) {
        state.setOpen(true);
      }
    };

    const hasTrigger = responsiveVariant === "with-trigger";

    const styles = useMultiStyleConfig("Datepicker", {});

    console.log(state);

    return (
      <I18nProvider locale={locale}>
        <Box
          position="relative"
          display="inline-flex"
          flexDirection="column"
          width={width}
        >
          <InputGroup {...groupProps} display="inline-flex">
            <StyledField
              variant={responsiveVariant}
              onClick={onFieldClick}
              paddingX={3}
              minHeight={minHeight}
            >
              {!hasTrigger && (
                <CalendarOutline24Icon marginRight={2} alignSelf="center" />
              )}
              <DateField
                label={props.label}
                labelProps={labelProps}
                name={props.name}
                ref={ref}
                {...fieldProps}
              />
            </StyledField>
            {hasTrigger && <CalendarTriggerButton {...buttonProps} />}
          </InputGroup>
          <FormErrorMessage {...errorMessageProps}>
                {errorMessage}
              </FormErrorMessage>
          {state.isOpen && !props.isDisabled && (
              <Popover state={state} triggerRef={ref as any} placement='bottom start'>
              <Dialog {...dialogProps}>
                <Calendar {...calendarProps} />
              </Dialog>
            </Popover>
          )}
                  
        </Box>
      </I18nProvider>
    );
  }
);

function Button(props: any) {
  let ref = React.useRef(null);
  let { buttonProps } = useButton(props, ref);
  return (
    <button {...buttonProps} ref={ref}>
      {props.children}
    </button>
  );
}

function Calendar2(props: any) {
  let { locale } = useLocale();
  let state = useCalendarState({
    ...props,
    locale,
    createCalendar
  });

  let {
    calendarProps,
    prevButtonProps,
    nextButtonProps,
    title
  } = useCalendar(props, state);

  return (
    <div {...calendarProps} className="calendar">
      <div className="header">
        <h2>{title}</h2>
        <Button {...prevButtonProps}>&lt;</Button>
        <Button {...nextButtonProps}>&gt;</Button>
      </div>
      <CalendarGrid state={state} />
    </div>
  );
}

function CalendarGrid({ state, ...props }: {state: any}) {
  let { locale } = useLocale();
  let { gridProps, headerProps, weekDays } =
    useCalendarGrid(props, state);

  // Get the number of weeks in the month so we can render the proper number of rows.
  let weeksInMonth = getWeeksInMonth(
    state.visibleRange.start,
    locale
  );

  return (
    <table {...gridProps}>
      <thead {...headerProps}>
        <tr>
          {weekDays.map((day, index) => (
            <th key={index}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...new Array(weeksInMonth).keys()].map(
          (weekIndex) => (
            <tr key={weekIndex}>
              {state.getDatesInWeek(weekIndex).map((
                date: any,
                i: React.Key | null | undefined
              ) => (
                date
                  ? (
                    <CalendarCell
                      key={i}
                      state={state}
                      date={date}
                    />
                  )
                  : <td key={i} />
              ))}
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}

function CalendarCell({ state, date}: {state: any, date: any}) {
  let ref = React.useRef(null);
  let {
    cellProps,
    buttonProps,
    isSelected,
    isOutsideVisibleRange,
    isDisabled,
    isUnavailable,
    formattedDate
  } = useCalendarCell({ date }, state, ref);

  return (
    <td {...cellProps}>
      <div
        {...buttonProps}
        ref={ref}
        hidden={isOutsideVisibleRange}
        className={`cell ${isSelected ? 'selected' : ''} ${
          isDisabled ? 'disabled' : ''
        } ${isUnavailable ? 'unavailable' : ''}`}
      >
        {formattedDate}
      </div>
    </td>
  );
}