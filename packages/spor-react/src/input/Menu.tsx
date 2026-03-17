"use client";
import {
  Flex,
  Menu as ChakraMenu,
  MenuContentProps,
  MenuItemGroupProps as ChakraMenuItemGroupProps,
  MenuItemProps as ChakraMenuItemProps,
  MenuRadioItemGroupProps,
  MenuRadioItemProps,
  MenuRootProps,
  MenuSeparatorProps,
  MenuTriggerItemProps,
  Portal,
} from "@chakra-ui/react";
import { forwardRef, ReactNode } from "react";

import { Button, ButtonProps } from "..";

export const Menu = ({ ...props }: MenuRootProps) => {
  return <ChakraMenu.Root {...props} />;
};

export const MenuContent = forwardRef<HTMLDivElement, MenuContentProps>(
  ({ children, maxHeight, ...props }, ref) => {
    return (
      <Portal>
        <ChakraMenu.Positioner>
          <ChakraMenu.Content
            ref={ref}
            {...props}
            zIndex="dropdown"
            maxHeight={maxHeight}
          >
            {children}
          </ChakraMenu.Content>
        </ChakraMenu.Positioner>
      </Portal>
    );
  },
);
MenuContent.displayName = "MenuContent";

export type MenuTriggerProps = {
  variant?: "core" | "ghost" | "floating";
  /** An optional trigger button icon, rendered to the left of the label */
  icon?: ReactNode;
  /** Whether or not to show the chevron. Defaults to true */
  withChevron?: boolean;
} & Omit<ButtonProps, "variant" | "rightIcon" | "leftIcon">;

export const MenuTrigger = forwardRef<HTMLButtonElement, MenuTriggerProps>(
  ({ icon, variant = "core", size, children, ...props }, ref) => {
    return (
      <ChakraMenu.Trigger asChild ref={ref}>
        <Button
          leftIcon={icon}
          variant={
            variant === "core"
              ? "tertiary"
              : (variant as ButtonProps["variant"])
          }
          size={size}
          {...props}
        >
          {children}
        </Button>
      </ChakraMenu.Trigger>
    );
  },
);
MenuTrigger.displayName = "MenuTrigger";

export type MenuItemProps = {
  /** Display a command in the menu */
  itemCommand?: string;
} & ChakraMenuItemProps;

export const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>(
  ({ itemCommand, children, value, ...props }) => {
    return (
      <ChakraMenu.Item value={value} {...props}>
        <Flex justifyContent="space-between">
          {children}
          {itemCommand && (
            <ChakraMenu.ItemCommand fontSize="2xs">
              {itemCommand}
            </ChakraMenu.ItemCommand>
          )}
        </Flex>
      </ChakraMenu.Item>
    );
  },
);
MenuItem.displayName = "MenuItem";

export const MenuTriggerItem = forwardRef<HTMLDivElement, MenuTriggerItemProps>(
  ({ children, ...props }) => {
    return (
      <ChakraMenu.TriggerItem {...props}>{children}</ChakraMenu.TriggerItem>
    );
  },
);
MenuTriggerItem.displayName = "MenuTriggerItem";

export const MenuRadioItemGroup = forwardRef<
  HTMLDivElement,
  MenuRadioItemGroupProps
>(({ children, ...props }) => {
  return (
    <ChakraMenu.RadioItemGroup {...props}>{children}</ChakraMenu.RadioItemGroup>
  );
});
MenuRadioItemGroup.displayName = "MenuRadioItemGroup";

export const MenuRadioItem = forwardRef<HTMLDivElement, MenuRadioItemProps>(
  ({ children, ...props }) => {
    return (
      <ChakraMenu.RadioItem {...props}>
        <Flex justifyContent="space-between" gap={1}>
          {children} <ChakraMenu.ItemIndicator />
        </Flex>
      </ChakraMenu.RadioItem>
    );
  },
);
MenuRadioItem.displayName = "MenuRadioItem";

export type MenuItemGroupProps = {
  /** Display group label */
  label?: string;
} & ChakraMenuItemGroupProps;

export const MenuItemGroup = forwardRef<HTMLDivElement, MenuItemGroupProps>(
  ({ children, label, ...props }) => {
    return (
      <ChakraMenu.ItemGroup {...props}>
        {label && (
          <ChakraMenu.ItemGroupLabel>{label}</ChakraMenu.ItemGroupLabel>
        )}
        {children}
      </ChakraMenu.ItemGroup>
    );
  },
);
MenuItemGroup.displayName = "MenuItemGroup";

export const MenuSeparator = forwardRef<HTMLDivElement, MenuSeparatorProps>(
  ({ children, ...props }) => {
    return <ChakraMenu.Separator {...props}>{children}</ChakraMenu.Separator>;
  },
);
MenuSeparator.displayName = "MenuSeparator";
