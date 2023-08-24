import { Box, useMultiStyleConfig } from "@chakra-ui/react";
import React, { RefObject, forwardRef, useRef } from "react";
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
export const DateTimeSegment = forwardRef<HTMLDivElement, DateTimeSegmentProps>(
  ({ segment, state }, externalRef) => {
    const internalRef = useRef(null);
    const ref = externalRef ?? internalRef;

    const { segmentProps } = useDateSegment(
      segment,
      state,
      ref as RefObject<HTMLDivElement>
    );

    const styles = useMultiStyleConfig("Datepicker", {
      isPlaceholder: segment.isPlaceholder,
      isEditable: segment.isEditable,
    });
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
        fontSize={["mobile.sm", "desktop.sm"]}
        sx={styles.dateTimeSegment}
        _focus={{
          backgroundColor: "darkTeal",
          color: "white",
        }}
      >
        {isPaddable(segment.type)
          ? segment.text.padStart(2, "0")
          : segment.text}
      </Box>
    );
  }
);

const isPaddable = (segmentType: DateSegment["type"]) =>
  segmentType === "month" ||
  segmentType === "day" ||
  segmentType === "hour" ||
  segmentType === "minute" ||
  segmentType === "second";
