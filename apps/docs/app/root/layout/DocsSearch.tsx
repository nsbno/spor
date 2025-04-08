import { Combobox, Portal, createListCollection } from "@ark-ui/react";
import { Box, chakra, For, Link } from "@chakra-ui/react";
import { SearchFill18Icon } from "@vygruppen/spor-icon-react";
import { CloseButton, Input, InputGroup, Text } from "@vygruppen/spor-react";

const ComboboxRoot = chakra(
  Combobox.Root,
  {
    base: { width: "full" },
  },
  { forwardAsChild: true },
);

const ComboboxContent = chakra(
  Combobox.Content,
  {
    base: {
      padding: "2",
      overflowY: "auto",
      maxHeight: "20rem",
      boxShadow: "lg",
      bg: "bg.panel",
      borderRadius: "l2",
      zIndex: "popover",
    },
  },
  { forwardAsChild: true },
);

const ComboboxItem = chakra(
  Combobox.Item,
  {
    base: {
      display: "flex",
      flexDirection: "column",
      borderRadius: "l1",
      gap: "1",
      px: "4",
      py: "2",
      _highlighted: { bg: "bg.muted" },
    },
  },
  { forwardAsChild: true },
);

export const DocsSearch = () => {
  const collection = createListCollection({
    items: [],
  });

  const query = "";

  return (
    <div>
      <ComboboxRoot collection={collection}>
        <Combobox.Control asChild>
          <InputGroup
            startElement={<SearchFill18Icon />}
            endElement={
              <Combobox.ClearTrigger hidden={!query} asChild>
                <CloseButton />
              </Combobox.ClearTrigger>
            }
          >
            <Combobox.Input defaultValue={query ?? ""} asChild>
              <Input
                label="hei"
                bg="bg"
                ps="12"
                placeholder="Search guides..."
              />
            </Combobox.Input>
          </InputGroup>
        </Combobox.Control>

        <Portal>
          <Combobox.Positioner>
            <ComboboxContent>
              <For each={collection.items} fallback={<Text>No results</Text>}>
                {(item) => (
                  <ComboboxItem asChild key={item} item={item}>
                    <Link href={`/${item}`}>
                      <Box>{item}</Box>
                      <Text color="fg.muted">{item}</Text>
                    </Link>
                  </ComboboxItem>
                )}
              </For>
            </ComboboxContent>
          </Combobox.Positioner>
        </Portal>
      </ComboboxRoot>
    </div>
  );
};
