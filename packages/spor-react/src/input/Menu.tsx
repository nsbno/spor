"use client";
import {
  Flex,
  Menu as ChakraMenu,
  MenuCheckboxItemProps,
  MenuContentProps,
  MenuItemGroupProps as ChakraMenuItemGroupProps,
  MenuItemProps as ChakraMenuItemProps,
  MenuRadioItemGroupProps,
  MenuRadioItemProps,
  MenuRootProps,
  MenuSeparatorProps,
  MenuTriggerItemProps as ChakraMenuTriggerItemProps,
  Portal,
  useMenuContext as useChakraMenuContext,
} from "@chakra-ui/react";
import {
  DropdownDownFill18Icon,
  DropdownDownFill24Icon,
} from "@vygruppen/spor-icon-react";
import { forwardRef, ReactNode } from "react";
import { createContext, useContext } from "react";

import { Button, ButtonProps, Checkbox } from "..";

type Variant = Pick<MenuRootProps, "variant">;

const CustomMenuContext = createContext<Variant | null>(null);
export const useMenuContext = () => useContext(CustomMenuContext)!;

/**
 * Menu component.
 *
 * Used to create an accessible dropdown menu. 
 *
 * @example
 * ```tsx
  <Menu> 
    <MenuTrigger> Menu </MenuTrigger>
    <MenuContent> 
      <MenuItem value="1"> Item 1  </MenuItem>
      <MenuItem value="2"> Item 2 </MenuItem>
      <MenuItem value="3"> Item 3 </MenuItem>
    </MenuContent>
  </Menu>
 * ```
 *
 */

export const Menu = ({ children, ...props }: MenuRootProps) => {
  return (
    <CustomMenuContext.Provider
      value={{
        variant: props.variant,
      }}
    >
      <ChakraMenu.Root {...props}>{children}</ChakraMenu.Root>
    </CustomMenuContext.Provider>
  );
};

export const MenuContent = forwardRef<HTMLDivElement, MenuContentProps>(
  ({ children, ...props }, ref) => {
    return (
      <Portal>
        <ChakraMenu.Positioner>
          <ChakraMenu.Content ref={ref} {...props}>
            {children}
          </ChakraMenu.Content>
        </ChakraMenu.Positioner>
      </Portal>
    );
  },
);
MenuContent.displayName = "MenuContent";

export type MenuTriggerProps = {
  /** An optional trigger button icon, rendered to the left of the label */
  icon?: ReactNode;
} & Omit<ButtonProps, "variant" | "rightIcon" | "leftIcon">;

export const MenuTrigger = forwardRef<HTMLButtonElement, MenuTriggerProps>(
  ({ icon, size, children, ...props }, ref) => {
    const { variant } = useMenuContext();
    const { open } = useChakraMenuContext();
    const ChevronIcon =
      size === "sm" ? DropdownDownFill18Icon : DropdownDownFill24Icon;

    const getButtonVariant = (): ButtonProps["variant"] => {
      if (variant === "floating") return "floating";
      if (variant === "accent") return "secondary";
      return "tertiary";
    };

    return (
      <ChakraMenu.Trigger asChild ref={ref}>
        <Button
          leftIcon={icon}
          variant={getButtonVariant()}
          size={size}
          {...props}
          rightIcon={
            <ChevronIcon
              transform={open ? "rotate(180deg)" : undefined}
              transition="transform 0.3s"
            />
          }
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
  /* Display icon to the left */
  leftIcon?: React.ReactNode;
  /* Display icon to the right */
  rightIcon?: React.ReactNode;
} & ChakraMenuItemProps;

export const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>(
  ({ itemCommand, children, value, leftIcon, rightIcon, ...props }) => {
    return (
      <ChakraMenu.Item value={value} {...props}>
        <Flex justifyContent="space-between" alignItems="center" gap={1.5}>
          {leftIcon}
          {children}
          {itemCommand && (
            <ChakraMenu.ItemCommand>{itemCommand}</ChakraMenu.ItemCommand>
          )}
          {rightIcon}
        </Flex>
      </ChakraMenu.Item>
    );
  },
);
MenuItem.displayName = "MenuItem";

export type MenuTriggerItemProps = {
  /* Display icon to the left */
  leftIcon?: React.ReactNode;
  /* Display icon to the right */
  rightIcon?: React.ReactNode;
} & ChakraMenuTriggerItemProps;

export const MenuTriggerItem = forwardRef<HTMLDivElement, MenuTriggerItemProps>(
  ({ children, leftIcon, rightIcon, ...props }) => {
    return (
      <ChakraMenu.TriggerItem {...props}>
        <Flex justifyContent="space-between" alignItems="center" gap={1.5}>
          {leftIcon}
          {children}
          {rightIcon}
        </Flex>
      </ChakraMenu.TriggerItem>
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
          {children}
          <Flex w="1.25rem" justify="center" align="center">
            <ChakraMenu.ItemIndicator />
          </Flex>
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

export const MenuCheckboxItem = forwardRef<
  HTMLDivElement,
  MenuCheckboxItemProps
>(({ children, closeOnSelect = false, ...props }, ref) => {
  return (
    <ChakraMenu.CheckboxItem
      {...props}
      ref={ref}
      closeOnSelect={closeOnSelect}
      checked={props.checked}
      onCheckedChange={props.onCheckedChange}
    >
      <Flex justifyContent="space-between" gap={2} align="center" w="full">
        <Checkbox
          checked={props.checked}
          onCheckedChange={() => props.onCheckedChange}
        >
          {children}
        </Checkbox>
      </Flex>
    </ChakraMenu.CheckboxItem>
  );
});

MenuCheckboxItem.displayName = "MenuCheckboxItem";

export const MenuSeparator = forwardRef<MenuSeparatorProps>(({ ...props }) => {
  return <ChakraMenu.Separator {...props} />;
});
MenuSeparator.displayName = "MenuSeparator";
