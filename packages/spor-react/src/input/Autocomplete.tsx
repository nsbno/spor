import {
  Combobox,
  ComboboxItemProps,
  ComboboxRootProps,
  useCombobox,
  useComboboxContext,
  useFilter,
  useListCollection,
} from "@chakra-ui/react";
import { CheckmarkFill18Icon } from "@vygruppen/spor-icon-react";
import React, { forwardRef } from "react";

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
  emptyLabel?: React.ReactNode;
  openOnFocus?: boolean;
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
  emptyLabel,
  openOnClick = true,
  openOnFocus = true,
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

  const combobox = useCombobox({
    collection,
    openOnClick,
    onInputValueChange: (event) => {
      if (!filteredExternally) {
        filter(event.inputValue);
      }
      onInputValueChange?.(event);
    },
    positioning: {
      placement: "bottom",
      offset: {
        mainAxis: 3,
        crossAxis: -1,
      },
      flip: false,
    },
    disabled,
    ...rest,
  });

  return (
    <Combobox.RootProvider value={combobox}>
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
            onFocus={() => {
              if (openOnFocus) combobox.setOpen(true);
            }}
          />
        </Combobox.Input>
        <Combobox.IndicatorGroup>
          <Combobox.ClearTrigger asChild aria-label={t(texts.clearValue)}>
            <CloseButton size="xs" />
          </Combobox.ClearTrigger>
        </Combobox.IndicatorGroup>
      </Combobox.Control>
      <Combobox.Positioner
        onBlur={(event) => {
          // Close if focus moves outside the positioner
          if (!event.currentTarget.contains(event.relatedTarget as Node)) {
            combobox.setOpen(false);
          }
        }}
      >
        <Combobox.Content>
          <Combobox.Empty>
            {!loading && (emptyLabel ?? t(texts.noItemsFound))}
          </Combobox.Empty>
          {loading ? (
            <ColorSpinner width="1.5rem" p="2" />
          ) : (
            <>{filteredChildren}</>
          )}
        </Combobox.Content>
      </Combobox.Positioner>
    </Combobox.RootProvider>
  );
};

export const AutocompleteItemGroup = Combobox.ItemGroup;
export const AutocompleteItemGroupLabel = Combobox.ItemGroupLabel;

export const AutocompleteItem = forwardRef<HTMLDivElement, ComboboxItemProps>(
  function AutocompleteItem({
    children,
    ...props
  }: React.PropsWithChildren<ComboboxItemProps>) {
    const { multiple } = useComboboxContext();
    return (
      <Combobox.Item {...props}>
        {children}
        {multiple && (
          <Combobox.ItemIndicator asChild>
            <CheckmarkFill18Icon />
          </Combobox.ItemIndicator>
        )}
      </Combobox.Item>
    );
  },
);

const filterChildren = (
  children: React.ReactNode,
  collectionItems: Item[],
): React.ReactNode[] => {
  const collectionValues = new Set(collectionItems.map((item) => item.value));

  return React.Children.toArray(children)
    .map((child) => {
      if (!React.isValidElement(child)) return null;

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

      const itemProps = (child.props as { item?: Item })?.item;
      if (itemProps) {
        return collectionValues.has(itemProps.value) ? child : null;
      }

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
    nb: "Ingen resultater",
    nn: "Ingen resultat",
    sv: "Inga resultat",
    en: "No results found",
  },
  clearValue: {
    nb: "Tøm verdi",
    nn: "Tøm verdi",
    sv: "Rensa värde",
    en: "Clear value",
  },
});
