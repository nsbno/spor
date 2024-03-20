import {
  DarkMode,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Link, useLocation } from "@remix-run/react";
import {
  HamburgerFill24Icon,
  NightFill24Icon,
  SummerFill24Icon,
} from "@vygruppen/spor-icon-react";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  VyLogo,
} from "@vygruppen/spor-react";
import { useEffect } from "react";
import { useMenu } from "~/utils/useMenu";
import { SearchableContentMenu } from "../../routes/_base/content-menu/SearchableContentMenu";
import { NavigationLink, SiteNavigation } from "./SiteNavigation";

/** The site header shown at the top of every part of our site */
export const SiteHeader = () => {
  return (
    <Flex
      color="white"
      justifyContent="space-between"
      alignItems="center"
      paddingX={[3, 4, 7]}
      paddingY={[3, 4, 5, 7]}
      backgroundColor="darkTeal"
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
  const { colorMode, toggleColorMode } = useColorMode();
  const oppositeColorMode = useColorModeValue("Dark", "Light");
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
      <DarkMode>
        <Button
          leftIcon={
            colorMode === "dark" ? <SummerFill24Icon /> : <NightFill24Icon />
          }
          variant="ghost"
          size="sm"
          fontWeight="600"
          onClick={toggleColorMode}
        >
          {oppositeColorMode} mode
        </Button>
      </DarkMode>
    </Flex>
  );
};

const MobileNavigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const { colorMode, toggleColorMode } = useColorMode();
  const oppositeColorMode = useColorModeValue("Dark", "Light");
  useEffect(() => {
    // This doesn't close the menu when you're on the page you're clicking on,
    // but that's on you!
    onClose();
  }, [location.pathname, onClose]);
  return (
    <Flex display={["flex", null, null, "none"]}>
      <DarkMode>
        <Flex gap={2}>
          <IconButton
            icon={
              colorMode === "dark" ? <SummerFill24Icon /> : <NightFill24Icon />
            }
            aria-label={`Toggle ${oppositeColorMode} mode`}
            variant="ghost"
            size="md"
            onClick={toggleColorMode}
          />
          <IconButton
            icon={<HamburgerFill24Icon />}
            aria-label="Menu"
            variant="ghost"
            size="md"
            onClick={onOpen}
          />
        </Flex>
      </DarkMode>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent marginX={[2, "auto"]}>
          <ModalBody paddingY={2} paddingX={[1, 2, 3]}>
            <Stack spacing={2}>
              <SearchableContentMenu />
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};
