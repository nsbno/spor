import { BoxProps, Text } from "@vygruppen/spor-react";
import { SharedTokenLayout } from "./SharedTokenLayout";

export function ShadowTokens(props: BoxProps) {
  return (
    <SharedTokenLayout
      {...props}
      title="Skygger"
      description={
        <Text>
          Skygge brukes for å løfte noe fra bakgrunnen (en handling) og for å
          tydeliggjøre at noe er klikkbart. Det skal kun brukes skygge på
          komponenter som er klikkbare. Vi bruker skygge for å skape et hierarki
          av viktighet. Ikke alle klikkbare elementer har skygge, som f.eks
          inputfelt og knapper. Noen ganger brukes skygge kun i enkelte states
          av komponenter, for å tydeliggjøre en handling. Komponenter med sterke
          farger eller outline trenger ikke skygge. Vi har tre nivåer av skygge:
          Elevation 1, Elevation 2 og Elevation 3.
        </Text>
      }
    ></SharedTokenLayout>
  );
}
