import { BoxProps, useFormControlContext } from "@chakra-ui/react";
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

type TimePickerProps = Omit<BoxProps, "defaultValue"> & {
  label?: string;
  name?: string;
  value?: TimeValue;
  defaultValue?: TimeValue;
  onChange?: (value: TimeValue) => void;
  stepGranularity?: number;
  isDisabled?: boolean;
};
export const TimePicker = ({
  label,
  value,
  defaultValue = getCurrentTime(),
  onChange = () => {},
  stepGranularity = 5,
  isDisabled: isDisabledExternally = false,
  name,
  ...boxProps
}: TimePickerProps) => {
  const { isDisabled: isFormControlDisabled } = useFormControlContext() ?? {};
  const isDisabled = isDisabledExternally ?? isFormControlDisabled ?? false;
  const { t } = useTranslation();
  const locale = useCurrentLocale();
  const state = useTimeFieldState({
    value,
    defaultValue,
    onChange,
    locale,
    isDisabled,
  });

  const dateTime = state.value as CalendarDateTime;

  const handleBackwardsClick = () => {
    const minutesToSubtract =
      (dateTime.minute - stepGranularity) % stepGranularity || stepGranularity;
    state.setValue(
      state.value.subtract({
        minutes: minutesToSubtract,
      })
    );
  };
  const handleForwardClick = () => {
    const minutesToAdd =
      stepGranularity - (dateTime.minute % stepGranularity) || stepGranularity;
    state.setValue(
      state.value.add({
        minutes: minutesToAdd,
      })
    );
  };
  const backwardsLabel = `${t(texts.backwards)} ${stepGranularity} ${t(
    texts.minutes
  )}`;
  const forwardsLabel = `${t(texts.forwards)} ${stepGranularity} ${t(
    texts.minutes
  )}`;
  const inputLabel = label ?? t(texts.time);
  const ariaLabel = `${inputLabel} – ${t(
    texts.selectedTimeIs(`${dateTime.hour} ${dateTime.minute}`)
  )}`;
  return (
    <StyledField
      variant="simple"
      width="fit-content"
      paddingX={2}
      paddingY={1}
      alignItems="center"
      justifyContent="space-between"
      gap={2}
      opacity={isDisabled ? 0.5 : 1}
      pointerEvents={isDisabled ? "none" : "auto"}
      aria-disabled={isDisabled}
      aria-live="assertive"
      aria-label={ariaLabel}
      {...boxProps}
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
      <TimeField label={label ?? t(texts.time)} state={state} name={name} />
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
  selectedTimeIs: (time) => ({
    nb: `Valgt tidspunkt er ${time}`,
    nn: `Valt tidspunkt er ${time}`,
    en: `Selected time is ${time}`,
    sv: `Vald tid är ${time}`,
  }),
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
