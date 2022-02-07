import { Stack, Text } from "@vygruppen/spor-react";
import { SharedTokenLayout } from "./SharedTokenLayout";

export function TypographyTokens() {
  return (
    <SharedTokenLayout
      title="Typografi"
      description={
        <Stack>
          <Text>
            Vi har to “sett” med tekststiler; ett for mobil og ett for desktop.
            Tekststilene for Mobil skal brukes i Vy-appen, og web på mobil, mens
            liggende tablet, desktop og widescreen skal bruke tekststilene for
            Desktop. Brekkpunktet er på skjermbredde større eller lik &gt;=756
            piksler bredde. Linjehøyden skal alltid være 1.333 ganger
            skriftstørrelsen rundet av til nærmeste pixel.
          </Text>
          <Text>
            Fonten Vy Display er mindre lesbar i små størrelser, og skal derfor
            helst bare brukes på overskrifter på Epi-sidene, mens vi i Elm- og
            React-apper foretrekker Vy Sans.
          </Text>
        </Stack>
      }
    ></SharedTokenLayout>
  );
}
