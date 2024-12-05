"use client";

import type {
  CollectionItem,
  ConditionalValue,
  RecipeVariantProps,
  SelectRootProps as ChakraSelectRootProps,
} from "@chakra-ui/react";
import { Select as ChakraSelect, Portal } from "@chakra-ui/react";
import { CloseButton } from "../button/CloseButton";
import * as React from "react";
import { selectSlotRecipe } from "../theme/components";

type SelectVariantProps = RecipeVariantProps<typeof selectSlotRecipe>;

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
  return (
    <ChakraSelect.Control {...rest}>
      <ChakraSelect.Trigger ref={ref}>{children}</ChakraSelect.Trigger>
      <ChakraSelect.IndicatorGroup>
        {clearable && <SelectClearTrigger />}
        <ChakraSelect.Indicator />
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

type SelectItemProps = ChakraSelect.ItemProps &
  React.PropsWithChildren<SelectVariantProps> & {
    children: React.ReactNode;
    item: CollectionItem;
  };

export const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  function SelectItem(props, ref) {
    const { item, children, ...rest } = props;
    return (
      <ChakraSelect.Item key={item.value} item={item} {...rest} ref={ref}>
        {children}
        <ChakraSelect.ItemIndicator />
      </ChakraSelect.Item>
    );
  },
);

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

type SelectRootProps = Exclude<ChakraSelectRootProps, "variant"> & {
  variant?: ConditionalValue<"base" | "floating">;
};

export const SelectRoot = React.forwardRef<HTMLDivElement, SelectRootProps>(
  function SelectRoot(props, ref) {
    const { variant, children, positioning, asChild, ...rest } = props;
    return (
      <ChakraSelect.Root
        {...props}
        ref={ref}
        positioning={{ sameWidth: true, ...positioning }}
        variant={variant}
      >
        {asChild ? (
          children
        ) : (
          <>
            <ChakraSelect.HiddenSelect />
            {children}
          </>
        )}
      </ChakraSelect.Root>
    );
  },
) as ChakraSelect.RootComponent;

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

export const SelectLabel = ChakraSelect.Label;
export const SelectItemText = ChakraSelect.ItemText;
