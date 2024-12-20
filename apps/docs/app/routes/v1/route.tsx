import { Heading } from "@chakra-ui/react";
import { Box, useColorModeValue } from "@vygruppen/spor-react";

export default function Index() {
  const backgroundColor = useColorModeValue(
    "bg.default.light",
    "bg.default.dark",
  );
  return (
    <Box
      backgroundColor={backgroundColor}
      flex="1"
      maxWidth={"80rem"}
      marginX="auto"
      marginTop={4}
    >
      <Heading>V1</Heading>
    </Box>
  );
}
