import React, { useContext } from "react";
import { DatepickerContext } from "./DatepickerContext";
import { useDay } from "@datepicker-react/hooks";
import { Button, GridItem } from "@chakra-ui/react";

function getColor(
  isSelected: boolean,
  isSelectedStartOrEnd: boolean,
  isWithinHoverRange: boolean,
  isDisabled: boolean
) {
  return ({
    selectedFirstOrLastColor,
    normalColor,
    selectedColor,
    rangeHoverColor,
    disabledColor,
  }: {
    selectedFirstOrLastColor: string;
    normalColor: string;
    selectedColor: string;
    rangeHoverColor: string;
    disabledColor: string;
  }) => {
    if (isSelectedStartOrEnd) {
      return selectedFirstOrLastColor;
    } else if (isSelected) {
      return selectedColor;
    } else if (isWithinHoverRange) {
      return rangeHoverColor;
    } else if (isDisabled) {
      return disabledColor;
    } else {
      return normalColor;
    }
  };
}

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
  const {
    isSelected,
    isSelectedStartOrEnd,
    isWithinHoverRange,
    disabledDate,
    onClick,
    onKeyDown,
    onMouseEnter,
    tabIndex,
  } = useDay({
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
  const getColorFn = getColor(
    isSelected,
    isSelectedStartOrEnd,
    isWithinHoverRange,
    disabledDate
  );

  if (!dayLabel) {
    return <div />;
  }

  return (
    <GridItem>
      <Button
        onClick={onClick}
        onKeyDown={onKeyDown}
        onMouseEnter={onMouseEnter}
        tabIndex={tabIndex}
        type="button"
        ref={dayRef}
      >
        {dayLabel}
      </Button>
    </GridItem>
  );
};
