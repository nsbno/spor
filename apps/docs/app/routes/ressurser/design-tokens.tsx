import { Box, Heading, Stack, Text } from "@vygruppen/spor-react";

export default function DesignTokensPage() {
  return (
    <Box>
      <Heading as="h1" textStyles="xl-display" mb={2}>
        Design tokens
      </Heading>
      <Stack spacing={6} fontSize={["mobile.sm", "desktop.sm"]}>
        <Text>
          Designtokens er alle verdiene man trenger for å konstruere og
          vedlikeholde et designsystem. Disse verdiene kan representere alt som
          er definert av design: en farge som en RGB-verdi, en opasitet som et
          tall, en enkel animasjon som Bezier-koordinater. Vi bruker Tokens i
          stedet for hardkodede verdier for å sikre fleksibilitet og enhet på
          tvers av alle produktopplevelser.
        </Text>
        <Text>
          Designtokens er direkte integrert i komponentbiblioteket vårt. De
          dekker de ulike alternativene for vekter, fargetemaer, komponentstates
          og mer.
        </Text>
      </Stack>
    </Box>
  );
}
