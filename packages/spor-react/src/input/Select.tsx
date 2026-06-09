"use client";

import type {
  CollectionItem,
  SelectLabelProps,
  SelectRootProps,
  SystemStyleObject,
} from "@chakra-ui/react";
import {
  Box,
  Checkbox as ChakraCheckbox,
  Flex,
  Portal,
  Select as ChakraSelect,
  useSelectContext,
} from "@chakra-ui/react";
import {
  CheckmarkFill18Icon,
  DropdownDownFill18Icon,
  DropdownDownFill24Icon,
} from "@vygruppen/spor-icon-react";
import * as React from "react";

import { CloseButton } from "@/button";

import { Badge } from "..";
import { Field, FieldProps } from "./Field";

export type SelectProps = Omit<SelectRootProps, "size"> &
  FieldProps & {
    label?: string;
    size?: "sm" | "md";
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

export const Select = ({
  ref,
  ...props
}: SelectProps & {
  ref?: React.Ref<HTMLDivElement>;
}) => {
  const {
    variant = "core",
    size = "md",
    children,
    positioning,
    label,
    errorText,
    invalid,
    helperText,
    css,
    ...rest
  } = props;

  return (
    <Field
      errorText={errorText}
      invalid={invalid}
      helperText={helperText}
      required={props.required}
      id={rest.id}
      css={css}
    >
      <ChakraSelect.Root
        {...rest}
        ref={ref}
        positioning={{ sameWidth: true, ...positioning }}
        variant={variant}
        size={size}
        position="relative"
      >
        <SelectTrigger data-attachable size={size}>
          <SelectValueText withPlaceholder={!!label} />
        </SelectTrigger>
        {label && <SelectLabel>{label}</SelectLabel>}
        <SelectContent baseStyle={css}>{children}</SelectContent>
      </ChakraSelect.Root>
    </Field>
  );
};

export const SelectLabel = (props: SelectLabelProps) => {
  const { value } = useSelectContext();

  return (
    <ChakraSelect.Label
      {...props}
      data-selected={value.length > 0 || undefined}
    />
  );
};

type SelectItemProps = ChakraSelect.ItemProps & {
  children: React.ReactNode;
  description?: React.ReactNode;
};

export const SelectItem = ({
  ref,
  ...props
}: SelectItemProps & {
  ref?: React.Ref<HTMLDivElement>;
}) => {
  const { item, children, description, ...rest } = props;
  const selectContext = useSelectContext();
  const multiple = selectContext.multiple;
  const isSelected = selectContext.value.includes(item.value);

  return (
    <ChakraSelect.Item item={item} {...rest} ref={ref}>
      {multiple && (
        <ChakraCheckbox.Root checked={isSelected} pointerEvents="none">
          <ChakraCheckbox.Control>
            <ChakraCheckbox.Indicator />
          </ChakraCheckbox.Control>
        </ChakraCheckbox.Root>
      )}
      <Box width="100%">
        <ChakraSelect.ItemText display="flex">{children}</ChakraSelect.ItemText>
        {description && <Box data-part="item-description">{description}</Box>}
      </Box>

      {!multiple && (
        <ChakraSelect.ItemIndicator>
          <CheckmarkFill18Icon />
        </ChakraSelect.ItemIndicator>
      )}
    </ChakraSelect.Item>
  );
};
SelectItem.displayName = "SelectItem";

type SelectItemGroupProps = ChakraSelect.ItemGroupProps & {
  label: React.ReactNode;
  children: React.ReactNode;
};

export const SelectItemGroup = function SelectItemGroup({
  ref,
  ...props
}: SelectItemGroupProps & {
  ref?: React.Ref<HTMLDivElement>;
}) {
  const { children, label, ...rest } = props;
  return (
    <ChakraSelect.ItemGroup {...rest} ref={ref}>
      <ChakraSelect.ItemGroupLabel>{label}</ChakraSelect.ItemGroupLabel>
      {children}
    </ChakraSelect.ItemGroup>
  );
};

type SelectTriggerProps = ChakraSelect.ControlProps & {
  clearable?: boolean;
  children?: React.ReactNode;
  size: "sm" | "md";
};

export const SelectTrigger = function SelectTrigger({
  ref,
  size = "md",
  ...props
}: SelectTriggerProps & {
  ref?: React.Ref<HTMLButtonElement>;
}) {
  const { children, clearable, ...rest } = props;
  return (
    <ChakraSelect.Control {...rest}>
      <ChakraSelect.Trigger ref={ref}>{children}</ChakraSelect.Trigger>
      <ChakraSelect.IndicatorGroup data-part="indicator-group">
        {clearable && <SelectClearTrigger />}
        <Box data-part="indicator">
          {size == "md" ? (
            <DropdownDownFill24Icon />
          ) : (
            <DropdownDownFill18Icon />
          )}
        </Box>
      </ChakraSelect.IndicatorGroup>
    </ChakraSelect.Control>
  );
};

type SelectClearTriggerProps = ChakraSelect.ClearTriggerProps & {
  children?: React.ReactNode;
};

const SelectClearTrigger = function SelectClearTrigger({
  ref,
  ...props
}: SelectClearTriggerProps & {
  ref?: React.Ref<HTMLButtonElement>;
}) {
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
};

type SelectContentProps = ChakraSelect.ContentProps & {
  portalled?: boolean;
  portalRef?: React.RefObject<HTMLElement>;
  baseStyle?: SystemStyleObject;
};

export const SelectContent = function SelectContent({
  ref,
  ...props
}: SelectContentProps & {
  ref?: React.Ref<HTMLDivElement>;
}) {
  const { portalled = true, portalRef, baseStyle, ...rest } = props;
  return (
    <Portal disabled={!portalled} container={portalRef}>
      <ChakraSelect.Positioner css={baseStyle}>
        <ChakraSelect.Content {...rest} ref={ref} />
      </ChakraSelect.Positioner>
    </Portal>
  );
};

type SelectValueTextProps = Omit<ChakraSelect.ValueTextProps, "children"> & {
  children?(items: CollectionItem[]): React.ReactNode;
  placeholder?: string;
  withPlaceholder?: boolean;
  multiple?: boolean;
};

export const SelectValueText = function SelectValueText({
  ref,
  ...props
}: SelectValueTextProps & {
  ref?: React.Ref<HTMLSpanElement>;
}) {
  const { children, withPlaceholder, placeholder, ...rest } = props;

  const selectContext = useSelectContext();
  const multiple = selectContext.multiple;

  return (
    <ChakraSelect.ValueText
      {...rest}
      ref={ref}
      placeholder={placeholder}
      data-with-placeholder={withPlaceholder || undefined}
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
          if (multiple) {
            return (
              <Flex gap={0.5}>
                {items.map((item) => (
                  <Badge
                    key={select.collection.stringifyItem(item)}
                    size="sm"
                    colorPalette="green"
                  >
                    {select.collection.stringifyItem(item)}
                  </Badge>
                ))}
              </Flex>
            );
          }
          if (items.length === 1) {
            return select.collection.stringifyItem(items[0]);
          }
        }}
      </ChakraSelect.Context>
    </ChakraSelect.ValueText>
  );
};

export const SelectItemText = ChakraSelect.ItemText;
export const SelectRoot = ChakraSelect.Root;
