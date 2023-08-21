import { Box, Flex, FormLabel, useMultiStyleConfig } from "@chakra-ui/react";
import { DateValue, GregorianCalendar } from "@internationalized/date";
import { useDateFieldState } from "@react-stately/datepicker";
import { DOMAttributes, FocusableElement } from "@react-types/shared";
import React, { RefObject, forwardRef, useRef } from "react";
import { AriaDateFieldProps, useDateField } from "react-aria";
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
    const { fieldProps, labelProps } = useDateField(
      props,
      state,
      ref as RefObject<HTMLDivElement>
    );

    return (
      <Box minWidth="6rem" width="100%">
        {props.label && (
          <FormLabel
            {...props.labelProps}
            {...labelProps}
            sx={styles.inputLabel}
            position="absolute"
            paddingTop="2px"
          >
            {props.label}
          </FormLabel>
        )}
        <Flex {...fieldProps} paddingTop="3" paddingBottom="0.5">
          {state.segments.map((segment, i) => (
            <DateTimeSegment
              ref={i === 0 ? ref : undefined}
              key={i}
              segment={segment}
              state={state}
            />
          ))}
        </Flex>
        <input
          type="hidden"
          value={state.value?.toString()}
          name={props.name}
        />
      </Box>
    );
  }
);
