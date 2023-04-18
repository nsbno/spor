import { Link } from "@remix-run/react";
import { Flex, TextLink, VyLogo } from "@vygruppen/spor-react";
import { useMenu } from "~/utils/useMenu";

export const Footer = () => {
  const menu = useMenu("footer-menu");
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
      <Link to="/" title="Gå til forsiden">
        <VyLogo colorScheme="light" width="4rem" />
      </Link>
      <Flex
        flexDirection="row"
        gap={2}
        flexWrap="wrap"
        as="nav"
        aria-label="Ressurser"
      >
        {menu?.menuItems.map((item) => (
          <MenuItem title={item.title} url={item.url} key={item.title} />
        ))}
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
