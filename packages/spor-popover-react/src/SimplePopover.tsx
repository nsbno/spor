import {
  DarkMode,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import React from "react";

type SimplePopoverProps = {
  /**
   * Whatever is supposed to trigger the popover.
   * Must be focusable - like a link or button */
  trigger?: React.ReactNode;
  /** Callback for when the popover is requested to close */
  onClose?: () => void;
  /** Should the popover have a close button? */
  withCloseButton?: boolean;
  /** The content of the popover */
  children: React.ReactNode;
  /** Use this prop if you want to control the open state */
  isOpen?: boolean;
  /** Whether or not the popover is open by default */
  defaultIsOpen?: boolean;
  /**
   * Where the popover should be placed by default.
   *
   * Note - this is a suggestion, and may be overridden by space concerns.
   */
  placement?: "top" | "bottom" | "left" | "right";
  /**
   * The amount of spacing.
   * Popovers with lots of content should be `lg`. Defaults to `sm`.
   **/
  size?: "sm" | "lg";
};
/** A basic popover component for basic content */
export const SimplePopover = ({
  children,
  trigger,
  onClose,
  isOpen,
  defaultIsOpen,
  placement = "bottom",
  size = "sm",
  withCloseButton = false,
}: SimplePopoverProps) => {
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
      >
        {trigger && <PopoverTrigger>{trigger}</PopoverTrigger>}
        <PopoverContent>
          <PopoverArrow />
          {withCloseButton && <PopoverCloseButton />}
          <PopoverBody>{children}</PopoverBody>
        </PopoverContent>
      </Popover>
    </DarkMode>
  );
};
