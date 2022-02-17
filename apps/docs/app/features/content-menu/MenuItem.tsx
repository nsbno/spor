import { Flex, FlexProps } from "@vygruppen/spor-react";
import React from "react";
import { Link } from "remix";

type MenuItemProps = FlexProps & { href: string; title: string };
/**
 * Menu item in the `ContentMenu`, and search result in the `SearchResults`.
 */
export const MenuItem = ({ href, title, ...rest }: MenuItemProps) => (
  <Flex
    key={href}
    as={Link}
    to={href}
    px={2}
    fontSize="mobile.xs"
    borderRadius="sm"
    alignItems="center"
    _hover={{
      backgroundColor: "alias.mint",
    }}
    _focus={{
      backgroundColor: "alias.mint",
      outlineColor: "alias.greenHaze",
    }}
    _active={{
      backgroundColor: "alias.seaMist",
    }}
    {...rest}
  >
    {title}
  </Flex>
);
