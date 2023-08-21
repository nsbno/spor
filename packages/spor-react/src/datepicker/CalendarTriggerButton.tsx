import { Box, PopoverAnchor, useMultiStyleConfig } from "@chakra-ui/react";
import { CalendarOutline24Icon } from "@vygruppen/spor-icon-react";
import React, { useEffect } from "react";
import { AriaButtonProps, useButton } from "react-aria";
import { createTexts, useTranslation } from "..";

type CalendarTriggerButtonProps = AriaButtonProps<"button">;
export const CalendarTriggerButton = (
  props: CalendarTriggerButtonProps & { isTriggerButtonFocused?: boolean }
) => {
  const { t } = useTranslation();
  const styles = useMultiStyleConfig("Datepicker", {});
  const ref = React.useRef<HTMLButtonElement>(null);
  const { isTriggerButtonFocused } = props;
  const { buttonProps } = useButton(props, ref);

  useEffect(() => {
    if (isTriggerButtonFocused) {
      ref.current?.focus();
    } else {
      ref.current?.blur();
    }
  }, [isTriggerButtonFocused]);

  return (
    <PopoverAnchor>
      <Box
        ref={ref}
        as="button"
        aria-label={t(texts.openCalendar)}
        sx={styles.calendarTriggerButton}
        {...(buttonProps as any)}
      >
        <CalendarOutline24Icon />
      </Box>
    </PopoverAnchor>
  );
};

const texts = createTexts({
  openCalendar: {
    nb: "Åpne kalender",
    nn: "Åpne kalendar",
    sv: "Öppna kalender",
    en: "Open calendar",
  },
});
