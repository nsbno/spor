import { ArrowRightFill30Icon } from "@vygruppen/spor-icon-react";
import {
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@vygruppen/spor-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <Flex
      backgroundColor={"surface.tertiary"}
      minHeight="450px"
      className="light"
      width={"100%"}
      overflow={"hidden"}
    >
      <Container
        maxWidth="container.lg"
        marginTop={{
          base: "0",
          lg: "1",
        }}
        marginX="auto"
        padding="1"
      >
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
            <Flex marginBottom={[10, null, 0]} marginTop="3" gap="2">
              <Button
                className="dark"
                variant="tertiary"
                display={["flex", "inline-flex"]}
                asChild
              >
                <Link to="/guides/migration">Migration from spor 1</Link>
              </Button>
              <Button
                className="light"
                variant="secondary"
                display={["flex", "inline-flex"]}
                rightIcon={<ArrowRightFill30Icon />}
              >
                <Link to="/guides/introduction">Get started</Link>
              </Button>
            </Flex>
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
