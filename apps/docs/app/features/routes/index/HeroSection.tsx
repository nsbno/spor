import { Link } from "@remix-run/react";
import {
  ArrowRightFill30Icon,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
} from "@vygruppen/spor-react";

export function HeroSection() {
  return (
    <Flex backgroundColor="darkTeal" minHeight="500px">
      <Container maxWidth="container.lg" mt={[0, 8]}>
        <Flex flexDirection={["column-reverse", "row"]} alignItems="center">
          <Flex flexDirection="column" color="white" flex={["auto", "55%"]}>
            <Heading as="h1" textStyle="2xl">
              Velkommen til Spor
            </Heading>
            <Box marginBottom={[10, 0]}>
              <Button
                variant="secondary"
                display={["flex", "inline-flex"]}
                as={Link}
                size="lg"
                to="/guider/bidra"
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
              alt="En illustrasjon av person som ser ut over et landskap med trær, hus, busser, sykler og veier"
              width="100%"
              __css={{ aspectRatio: "4 / 3" }}
              maxWidth={["400px", "none"]}
            />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
}
