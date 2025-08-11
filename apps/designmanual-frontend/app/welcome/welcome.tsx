import { Box, Button } from "@vygruppen/spor-react";
export function Welcome() {
  return (
    <>
      <Box as="header" padding="2">
        <div>Vy Designmanual</div>
      </Box>
      <Box as="main" padding="2">
        spor element here:{" "}
        <Button variant="primary">Primary button from spor</Button>
      </Box>
      <Box as="footer" padding="2">
        <div>Footer content</div>
      </Box>
    </>
  );
}
