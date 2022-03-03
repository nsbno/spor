import { Flex, FlexProps } from "@vygruppen/spor-react";
import React from "react";
import { Link } from "remix";

type MenuItemProps = FlexProps & {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  isDisabled?: boolean;
};
/**
 * Menu item in the `ContentMenu`, and search result in the `SearchResults`.
 */
export const MenuItem = ({
  href,
  children,
  isActive,
  isDisabled,
  ...rest
}: MenuItemProps) => (
  <Flex
    key={href}
    as={Link}
    to={isDisabled ? "" : href}
    px={2}
    disabled={isDisabled}
    _disabled={{
      pointerEvents: "none",
      textDecoration: "line-through",
      color: "alias.osloGrey",
      "&:hover, &:focus, &:active": {
        backgroundColor: "transparent",
        outlineColor: "transparent",
      },
    }}
    fontSize="mobile.xs"
    borderRadius="sm"
    alignItems="center"
    backgroundColor={isActive ? "alias.mint" : "transparent"}
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
    {children}
  </Flex>
);
