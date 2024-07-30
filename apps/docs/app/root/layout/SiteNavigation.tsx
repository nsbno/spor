import { Center, Flex } from "@chakra-ui/react";
import { Link, useMatches, useResolvedPath } from "@remix-run/react";

type SiteNavigationProps = {
  children: React.ReactNode;
};
export const SiteNavigation = ({ children }: SiteNavigationProps) => {
  return (
    <Flex as="nav" aria-label="Main" display={["none", "flex"]}>
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
  const linkProps: any = href.match(/^https?:\/\//)
    ? { as: "a", href }
    : { as: Link, to: href };
  return (
    <Center
      {...linkProps}
      height="2.625rem"
      paddingX={3}
      borderRadius="sm"
      border="solid transparent"
      borderWidth="strokes.md"
      whiteSpace="nowrap"
      fontWeight="bold"
      fontStyle="sm"
      _focusVisible={{ borderColor: "outline.focus.dark", outline: "none" }}
      _hover={{ backgroundColor: "ghost.surface.hover.dark" }}
      _active={{
        backgroundColor: "ghost.surface.active.dark",
      }}
      backgroundColor={isActive ? "whiteAlpha.200" : "transparent"}
      transitionDuration="fast"
      transitionProperty="common"
    >
      {children}
    </Center>
  );
};

const useIsActive = (to: string, end: boolean = false) => {
  let resolved = useResolvedPath(to);
  const matches = useMatches();
  // TODO: This doesn't really work for nested routes
  // See if there's a way we can fix this
  return matches.some(
    (match) =>
      match.pathname !== "/" && match.pathname.startsWith(resolved.pathname),
  );
};
