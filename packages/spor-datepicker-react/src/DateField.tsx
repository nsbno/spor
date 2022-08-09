import { Box, BoxProps, Flex, useMultiStyleConfig } from "@chakra-ui/react";
import { createCalendar, DateValue } from "@internationalized/date";
import { useDateField, useDateSegment } from "@react-aria/datepicker";
import {
  DateSegment as DateSegmentType,
  useDateFieldState,
} from "@react-stately/datepicker";
import { Language, useTranslation } from "@vygruppen/spor-i18n-react";
import React, { forwardRef, useRef } from "react";
import { AriaDateFieldProps } from "react-aria";
import { DateFieldState } from "react-stately";
import { useCurrentLocale } from "./utils";

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
  ({ children, ...otherProps }, ref) => {
    const styles = useMultiStyleConfig("Datepicker", otherProps);
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
  const { language } = useTranslation();
  console.log(segment);
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
      {segment.isPlaceholder
        ? translateSegmentPlaceholder(segment.type, language)
        : segment.text}
    </Box>
  );
}

const translateSegmentPlaceholder = (
  segmentType: DateSegmentType["type"],
  language: Language
) => {
  switch (segmentType) {
    case "day":
      return "dd";
    case "month":
      return "mm";
    case "year":
      return language === "en" ? "yyyy" : "åååå";
    default:
      return "";
  }
};
