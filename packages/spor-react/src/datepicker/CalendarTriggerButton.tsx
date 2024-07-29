import {
  Box,
  PopoverAnchor,
  useMultiStyleConfig,
  forwardRef,
  As,
  ResponsiveValue,
} from "@chakra-ui/react";
import { CalendarOutline24Icon } from "@vygruppen/spor-icon-react";
import React, { KeyboardEventHandler } from "react";
import { AriaButtonProps } from "react-aria";
import { IconButton, createTexts, useTranslation } from "..";

type CalendarTriggerButtonProps = AriaButtonProps<"button"> & {
  variant: ResponsiveValue<"base" | "floating" | "ghost">;
  isDisabled?: boolean;
  ariaLabelledby?: string;
};
export const CalendarTriggerButton = forwardRef<CalendarTriggerButtonProps, As>(
  ({ variant, isDisabled, ariaLabelledby, ...buttonProps }, ref) => {
    const { t } = useTranslation();
    const styles = useMultiStyleConfig("Datepicker", { variant });

    const { onPress, ...filteredButtonProps } = buttonProps;

    const handleCommand: KeyboardEventHandler = (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onPress?.(event as any);
      }
    };

    return (
      <PopoverAnchor>
        <IconButton
          ref={ref}
          role="button"
          icon={<CalendarOutline24Icon />}
          aria-label={t(texts.openCalendar)}
          sx={styles.calendarTriggerButton}
          variant="ghost"
          {...filteredButtonProps}
          isDisabled={isDisabled}
          onKeyDown={handleCommand}
          aria-labelledby={ariaLabelledby}
        />
      </PopoverAnchor>
    );
  },
);

const texts = createTexts({
  openCalendar: {
    nb: "Åpne kalender",
    nn: "Åpne kalendar",
    sv: "Öppna kalender",
    en: "Open calendar",
  },
});
