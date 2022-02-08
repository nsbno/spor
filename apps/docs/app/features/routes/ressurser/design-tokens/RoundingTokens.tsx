import { BoxProps, Text } from "@vygruppen/spor-react";
import { SharedTokenLayout } from "./SharedTokenLayout";

export function RoundingTokens(props: BoxProps) {
  return (
    <SharedTokenLayout
      {...props}
      title="Rounding"
      description={
        <Text>
          Avrundingen følger størrelsen på komponenten. Små komponenter har
          liten avrunding, og store komponenter har større avrunding. Alle
          komponenter som består av en “boks/kort” har rounding. Vi bruker
          sjeldent helt firkantede komponenter (0 px rounding). En enkel måte å
          se hvilken rounding du burde bruke, er å følge tommelfingerregelen:
          komponenter med 1-2 linjer med tekst eller veldig kompakte elementer,
          vil alltid ha rounding på 12 px. Når det er flere linjer horisontalt,
          sånn som kort eller bokser, bruker vi rounding på 18 px. I tillegg
          brukes 24 px rounding på skuffer, 30 px rounding på knapper og 36 px
          rounding på header i appen.
        </Text>
      }
    ></SharedTokenLayout>
  );
}
