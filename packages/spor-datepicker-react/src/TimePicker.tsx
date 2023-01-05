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
  /** The label. Defaults to a localized version of "Time" */
  label?: string;
  /** The name of the form field, if used in a regular form */
  name?: string;
  /** The controlled value, if any.
   *
   * A `new Time(hours, minutes)` should be passed
   **/
  value?: TimeValue;
  /** A default value, if any.
   *
   * A `new Time(hours, minutes)` should be passed. Defaults to the current time if not provided.
   **/
  defaultValue?: TimeValue;
  /** Callback for when the time changes */
  onChange?: (value: TimeValue) => void;
  /** The maxiumum number of minutes to move when the step buttons are used.
   *
   * Defaults to 30 minutes.
   *
   * An example: If the time is at 13:37 and the minuteInterval is 15, clicking the step forwards button will move the time to 13:45. Next click will move it to 14:00.
   */
  minuteInterval?: number;
  /** Whether or not the field is disabled */
  isDisabled?: boolean;
};
/** A time picker component.
 *
 * This lets the user select a time of day, either through typing it in, using the up and down arrows to select the hour and minute, or by clicking the step buttons to move the time forwards or backwards in pre-defined increments.
 *
 * ```tsx
 * <TimePicker />
 * ```
 *
 * It can also be controlled:
 *
 * ```tsx
 * <TimePicker value={new Time(13, 37)} onChange={setTime} />
 * ```
 *
 * Note that the TimePicker uses the `Time` class to represent the time. This is a class that is part of the `@internationalized/date` package.
 *
 * @see https://spor.cloud.vy.no/komponenter/timepicker
 */
export const TimePicker = ({
  label,
  value,
  defaultValue = getCurrentTime(),
  onChange = () => {},
  minuteInterval = 30,
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

  const dateTime = state.value as CalendarDateTime | null;

  const handleBackwardsClick = () => {
    if (!dateTime) {
      return;
    }
    const minutesToSubtract =
      dateTime.minute % minuteInterval || minuteInterval;
    state.setValue(
      state.value.subtract({
        minutes: minutesToSubtract,
      })
    );
  };
  const handleForwardClick = () => {
    if (!dateTime) {
      return;
    }
    const minutesToAdd =
      minuteInterval - (dateTime.minute % minuteInterval) || minuteInterval;
    state.setValue(
      state.value.add({
        minutes: minutesToAdd,
      })
    );
  };
  const backwardsLabel = `${t(texts.backwards)} ${minuteInterval} ${t(
    texts.minutes
  )}`;
  const forwardsLabel = `${t(texts.forwards)} ${minuteInterval} ${t(
    texts.minutes
  )}`;
  const inputLabel = label ?? t(texts.time);
  const ariaLabel = `${inputLabel} – ${t(
    texts.selectedTimeIs(`${dateTime?.hour ?? 0} ${dateTime?.minute ?? 0}`)
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
    nb: "minutter",
    nn: "minuttar",
    en: "minutes",
    sv: "minuter",
  },
});
