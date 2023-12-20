import {
  Box,
  BoxProps,
  FocusLock,
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
import React, { ReactNode, forwardRef, useRef } from "react";
import { AriaDatePickerProps, I18nProvider, useDatePicker } from "react-aria";
import { useDatePickerState } from "react-stately";
import { FormErrorMessage } from "..";
import { Calendar } from "./Calendar";
import { CalendarTriggerButton } from "./CalendarTriggerButton";
import { DateField } from "./DateField";
import { StyledField } from "./StyledField";
import { useCurrentLocale } from "./utils";

type DatePickerProps = Omit<AriaDatePickerProps<DateValue>, 'onChange'> &
  Pick<BoxProps, "minHeight" | "width"> & {
    variant: ResponsiveValue<"base" | "floating" | "ghost">;
    name?: string;
    showYearNavigation?: boolean;
    withPortal?: boolean;
    onChange?: (value: DateValue | null) => void;
  };

/**
 * A date picker component.
 *
 * There are three different variants – `base`, `floating` and `ghost`.
 *
 * ```tsx
 * <DatePicker label="Dato" variant="base" />
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
      ref as React.MutableRefObject<HTMLDivElement>,
    );

    const styles = useMultiStyleConfig("Datepicker", { variant });
    const locale = useCurrentLocale();

    const onFieldClick = () => {
      state.setOpen(true);
    };

    const popoverContent = (
      <PopoverContent color="darkGrey" sx={styles.calendarPopover}>
        <PopoverArrow sx={styles.arrow} />
        <PopoverBody>
          <FocusLock>
            <Calendar
              {...calendarProps}
              variant={variant}
              showYearNavigation={showYearNavigation}
            />
          </FocusLock>
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
            isOpen={state.isOpen}
            onOpen={state.open}
            onClose={state.close}
          >
            <InputGroup {...groupProps} display="inline-flex">
              <PopoverAnchor>
                <StyledField
                  variant={variant}
                  onClick={onFieldClick}
                  paddingX={3}
                  minHeight={minHeight}
                >
                  <PopoverTrigger>
                    <CalendarTriggerButton
                      variant={variant}
                      ref={ref}
                      {...buttonProps}
                    />
                  </PopoverTrigger>
                  <DateField
                    label={props.label}
                    labelProps={labelProps}
                    name={props.name}
                    {...fieldProps}
                  />
                </StyledField>
              </PopoverAnchor>
            </InputGroup>
            <FormErrorMessage {...errorMessageProps}>
              {errorMessage as ReactNode}
            </FormErrorMessage>
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
