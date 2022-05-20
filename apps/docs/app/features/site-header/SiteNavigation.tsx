import { Center, Flex } from "@chakra-ui/react";
import { Link, useResolvedPath } from "@remix-run/react";
import { useMatch } from "react-router-dom";

type SiteNavigationProps = {
  children: React.ReactNode;
};
export const SiteNavigation = ({ children }: SiteNavigationProps) => {
  return (
    <Flex gap={3} as="nav" aria-label="Main" display={["none", "flex"]}>
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
      height="42px"
      px={3}
      borderRadius="sm"
      border="solid transparent"
      borderWidth="strokes.md"
      whiteSpace="nowrap"
      fontWeight="bold"
      fontStyle="sm"
      _focusVisible={{ borderColor: "outline.greenHaze", outline: "none" }}
      _hover={{ backgroundColor: "pine" }}
      _active={{
        backgroundColor: "celadon",
      }}
      backgroundColor={isActive ? "rgba(255,255,255,0.2)" : "transparent"}
      transitionDuration="fast"
      transitionProperty="common"
    >
      {children}
    </Center>
  );
};

const useIsActive = (to: string, end: boolean = false) => {
  let resolved = useResolvedPath(to);
  return useMatch({ path: resolved.pathname, end });
};
