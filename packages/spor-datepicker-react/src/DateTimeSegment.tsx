import { Box } from "@chakra-ui/react";
import { useDateSegment } from "@react-aria/datepicker";
import React, { useRef } from "react";
import { DateFieldState, DateSegment } from "react-stately";

type DateTimeSegmentProps = {
  segment: DateSegment;
  state: DateFieldState;
};
/**
 * A date time segment is a part of a date or a time stamp.
 *
 * Examples could be the day, month, year, hour, minute, second, etc.
 *
 * This component should be used with the react-aria library, and is not meant to be used directly.
 * */
export const DateTimeSegment = ({ segment, state }: DateTimeSegmentProps) => {
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
      px="1px"
      textAlign="end"
      outline="none"
      borderRadius="xs"
      color={
        segment.isPlaceholder
          ? "osloGrey"
          : segment.isEditable
          ? "darkGrey"
          : "osloGrey"
      }
      _focus={{
        backgroundColor: "darkTeal",
        color: "white",
      }}
    >
      {segment.text}
    </Box>
  );
};
