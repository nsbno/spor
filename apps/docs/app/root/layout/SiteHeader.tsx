import { Link, useLocation, useNavigate } from "@remix-run/react";
import {
  HamburgerFill24Icon,
  SearchFill24Icon,
} from "@vygruppen/spor-icon-react";
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
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  SearchInput,
  Stack,
  Text,
  VyLogo,
  useColorModeValue,
  useDisclosure,
} from "@vygruppen/spor-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useMenu } from "~/utils/useMenu";
import { SearchableContentMenu } from "../../routes/_base/content-menu/SearchableContentMenu";
import { NavigationLink, SiteNavigation } from "./SiteNavigation";
import { SiteSettings } from "./SiteSettings";
import { matchSorter } from "match-sorter";
import { GlobalSearchInput } from "~/routes/_base/content-menu/GlobalSearchInput";
import { SearchResults } from "~/routes/_base/content-menu/SearchResults";
import { ModalFooter, ModalHeader } from "@chakra-ui/react";

/** The site header shown at the top of every part of our site */
export const SiteHeader = () => {
  const backgroundColor = useColorModeValue(
    "surface.tertiary.light",
    "surface.tertiary.dark",
  );

  const menu = useMenu("side-menu");
  const [query, setQuery] = useState("");
  const isSearchActive = query.length > 0;
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const focusableRef = useRef<HTMLButtonElement>(null);
  const searchableMenuStructure = useMemo(
    () =>
      menu?.menuItems
        .filter((menuItem) => menuItem._type !== "divider" && menuItem.subItems)
        .flatMap((menuItem) => menuItem.subItems!) ?? [],
    [menu],
  );

  const hits = useMemo(
    () =>
      isSearchActive
        ? matchSorter(searchableMenuStructure, query, {
            keys: ["title", "tags"],
          })
        : [],
    [query, isSearchActive],
  );

  // We reset the query whenever we navigate
  useEffect(() => {
    setQuery("");
  }, [location.pathname]);

  // If there's only a single item left in the search results,
  // we navigate to it whenever the user presses enter
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query && hits.length === 1) {
      navigate(hits[0].url);
      setQuery("");
    }
  };

  // If you press the down arrow, you should focus the first item in the list
  const handleKeyUp = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      focusableRef.current?.focus();
    }
  };

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
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(!isModalOpen)}
          closeOnOverlayClick={true}
          closeOnEsc={true}
          size={"xl"}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalHeader>Search docs</ModalHeader>
            <ModalBody>
              <Box as="form" onSubmit={handleSubmit}>
                <GlobalSearchInput
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyUp={handleKeyUp}
                  onReset={() => setQuery("")}
                />
                {isSearchActive && (
                  <SearchResults
                    ref={focusableRef}
                    hits={hits}
                    query={query}
                    onResultClick={() => setIsModalOpen(false)}
                  />
                )}
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Flex>
  );
};

type SearchFieldProps = {
  onSearchClick: () => void;
};

const DesktopNavigation = ({ onSearchClick }: SearchFieldProps) => {
  const menu = useMenu("top-menu");
  const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.userAgent);
  return (
    <>
      <Flex display={["none", null, null, "flex"]} flex={[1, 1, 2, 2, 2]}>
        <DarkMode>
          <SearchInput
            onClick={onSearchClick}
            readOnly
            label={
              <Text size="sm" display="flex" alignItems="center" gap={1}>
                Search docs{" "}
                <Text size="sm" fontSize="12">
                  ({isMac ? "cmd" : "ctrl"} + K)
                </Text>
              </Text>
            }
          />
        </DarkMode>
      </Flex>
      <Flex
        display={["none", null, null, "flex"]}
        flex="1"
        justifyContent="flex-end"
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
