import {
  Box,
  BoxProps,
  FocusLock,
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
import {
  ArrowLeftOutline24Icon,
  ArrowRightOutline24Icon,
  CalendarOutline24Icon,
} from "@vygruppen/spor-icon-react";
import React, { forwardRef, useRef } from "react";
import {
  AriaDatePickerProps,
  I18nProvider,
  useButton,
  useCalendar,
  useCalendarCell,
  useCalendarGrid,
  useDateField,
  useDatePicker,
  useDateSegment,
  useLocale,
} from "react-aria";
import { DateField } from "./DateField";
import { useCalendarState, useDateFieldState } from "react-stately";
import { Dialog } from "../input/Dialog";
import FocusTrap from "focus-trap-react";
import { Popover } from "../input/Popover";
import { CalendarNavigationButton } from "./CalendarNavigationButton";

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
    //const formControlProps = useFormControlContext();
    let state = useDatePickerState(props);
    let ref = React.useRef(null);
    let {
      groupProps,
      labelProps,
      fieldProps,
      buttonProps,
      dialogProps,
      calendarProps,
    } = useDatePicker(props, state, ref);

    const responsiveVariant =
      useBreakpointValue(typeof variant === "string" ? [variant] : variant) ??
      "simple";

    const onFieldClick = () => {
      if (!hasTrigger) {
        state.setOpen(true);
      }
    };

    const hasTrigger = responsiveVariant === "with-trigger";

    const styles = useMultiStyleConfig("Datepicker", {});

    console.log(state);

    return (
      <div
        style={{
          display: "inline-flex",
          flexDirection: "column",
        }}
      >
        <div {...labelProps}>{props.label}</div>
        <div {...groupProps} ref={ref} style={{ display: "flex" }}>
          <DateField {...fieldProps} />
          <Button {...buttonProps}>🗓</Button>
        </div>
        {state.isOpen && !props.isDisabled && (
          <Popover
            state={state}
            triggerRef={ref as any}
            placement="bottom start"
          >
            <FocusLock>
              <Calendar {...calendarProps} />
            </FocusLock>
          </Popover>
        )}
      </div>
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

function Calendar(props: any) {
  let { locale } = useLocale();
  let state = useCalendarState({
    ...props,
    locale,
    createCalendar,
  });

  let { calendarProps, prevButtonProps, nextButtonProps, title } = useCalendar(
    props,
    state
  );

  let { role } = calendarProps;

  console.log(nextButtonProps);

  return (
    <div {...calendarProps} role="group" className="calendar">
      <CalendarNavigationButton
        onPress={() => {}}
        aria-label={""}
        icon={<ArrowLeftOutline24Icon />}
      />
      <CalendarNavigationButton
        onPress={() => {}}
        aria-label={""}
        icon={<ArrowRightOutline24Icon />}
      />
      <CalendarGrid state={state} />
    </div>
  );
}

function CalendarGrid({ state, ...props }: { state: any }) {
  let { locale } = useLocale();
  let { gridProps, headerProps, weekDays } = useCalendarGrid(props, state);

  // Get the number of weeks in the month so we can render the proper number of rows.
  let weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale);

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
        {[...new Array(weeksInMonth).keys()].map((weekIndex) => (
          <tr key={weekIndex}>
            {state
              .getDatesInWeek(weekIndex)
              .map((date: any, i: React.Key | null | undefined) =>
                date ? (
                  <CalendarCell2 key={i} state={state} date={date} />
                ) : (
                  <td key={i} />
                )
              )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function CalendarCell2({ state, date }: { state: any; date: any }) {
  let ref = React.useRef(null);
  let {
    cellProps,
    buttonProps,
    isSelected,
    isOutsideVisibleRange,
    isDisabled,
    isUnavailable,
    formattedDate,
  } = useCalendarCell({ date }, state, ref);

  return (
    <td {...cellProps}>
      <div
        {...buttonProps}
        ref={ref}
        hidden={isOutsideVisibleRange}
        className={`cell ${isSelected ? "selected" : ""} ${
          isDisabled ? "disabled" : ""
        } ${isUnavailable ? "unavailable" : ""}`}
      >
        {formattedDate}
      </div>
    </td>
  );
}
