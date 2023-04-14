import { Box, Flex, FormLabel, useMultiStyleConfig } from "@chakra-ui/react";
import { DateValue, GregorianCalendar } from "@internationalized/date";
import { useDateFieldState } from "@react-stately/datepicker";
import { DOMAttributes, FocusableElement } from "@react-types/shared";
import React, { useRef } from "react";
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
export function DateField(props: DateFieldProps) {
  const locale = useCurrentLocale();
  const styles = useMultiStyleConfig("Datepicker", {});
  const state = useDateFieldState({
    ...props,
    locale,
    createCalendar,
  });

  const ref = useRef(null);
  const { fieldProps, labelProps } = useDateField(props, state, ref);

  return (
    <Box minWidth="6rem">
      {props.label && (
        <FormLabel {...props.labelProps} {...labelProps} sx={styles.inputLabel}>
          {props.label}
        </FormLabel>
      )}
      <Flex {...fieldProps} ref={ref}>
        {state.segments.map((segment, i) => (
          <DateTimeSegment key={i} segment={segment} state={state} />
        ))}
      </Flex>
      <input type="hidden" value={state.value?.toString()} name={props.name} />
    </Box>
  );
}
