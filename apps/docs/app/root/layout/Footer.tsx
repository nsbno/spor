import { Link } from "@remix-run/react";
import {
  Flex,
  TextLink,
  useColorModeValue,
  VyLogoPride,
} from "@vygruppen/spor-react";

import { useMenu } from "~/utils/useMenu";

export const Footer = () => {
  const menu = useMenu("footer-menu");
  const borderColor = useColorModeValue("blackAlpha.200", "whiteAlpha.200");

  return (
    <Flex
      as="footer"
      justifyContent="space-between"
      alignItems="center"
      marginTop={3}
      paddingTop={2}
      borderTop="1px solid"
      borderColor={borderColor}
    >
      <Link to="/" aria-label="Go to the front page">
        <VyLogoPride
          aria-hidden="true"
          width="auto"
          height={["30px", "36px", null, "48px"]}
        />
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
const getLinkProps = (url: string) => {
  if (/^https?:\/\//.test(url)) {
    return { as: "a", href: url, target: "_blank", rel: "noopener noreferrer" };
  }
  return { as: Link, to: url };
};
