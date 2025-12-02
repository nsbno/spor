"use client";

import type {
  CollectionItem,
  SelectLabelProps,
  SelectRootProps as ChakraSelectRootProps,
} from "@chakra-ui/react";
import {
  Box,
  Portal,
  Select as ChakraSelect,
  useSelectContext,
  useSlotRecipe,
} from "@chakra-ui/react";
import {
  CheckmarkFill18Icon,
  DropdownDownFill24Icon,
} from "@vygruppen/spor-icon-react";
import * as React from "react";

import { CloseButton } from "@/button";

import { Field, FieldProps } from "./Field";

export type SelectProps = ChakraSelectRootProps &
  FieldProps & {
    label?: string;
  };

/**
 * A Select component.
 *
 * This component is useful to choose an item from a dropdown list of items. The list has two different variants, core, floating and floating.
 * It also has a sideRadiusVariant that can be used to make the sides square, rightSideSquare, leftSideSquare.
 * The sideRadiusVariant is useful in attachecdInput for example in the PhoneNumberInput and CountryCodeSelect components.
 *
 * @example
 * ```tsx
 * <Select label="Choose transportation" >
       <SelectItem item={{
            label: "Train",
            value: "train",
          }}>
         item label
       </SelectItem>
       <SelectItem item={{
            label: "Bus",
            value: "Bus",
          }}>
         item label
       </SelectItem>
    </Select>
 * ```
 *
 * @see https://spor.vy.no/components/select
 *
 */

export const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  (props, ref) => {
    const {
      variant = "core",
      children,
      positioning,
      label,
      errorText,
      invalid,
      helperText,
      ...rest
    } = props;
    const recipe = useSlotRecipe({ key: "select" });
    const styles = recipe({ variant });

    return (
      <Field
        errorText={errorText}
        invalid={invalid}
        helperText={helperText}
        required={props.required}
        id={rest.id}
      >
        <ChakraSelect.Root
          {...rest}
          ref={ref}
          positioning={{ sameWidth: true, ...positioning }}
          variant={variant}
          css={styles.root}
          position="relative"
        >
          <SelectTrigger data-attachable>
            <SelectValueText withPlaceholder={label ? true : false} />
          </SelectTrigger>
          {label && <SelectLabel css={styles.label}>{label}</SelectLabel>}
          <SelectContent
            css={styles.selectContent}
            portalled={typeof window !== "undefined"}
          >
            {children}
          </SelectContent>
        </ChakraSelect.Root>
      </Field>
    );
  },
);

export const SelectLabel = (props: SelectLabelProps) => {
  const { value } = useSelectContext();

  return (
    <ChakraSelect.Label
      {...props}
      data-selected={value.length > 0 ? true : undefined}
    />
  );
};

Select.displayName = "Select";

type SelectItemProps = ChakraSelect.ItemProps & {
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
        <Box width="100%">
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
SelectItem.displayName = "SelectItem";

type SelectItemGroupProps = ChakraSelect.ItemGroupProps & {
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

type SelectTriggerProps = ChakraSelect.ControlProps & {
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

type SelectClearTriggerProps = ChakraSelect.ClearTriggerProps & {
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

type SelectContentProps = ChakraSelect.ContentProps & {
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

type SelectValueTextProps = Omit<ChakraSelect.ValueTextProps, "children"> & {
  children?(items: CollectionItem[]): React.ReactNode;
  placeholder?: string;
  withPlaceholder?: boolean;
};

export const SelectValueText = React.forwardRef<
  HTMLSpanElement,
  SelectValueTextProps
>(function SelectValueText(props, ref) {
  const { children, withPlaceholder, placeholder, ...rest } = props;
  return (
    <ChakraSelect.ValueText
      {...rest}
      ref={ref}
      placeholder={placeholder}
      paddingTop={withPlaceholder ? "4" : "0"}
    >
      <ChakraSelect.Context>
        {(select: {
          selectedItems: CollectionItem[];

          collection: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            stringifyItem: (argument0: any) => any;
          } /* Find a way to not use any */;
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

export const SelectItemText = ChakraSelect.ItemText;
export const SelectRoot = ChakraSelect.Root;
