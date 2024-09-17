import { Link, useNavigate } from "@remix-run/react";
import {
  ComponentsOutline30Icon,
  GuidelinesOutline30Icon,
  HomeOutline30Icon,
  StarsOutline30Icon,
  TokensOutline30Icon,
  TrainOutline30Icon,
} from "@vygruppen/spor-icon-react";
import {
  Box,
  BoxProps,
  PressableCard,
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
    to: "/resources/icon-library",
    title: "Icons",
    description: "Explore Spor's custom icon library",
    icon: StarsOutline30Icon,
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
          <ActionLinkCard to={link.to} key={link.to}>
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
  const linkProps = to.match(/^https?:\/\//)
    ? { href: to, target: "_blank", rel: "noopener noreferrer" }
    : { as: Link, to };

  return (
    <PressableCard
      {...linkProps}
      display="flex"
      flexDirection={["row", "column"]}
      gap={[3, 4]}
      variant="floating"
      padding={4}
      height="100%"
    >
      {children}
    </PressableCard>
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
      color="darkGrey"
    >
      <Icon width={["30px", "60px"]} height={["30px", "60px"]} />
    </Flex>
  );
}
