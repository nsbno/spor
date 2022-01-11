import { Box, Flex, Text } from "@chakra-ui/react";
import { VyLogo } from "@vygruppen/spor-react";
import Link from "next/link";
import React from "react";
import {
  ColorScheme,
  ColorSchemeProvider,
} from "../color-scheme/ColorSchemeContext";
import { NavigationLink, SiteNavigation } from "./SiteNavigation";

type SiteHeaderProps = {
  colorScheme: ColorScheme;
};
/** The site header shown at the top of every part of our site */
export const SiteHeader = ({ colorScheme }: SiteHeaderProps) => {
  return (
    <ColorSchemeProvider colorScheme={colorScheme}>
      <Flex
        color={colorScheme === "light" ? "text.darkGrey" : "text.white"}
        justifyContent="space-between"
        alignItems="center"
        height="7.5rem"
        px={7}
        backgroundColor={
          colorScheme === "light" ? "alias.white" : "alias.darkTeal"
        }
      >
        <Flex flex="1" alignItems="center">
          <Link href="/" passHref>
            <Box as="a" mr="120px">
              <VyLogo colorScheme={colorScheme} width="94px" height="48px" />
            </Box>
          </Link>
          <SiteNavigation>
            <NavigationLink href="/resources/getting-started">
              Getting started
            </NavigationLink>
            <NavigationLink href="/profile">Profile</NavigationLink>
            <NavigationLink href="/components">Components</NavigationLink>
            <NavigationLink href="/icons">Icons</NavigationLink>
            <NavigationLink href="/design-tokens">Design tokens</NavigationLink>
          </SiteNavigation>
        </Flex>
        <Box>
          <Text>
            Vis som: <strong>Designer</strong> ⚙️
          </Text>
        </Box>
      </Flex>
    </ColorSchemeProvider>
  );
};
