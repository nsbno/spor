import { Link } from "@remix-run/react";
import {
  ComponentsOutline30Icon,
  GuidelinesOutline30Icon,
  HomeOutline30Icon,
  IconsOutline30Icon,
  TokensOutline30Icon,
  TrainOutline30Icon,
} from "@vygruppen/spor-icon-react";
import {
  Box,
  BoxProps,
  Card,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@vygruppen/spor-react";

type LinkItem = {
  to: string;
  title: string;
  description: string;
  icon: React.ComponentType<BoxProps>;
  iconColor: string;
};

// These are the links that are rendered in the action links section.
const links: LinkItem[] = [
  {
    to: "/guides/introduction",
    title: "Get started",
    description: "Set up Spor in a new project in no time",
    icon: HomeOutline30Icon,
    iconColor: "lightBlue",
  },
  {
    to: "/components",
    title: "Components",
    description:
      "Discover the building blocks you have available to build great user experiences",
    icon: ComponentsOutline30Icon,
    iconColor: "champagne",
  },
  {
    to: "/resources/design-tokens",
    title: "Design Tokens",
    description:
      "See colors, sizes and the other tokens that make up the Vy design system",
    icon: TokensOutline30Icon,
    iconColor: "bisque",
  },
  {
    to: "https://snohq.io/xx/",
    title: "Profile",
    description:
      "Learn about our public visual profile and how to use it in your projects",
    icon: GuidelinesOutline30Icon,
    iconColor: "seaMist",
  },
  {
    to: "/resources/icons",
    title: "Icons",
    description: "Explore Spor's custom icon library",
    icon: IconsOutline30Icon,
    iconColor: "primrose",
  },
  {
    to: "/playground",
    title: "Playground",
    description: "Try out Spor components live in our playground",
    icon: TrainOutline30Icon,
    iconColor: "silver",
  },
];

export function ActionLinks() {
  return (
    <Container maxWidth="container.lg">
      <SimpleGrid
        position="relative"
        top={["-62px", -8]}
        columns={[1, 2, 3]}
        spacing={[3, 4]}
      >
        {links.map((link) => (
          <ActionLinkCard key={link.to} to={link.to}>
            <IconCircle backgroundColor={link.iconColor} icon={link.icon} />
            <Box>
              <Heading
                as="h2"
                variant="md"
                marginBottom={1.5}
                fontWeight="bold"
              >
                {link.title}
              </Heading>
              <Text variant="sm">{link.description}</Text>
            </Box>
          </ActionLinkCard>
        ))}
      </SimpleGrid>
    </Container>
  );
}

type ActionLinkCardProps = {
  to: string;
  children: React.ReactNode;
};
function ActionLinkCard({ to, children }: ActionLinkCardProps) {
  const linkProps: any = to.match(/^https?:\/\//)
    ? { as: "a", href: to }
    : { as: Link, to };
  return (
    <Card
      {...linkProps}
      colorScheme="white"
      padding={4}
      display="flex"
      flexDirection={["row", "column"]}
      gap={[3, 4]}
    >
      {children}
    </Card>
  );
}

type IconCircleProps = {
  backgroundColor: string;
  icon: React.ComponentType<BoxProps>;
};
function IconCircle({ backgroundColor, icon: Icon }: IconCircleProps) {
  return (
    <Flex
      width={["52px", "90px"]}
      height={["52px", "90px"]}
      flex={["0 0 52px", "0 0 90px"]}
      alignItems="center"
      justifyContent="center"
      borderRadius="round"
      backgroundColor={backgroundColor}
    >
      <Icon width={["30px", "60px"]} height={["30px", "60px"]} />
    </Flex>
  );
}
