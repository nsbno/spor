import { Center, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const { isLight } = useColorScheme();
  const isActive =
    (router.pathname !== "/" && href?.startsWith(router.pathname)) ?? false;
  return (
    <Link href={href} passHref>
      <Center
        as="a"
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
        transition=".1s ease-out"
      >
        {children}
      </Center>
    </Link>
  );
};
