import {
  Flex,
  TextLink,
  useColorModeValue,
  VyLogo,
} from "@vygruppen/spor-react";
import { Link } from "react-router";

//import { useMenu } from "~/utils/useMenu";

export const Footer = () => {
  //const menu = useMenu("footer-menu");
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
      maxWidth={[null, null, null, "container.lg", "container.xl"]}
      paddingX={[3, null, 6, 4, 8]}
      marginBottom={["3.75rem", null, "5rem", "5rem"]}
      width={["100%", null, "container.lg", "container.xl"]}
      marginX="auto"
    >
      <Link to="/" aria-label="Go to the front page">
        <VyLogo
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
        {/* {menu?.menuItems.map((item) => (
          <MenuItem title={item.title} url={item.url} key={item.title} />
        ))} */}
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
