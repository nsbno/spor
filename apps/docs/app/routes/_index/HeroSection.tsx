import { Link } from "@remix-run/react";
import { ArrowRightFill30Icon } from "@vygruppen/spor-icon-react";
import {
  Box,
  Button,
  Container,
  DarkMode,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@vygruppen/spor-react";

export function HeroSection() {
  const backgroundColor = useColorModeValue(
    "surface.tertiary.light",
    "surface.tertiary.dark",
  );

  return (
    <Flex backgroundColor={backgroundColor} minHeight="500px">
      <Container maxWidth="container.lg" marginTop={[0, 0, 8]}>
        <Flex
          flexDirection={["column-reverse", null, "row"]}
          alignItems="center"
          gap={4}
        >
          <Flex
            flexDirection="column"
            color="text.inverted.light"
            flex={["auto", "55%"]}
          >
            <Heading as="h1" variant="2xl">
              Welcome to Spor
            </Heading>
            <Text variant="sm" color="text.tertiary.dark">
              Spor is Vy's design system for digital products.
            </Text>
            <Box marginBottom={[10, null, 0]}>
              <DarkMode>
                <Button
                  variant="primary"
                  display={["flex", "inline-flex"]}
                  as={Link}
                  size="lg"
                  to="/guides/introduction"
                  rightIcon={<ArrowRightFill30Icon />}
                  marginTop={4}
                  width={["100%", null, "fit-content"]}
                >
                  Get started
                </Button>
              </DarkMode>
            </Box>
          </Flex>
          <Flex flex={["auto", null, "45%"]}>
            <Image
              src={`/illustrations/front-page-illustration-dark.svg`}
              alt="An illustration of a person looking out over a landscape with trees, houses, buses, bicycles and roads"
              width="100%"
              aspectRatio="4 / 3"
              maxWidth={["400px", null, "none"]}
            />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
}
