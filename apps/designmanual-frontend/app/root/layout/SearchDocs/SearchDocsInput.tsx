import { Combobox, createListCollection } from "@ark-ui/react/combobox";
import { chakra, For } from "@chakra-ui/react";
import { SearchOutline24Icon } from "@vygruppen/spor-icon-react";
import { SearchInput, Text } from "@vygruppen/spor-react";
import { matchSorter } from "match-sorter";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

import { useTopSearch } from "~/utils/useMenu";

const useSearchableItems = () => {
  const menu = useTopSearch("side-menu-spor");

  if (!menu?.menuItems) return [];

  return menu.menuItems
    .filter(({ _type, subItems }) => _type !== "divider" && subItems)
    .flatMap(
      ({ title, subItems }) =>
        subItems?.map((subItem) => ({
          ...subItem,
          categoryTitle: title ?? "",
          value: subItem.url,
        })) ?? [],
    );
};

const ComboboxItem = chakra(
  Combobox.Item,
  {
    base: {
      display: "flex",
      flexDirection: "column",
      borderRadius: "xs",
      gap: "1",
      paddingX: "4",
      paddingY: "3",
      _highlighted: { bg: "core.surface.active" },
    },
  },
  { forwardAsChild: true },
);

const ComboboxContent = chakra(Combobox.Content, {
  base: {
    marginTop: "2",
    bg: "core.surface.default",
    borderRadius: "l1",
    boxShadow: "0 0 0 1px core.border.default, 0 0 0 2px core.border.active",
    overflowY: "auto",
    maxHeight: "50vh",
  },
});

type Props = {
  onSearchSelect: () => void;
  onClose: () => void;
};

export const SearchDocsInput = ({ onSearchSelect, onClose }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");

  const items = useSearchableItems();

  const hits = matchSorter(items, searchQuery, {
    keys: ["title", "tags"],
  });

  const collection = createListCollection({ items: hits });

  const navigate = useNavigate();

  return (
    <Combobox.Root
      collection={collection}
      onInputValueChange={({ inputValue }) => setSearchQuery(inputValue)}
      inputValue={searchQuery}
      navigate={({ value }) => navigate(value ?? "")}
      inputBehavior="autohighlight"
      selectionBehavior="clear"
      onValueChange={() => onSearchSelect()}
      defaultOpen={true}
      onOpenChange={({ open }) => {
        if (!open) onClose();
      }}
    >
      <Combobox.Control>
        <Combobox.Input asChild>
          <SearchInput
            startElement={<SearchOutline24Icon />}
            type="text"
            label="Search the docs"
          />
        </Combobox.Input>
      </Combobox.Control>
      <ComboboxContent>
        <Combobox.ItemGroup>
          <For
            each={collection.items}
            fallback={
              <Text paddingX="4" paddingY="5" color="text.tertiary">
                No results found for &quot;{searchQuery}&quot;
              </Text>
            }
          >
            {(item) => (
              <ComboboxItem key={item.value} item={item} asChild>
                <Link to={`${item.url}`}>
                  <Text fontWeight="bold">{item.title}</Text>
                  <Text variant="xs" color="text.tertiary">
                    {item.categoryTitle}
                  </Text>
                </Link>
              </ComboboxItem>
            )}
          </For>
        </Combobox.ItemGroup>
      </ComboboxContent>
    </Combobox.Root>
  );
};
