import React, { forwardRef } from "react";
import { PopoverRootProps as ChakraPopoverRootProps } from "@chakra-ui/react";
import {
  PopoverArrow,
  PopoverBody,
  PopoverCloseTrigger,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from "../popover";

export type TooltipProps = ChakraPopoverRootProps & {
  /**
   * Whatever is supposed to trigger the tooltip.
   * Must be focusable - like a link or button */
  children: React.ReactNode;
  /** Should the tooltip have a close button? */
  withCloseButton?: boolean;
  /** The content of the tooltip */
  content: React.ReactNode;
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
export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  function Tooltip(props, ref) {
    const {
      children,
      content,
      placement = "bottom",
      size = "sm",
      withCloseButton = false,
    } = props;
    return (
      <PopoverRoot
        placement={placement}
        size={size}
        arrowSize={12}
        arrowShadowColor="none"
        ref={ref}
        {...props}
      >
        <PopoverTrigger>{children}</PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          {withCloseButton && <PopoverCloseTrigger />}
          <PopoverBody>{content}</PopoverBody>
        </PopoverContent>
      </PopoverRoot>
    );
  },
);
