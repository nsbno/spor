import { Box, Heading, Stack, Text } from "@vygruppen/spor-react";

export default function ComponentsPage() {
  return (
    <Box>
      <Stack spacing={2}>
        <Heading as="h1" textStyle="xl-display">
          Komponent&shy;oversikt
        </Heading>
        <Text>
          Komponenter er interaktive byggeklosser som gjør det enklere å skape
          fullstendige brukeropplevelser. Her kan du se en oversikt over alle
          komponentene.
        </Text>
      </Stack>
    </Box>
  );
}
