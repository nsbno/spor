import { Text } from "@vygruppen/spor-react";
import { SharedTokenLayout } from "./SharedTokenLayout";

export function ColorTokens() {
  return (
    <SharedTokenLayout
      title="Farger"
      description={
        <Text>
          Hovedfargene våre er de fargene vi bruker mest. Disse brukes som bla.
          bakgrunnsfarger, i hovedfunksjonalitet, navigasjon og knapper – for å
          lage et rammeverk for våre tjenester. Ved å bruke mest av disse
          fargene, skaper vi en helhet og gjenkjennbarhet på tvers av våre
          digitale flater.
        </Text>
      }
    ></SharedTokenLayout>
  );
}
