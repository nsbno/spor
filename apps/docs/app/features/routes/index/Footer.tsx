import {
  Box,
  Container,
  Flex,
  InformationOutline24Icon,
  RuterOutline24Icon,
  VyLogo,
} from "@vygruppen/spor-react";
import { Link } from "remix";

export function Footer() {
  return (
    <Container as="footer" maxWidth="1480px" height={["auto", "124px"]}>
      <Flex
        justifyContent="space-between"
        borderTop="1px solid"
        borderColor="alias.iron"
        pt={4}
      >
        <Box>
          <Link to="https://vy.no" title="Gå til Vy.no">
            <VyLogo colorScheme="light" width="80px" />
          </Link>
        </Box>
        <Flex as="nav" aria-label="Footer">
          <Flex
            as="a"
            href="https://www.vy.no/vygruppen/om-oss"
            display={["none", "flex"]}
            _hover={{ textDecoration: "underline" }}
            alignItems="center"
            mr={8}
          >
            <InformationOutline24Icon mr={3} fontSize="24px" />
            Om Vy
          </Flex>
          <Flex
            as="a"
            href="slack://channel?team=nsb-utvikling&id=CM9H2N39U"
            _hover={{ textDecoration: "underline" }}
            alignItems="center"
          >
            <RuterOutline24Icon mr={3} fontSize="24px" />
            Prat med oss på Slack
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
}
