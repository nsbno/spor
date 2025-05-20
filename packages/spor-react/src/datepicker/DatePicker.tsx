"use client";
import {
  Box,
  BoxProps,
  Popover as ChakraPopover,
  PopoverAnchor,
  PopoverRootProps,
  Portal,
  RecipeVariantProps,
  useFieldContext,
  useSlotRecipe,
} from "@chakra-ui/react";
import React, { forwardRef, PropsWithChildren, useId, useRef } from "react";
import {
  AriaDatePickerProps,
  DateValue,
  I18nProvider,
  useDatePicker,
} from "react-aria";
import { useDatePickerState } from "react-stately";

import { Field, FieldBaseProps } from "@/input/Field";

import { datePickerSlotRecipe } from "../theme/slot-recipes/datepicker";
import { Calendar } from "./Calendar";
import { CalendarTriggerButton } from "./CalendarTriggerButton";
import { DateField } from "./DateField";
import { StyledField } from "./StyledField";
import { CalendarVariants } from "./types";
import { useCurrentLocale } from "./utils";

export type DatePickerVariantProps = RecipeVariantProps<
  typeof datePickerSlotRecipe
>;

type DatePickerProps = Omit<AriaDatePickerProps<DateValue>, "onChange"> &
  Pick<BoxProps, "minHeight" | "width"> &
  PropsWithChildren<DatePickerVariantProps> &
  CalendarVariants & {
    name?: string;
    showYearNavigation?: boolean;
    withPortal?: boolean;
    onChange?: (value: DateValue | null) => void;
    positioning?: PopoverRootProps["positioning"];
  } & FieldBaseProps;

/**
 * A date picker component.
 *
 * There are three different variants –`core`, `floating` and `ghost`.
 *
 * ```tsx
 * <DatePicker label="Dato" variant="core" />
 * ```
 */

export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  (
    {
      variant,
      errorText,
      minHeight,
      showYearNavigation,
      withPortal = true,
      width = "auto",
      invalid = false,
      helperText,
      positioning,
      ...props
    },
    externalRef,
  ) => {
    const chakraFieldProps = useFieldContext();
    const state = useDatePickerState({
      ...props,
      shouldCloseOnSelect: true,
      errorMessage: errorText,
      isRequired: props.isRequired ?? chakraFieldProps?.required,
      validationState: chakraFieldProps?.invalid ? "invalid" : "valid",
    });

    const internalRef = useRef<HTMLDivElement>(null);
    const ref = externalRef ?? internalRef;
    const { labelProps, fieldProps, buttonProps, dialogProps, calendarProps } =
      useDatePicker(
        props,
        state,
        ref as React.MutableRefObject<HTMLDivElement>,
      );

    const labelId = `label-${useId()}`;
    const inputGroupId = `input-group-${useId()}`;

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
          <ChakraPopover.Body minWidth={"20rem"}>
            <Calendar
              {...calendarProps}
              variant={variant}
              showYearNavigation={showYearNavigation}
            />
          </ChakraPopover.Body>
        </ChakraPopover.Content>
      </ChakraPopover.Positioner>
    );

    return (
      <I18nProvider locale={locale}>
        <Box
          position="relative"
          display="inline-flex"
          flexDirection="column"
          width={width}
        >
          <ChakraPopover.Root {...dialogProps} positioning={positioning}>
            <Field
              display="inline-flex"
              id={inputGroupId}
              aria-labelledby={labelId}
              errorText={errorText}
              invalid={invalid}
              helperText={helperText}
            >
              <PopoverAnchor>
                <StyledField
                  variant={variant}
                  onClick={onFieldClick}
                  paddingX={3}
                  minHeight={minHeight}
                  isDisabled={props.isDisabled}
                  ariaLabelledby={labelId}
                >
                  <ChakraPopover.Trigger asChild>
                    <CalendarTriggerButton
                      paddingLeft={1}
                      paddingRight={1}
                      variant={variant}
                      ref={ref}
                      {...buttonProps}
                    />
                  </ChakraPopover.Trigger>
                  <DateField
                    label={props.label}
                    labelProps={labelProps}
                    labelId={labelId}
                    name={props.name}
                    {...fieldProps}
                  />
                </StyledField>
              </PopoverAnchor>
            </Field>

            {state.isOpen && !props.isDisabled && withPortal && (
              <Portal>{popoverContent}</Portal>
            )}
            {state.isOpen && !props.isDisabled && !withPortal && popoverContent}
          </ChakraPopover.Root>
        </Box>
      </I18nProvider>
    );
  },
);
DatePicker.displayName = "DatePicker";
