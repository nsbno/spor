import {
  EMailOutline18Icon,
  FigmaOutline18Icon,
  GithubOutline18Icon,
} from "@vygruppen/spor-icon-react";
import { Box, Button, Flex, Stack, Text, VyLogo } from "@vygruppen/spor-react";
import { Link } from "react-router";

export const Footer = () => {
  return (
    <Flex
      as="footer"
      backgroundColor="surface.subtle"
      className="dark"
      alignItems="center"
      marginTop={4}
      padding={{ base: 4, md: 7 }}
      width="100%"
      zIndex="banner"
      justifyContent="space-between"
    >
      <Box alignSelf="center">
        <Link to="/" aria-label="Go to the front page">
          <VyLogo
            aria-hidden="true"
            width="auto"
            height={["1.875rem", "2.25rem", null, "2.25rem"]}
            variant="mono"
          />
        </Link>
      </Box>
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent="center"
        alignItems={{ base: "end", md: "start" }}
        gap={{ base: 4, md: 9 }}
        color="text"
      >
        <Stack direction="row" gap={2} alignItems="center">
          <Text fontWeight="bold" fontSize="xs">
            Identitet og merkevare
          </Text>
          <FooterLink
            url="mailto:"
            label="mail"
            icon={<EMailOutline18Icon />}
          />
        </Stack>
        <Stack gap={2} direction="row" alignItems="center">
          <Text fontWeight="bold" fontSize="xs">
            Spor
          </Text>
          <FooterLink
            url="https://github.com/nsbno/spor"
            label="GitHub"
            icon={<GithubOutline18Icon />}
          />
          <FooterLink
            url="https://www.figma.com/@vy_spor"
            label="Figma"
            icon={<FigmaOutline18Icon />}
          />
          <FooterLink
            url="https://nsb-utvikling.slack.com/archives/CM9H2N39U"
            label="Slack"
          />
        </Stack>
      </Flex>
    </Flex>
  );
};

const FooterLink = ({
  url,
  label,
  icon,
}: {
  url: string;
  label: string;
  icon?: React.ReactNode;
}) => (
  <Button
    variant="tertiary"
    size={{ base: "xs", md: "sm" }}
    leftIcon={icon}
    asChild
  >
    <Link to={url} target="_blank" rel="noopener noreferrer">
      {label}
    </Link>
  </Button>
);
