import {
  HamburgerFill24Icon,
  SearchFill24Icon,
  SearchOutline24Icon,
} from "@vygruppen/spor-icon-react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  Flex,
  IconButton,
  Stack,
  useDisclosure,
  VyLogo,
} from "@vygruppen/spor-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useRouteLoaderData } from "react-router";

import { loader } from "~/root";
import { getIcon } from "~/utils/getIcon";

import { SearchableContentMenu } from "../../routes/_base/content-menu/SearchableContentMenu";
import { ChangeVersion } from "./ChangeVersion";
import { SearchDocs } from "./SearchDocs";
import { SiteSettings } from "./SiteSettings";

const useSearchKeyboardShortcut = (onTriggered: () => void) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onTriggered();
      }
    };

    globalThis.addEventListener("keydown", handleKeyDown);

    return () => {
      globalThis.removeEventListener("keydown", handleKeyDown);
    };
  }, [onTriggered]);
};

/** The site header shown at the top of every part of our site */
export const SiteHeader = () => {
  const [searchDialogOpen, setSearchDialogOpen] = useState(false);
  const location = useLocation();

  useSearchKeyboardShortcut(() => setSearchDialogOpen(true));

  const routeData = useRouteLoaderData<typeof loader>("root");
  const slug = useLocation().pathname.slice(1);
  const currentSection = slug?.split("/")[0] || "";
  const sections = routeData?.initialSanityData?.siteSettings?.topMenu || [];

  return (
    <Flex
      as="header"
      justifyContent="space-between"
      alignItems="center"
      paddingX={[3, 4, 7]}
      paddingY={[3, 4, 5, 4]}
      backgroundColor={"surface.default.white"}
      css={{
        position: "sticky",
        top: "0",
        zIndex: "sticky",
      }}
      gap="3"
      width={"100vw"}
      overflow={"hidden"}
    >
      <Flex
        alignItems="center"
        gap="1"
        justifyContent="space-between"
        width="100%"
        position="relative"
      >
        <Link to="/" aria-label="Go to the front page">
          <VyLogo
            className="light"
            width="auto"
            height={["30px", "36px", null, "48px"]}
            aria-label="Vy"
          />
        </Link>

        <Box as="nav" flexGrow={1} justifyContent="flex-end">
          <Flex as="ul" gap="2" width={"auto"} justifySelf={"flex-end"}>
            {sections.map((section) => {
              return (
                <Box as="li" key={section.title}>
                  <Link to={`/${section.slug.current}`}>
                    <Button
                      variant={
                        (section.default && slug === "") ||
                        `/${section.slug.current}` === location.pathname
                          ? "secondary"
                          : "ghost"
                      }
                      borderRadius="lg"
                      display={{ base: "none", lg: "flex" }}
                      border="none"
                      leftIcon={getIcon({ iconName: section.icon })}
                    >
                      {section.title}
                    </Button>
                  </Link>
                </Box>
              );
            })}
          </Flex>
        </Box>

        <Flex gap="1">
          <SearchDocsButton onSearchClick={() => setSearchDialogOpen(true)} />

          {currentSection && currentSection === "spor" && <ChangeVersion />}

          {currentSection && currentSection === "spor" && <SiteSettings />}

          <MobileMenu />

          <SearchDocs
            onOpenChange={setSearchDialogOpen}
            open={searchDialogOpen}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

const MobileMenu = () => {
  const { open, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  useEffect(() => {
    // This doesn't close the menu when you're on the page you're clicking on,
    // but that's on you!
    onClose();
  }, [location.pathname, onClose]);

  return (
    <>
      <IconButton
        icon={<HamburgerFill24Icon />}
        aria-label="Menu"
        variant="ghost"
        size="md"
        onClick={onOpen}
        display={{ base: "flex", lg: "none" }}
      />

      <Drawer placement="end" open={open} onExitComplete={onClose}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Explore Spor</DrawerTitle>
            <DrawerCloseTrigger onClick={onClose} />
          </DrawerHeader>
          <DrawerBody paddingY={2} paddingX={[1, 2, 3]}>
            <Stack padding={2}>
              <SearchableContentMenu />
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const SearchDocsButton = ({ onSearchClick }: { onSearchClick: () => void }) => {
  //const isMac = useRouteLoaderData<typeof loader>("root")?.isMac;

  return (
    <>
      <IconButton
        icon={<SearchFill24Icon />}
        variant="ghost"
        size="md"
        aria-label="Search documentation"
        onClick={onSearchClick}
        display={{ base: "flex", lg: "none" }}
      />

      <Button
        variant="ghost"
        borderRadius="lg"
        leftIcon={<SearchOutline24Icon />}
        onClick={onSearchClick}
        display={{ base: "none", lg: "flex" }}
        border="none"
      >
        Søk
      </Button>
    </>
  );
};
