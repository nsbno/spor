import {
  DarkMode,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverProps,
  PopoverTrigger,
} from "@chakra-ui/react";
import React from "react";

export type TooltipProps = PopoverProps & {
  /**
   * Whatever is supposed to trigger the tooltip.
   * Must be focusable - like a link or button */
  children: React.ReactNode;
  /** Callback for when the tooltip is requested to close */
  onClose?: () => void;
  /** Should the tooltip have a close button? */
  withCloseButton?: boolean;
  /** The content of the tooltip */
  content: React.ReactNode;
  /** Use this prop if you want to control the open state */
  isOpen?: boolean;
  /** Whether or not the tooltip is open by default */
  defaultIsOpen?: boolean;
  /**
   * Where the tooltip should be placed by default.
   *
   * Note - this is a suggestion, and may be overridden by space concerns.
   */
  placement?: "top" | "bottom" | "left" | "right";
  /**
   * The amount of spacing.
   * Tooltips with lots of content should be `lg`. Defaults to `sm`.
   **/
  size?: "sm" | "lg";
};
/** A tooltip component. */
export const Tooltip = ({
  children,
  content,
  onClose,
  isOpen,
  defaultIsOpen,
  placement = "bottom",
  size = "sm",
  withCloseButton = false,
  ...props
}: TooltipProps) => {
  return (
    <DarkMode>
      <Popover
        onClose={onClose}
        isOpen={isOpen}
        defaultIsOpen={defaultIsOpen}
        placement={placement}
        size={size}
        arrowSize={12}
        arrowShadowColor="none"
        {...props}
      >
        <PopoverTrigger>{children}</PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          {withCloseButton && <PopoverCloseButton />}
          <PopoverBody>{content}</PopoverBody>
        </PopoverContent>
      </Popover>
    </DarkMode>
  );
};
