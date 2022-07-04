import {
  BoxProps,
  InputGroup,
  InputRightAddon,
  PopoverAnchor,
  PopoverTrigger,
  useBreakpoint,
  useFormControl,
  useStyles,
} from "@chakra-ui/react";
import { IconButton } from "@vygruppen/spor-button-react";
import { useTranslation } from "@vygruppen/spor-i18n-react";
import { CalendarOutline24Icon } from "@vygruppen/spor-icon-react";
import { Input } from "@vygruppen/spor-input-react";
import React from "react";
import { parseDateString } from "./datepicker-utils";

type DateInputProps = {
  label?: string;
  /** The currently selected date */
  value: Date | null;
  /** When a date is selected, i.e. on blur */
  onChange: (date: Date) => void | null;
  /** The height of the input field */
  height: BoxProps["height"];
};
export const DateInput = ({
  value,
  onChange,
  label,
  height = "3.5rem",
}: DateInputProps) => {
  const formattedDate = value?.toLocaleDateString("nb-NO") ?? "";
  const [dateString, setDateString] = React.useState(formattedDate);

  React.useEffect(() => {
    if (formattedDate) {
      setDateString(formattedDate);
    }
  }, [formattedDate]);

  const onDateSelected = () => {
    const newDate = parseDateString(dateString);
    if (newDate) {
      onChange(newDate);
    }
  };

  const styles = useStyles();
  const { t } = useTranslation();
  const breakpoint = useBreakpoint("base");
  const formControlProps = useFormControl({});

  return (
    <InputGroup height={height}>
      {breakpoint === "base" ? (
        <>
          <PopoverAnchor>
            <Input
              aria-invalid={formControlProps["aria-invalid"]}
              label={label ?? t(texts.date)}
              value={dateString}
              onChange={(e) => setDateString(e.target.value)}
              onBlur={onDateSelected}
              sx={styles.input}
            />
          </PopoverAnchor>
          <InputRightAddon>
            <PopoverTrigger>
              <IconButton
                variant="additional"
                icon={<CalendarOutline24Icon />}
                aria-label={t(texts.calendar)}
                sx={styles.calendarButton}
              />
            </PopoverTrigger>
          </InputRightAddon>
        </>
      ) : (
        <PopoverTrigger>
          <Input
            aria-invalid={formControlProps["aria-invalid"]}
            leftIcon={<CalendarOutline24Icon />}
            label={label ?? t(texts.date)}
            value={dateString}
            onChange={(e) => setDateString(e.target.value)}
            onBlur={onDateSelected}
            sx={styles.input}
          />
        </PopoverTrigger>
      )}
    </InputGroup>
  );
};

const texts = {
  date: {
    nb: "Dato",
    sv: "Datum",
    en: "Date",
  },
  calendar: {
    nb: "Kalender",
    sv: "Kalender",
    en: "Calendar",
  },
};
