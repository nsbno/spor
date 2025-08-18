import { Center, CenterProps, Flex } from "@chakra-ui/react";
import { Link, useMatches, useResolvedPath } from "react-router";

type SiteNavigationProps = {
  children: React.ReactNode;
};
export const SiteNavigation = ({ children }: SiteNavigationProps) => {
  return (
    <Flex as="nav" aria-label="Main" display={["none", "flex"]} gap={0.5}>
      {children}
    </Flex>
  );
};

type NavigationItemProps = {
  /** The text of the navigation item */
  children: React.ReactNode;
  /** The URL to link to */
  href: string;
};
export const NavigationLink = ({ children, href }: NavigationItemProps) => {
  const isActive = useIsActive(href);
  const linkProps = /^https?:\/\//.test(href)
    ? ({ as: "a", href } as Partial<CenterProps>)
    : { as: Link, to: href };
  return (
    <Center
      {...linkProps}
      height="2.625rem"
      paddingX={2}
      borderRadius="sm"
      border="solid transparent"
      borderWidth="strokes.md"
      whiteSpace="nowrap"
      fontWeight="bold"
      fontStyle="sm"
      fontSize={"xs"}
      _hover={{ backgroundColor: "ghost.surface.hover" }}
      _active={{
        backgroundColor: "ghost.surface.active",
      }}
      backgroundColor={isActive ? "whiteAlpha.200" : "transparent"}
      transitionDuration="fast"
      transitionProperty="common"
    >
      {children}
    </Center>
  );
};

const useIsActive = (to: string) => {
  const resolved = useResolvedPath(to);
  const matches = useMatches();
  // TODO: This doesn't really work for nested routes
  // See if there's a way we can fix this
  return matches.some(
    (match) =>
      match.pathname !== "/" && match.pathname.startsWith(resolved.pathname),
  );
};
