import { Box, BoxProps, Flex, useMultiStyleConfig } from "@chakra-ui/react";
import { DateValue, GregorianCalendar } from "@internationalized/date";
import { useDateField, useDateSegment } from "@react-aria/datepicker";
import {
  DateSegment as DateSegmentType,
  useDateFieldState,
} from "@react-stately/datepicker";
import React, { forwardRef, useRef } from "react";
import { AriaDateFieldProps } from "react-aria";
import { DateFieldState } from "react-stately";
import { useCurrentLocale } from "./utils";

function createCalendar(identifier: string) {
  switch (identifier) {
    case "gregory":
      return new GregorianCalendar();
    default:
      throw new Error(`Unsupported calendar ${identifier}`);
  }
}

type DateFieldProps = AriaDateFieldProps<DateValue>;
export function DateField(props: DateFieldProps) {
  const locale = useCurrentLocale();
  const state = useDateFieldState({
    ...props,
    locale,
    createCalendar,
  });

  const ref = useRef(null);
  const { fieldProps } = useDateField(props, state, ref);

  return (
    <Flex {...fieldProps} ref={ref}>
      {state.segments.map((segment, i) => (
        <DateSegment key={i} segment={segment} state={state} />
      ))}
    </Flex>
  );
}
type StyledFieldProps = BoxProps & {
  variant: "simple" | "with-trigger";
};
export const StyledField = forwardRef<HTMLDivElement, StyledFieldProps>(
  ({ children, variant, ...otherProps }, ref) => {
    const styles = useMultiStyleConfig("Datepicker", { variant });
    return (
      <Box sx={styles.wrapper} {...otherProps} ref={ref}>
        {children}
      </Box>
    );
  }
);

type DateSegmentProps = {
  segment: DateSegmentType;
  state: DateFieldState;
};
function DateSegment({ segment, state }: DateSegmentProps) {
  const ref = useRef(null);
  const { segmentProps } = useDateSegment(segment, state, ref);
  return (
    <Box
      {...segmentProps}
      ref={ref}
      style={{
        ...segmentProps.style,
        fontVariantNumeric: "tabular-nums",
        boxSizing: "content-box",
      }}
      boxSizing="content-box"
      px="1px"
      textAlign="end"
      outline="none"
      borderRadius="xs"
      color={
        segment.isPlaceholder
          ? "alias.osloGrey"
          : segment.isEditable
          ? "alias.darkGrey"
          : "alias.osloGrey"
      }
      _focus={{
        backgroundColor: "alias.darkTeal",
        color: "white",
      }}
    >
      {segment.text}
    </Box>
  );
}
