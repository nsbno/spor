import { Box, Divider, Heading, Stack, Text } from "@vygruppen/spor-react";
import { AnimationTokens } from "~/routes/_base.resources.design-tokens/AnimationTokens";
import { BreakpointTokens } from "./BreakpointTokens";
import { ColorTokens } from "./ColorTokens";
import { OutlineTokens } from "./OutlineTokens";
import { RoundingTokens } from "./RoundingTokens";
import { ShadowTokens } from "./ShadowTokens";
import { SpacingTokens } from "./SpacingTokens";
import { TypographyTokens } from "./TypographyTokens";
import { ZIndexTokens } from "./ZIndexTokens";

export default function DesignTokensPage() {
  return (
    <Box>
      <Heading as="h1" variant="xl-display" marginBottom={2}>
        Design tokens
      </Heading>
      <Stack spacing={3}>
        <Text variant="sm">
          Design tokens er alle verdiene man trenger for å konstruere og
          vedlikeholde et designsystem. Disse verdiene kan representere alt som
          er definert av design: en farge som en RGB-verdi, en opasitet som et
          tall, en enkel animasjon som Bezier-koordinater. Vi bruker Tokens i
          stedet for hardkodede verdier for å sikre fleksibilitet og enhet på
          tvers av alle produktopplevelser.
        </Text>
        <Text variant="sm">
          Designtokens er direkte integrert i komponentbiblioteket vårt. De
          dekker de ulike alternativene for vekter, fargetemaer, komponentstates
          og mer.
        </Text>
      </Stack>
      <Divider marginY={8} />
      <Stack spacing={9}>
        <ColorTokens />
        <TypographyTokens />
        <SpacingTokens />
        <RoundingTokens />
        <ShadowTokens />
        <OutlineTokens />
        <BreakpointTokens />
        <AnimationTokens />
        <ZIndexTokens />
      </Stack>
    </Box>
  );
}
