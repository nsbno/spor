"use client";
import { Box, Field as ChakraField, Flex } from "@chakra-ui/react";
import { CalendarDateTime, Time } from "@internationalized/date";
import { useRef } from "react";
import { AriaTimeFieldProps, useTimeField } from "react-aria";
import { DateSegment, TimeFieldState } from "react-stately";

import { spor } from "@/util";

import { createTexts, useTranslation } from "../i18n";
import { DateTimeSegment } from "./DateTimeSegment";
import { getTimestampFromTime } from "./utils";

type TimeFieldProps = AriaTimeFieldProps<Time> & {
  state: TimeFieldState;
  label: string;
  name?: string;
};
/** A time field component.
 *
 * This component lets the user choose a time based on regular user input.
 * It shouldn't be used directly, but is used by the TimePicker component.
 */
export const TimeField = ({ state, ...props }: TimeFieldProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { labelProps, fieldProps } = useTimeField(props, state, ref);
  const { t } = useTranslation();

  return (
    <Box>
      <spor.label
        {...labelProps}
        htmlFor={fieldProps.id}
        marginBottom={0}
        fontSize={["mobile.xs", "desktop.xs"]}
        top={0}
        cursor="text"
        left="50%"
        transform="translateX(-50%)"
        position="absolute"
        paddingTop="2px"
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
        maxWidth="80%"
      >
        {props.label}
        <ChakraField.RequiredIndicator />
      </spor.label>
      <Flex {...fieldProps} ref={ref} paddingTop="3" paddingBottom="0.5">
        {state.segments.map((segment: DateSegment, index) => (
          <DateTimeSegment
            key={index}
            segment={segment}
            state={state}
            ariaLabel={t(getAriaLabel(segment.type))}
          />
        ))}
      </Flex>
      <input
        type="hidden"
        value={getTimestampFromTime(state.value as CalendarDateTime | null)}
        name={props.name}
      />
    </Box>
  );
};

const getAriaLabel = (segmentType: DateSegment["type"]) => {
  switch (segmentType) {
    case "hour": {
      return texts.hour;
    }
    case "minute": {
      return texts.minute;
    }
    case "second": {
      return texts.second;
    }
    default: {
      return texts.default;
    }
  }
};

const texts = createTexts({
  hour: {
    nb: "Velg time",
    nn: "Vel time",
    sv: "Välj timme",
    en: "Choose hour",
  },
  minute: {
    nb: "Velg minutt",
    nn: "Vel minutt",
    sv: "Välj minut",
    en: "Choose minute",
  },
  second: {
    nb: "Velg sekund",
    nn: "Vel sekund",
    sv: "Välj sekund",
    en: "Choose second",
  },
  default: {
    nb: "Velg tid",
    nn: "Vel tid",
    sv: "Välj tid",
    en: "Choose time",
  },
});
