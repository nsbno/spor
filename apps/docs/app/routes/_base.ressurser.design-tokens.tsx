import { Box, Divider, Heading, Stack, Text } from "@vygruppen/spor-react";
import { AnimationTokens } from "~/features/routes/ressurser/design-tokens/AnimationTokens";
import { BreakpointTokens } from "~/features/routes/ressurser/design-tokens/BreakpointTokens";
import { ColorTokens } from "~/features/routes/ressurser/design-tokens/ColorTokens";
import { OutlineTokens } from "~/features/routes/ressurser/design-tokens/OutlineTokens";
import { RoundingTokens } from "~/features/routes/ressurser/design-tokens/RoundingTokens";
import { ShadowTokens } from "~/features/routes/ressurser/design-tokens/ShadowTokens";
import { SpacingTokens } from "~/features/routes/ressurser/design-tokens/SpacingTokens";
import { TypographyTokens } from "~/features/routes/ressurser/design-tokens/TypographyTokens";
import { ZIndexTokens } from "~/features/routes/ressurser/design-tokens/ZIndexTokens";

export default function DesignTokensPage() {
  return (
    <Box>
      <Heading as="h1" variant="xl-display" mb={2}>
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
      <Divider my={8} />
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
