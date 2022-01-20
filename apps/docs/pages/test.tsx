import { Box, Center } from "@chakra-ui/react";
import { ChoiceChip } from "@vygruppen/spor-react";

export default function TestPage() {
  return (
    <Center height="calc(100vh - 120px)">
      <ChoiceChip size="lg" icon={<Box>🚂</Box>}>
        Train
      </ChoiceChip>
    </Center>
  );
}
