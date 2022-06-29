import { Button, useStyles } from "@chakra-ui/react";
import React from "react";
import { useDay } from "./DatepickerContext";

type DayProps = {
  dayLabel: string;
  date: Date;
  isDisabled?: boolean;
};
export const Day = ({ dayLabel, date, isDisabled = false }: DayProps) => {
  const dayRef = React.useRef(null);
  const {
    onClick,
    onKeyDown,
    onMouseEnter,
    tabIndex,
    isSelected,
    isSelectedStartOrEnd,
    isWithinHoverRange,
    isToday,
    disabledDate,
  } = useDay({ date, dayRef });
  const styles = useStyles();

  return (
    <Button
      aria-selected={isSelected}
      data-is-selected={isSelected}
      data-is-edge={isSelectedStartOrEnd}
      data-is-in-range={isWithinHoverRange}
      onClick={onClick}
      onKeyDown={onKeyDown}
      onMouseEnter={onMouseEnter}
      tabIndex={tabIndex}
      ref={dayRef}
      __css={styles.button}
      border={isToday ? `solid 1px` : undefined}
      borderColor="alias.osloGrey"
      disabled={isDisabled || disabledDate}
    >
      {Number(dayLabel)}
    </Button>
  );
};
