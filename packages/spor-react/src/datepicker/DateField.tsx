import { Box, Flex, FormLabel, useMultiStyleConfig } from "@chakra-ui/react";
import { DateValue, GregorianCalendar } from "@internationalized/date";
import { DOMAttributes, FocusableElement } from "@react-types/shared";
import React, { RefObject, forwardRef, useId, useRef } from "react";
import { AriaDateFieldProps, useDateField } from "react-aria";
import { useDateFieldState } from "react-stately";
import { DateTimeSegment } from "./DateTimeSegment";
import { useCurrentLocale } from "./utils";

function createCalendar(identifier: string) {
  switch (identifier) {
    case "gregory":
      return new GregorianCalendar();
    default:
      throw new Error(`Unsupported calendar ${identifier}`);
  }
}

type DateFieldProps = AriaDateFieldProps<DateValue> & {
  label?: React.ReactNode;
  labelProps?: DOMAttributes<FocusableElement>;
  name?: string;
  labelId?: string;
};
export const DateField = forwardRef<HTMLDivElement, DateFieldProps>(
  (props, externalRef) => {
    const locale = useCurrentLocale();
    const styles = useMultiStyleConfig("Datepicker", {});
    const state = useDateFieldState({
      ...props,
      locale,
      createCalendar,
    });

    const internalRef = useRef(null);
    const ref = externalRef ?? internalRef;
    const { fieldProps } = useDateField(
      props,
      state,
      ref as RefObject<HTMLDivElement>,
    );

    return (
      <Box minWidth="6rem" width="100%">
        {props.label && (
          <FormLabel
            sx={styles.inputLabel}
            position="absolute"
            paddingTop="2px"
            id={props.labelId}
          >
            {props.label}
          </FormLabel>
        )}
        <Flex {...fieldProps} ref={ref} paddingTop="3" paddingBottom="0.5">
          {state.segments.map((segment, i) => (
            <DateTimeSegment
              key={i}
              segment={segment}
              ariaLabelledby={props.labelId}
              state={state}
            />
          ))}
        </Flex>
        <input
          type="hidden"
          value={state.value?.toString() ?? ""}
          name={props.name}
        />
      </Box>
    );
  },
);
