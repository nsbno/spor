"use client";
import { Box, useSlotRecipe } from "@chakra-ui/react";
import { forwardRef, PropsWithChildren, RefObject, useRef } from "react";
import { useDateSegment } from "react-aria";
import { DateFieldState, DateSegment } from "react-stately";

import { DatePickerVariantProps } from "..";

type DateTimeSegmentProps = PropsWithChildren<DatePickerVariantProps> & {
  segment: DateSegment;
  state: DateFieldState;
  ariaLabel?: string;
  ariaDescription?: string;
};
/**
 * A date time segment is a part of a date or a time stamp.
 *
 * Examples could be the day, month, year, hour, minute, second, etc.
 *
 * This component should be used with the react-aria library, and is not meant to be used directly.
 * */
export const DateTimeSegment = forwardRef<HTMLDivElement, DateTimeSegmentProps>(
  ({ segment, state, ariaLabel, ariaDescription }, externalRef) => {
    const internalRef = useRef(null);
    const ref = externalRef ?? internalRef;

    const { segmentProps } = useDateSegment(
      segment,
      state,
      ref as RefObject<HTMLDivElement>,
    );

    const recipe = useSlotRecipe({
      key: "datePicker",
    });

    const styles = recipe({
      isPlaceholder: segment.isPlaceholder,
      isEditable: segment.isEditable,
    });

    return (
      <Box
        {...segmentProps}
        ref={ref}
        style={{
          ...segmentProps.style,
          boxSizing: "content-box",
        }}
        textAlign="center"
        outline="none"
        borderRadius="xs"
        fontSize={["mobile.sm", "desktop.sm"]}
        css={styles.dateTimeSegment}
        aria-description={ariaDescription}
        aria-labelledby={ariaLabel}
      >
        {isPaddable(segment.type)
          ? segment.text.padStart(2, "0")
          : segment.text}
      </Box>
    );
  },
);
DateTimeSegment.displayName = "DateTimeSegment";

const isPaddable = (segmentType: DateSegment["type"]) =>
  segmentType === "month" ||
  segmentType === "day" ||
  segmentType === "hour" ||
  segmentType === "minute" ||
  segmentType === "second";
