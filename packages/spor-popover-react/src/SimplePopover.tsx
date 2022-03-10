import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import React from "react";

type SimplePopoverProps = {
  /** Whatever is supposed to trigger the popover */
  children?: React.ReactNode;
  /** Callback for when the popover is requested to close */
  onClose?: () => void;
  /** Should the popover have a close button? */
  withCloseButton?: boolean;
  /** The content of the popover */
  content: React.ReactNode;
  /** Whether or not the popover is open */
  isOpen?: boolean;
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
  onClose,
  isOpen,
  content,
  placement = "bottom",
  size = "sm",
  withCloseButton = false,
}: SimplePopoverProps) => {
  return (
    <Popover
      onClose={onClose}
      isOpen={isOpen}
      placement={placement}
      size={size}
    >
      {children && <PopoverTrigger>{children}</PopoverTrigger>}
      <PopoverContent>
        <PopoverArrow />
        {withCloseButton && <PopoverCloseButton />}
        <PopoverBody>{content}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
