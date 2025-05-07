"use client";

import { BoxProps, PopoverAnchor, useSlotRecipe } from "@chakra-ui/react";
import { CalendarOutline24Icon } from "@vygruppen/spor-icon-react";
import { forwardRef, PropsWithChildren } from "react";
import { AriaButtonProps } from "react-aria";

import {
  createTexts,
  DatePickerVariantProps,
  IconButton,
  useTranslation,
} from "..";
import { datePickerSlotRecipe } from "../theme/slot-recipes/datepicker";
import { CalendarVariants } from "./types";

type CalendarTriggerButtonProps = AriaButtonProps<"button"> &
  PropsWithChildren<DatePickerVariantProps> &
  BoxProps &
  CalendarVariants & {
    disabled?: boolean;
    ariaLabelledby?: string;
  };
export const CalendarTriggerButton = forwardRef<
  HTMLDivElement,
  CalendarTriggerButtonProps
>(({ variant, disabled, ariaLabelledby, ...buttonProps }) => {
  CalendarTriggerButton.displayName = "CalendarTriggerButton";
  const { t } = useTranslation();
  const recipe = useSlotRecipe({
    key: "datePicker",
    recipe: datePickerSlotRecipe,
  });
  const styles = recipe({ variant });

  return (
    <PopoverAnchor {...buttonProps}>
      <IconButton
        icon={<CalendarOutline24Icon />}
        aria-label={t(texts.openCalendar)}
        css={styles.calendarTriggerButton}
        variant="ghost"
        disabled={disabled}
        aria-labelledby={ariaLabelledby}
      />
    </PopoverAnchor>
  );
});

const texts = createTexts({
  openCalendar: {
    nb: "Åpne kalender",
    nn: "Åpne kalendar",
    sv: "Öppna kalender",
    en: "Open calendar",
  },
});
