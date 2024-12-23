"use client";

import type {
  CollectionItem,
  RecipeVariantProps,
  SelectRootProps as ChakraSelectRootProps,
} from "@chakra-ui/react";
import {
  Box,
  Select as ChakraSelect,
  createListCollection,
  Flex,
  Icon,
  Portal,
  useSlotRecipe,
} from "@chakra-ui/react";
import * as React from "react";
import {
  CheckmarkFill18Icon,
  DropdownDownFill24Icon,
} from "@vygruppen/spor-icon-react";
import { selectSlotRecipe } from "@/theme/slot-recipes/select";
import { CloseButton } from "@/button";
import { PropsWithChildren } from "react";

type SelectVariantProps = RecipeVariantProps<typeof selectSlotRecipe>;

export type SelectProps = ChakraSelectRootProps &
  PropsWithChildren<SelectVariantProps> & {
    label?: string;
  };

export const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  (props, ref) => {
    const { variant = "core", children, positioning, label, ...rest } = props;
    const recipe = useSlotRecipe({ key: "select" });
    const styles = recipe({ variant });

    return (
      <ChakraSelect.Root
        {...rest}
        ref={ref}
        positioning={{ sameWidth: true, ...positioning }}
        variant={variant}
        css={styles.root}
      >
        {label && <SelectLabel css={styles.label}>{label}</SelectLabel>}
        <SelectTrigger data-attachable>
          <SelectValueText placeholder={label} />
        </SelectTrigger>
        <SelectContent css={styles.selectContent}>{children}</SelectContent>
      </ChakraSelect.Root>
    );
  },
);

type SelectItemProps = ChakraSelect.ItemProps &
  React.PropsWithChildren<SelectVariantProps> & {
    children: React.ReactNode;
    description?: React.ReactNode;
  };

export const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  (props, ref) => {
    const { item, children, description, ...rest } = props;
    const recipe = useSlotRecipe({ key: "select" });
    const styles = recipe();
    return (
      <ChakraSelect.Item item={item} {...rest} ref={ref} css={styles.item}>
        <Box>
          <ChakraSelect.ItemText display="flex">
            {children}
          </ChakraSelect.ItemText>
          {description && <Box css={styles.itemDescription}>{description}</Box>}
        </Box>

        <ChakraSelect.ItemIndicator>
          <CheckmarkFill18Icon />
        </ChakraSelect.ItemIndicator>
      </ChakraSelect.Item>
    );
  },
);

type SelectItemGroupProps = ChakraSelect.ItemGroupProps &
  React.PropsWithChildren<SelectVariantProps> & {
    label: React.ReactNode;
    children: React.ReactNode;
  };

export const SelectItemGroup = React.forwardRef<
  HTMLDivElement,
  SelectItemGroupProps
>(function SelectItemGroup(props, ref) {
  const { children, label, ...rest } = props;
  return (
    <ChakraSelect.ItemGroup {...rest} ref={ref}>
      <ChakraSelect.ItemGroupLabel>{label}</ChakraSelect.ItemGroupLabel>
      {children}
    </ChakraSelect.ItemGroup>
  );
});

type SelectTriggerProps = ChakraSelect.ControlProps &
  React.PropsWithChildren<SelectVariantProps> & {
    clearable?: boolean;
    children?: React.ReactNode;
  };

export const SelectTrigger = React.forwardRef<
  HTMLButtonElement,
  SelectTriggerProps
>(function SelectTrigger(props, ref) {
  const { children, clearable, ...rest } = props;
  const recipe = useSlotRecipe({ key: "select" });
  const styles = recipe();
  return (
    <ChakraSelect.Control {...rest} css={styles.control}>
      <ChakraSelect.Trigger ref={ref} css={styles.trigger}>
        {children}
      </ChakraSelect.Trigger>
      <ChakraSelect.IndicatorGroup css={styles.indicatorGroup}>
        {clearable && <SelectClearTrigger />}
        <Box css={styles.indicator}>
          <DropdownDownFill24Icon />
        </Box>
      </ChakraSelect.IndicatorGroup>
    </ChakraSelect.Control>
  );
});

type SelectClearTriggerProps = ChakraSelect.ClearTriggerProps &
  React.PropsWithChildren<SelectVariantProps> & {
    children?: React.ReactNode;
  };

const SelectClearTrigger = React.forwardRef<
  HTMLButtonElement,
  SelectClearTriggerProps
>(function SelectClearTrigger(props, ref) {
  return (
    <ChakraSelect.ClearTrigger asChild {...props} ref={ref}>
      <CloseButton
        size="xs"
        focusVisibleRing="inside"
        focusRingWidth="2px"
        pointerEvents="auto"
      />
    </ChakraSelect.ClearTrigger>
  );
});

type SelectContentProps = ChakraSelect.ContentProps &
  React.PropsWithChildren<SelectVariantProps> & {
    portalled?: boolean;
    portalRef?: React.RefObject<HTMLElement>;
  };

export const SelectContent = React.forwardRef<
  HTMLDivElement,
  SelectContentProps
>(function SelectContent(props, ref) {
  const { portalled = true, portalRef, ...rest } = props;
  return (
    <Portal disabled={!portalled} container={portalRef}>
      <ChakraSelect.Positioner>
        <ChakraSelect.Content {...rest} ref={ref} />
      </ChakraSelect.Positioner>
    </Portal>
  );
});

type SelectValueTextProps = Omit<ChakraSelect.ValueTextProps, "children"> &
  React.PropsWithChildren<SelectVariantProps> & {
    children?(items: CollectionItem[]): React.ReactNode;
    placeholder?: string;
  };

export const SelectValueText = React.forwardRef<
  HTMLSpanElement,
  SelectValueTextProps
>(function SelectValueText(props, ref) {
  const { children, placeholder, ...rest } = props;
  return (
    <ChakraSelect.ValueText {...rest} ref={ref}>
      <ChakraSelect.Context>
        {(select: {
          selectedItems: any;
          collection: { stringifyItem: (arg0: any) => any };
        }) => {
          const items = select.selectedItems;
          if (items.length === 0) return placeholder;
          if (children) return children(items);
          if (items.length === 1)
            return select.collection.stringifyItem(items[0]);
          return `${items.length} selected`;
        }}
      </ChakraSelect.Context>
    </ChakraSelect.ValueText>
  );
});

export const SelectLabel = ChakraSelect.Label;
export const SelectItemText = ChakraSelect.ItemText;
export const SelectRoot = ChakraSelect.Root;
