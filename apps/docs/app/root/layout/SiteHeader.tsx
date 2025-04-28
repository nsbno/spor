import { Link, useLocation, useRouteLoaderData } from "@remix-run/react";
import {
  HamburgerFill24Icon,
  SearchFill24Icon,
} from "@vygruppen/spor-icon-react";
import {
  Box,
  Button,
  CardSelect,
  DarkMode,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  SearchInput,
  Stack,
  Text,
  VyLogo,
  useColorModeValue,
  useDisclosure,
} from "@vygruppen/spor-react";
import { useEffect, useState } from "react";
import { loader } from "~/root";
import { SearchableContentMenu } from "../../routes/_base/content-menu/SearchableContentMenu";
import { SiteSearchModal } from "./SiteSearchModal";
import { SiteSettings } from "./SiteSettings";

/** The site header shown at the top of every part of our site */
export const SiteHeader = () => {
  const backgroundColor = useColorModeValue(
    "surface.tertiary.light",
    "surface.tertiary.dark",
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsModalOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
      gap={1}
    >
      <Box as={Link} marginRight={[0, 0, 5]} flex={[0, 0, 0, 0, 1]} to="/">
        <VyLogo
          colorScheme="dark"
          width="auto"
          height={["30px", "36px", null, "48px"]}
          aria-label="Vy"
        />
      </Box>

      <DesktopNavigation onSearchClick={() => setIsModalOpen(!isModalOpen)} />
      <MobileNavigation onSearchClick={() => setIsModalOpen(!isModalOpen)} />
      {isModalOpen && (
        <SiteSearchModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </Flex>
  );
};

type SearchFieldProps = {
  onSearchClick: () => void;
};

const DesktopNavigation = ({ onSearchClick }: SearchFieldProps) => {
  const isMac = useRouteLoaderData<typeof loader>("root")?.isMac;

  return (
    <>
      <Flex
        display={["none", null, null, "flex"]}
        maxWidth={[null, null, null, "container.lg", "container.xl"]}
        marginX="auto"
        paddingX={[3, null, 7, 5, 9]}
      >
        <DarkMode>
          <SearchInput
            role="button"
            onClick={onSearchClick}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                onSearchClick();
              }
            }}
            width={[null, null, null, "37.5rem"]}
            readOnly
            label={
              <Flex alignItems="center" gap={1}>
                Search docs{" "}
                <Text size="sm" fontSize="12" paddingTop={0.5}>
                  ({isMac ? "cmd" : "ctrl"} + K)
                </Text>
              </Flex>
            }
          />
        </DarkMode>
      </Flex>
      <Flex
        display={["none", null, null, "flex"]}
        flex={[0, 0, 0, 0, 1]}
        justifyContent="flex-end"
        alignItems="center"
      >
        <ChangeVersion />
        <SiteSettings showLabel={true} />
      </Flex>
    </>
  );
};

const MobileNavigation = ({ onSearchClick }: SearchFieldProps) => {
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
        <DarkMode>
          <IconButton
            icon={<SearchFill24Icon />}
            variant="ghost"
            size="md"
            aria-label="Search documentation"
            onClick={onSearchClick}
          />
        </DarkMode>
        <ChangeVersion />
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

const ChangeVersion = () => {
  const domain = useRouteLoaderData<typeof loader>("root")?.domain;
  const isOldVersion = domain?.includes("spor-v1");

  return (
    <DarkMode>
      <CardSelect size="md" label="v1" variant="base">
        <Button
          variant="ghost"
          size="md"
          marginBottom={2}
          as="a"
          href="https://spor.vy.no"
          disabled={!isOldVersion}
        >
          Spor V2 - ver.12.xx
        </Button>
        <Button
          variant="ghost"
          size="md"
          as="a"
          href="https://spor-v1.test.vylabs.io/"
          disabled={isOldVersion}
        >
          Spor V1 - ver.11.xx
        </Button>
      </CardSelect>
    </DarkMode>
  );
};
