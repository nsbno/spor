"use client";
import {
  Popover as ChakraPopover,
  PopoverRootProps,
  Portal,
  usePopoverContext,
} from "@chakra-ui/react";
import {
  DropdownDownFill18Icon,
  DropdownDownFill24Icon,
} from "@vygruppen/spor-icon-react";
import React, { forwardRef, ReactNode } from "react";

import { Button, ButtonProps, StaticCard, StaticCardProps } from "..";

export const CardSelect = ({ size = "md", ...props }: PopoverRootProps) => {
  return <ChakraPopover.Root size={size} {...props} />;
};

export const CardSelectContent = forwardRef<HTMLDivElement, StaticCardProps>(
  ({ children, ...props }, ref) => {
    CardSelectContent.displayName = "CardSelectContent";
    return (
      <Portal>
        <ChakraPopover.Positioner>
          <ChakraPopover.Content ref={ref} padding={0} bg="none">
            <ChakraPopover.Body {...props}>
              <StaticCard
                p="2"
                bg="bg"
                border="sm"
                borderColor="floating.outline"
                {...props}
              >
                {children}
              </StaticCard>
            </ChakraPopover.Body>
          </ChakraPopover.Content>
        </ChakraPopover.Positioner>
      </Portal>
    );
  },
);

export type CardSelectTriggerProps = {
  /** The design of the trigger button.
   *
   * - `ghost` is a transparent button with text
   * - `core` is a button with a border and text
   * - `floating` is a button with a drop shadow (like a card) and text
   */
  variant?: "core" | "ghost" | "floating";
  /** An optional trigger button icon, rendered to the left of the label */
  icon?: ReactNode;
  /** Whether or not to show the chevron. Defaults to true */
  withChevron?: boolean;
} & Omit<ButtonProps, "variant" | "rightIcon" | "leftIcon">;

const bgActiveStyleMap = {
  core: "core.surface.active",
  ghost: "ghost.surface.active",
  floating: "floating.surface.active",
};

export const CardSelectTrigger = forwardRef<
  HTMLButtonElement,
  CardSelectTriggerProps
>(
  (
    { icon, variant = "core", withChevron = true, size, children, ...props },
    ref,
  ) => {
    CardSelectTrigger.displayName = "CardSelectTrigger";
    const ChevronIcon =
      size === "sm" ? DropdownDownFill18Icon : DropdownDownFill24Icon;

    const { open } = usePopoverContext();

    return (
      <ChakraPopover.Trigger asChild ref={ref}>
        <Button
          leftIcon={icon}
          variant={
            variant === "core"
              ? "tertiary"
              : (variant as ButtonProps["variant"])
          }
          size={size}
          bg={open ? bgActiveStyleMap[variant] : undefined}
          rightIcon={
            withChevron ? (
              <ChevronIcon
                transform={open ? "rotate(180deg)" : undefined}
                transition="transform 0.3s"
              />
            ) : null
          }
          {...props}
        >
          {children}
        </Button>
      </ChakraPopover.Trigger>
    );
  },
);
