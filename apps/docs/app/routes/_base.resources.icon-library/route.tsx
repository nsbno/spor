import { Link } from "@remix-run/react";
import { DownloadOutline24Icon } from "@vygruppen/spor-icon-react";
import {
  Button,
  ButtonGroup,
  Divider,
  Heading,
  Stack,
  Text,
} from "@vygruppen/spor-react";
import { SearchBar } from "./SearchBar";
import { SearchFilterProvider } from "./SearchFilterContext";
import { SearchResults } from "./SearchResults";

export default function IconsPage() {
  return (
    <Stack spacing={4}>
      <Heading as="h1" variant="xl-display">
        Icon library
      </Heading>
      <Text variant="sm">
        Vi bruker ikoner for å skape bedre navigasjon og for å tydeliggjøre
        hvilket produkt og tjeneste vi refererer til. Ikonene skal hjelpe
        brukeren med å raskt identifisere og skille mellom ulikt innhold slik at
        de skaper verdi for brukeren.
      </Text>
      <ButtonGroup>
        <Button
          as={Link}
          to="all-icons.zip"
          download={true}
          reloadDocument
          variant="primary"
          leftIcon={<DownloadOutline24Icon />}
        >
          Download all icons
        </Button>
      </ButtonGroup>
      <Divider />
      <SearchFilterProvider>
        <SearchBar />
        <SearchResults />
      </SearchFilterProvider>
    </Stack>
  );
}
