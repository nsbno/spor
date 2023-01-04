import { CalendarDateTime } from "@internationalized/date";
import { TimeValue } from "@react-types/datepicker";
import { IconButton } from "@vygruppen/spor-button-react";
import { createTexts, useTranslation } from "@vygruppen/spor-i18n-react";
import {
  DropdownLeftFill24Icon,
  DropdownRightFill24Icon,
} from "@vygruppen/spor-icon-react";
import React from "react";
import { useTimeFieldState } from "react-stately";
import { StyledField } from "./StyledField";
import { TimeField } from "./TimeField";
import { getCurrentTime, useCurrentLocale } from "./utils";

type TimePickerProps = {
  label: string;
  value?: TimeValue;
  defaultValue?: TimeValue;
  onChange?: (value: TimeValue) => void;
  stepGranularity?: number;
};
export const TimePicker = ({
  label,
  value,
  defaultValue = getCurrentTime(),
  onChange = () => {},
  stepGranularity = 5,
}: TimePickerProps) => {
  const { t } = useTranslation();
  const locale = useCurrentLocale();
  const state = useTimeFieldState({ value, defaultValue, onChange, locale });

  const handleBackwardsClick = () => {
    state.setValue(
      (state.value as CalendarDateTime)?.cycle("minute", -stepGranularity, {
        round: true,
      })
    );
  };
  const handleForwardClick = () => {
    state.setValue(
      (state.value as CalendarDateTime)?.cycle("minute", +stepGranularity, {
        round: true,
      })
    );
  };
  const backwardsLabel = `${t(texts.forwards)} ${stepGranularity} ${t(
    texts.minutes
  )}`;
  const forwardsLabel = `${t(texts.forwards)} ${stepGranularity} ${t(
    texts.minutes
  )}`;
  return (
    <StyledField
      variant="simple"
      width="fit-content"
      paddingX={2}
      alignItems="center"
      gap={2}
    >
      <IconButton
        variant="ghost"
        size="xs"
        borderRadius="xs"
        aria-label={backwardsLabel}
        title={backwardsLabel}
        icon={<DropdownLeftFill24Icon />}
        onClick={handleBackwardsClick}
      />
      <TimeField label={label ?? t(texts.time)} state={state} />
      <IconButton
        variant="ghost"
        size="xs"
        borderRadius="xs"
        aria-label={forwardsLabel}
        title={forwardsLabel}
        icon={<DropdownRightFill24Icon />}
        onClick={handleForwardClick}
      />
    </StyledField>
  );
};

const texts = createTexts({
  time: {
    nb: "Tid",
    nn: "Tid",
    en: "Time",
    sv: "Tid",
  },
  backwards: {
    nb: "Bakover",
    nn: "Bakover",
    en: "Backwards",
    sv: "Bakåt",
  },
  forwards: {
    nb: "Fremover",
    nn: "Fremover",
    en: "Forward",
    sv: "Framåt",
  },
  minutes: {
    nb: "Minutter",
    nn: "Minuttar",
    en: "Minutes",
    sv: "Minuter",
  },
});
