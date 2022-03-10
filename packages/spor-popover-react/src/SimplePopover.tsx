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
  onClose,
  isOpen,
  defaultIsOpen,
  content,
  placement = "bottom",
  size = "sm",
  withCloseButton = false,
}: SimplePopoverProps) => {
  return (
    <Popover
      onClose={onClose}
      isOpen={isOpen}
      defaultIsOpen={defaultIsOpen}
      placement={placement}
      size={size}
      arrowSize={12}
      arrowShadowColor="none"
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
