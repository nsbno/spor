import { Center, Stack, useDisclosure } from "@chakra-ui/react";
import {
  Box,
  Divider,
  Flex,
  HamburgerFill24Icon,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  VyLogo,
} from "@vygruppen/spor-react";
import { useEffect } from "react";
import { Link, useLocation } from "remix";
import { MenuItem } from "~/utils/menu.server";
import { useMenu } from "~/utils/useMenu";
import { SearchableContentMenu } from "../content-menu/SearchableContentMenu";
import { NavigationLink, SiteNavigation } from "./SiteNavigation";
import { UserPreferenceSwitcher } from "./UserPreferenceSwitcher";

/** The site header shown at the top of every part of our site */
export const SiteHeader = () => {
  return (
    <Flex
      color="alias.white"
      justifyContent="space-between"
      alignItems="center"
      px={[3, 4, 7]}
      py={[3, 4, 5, 7]}
      backgroundColor="alias.darkTeal"
    >
      <Box as={Link} mr={[0, 0, 11]} to="/">
        <VyLogo
          colorScheme="dark"
          height={[5, 6, 8]}
          width={["auto", "100%"]}
        />
      </Box>
      <DesktopNavigation />
      <MobileNavigation />
    </Flex>
  );
};

type MatchesData = {
  menus: {
    slug: string;
    menuItems: MenuItem[];
  }[];
};
const DesktopNavigation = () => {
  const menu = useMenu("top-menu");
  return (
    <Flex
      display={["none", "none", "flex"]}
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
      <UserPreferenceSwitcher />
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
  }, [location.pathname]);
  return (
    <Flex display={["flex", "flex", "none"]}>
      <IconButton
        icon={<HamburgerFill24Icon />}
        aria-label="Meny"
        variant="ghost"
        onClick={onOpen}
        color="alias.white"
        _active={{
          color: "alias.greenHaze",
        }}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mx={[2, "auto"]}>
          <ModalBody py={2} px={[1, 2, 3]}>
            <Stack spacing={2}>
              <SearchableContentMenu />
              <Divider />
              <Center>
                <UserPreferenceSwitcher />
              </Center>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};
