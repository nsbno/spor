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
import { SearchBar } from "~/features/routes/ressurser/ikoner/SearchBar";
import { SearchFilterProvider } from "~/features/routes/ressurser/ikoner/SearchFilterContext";
import { SearchResults } from "~/features/routes/ressurser/ikoner/SearchResults";

export default function IconsPage() {
  return (
    <Stack spacing={4}>
      <Heading as="h1" variant="xl-display">
        Ikonbibliotek
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
          to="alle-ikoner.zip"
          download={true}
          reloadDocument
          variant="primary"
          leftIcon={<DownloadOutline24Icon />}
        >
          Last ned alle ikoner
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
