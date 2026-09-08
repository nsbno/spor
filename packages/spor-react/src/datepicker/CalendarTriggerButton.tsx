"use client";

import { BoxProps, PopoverAnchor, useSlotRecipe } from "@chakra-ui/react";
import {
  CalendarOutline18Icon,
  CalendarOutline30Icon,
} from "@vygruppen/spor-icon-react";
import { PropsWithChildren } from "react";
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
export const CalendarTriggerButton = ({
  ref,
  variant,
  size,
  disabled,
  // onPress is extracted because it is not supported by chakra.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onPress: _,
  ...buttonProps
}: CalendarTriggerButtonProps & {
  ref?: React.Ref<HTMLDivElement | null>;
}) => {
  const { t } = useTranslation();

  const recipe = useSlotRecipe({
    key: "datePicker",
  });
  const styles = recipe({ variant });

  return (
    <PopoverAnchor {...buttonProps} ref={ref} asChild>
      <IconButton
        icon={
          size == "sm" ? <CalendarOutline18Icon /> : <CalendarOutline30Icon />
        }
        aria-label={t(texts.openCalendar)}
        css={styles.calendarTriggerButton}
        variant="ghost"
        disabled={disabled}
        size={size}
      />
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
