import { Center, Flex } from "@chakra-ui/react";
import { useMatch } from "react-router-dom";
import { Link, useResolvedPath } from "remix";
import { useColorScheme } from "../color-scheme/ColorSchemeContext";

type SiteNavigationProps = {
  children: React.ReactNode;
};
export const SiteNavigation = ({ children }: SiteNavigationProps) => {
  return (
    <Flex gap={3} as="nav" aria-label="Main">
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
  const { isLight } = useColorScheme();
  const isActive = useIsActive(href);
  return (
    <Center
      as={Link}
      to={href}
      height="42px"
      px={3}
      borderRadius="sm"
      border="solid transparent"
      borderWidth="strokes.md"
      whiteSpace="nowrap"
      fontWeight="bold"
      fontStyle="sm"
      _focusVisible={{ borderColor: "outline.greenHaze", outline: "none" }}
      _hover={{ backgroundColor: isLight ? "alias.seaMist" : "alias.pine" }}
      _active={{
        backgroundColor: isLight ? "alias.mint" : "alias.celadon",
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
