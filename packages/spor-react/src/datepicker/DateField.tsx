import { Box, Flex, useSlotRecipe } from "@chakra-ui/react";
import { DateValue, GregorianCalendar } from "@internationalized/date";
import { DOMAttributes, FocusableElement } from "@react-types/shared";
import React, { PropsWithChildren, RefObject, forwardRef, useRef } from "react";
import { AriaDateFieldProps, useDateField } from "react-aria";
import { DateSegment, useDateFieldState } from "react-stately";
import { DateTimeSegment } from "./DateTimeSegment";
import { useCurrentLocale } from "./utils";
import { createTexts, useTranslation } from "../i18n";
import { DatePickerVariantProps } from "./DatePicker";
import { datePickerSlotRecipe } from "../theme/components/datepicker";

function createCalendar(identifier: string) {
  switch (identifier) {
    case "gregory":
      return new GregorianCalendar();
    default:
      throw new Error(`Unsupported calendar ${identifier}`);
  }
}

type DateFieldProps = AriaDateFieldProps<DateValue> &
  PropsWithChildren<DatePickerVariantProps> & {
    label?: React.ReactNode;
    labelProps?: DOMAttributes<FocusableElement>;
    name?: string;
    labelId?: string;
  };
export const DateField = forwardRef<HTMLDivElement, DateFieldProps>(
  ({ labelId, ...props }, externalRef) => {
    const locale = useCurrentLocale();
    const recipe = useSlotRecipe({
      key: "datePicker",
      recipe: datePickerSlotRecipe,
    });
    const styles = recipe({});
    const state = useDateFieldState({
      ...props,
      locale,
      createCalendar,
    });

    const { t } = useTranslation();

    const internalRef = useRef(null);
    const ref = externalRef ?? internalRef;
    const { fieldProps } = useDateField(
      props,
      state,
      ref as RefObject<HTMLDivElement>,
    );

    return (
      <Box minWidth="6rem" width="100%">
        {props.label && (
          <Box
            as="label"
            css={styles.inputLabel}
            position="absolute"
            paddingTop="2px"
            id={labelId}
          >
            {props.label}
          </Box>
        )}
        <Flex {...fieldProps} ref={ref} paddingTop="3" paddingBottom="0.5">
          {state.segments.map((segment, i) => (
            <DateTimeSegment
              key={i}
              segment={segment}
              ariaDescription={t(getAriaLabel(segment.type))}
              ariaLabel={labelId}
              state={state}
            />
          ))}
        </Flex>
        <input
          type="hidden"
          value={state.value?.toString() ?? ""}
          name={props.name}
        />
      </Box>
    );
  },
);

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
