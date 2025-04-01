"use client";
import {
  Box,
  BoxProps,
  PopoverAnchor,
  Popover as ChakraPopover,
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
import { DateField } from "./DateField";
import { RangeCalendar } from "./RangeCalendar";
import { StyledField } from "./StyledField";
import { useCurrentLocale } from "./utils";

import { Field } from "../input/Field";
import { DatePickerVariantProps } from "./DatePicker";
import { datePickerSlotRecipe } from "../theme/slot-recipes/datepicker";
import { CalendarVariants } from "./types";
import { CalendarTriggerButton } from "./CalendarTriggerButton";

type DateRangePickerProps = Omit<
  AriaDateRangePickerProps<DateValue>,
  "onChange"
> &
  Pick<BoxProps, "minHeight"> &
  PropsWithChildren<DatePickerVariantProps> &
  CalendarVariants & {
    startLabel?: string;
    startName?: string;
    endLabel?: string;
    endName?: string;
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
 * There are three variants to choose from – `core`, `floating` and `ghost`.
 *
 * ```tsx
 * <DateRangePicker startLabel="From" startName="from" endLabel="To" endName="to" variant="core" />
 * ```
 */ export function DateRangePicker({
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
    validationState: fieldContextPRops?.invalid ? "invalid" : "valid",
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

  const onFieldClick = () => {
    state.setOpen(true);
  };

  const popoverContent = (
    <ChakraPopover.Positioner>
      <ChakraPopover.Content css={styles.calendarPopover}>
        <ChakraPopover.Body maxWidth="60rem">
          <RangeCalendar variant={"core"} {...calendarProps} />
        </ChakraPopover.Body>
      </ChakraPopover.Content>
    </ChakraPopover.Positioner>
  );

  return (
    <I18nProvider locale={locale}>
      <Box position="relative" display="inline-flex" flexDirection="column">
        {props.label && (
          <Box as="label" {...labelProps} css={styles.inputLabel}>
            {props.label}
          </Box>
        )}
        <ChakraPopover.Root {...dialogProps}>
          <Field width="auto" display="inline-flex">
            <PopoverAnchor>
              <StyledField
                alignItems="center"
                paddingX={3}
                variant={variant}
                onClick={onFieldClick}
                minHeight={minHeight}
              >
                {variant && (
                  <ChakraPopover.Trigger asChild>
                    <CalendarTriggerButton
                      variant={variant}
                      ref={ref}
                      {...buttonProps}
                    />
                  </ChakraPopover.Trigger>
                )}
                <DateField
                  {...startFieldProps}
                  name={startName}
                  label={props.startLabel}
                  labelProps={labelProps}
                />
                <Box
                  as="span"
                  aria-hidden="true"
                  paddingRight="2"
                  paddingLeft={"2"}
                >
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
        </ChakraPopover.Root>
      </Box>
    </I18nProvider>
  );
}
