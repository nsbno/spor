import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Button,
  Heading,
  Center,
  Stack,
  Container,
  Image,
  Text,
} from "@chakra-ui/react";
import { SectionCard } from "../features/section-card/SectionCard";

export default function Docs() {
  return (
    <Box backgroundColor="lightGrey">
      <Box>
        <Container maxWidth="md" as="section">
          <SimpleGrid columns={2}>
            <Center>
              <Stack spacing="sm">
                <Text as="h1">Velkommen til designsystemet</Text>
                <Button variant="secondary" size="lg">
                  Se hvordan du kan bidra
                </Button>
              </Stack>
            </Center>
          </SimpleGrid>
        </Container>
        <Container
          maxWidth="sm"
          style={{ position: "relative", top: "-2.5rem" }}
        >
          <SimpleGrid columns={3}>
            <SectionCard />
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}
