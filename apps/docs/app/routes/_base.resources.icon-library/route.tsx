import { DownloadOutline24Icon } from "@vygruppen/spor-icon-react";
import { Button, Heading, Separator, Stack, Text } from "@vygruppen/spor-react";
import { SearchBar } from "./SearchBar";
import { SearchFilterProvider } from "./SearchFilterContext";
import { SearchResults } from "./SearchResults";

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
      <a href="/resources/icon-library/all-icons.zip" download>
        <Button
          variant="primary"
          size="md"
          leftIcon={<DownloadOutline24Icon />}
        >
          Download all icons
        </Button>
      </a>

      <Separator />

      <SearchFilterProvider>
        <SearchBar />
        <SearchResults />
      </SearchFilterProvider>
    </Stack>
  );
}
