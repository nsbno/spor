import { useNavigate } from "@remix-run/react";
import { ArrowRightFill30Icon } from "@vygruppen/spor-icon-react";
import {
  Alert,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@vygruppen/spor-react";

export function HeroSection() {
  const navigate = useNavigate();
  return (
    <Flex
      backgroundColor={"surface.tertiary"}
      minHeight="600px"
      className="light"
      width={"100vw"}
      overflow={"hidden"}
    >
      <Container maxWidth="container.lg" marginTop={[0, 0, 4]} marginX="auto">
        <Alert variant="info" marginBottom="4" maxWidth="full">
          Spor 2 is now available but is still undergoing testing for
          production-ready applications. We are actively addressing issues,
          enhancing documentation, and incorporating user feedback. Please share
          any feedback you have! For production-ready apps, continue using Spor
          1 until Spor 2 is fully tested and validated.
        </Alert>

        <Flex
          flexDirection={["column-reverse", null, "row"]}
          alignItems="center"
          gap={4}
        >
          <Flex
            flexDirection="column"
            color="text.inverted"
            flex={["auto", "55%"]}
          >
            <Heading as="h1" variant="xxl" color="text" className="dark">
              Welcome to Spor
            </Heading>
            <Text variant="sm" color="text.tertiary" className="dark">
              Spor is Vy&apos;s design system for digital products.
            </Text>
            <Box marginBottom={[10, null, 0]}>
              <Button
                className="light"
                variant="secondary"
                display={["flex", "inline-flex"]}
                size="lg"
                onClick={() => navigate("/guides/introduction")}
                rightIcon={<ArrowRightFill30Icon />}
                marginTop={4}
                width={["100%", null, "fit-content"]}
              >
                Get started
              </Button>
            </Box>
          </Flex>
          <Flex flex={["auto", null, "45%"]}>
            <Image
              src={`/illustrations/front-page-illustration-dark.svg`}
              alt="An illustration of a person looking out over a landscape with trees, houses, buses, bicycles and roads"
              width="100%"
              aspectRatio="4 / 3"
              maxWidth={["25rem", null, "none"]}
            />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
}
