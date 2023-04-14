import { Box } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useDateSegment } from "react-aria";
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
      paddingX="1px"
      textAlign="end"
      outline="none"
      borderRadius="xs"
      color={
        segment.isPlaceholder
          ? "dimGrey"
          : segment.isEditable
          ? "darkGrey"
          : "osloGrey"
      }
      _focus={{
        backgroundColor: "darkTeal",
        color: "white",
      }}
    >
      {isPaddable(segment.type) ? segment.text.padStart(2, "0") : segment.text}
    </Box>
  );
};

const isPaddable = (segmentType: DateSegment["type"]) =>
  segmentType === "month" ||
  segmentType === "day" ||
  segmentType === "hour" ||
  segmentType === "minute" ||
  segmentType === "second";
