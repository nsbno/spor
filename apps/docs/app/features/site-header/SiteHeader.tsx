import {
  Box,
  Flex,
  SettingsX1Fill24Icon,
  Text,
  VyLogo,
} from "@vygruppen/spor-react";
import { Link } from "remix";
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
          <Box as={Link} mr="120px" to="/">
            <VyLogo colorScheme={colorScheme} width="94px" height="48px" />
          </Box>
          <SiteNavigation>
            <NavigationLink href="/kom-i-gang">Kom i gang</NavigationLink>
            <NavigationLink href="/profil">Profil</NavigationLink>
            <NavigationLink href="/komponenter">Komponenter</NavigationLink>
            <NavigationLink href="/ikoner">Ikoner</NavigationLink>
            <NavigationLink href="/design-tokens">Design tokens</NavigationLink>
          </SiteNavigation>
        </Flex>
        <Flex gap="1em">
          <Text>
            Vis som: <strong>Designer</strong>
          </Text>
          <SettingsX1Fill24Icon fontSize="24px" />
        </Flex>
      </Flex>
    </ColorSchemeProvider>
  );
};
