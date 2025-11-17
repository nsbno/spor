import {
  createListCollection,
  Flex,
  Select,
  SelectItem,
  Span,
} from "@vygruppen/spor-react";

export const ChangeVersion = () => {
  const versions = createListCollection({
    items: [
      {
        label: "V1",
        value: "v1",
        href: "https://spor-v1.test.vylabs.io/",
      },
    ],
  });

  return (
    <Select
      label="v2"
      minWidth={{ base: "9", lg: "11" }}
      value={[]}
      collection={versions}
      onValueChange={(e) => {
        const item = versions.items.find((i) => i.value === e.value[0]);
        if (!item) return;
        globalThis.location.assign(item.href);
      }}
    >
      {versions.items.map((item, index) => (
        <SelectItem key={index} item={item}>
          <Flex justifyContent="space-between" width="100%" alignItems="end">
            <Span>{item.label}</Span>
            <Span
              color="text.tertiary"
              fontSize="2xs"
              display={{
                base: "none",
                lg: "block",
              }}
            >
              11.3.10
            </Span>
          </Flex>
        </SelectItem>
      ))}
    </Select>
  );
};
