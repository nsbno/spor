import { Link, useLocation } from "@remix-run/react";
import { HamburgerFill24Icon } from "@vygruppen/spor-icon-react";
import {
  Box,
  DarkMode,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Stack,
  VyLogo,
  useColorModeValue,
  useDisclosure,
} from "@vygruppen/spor-react";
import { useEffect } from "react";
import { useMenu } from "~/utils/useMenu";
import { SearchableContentMenu } from "../../routes/_base/content-menu/SearchableContentMenu";
import { NavigationLink, SiteNavigation } from "./SiteNavigation";
import { SiteSettings } from "./SiteSettings";

/** The site header shown at the top of every part of our site */
export const SiteHeader = () => {
  const backgroundColor = useColorModeValue(
    "surface.tertiary.light",
    "surface.tertiary.dark",
  );

  return (
    <Flex
      color="white"
      justifyContent="space-between"
      alignItems="center"
      paddingX={[3, 4, 7]}
      paddingY={[3, 4, 5, 4]}
      backgroundColor={backgroundColor}
      sx={{
        position: "sticky",
        top: "0",
        zIndex: "sticky",
      }}
    >
      <Box as={Link} marginRight={[0, 0, 11]} to="/">
        <VyLogo
          colorScheme="dark"
          width="auto"
          height={["30px", "36px", null, "48px"]}
          aria-label="Vy"
        />
      </Box>
      <DesktopNavigation />
      <MobileNavigation />
    </Flex>
  );
};

const DesktopNavigation = () => {
  const menu = useMenu("top-menu");
  return (
    <Flex
      display={["none", null, null, "flex"]}
      flex="1"
      justifyContent="space-between"
      alignItems="center"
    >
      <SiteNavigation>
        {menu?.menuItems.map((menuItem) => (
          <NavigationLink key={menuItem.url} href={menuItem.url}>
            {menuItem.title}
          </NavigationLink>
        ))}
      </SiteNavigation>

      <SiteSettings showLabel={true} />
    </Flex>
  );
};

const MobileNavigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  useEffect(() => {
    // This doesn't close the menu when you're on the page you're clicking on,
    // but that's on you!
    onClose();
  }, [location.pathname, onClose]);
  return (
    <Flex display={["flex", null, null, "none"]}>
      <Flex gap={2}>
        <SiteSettings showLabel={false} />
        <DarkMode>
          <IconButton
            icon={<HamburgerFill24Icon />}
            aria-label="Menu"
            variant="ghost"
            size="md"
            onClick={onOpen}
          />
        </DarkMode>
      </Flex>
      <Drawer placement="right" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Explore Spor</DrawerHeader>
          <DrawerBody paddingY={2} paddingX={[1, 2, 3]}>
            <Stack spacing={2}>
              <SearchableContentMenu />
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
