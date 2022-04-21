import {
  ArrowRightFill30Icon,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
} from "@vygruppen/spor-react";
import { Link } from "remix";

export function HeroSection() {
  return (
    <Flex backgroundColor="alias.darkTeal" minHeight="500px">
      <Container maxWidth="container.lg" mt={[0, 8]}>
        <Flex flexDirection={["column-reverse", "row"]} alignItems="center">
          <Flex
            flexDirection="column"
            color="alias.white"
            flex={["auto", "55%"]}
          >
            <Heading as="h1" textStyle="2xl">
              Velkommen til Spor
            </Heading>
            <Box>
              <Button
                variant="secondary"
                display={["flex", "inline-flex"]}
                as={Link}
                size="lg"
                to="/kom-i-gang/bidra"
                rightIcon={<ArrowRightFill30Icon />}
                mt={4}
                width={["100%", "fit-content"]}
              >
                Se hvordan du kan bidra
              </Button>
            </Box>
          </Flex>
          <Flex flex={["auto", "45%"]}>
            <Image
              src="/illustrations/front-page-illustration.svg"
              alt="En person som sitter foran et skrivebord, med en dataskjerm."
              width="100%"
              __css={{ aspectRatio: "4 / 3" }}
            />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
}
