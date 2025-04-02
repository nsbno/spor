import { DownloadOutline24Icon } from "@vygruppen/spor-icon-react";
import { Button, Heading, Separator, Stack, Text } from "@vygruppen/spor-react";
import { SearchBar } from "./SearchBar";
import { SearchFilterProvider } from "./SearchFilterContext";
import { SearchResults } from "./SearchResults";

const downloadAllIcons = async () => {
  const response = await fetch("/resources/icon-library/all-icons.zip");
  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "/resources/icon-library/all-icons.zip";
  a.click();
};

export default function IconsPage() {
  return (
    <Stack gap={4}>
      <Heading as="h1" variant="xl-display">
        Icon library
      </Heading>
      <Text variant="sm">
        We use icons to create better navigation and to clarify which product
        and service we are referring to. The icons should help users quickly
        identify and differentiate between different content so that they create
        value for the user.
      </Text>
      <Button
        variant="primary"
        size="md"
        leftIcon={<DownloadOutline24Icon />}
        onClick={() => downloadAllIcons()}
      >
        Download all icons
      </Button>

      <Separator />

      <SearchFilterProvider>
        <SearchBar />
        <SearchResults />
      </SearchFilterProvider>
    </Stack>
  );
}
