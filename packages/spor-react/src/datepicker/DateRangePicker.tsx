"use client";
import {
  Box,
  BoxProps,
  ConditionalValue,
  PopoverAnchor,
  Portal,
  useFieldContext,
  useSlotRecipe,
} from "@chakra-ui/react";
import { DateValue } from "@internationalized/date";
import React, { PropsWithChildren, useRef } from "react";
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
import {
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from "../popover";
import { Field } from "..";
import { DatePickerVariantProps } from "./DatePicker";
import { datePickerSlotRecipe } from "../theme/slot-recipes/datepicker";

type DateRangePickerProps = Omit<
  AriaDateRangePickerProps<DateValue>,
  "onChange"
> &
  Pick<BoxProps, "minHeight"> &
  PropsWithChildren<DatePickerVariantProps> & {
    startLabel?: string;
    startName?: string;
    endLabel?: string;
    endName?: string;
    variant: ConditionalValue<"base" | "floating" | "ghost">;
    withPortal?: boolean;
    onChange?: (
      dates: {
        start: DateValue | null;
        end: DateValue | null;
      } | null,
    ) => void;
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
  const fieldContextPRops = useFieldContext();
  const state = useDateRangePickerState({
    ...props,
    shouldCloseOnSelect: true,
    isRequired: props.isRequired ?? fieldContextPRops?.required,
    validationState: fieldContextPRops.invalid ? "invalid" : "valid",
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

  const recipe = useSlotRecipe({
    key: "datePicker",
    recipe: datePickerSlotRecipe,
  });
  const styles = recipe({ variant });
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
    <PopoverContent css={styles.calendarPopover} maxWidth="none">
      <PopoverArrow />
      <PopoverBody>
        <RangeCalendar variant={"base"} {...calendarProps} />
      </PopoverBody>
    </PopoverContent>
  );

  return (
    <I18nProvider locale={locale}>
      <Box position="relative" display="inline-flex" flexDirection="column">
        <PopoverRoot
          {...dialogProps}
          open={state.isOpen}
          onOpenChange={state.open}
          onExitComplete={state.close}
        >
          <Field
            {...groupProps}
            width="auto"
            display="inline-flex"
            label={props.label}
          >
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
          </Field>
          {state.isOpen && withPortal && <Portal>{popoverContent}</Portal>}
          {state.isOpen && !withPortal && popoverContent}
        </PopoverRoot>
      </Box>
    </I18nProvider>
  );
}
