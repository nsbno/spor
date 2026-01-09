import {
  Combobox,
  ComboboxRootProps,
  Portal,
  useFilter,
  useListCollection,
} from "@chakra-ui/react";
import React from "react";

import { CloseButton } from "@/button";
import { ColorSpinner } from "@/loader";

import { createTexts, useTranslation } from "..";
import { FieldProps } from "./Field";
import { Input } from "./Input";

type Item = { label: string; value: string };

type Props = {
  variant?: "core" | "floating";
  label: React.ReactNode;
  leftIcon?: React.ReactNode;
  filteredExternally?: boolean;
  loading?: boolean;
} & Omit<ComboboxRootProps, "collection"> &
  FieldProps;

export const Autocomplete = ({
  variant = "core",
  children,
  label,
  leftIcon,
  onInputValueChange,
  invalid,
  helperText,
  errorText,
  required,
  filteredExternally,
  loading,
  disabled,
  ...rest
}: Props) => {
  const { contains } = useFilter({ sensitivity: "base" });
  const { t } = useTranslation();

  const extractedItems = React.useMemo(
    () => extractItemsFromChildren(children),
    [children],
  );

  const { collection, filter, reset } = useListCollection({
    initialItems: extractedItems,
    filter: filteredExternally ? undefined : contains,
  });

  React.useEffect(() => {
    if (filteredExternally) reset();
  }, [extractedItems, reset, filteredExternally]);

  const filteredChildren = React.useMemo(
    () => filterChildren(children, collection.items),
    [children, collection.items],
  );

  return (
    <Combobox.Root
      {...rest}
      collection={collection}
      onInputValueChange={(event) => {
        if (!filteredExternally) {
          filter(event.inputValue);
        }
        onInputValueChange?.(event);
      }}
      positioning={{
        placement: "bottom",
        offset: {
          mainAxis: 3,
          crossAxis: -1,
        },
        flip: false,
      }}
      disabled={disabled}
    >
      <Combobox.Control>
        <Combobox.Input asChild>
          <Input
            label={<Combobox.Label>{label}</Combobox.Label>}
            variant={variant}
            labelAsChild
            startElement={leftIcon}
            invalid={invalid}
            helperText={helperText}
            errorText={errorText}
            required={required}
          />
        </Combobox.Input>
        <Combobox.IndicatorGroup>
          <Combobox.ClearTrigger asChild>
            <CloseButton size="xs" />
          </Combobox.ClearTrigger>

          <Combobox.Trigger />
        </Combobox.IndicatorGroup>
      </Combobox.Control>
      <Portal>
        <Combobox.Positioner>
          <Combobox.Content>
            <Combobox.Empty>{!loading && t(texts.noItemsFound)}</Combobox.Empty>
            {loading ? (
              <ColorSpinner width="1.5rem" p="2" />
            ) : (
              <>{filteredChildren}</>
            )}
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  );
};

export const AutocompleteItemGroup = Combobox.ItemGroup;
export const AutocompleteItemGroupLabel = Combobox.ItemGroupLabel;
export const AutocompleteItem = Combobox.Item;

const filterChildren = (
  children: React.ReactNode,
  collectionItems: Item[],
): React.ReactNode[] => {
  const collectionValues = new Set(collectionItems.map((item) => item.value));

  return React.Children.toArray(children)
    .map((child) => {
      if (!React.isValidElement(child)) return null;

      // Handle AutocompleteItemGroup
      if (child.type === AutocompleteItemGroup) {
        const groupProps = child.props as { children: React.ReactNode };
        const filteredGroupChildren = filterChildren(
          groupProps.children,
          collectionItems,
        );

        // Only keep the group if it has at least one item (beyond labels)
        const hasItems = filteredGroupChildren.some(
          (groupChild) =>
            React.isValidElement(groupChild) &&
            groupChild.type !== AutocompleteItemGroupLabel,
        );

        if (!hasItems) return null;

        return React.cloneElement(child, {
          ...groupProps,
          children: filteredGroupChildren,
        });
      }

      // Handle direct AutocompleteItem
      const itemProps = (child.props as { item?: Item })?.item;
      if (itemProps) {
        return collectionValues.has(itemProps.value) ? child : null;
      }

      // Keep non-item children (e.g., custom elements or labels)
      return child;
    })
    .filter(Boolean);
};

const extractItemsFromChildren = (children: React.ReactNode): Item[] => {
  const items: Item[] = [];
  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;
    if (child.type === AutocompleteItemGroup) {
      items.push(
        ...extractItemsFromChildren(
          (child.props as { children: React.ReactNode }).children,
        ),
      );
    } else if (child.type === AutocompleteItem) {
      const item = (child.props as { item?: Item }).item;
      if (item) items.push(item);
    }
  });
  return items;
};

const texts = createTexts({
  noItemsFound: {
    nb: "Ingen elementer funnet",
    nn: "Ingen elementer funnet",
    sv: "Inga objekt hittades",
    en: "No items found",
  },
});
