import React, { useRef } from "react";
import { AriaButtonProps, useButton } from "react-aria";
import { IconButton } from "..";

type CalendarButtonProps = AriaButtonProps<"button"> & {
  icon: React.ReactElement;
  "aria-label": string;
};
export function CalendarNavigationButton({
  icon,
  "aria-label": ariaLabel,
  ...rest
}: CalendarButtonProps) {
  const ref = useRef(null);
  const { buttonProps } = useButton(rest, ref);
  return (
    <IconButton
      {...buttonProps}
      ref={ref}
      icon={icon}
      aria-label={ariaLabel}
      size="sm"
      variant="ghost"
    />
  );
}
