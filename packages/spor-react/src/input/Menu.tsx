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
import { ReactNode, Ref } from "react";
import { createContext, useContext } from "react";

import { Button, ButtonProps, Checkbox } from "..";

type Variant = Pick<MenuRootProps, "variant">;

const CustomMenuContext = createContext<Variant>({
  variant: "core",
});
export const useMenuContext = () => useContext(CustomMenuContext);

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
    <CustomMenuContext.Provider value={{ variant: props.variant }}>
      <ChakraMenu.Root {...props}>{children}</ChakraMenu.Root>
    </CustomMenuContext.Provider>
  );
};

export const MenuContent = ({
  children,
  ref,
  ...props
}: MenuContentProps & { ref?: Ref<HTMLDivElement> }) => {
  return (
    <Portal>
      <ChakraMenu.Positioner>
        <ChakraMenu.Content ref={ref} {...props}>
          {children}
        </ChakraMenu.Content>
      </ChakraMenu.Positioner>
    </Portal>
  );
};

export type MenuTriggerProps = {
  icon?: ReactNode;
  withChevron?: boolean;
} & Omit<ButtonProps, "rightIcon" | "leftIcon"> & {
    ref?: Ref<HTMLButtonElement>;
  };

export const MenuTrigger = ({
  icon,
  size,
  children,
  ref,
  withChevron = true,
  ...props
}: MenuTriggerProps) => {
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
          withChevron && (
            <ChevronIcon
              transform={open ? "rotate(180deg)" : undefined}
              transition="transform 0.3s"
            />
          )
        }
      >
        {children}
      </Button>
    </ChakraMenu.Trigger>
  );
};

export type MenuItemProps = {
  itemCommand?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
} & ChakraMenuItemProps & { ref?: Ref<HTMLDivElement> };

export const MenuItem = ({
  itemCommand,
  children,
  value,
  leftIcon,
  rightIcon,
  ref,
  ...props
}: MenuItemProps) => {
  return (
    <ChakraMenu.Item value={value} {...props} ref={ref}>
      {leftIcon}
      {children}
      {itemCommand && (
        <ChakraMenu.ItemCommand>{itemCommand}</ChakraMenu.ItemCommand>
      )}
      {rightIcon}
    </ChakraMenu.Item>
  );
};

export type MenuTriggerItemProps = {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
} & ChakraMenuTriggerItemProps & { ref?: Ref<HTMLDivElement> };

export const MenuTriggerItem = ({
  children,
  leftIcon,
  rightIcon,
  ref,
  ...props
}: MenuTriggerItemProps) => {
  return (
    <ChakraMenu.TriggerItem {...props} ref={ref}>
      {leftIcon}
      {children}
      {rightIcon}
    </ChakraMenu.TriggerItem>
  );
};

export const MenuRadioItemGroup = ({
  children,
  ref,
  ...props
}: MenuRadioItemGroupProps & { ref?: Ref<HTMLDivElement> }) => {
  return (
    <ChakraMenu.RadioItemGroup {...props} ref={ref}>
      {children}
    </ChakraMenu.RadioItemGroup>
  );
};

export const MenuRadioItem = ({
  children,
  ref,
  ...props
}: MenuRadioItemProps & { ref?: Ref<HTMLDivElement> }) => {
  return (
    <ChakraMenu.RadioItem {...props} ref={ref}>
      {children}
      <Flex w="1.25rem" justify="center" align="center">
        <ChakraMenu.ItemIndicator />
      </Flex>
    </ChakraMenu.RadioItem>
  );
};

export type MenuItemGroupProps = {
  label?: string;
} & ChakraMenuItemGroupProps & { ref?: Ref<HTMLDivElement> };

export const MenuItemGroup = ({
  children,
  label,
  ref,
  ...props
}: MenuItemGroupProps) => {
  return (
    <ChakraMenu.ItemGroup {...props} ref={ref}>
      {label && <ChakraMenu.ItemGroupLabel>{label}</ChakraMenu.ItemGroupLabel>}
      {children}
    </ChakraMenu.ItemGroup>
  );
};

export const MenuCheckboxItem = ({
  children,
  closeOnSelect = false,
  ref,
  ...props
}: MenuCheckboxItemProps & { ref?: Ref<HTMLDivElement> }) => {
  return (
    <ChakraMenu.CheckboxItem
      {...props}
      ref={ref}
      closeOnSelect={closeOnSelect}
      checked={props.checked}
      onCheckedChange={props.onCheckedChange}
    >
      <Checkbox
        checked={props.checked}
        onCheckedChange={() => props.onCheckedChange}
      >
        {children}
      </Checkbox>
    </ChakraMenu.CheckboxItem>
  );
};

export const MenuSeparator = ({
  ref,
  ...props
}: MenuSeparatorProps & { ref?: Ref<HTMLHRElement> }) => {
  return <ChakraMenu.Separator ref={ref} {...props} />;
};
