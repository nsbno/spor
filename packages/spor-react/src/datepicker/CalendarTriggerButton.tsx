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
import { CalendarVariants } from "./types";

type CalendarTriggerButtonProps = AriaButtonProps<"button"> &
  PropsWithChildren<DatePickerVariantProps> &
  BoxProps &
  CalendarVariants & {
    disabled?: boolean;
  };
export const CalendarTriggerButton = forwardRef<
  HTMLDivElement,
  CalendarTriggerButtonProps
  // onPress is extracted because it is not supported by chakra.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
>(({ variant, disabled, onPress: _, ...buttonProps }, ref) => {
  const { t } = useTranslation();

  const recipe = useSlotRecipe({
    key: "datePicker",
  });
  const styles = recipe({ variant });

  return (
    <PopoverAnchor {...buttonProps} ref={ref}>
      <IconButton
        icon={<CalendarOutline24Icon />}
        aria-label={t(texts.openCalendar)}
        css={styles.calendarTriggerButton}
        variant="ghost"
        disabled={disabled}
      />
    </PopoverAnchor>
  );
});
CalendarTriggerButton.displayName = "CalendarTriggerButton";

const texts = createTexts({
  openCalendar: {
    nb: "Åpne kalender",
    nn: "Åpne kalendar",
    sv: "Öppna kalender",
    en: "Open calendar",
  },
});
