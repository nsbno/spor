"use client";

import {
  BoxProps,
  ConditionalValue,
  PopoverAnchor,
  useSlotRecipe,
} from "@chakra-ui/react";
import { CalendarOutline24Icon } from "@vygruppen/spor-icon-react";
import React, {
  forwardRef,
  KeyboardEventHandler,
  PropsWithChildren,
} from "react";
import { AriaButtonProps } from "react-aria";
import {
  DatePickerVariantProps,
  IconButton,
  createTexts,
  useTranslation,
} from "..";
import { datePickerSlotRecipe } from "../theme/slot-recipes/datepicker";

type CalendarTriggerButtonProps = AriaButtonProps<"button"> &
  PropsWithChildren<DatePickerVariantProps> &
  BoxProps & {
    variant: ConditionalValue<"base" | "floating" | "ghost">;
    disabled?: boolean;
    ariaLabelledby?: string;
  };
export const CalendarTriggerButton = forwardRef<
  HTMLDivElement,
  CalendarTriggerButtonProps
>(({ variant, disabled, ariaLabelledby, ...buttonProps }, ref) => {
  const { t } = useTranslation();
  const recipe = useSlotRecipe({
    key: "datePicker",
    recipe: datePickerSlotRecipe,
  });
  const styles = recipe({ variant });

  const { onPress, ...filteredButtonProps } = buttonProps;

  const handleCommand: KeyboardEventHandler = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onPress?.(event as any);
    }
  };

  return (
    <PopoverAnchor {...buttonProps}>
      <IconButton
        ref={ref}
        role="button"
        icon={<CalendarOutline24Icon />}
        aria-label={t(texts.openCalendar)}
        css={styles.calendarTriggerButton}
        variant="ghost"
        {...filteredButtonProps}
        disabled={disabled}
        onKeyDown={handleCommand}
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
