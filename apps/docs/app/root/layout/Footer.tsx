import { Link } from "@remix-run/react";
import { NightOutline18Icon } from "@vygruppen/spor-icon-react";
import {
  Button,
  Flex,
  TextLink,
  VyLogo,
  useColorMode,
} from "@vygruppen/spor-react";
import { useMenu } from "~/utils/useMenu";

export const Footer = () => {
  const menu = useMenu("footer-menu");
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      as="footer"
      justifyContent="space-between"
      alignItems="center"
      marginTop={3}
      paddingTop={2}
      borderTop="1px solid"
      borderColor="blackAlpha.200"
    >
      <Link to="/" aria-label="Go to the front page">
        <VyLogo colorScheme={colorMode} width="4rem" aria-hidden="true" />
      </Link>
      <Flex
        flexDirection="row"
        gap={2}
        flexWrap="wrap"
        as="nav"
        aria-label="Resources"
      >
        {menu?.menuItems.map((item) => (
          <MenuItem title={item.title} url={item.url} key={item.title} />
        ))}
        <Button
          onClick={toggleColorMode}
          variant="secondary"
          size="xs"
          leftIcon={<NightOutline18Icon />}
        >
          {colorMode === "light" ? "Dark mode" : "Light mode"}
        </Button>
      </Flex>
    </Flex>
  );
};

type MenuItemProps = {
  title: string;
  url: string;
};
const MenuItem = ({ title, url }: MenuItemProps) => {
  return (
    <TextLink {...getLinkProps(url)} variant="primary">
      {title}
    </TextLink>
  );
};
const getLinkProps = (url: string): any => {
  if (url.match(/^https?:\/\//)) {
    return { as: "a", href: url, target: "_blank", rel: "noopener noreferrer" };
  }
  return { as: Link, to: url };
};
