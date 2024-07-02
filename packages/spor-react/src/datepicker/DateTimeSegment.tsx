import { Box, useMultiStyleConfig } from "@chakra-ui/react";
import React, { RefObject, forwardRef, useRef } from "react";
import { useDateSegment } from "react-aria";
import { DateFieldState, DateSegment } from "react-stately";
import { createTexts, useTranslation } from "../i18n";

type DateTimeSegmentProps = {
  segment: DateSegment;
  state: DateFieldState;
  ariaLabelledby?: string;
};
/**
 * A date time segment is a part of a date or a time stamp.
 *
 * Examples could be the day, month, year, hour, minute, second, etc.
 *
 * This component should be used with the react-aria library, and is not meant to be used directly.
 * */
export const DateTimeSegment = forwardRef<HTMLDivElement, DateTimeSegmentProps>(
  ({ segment, state, ariaLabelledby }, externalRef) => {
    const internalRef = useRef(null);
    const ref = externalRef ?? internalRef;

    const { t } = useTranslation();

    const { segmentProps } = useDateSegment(
      segment,
      state,
      ref as RefObject<HTMLDivElement>,
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
          boxSizing: "content-box",
        }}
        textAlign="center"
        outline="none"
        borderRadius="xs"
        fontSize={["mobile.sm", "desktop.sm"]}
        sx={styles.dateTimeSegment}
        aria-labelledby={ariaLabelledby}
        aria-label={t(getAriaLabel(segment.type))}
      >
        {isPaddable(segment.type)
          ? segment.text.padStart(2, "0")
          : segment.text}
      </Box>
    );
  },
);

const isPaddable = (segmentType: DateSegment["type"]) =>
  segmentType === "month" ||
  segmentType === "day" ||
  segmentType === "hour" ||
  segmentType === "minute" ||
  segmentType === "second";

const texts = createTexts({
  day: {
    nb: "Velg dag",
    nn: "Vel dag",
    sv: "Välj dag",
    en: "Choose day",
  },
  month: {
    nb: "Velg måned",
    nn: "Vel månad",
    sv: "Välj månad",
    en: "Choose month",
  },
  year: {
    nb: "Velg år",
    nn: "Vel år",
    sv: "Välj år",
    en: "Choose year",
  },
});

const getAriaLabel = (segmentType: DateSegment["type"]) => {
  switch (segmentType) {
    case "day":
      return texts.day;
    case "month":
      return texts.month;
    case "year":
      return texts.year;
    default:
      return texts.day;
  }
};
