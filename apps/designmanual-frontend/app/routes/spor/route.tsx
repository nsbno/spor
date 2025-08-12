import { Box, Button, Text } from "@vygruppen/spor-react";

export function SporRoute() {
  return (
    <>
      <Box>
        <Text>Spor</Text>
        <Button as="a" href="/" variant="primary">
          back
        </Button>
      </Box>
    </>
  );
}
