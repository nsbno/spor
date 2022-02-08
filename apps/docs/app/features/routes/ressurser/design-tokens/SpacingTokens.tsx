import { BoxProps, Text } from "@vygruppen/spor-react";
import { SharedTokenLayout } from "./SharedTokenLayout";

export function SpacingTokens(props: BoxProps) {
  return (
    <SharedTokenLayout
      {...props}
      title="Spacing"
      description={
        <Text>
          Vy bruker en spacing-skala basert på 6 px, i kombinasjon med et 3 px
          baseline-grid for mindre komponenter. Det vil si at menyer, bokser,
          marginer og padding tar utgangspunkt i 6 px. Mens komponenter som
          knapper og ikoner tar utgangspunkt i 6 og 12 px.
        </Text>
      }
    ></SharedTokenLayout>
  );
}
