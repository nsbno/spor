import React, { useContext } from "react";
import { DatepickerContext } from "./DatepickerContext";
import { useDay } from "@datepicker-react/hooks";
import { Button, GridItem, useStyles, useToken } from "@chakra-ui/react";

export const Day: React.VFC<{ dayLabel: string; date: Date }> = ({
  dayLabel,
  date,
}) => {
  const dayRef = React.useRef(null);
  const {
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateSelect,
    onDateFocus,
    onDateHover,
  } = useContext(DatepickerContext);
  const { onClick, onKeyDown, onMouseEnter, tabIndex, isSelected } = useDay({
    date,
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateFocus,
    onDateSelect,
    onDateHover,
    dayRef,
  });

  const styles = useStyles();
  const [osloGrey] = useToken("colors", ["alias.osloGrey"]);

  if (!dayLabel) {
    return <div />;
  }

  const isToday = new Date().toDateString() === date.toDateString();

  return (
    <GridItem>
      <Button
        onClick={onClick}
        onKeyDown={onKeyDown}
        onMouseEnter={onMouseEnter}
        tabIndex={tabIndex}
        type="button"
        ref={dayRef}
        __css={styles.day}
        bgColor={isSelected ? "alias.pine" : undefined}
        color={isSelected ? "alias.white" : undefined}
        border={isToday ? `solid 1px ${osloGrey}` : undefined}
      >
        {dayLabel}
      </Button>
    </GridItem>
  );
};
