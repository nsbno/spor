"use client";
import {
  Box,
  BoxProps,
  PopoverAnchor,
  PopoverArrow,
  PopoverBody,
  PopoverRoot,
  Portal,
  RecipeVariantProps,
  useFieldContext,
  useSlotRecipe,
} from "@chakra-ui/react";
import React, {
  PropsWithChildren,
  ReactNode,
  forwardRef,
  useId,
  useRef,
} from "react";
import {
  AriaDatePickerProps,
  I18nProvider,
  useDatePicker,
  DateValue,
} from "react-aria";
import { useDatePickerState } from "react-stately";
import { Calendar } from "./Calendar";
import { CalendarTriggerButton } from "./CalendarTriggerButton";
import { DateField } from "./DateField";
import { StyledField } from "./StyledField";
import { useCurrentLocale } from "./utils";
import { datePickerSlotRecipe } from "../theme/slot-recipes/datepicker";

import { CalendarVariants } from "./types";
import { Field } from "@/input/Field";
import { Popover, PopoverContent, PopoverTrigger } from "..";

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
    errorMessage?: ReactNode;
  };

/**
 * A date picker component.
 *
 * There are three different variants – `core`, `floating` and `ghost`.
 *
 * ```tsx
 * <DatePicker label="Dato" variant="core" />
 * ```
 */

export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  (
    {
      variant,
      errorMessage,
      minHeight,
      showYearNavigation,
      withPortal = true,
      width = "auto",
      ...props
    },
    externalRef,
  ) => {
    const chakraFieldProps = useFieldContext();
    const state = useDatePickerState({
      ...props,
      shouldCloseOnSelect: true,
      errorMessage,
      isRequired: props.isRequired ?? chakraFieldProps?.required,
      validationState: chakraFieldProps?.invalid ? "invalid" : "valid",
    });
    const internalRef = useRef<HTMLDivElement>(null);
    const ref = externalRef ?? internalRef;
    const {
      labelProps,
      fieldProps,
      buttonProps,
      dialogProps,
      calendarProps,
      errorMessageProps,
    } = useDatePicker(
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
      <PopoverContent
        color="darkGrey"
        css={styles.calendarPopover}
        backgroundColor={"white"}
      >
        <PopoverArrow />
        <PopoverBody>
          <Calendar
            {...calendarProps}
            variant={variant}
            showYearNavigation={showYearNavigation}
          />
        </PopoverBody>
      </PopoverContent>
    );

    return (
      <I18nProvider locale={locale}>
        <Box
          position="relative"
          display="inline-flex"
          flexDirection="column"
          width={width}
        >
          <Popover
            {...dialogProps}
            open={state.isOpen}
            onOpenChange={state.open}
            onExitComplete={state.close}
          >
            <Field
              display="inline-flex"
              id={inputGroupId}
              aria-labelledby={labelId}
              errorText={errorMessage}
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
                  <PopoverTrigger>
                    <CalendarTriggerButton
                      variant={variant}
                      ref={ref}
                      isDisabled={props.isDisabled}
                      ariaLabelledby={labelId}
                      {...buttonProps}
                    />
                  </PopoverTrigger>
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
          </Popover>
        </Box>
      </I18nProvider>
    );
  },
);
