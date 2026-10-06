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
import { ReactNode } from "react";

import { SporSemantic } from "@/theme/tokens/global-css";

import {
  Button,
  ButtonProps,
  DataColorProvider,
  StaticCard,
  StaticCardProps,
  useDataColor,
} from "..";

export const CardSelect = ({
  size = "md",
  "data-color": dataColor,
  ...props
}: PopoverRootProps & { "data-color"?: SporSemantic }) => {
  return (
    <DataColorProvider data-color={dataColor}>
      <ChakraPopover.Root size={size} data-color={dataColor} {...props} />
    </DataColorProvider>
  );
};

export const CardSelectContent = ({
  ref,
  children,
  ...props
}: StaticCardProps & {
  ref?: React.Ref<HTMLDivElement>;
}) => {
  const dataColor = useDataColor();

  return (
    <Portal>
      <ChakraPopover.Positioner>
        <ChakraPopover.Content ref={ref} padding={0} bg="none">
          <ChakraPopover.Body data-color={dataColor} {...props}>
            <StaticCard
              p="2"
              bg="bg"
              border="sm"
              borderColor="outline.floating"
              borderRadius="sm"
              {...props}
            >
              {children}
            </StaticCard>
          </ChakraPopover.Body>
        </ChakraPopover.Content>
      </ChakraPopover.Positioner>
    </Portal>
  );
};

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
  core: "surface.core.active",
  ghost: "surface.ghost.active",
  floating: "surface.floating.active",
};

export const CardSelectTrigger = ({
  ref,
  icon,
  variant = "core",
  withChevron = true,
  size,
  children,
  ...props
}: CardSelectTriggerProps & {
  ref?: React.Ref<HTMLButtonElement>;
}) => {
  const ChevronIcon =
    size === "sm" ? DropdownDownFill18Icon : DropdownDownFill24Icon;

  const dataColor = useDataColor();
  const { open } = usePopoverContext();

  return (
    <ChakraPopover.Trigger asChild ref={ref} data-color={dataColor}>
      <Button
        leftIcon={icon}
        variant={
          variant === "core" ? "tertiary" : (variant as ButtonProps["variant"])
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
};
