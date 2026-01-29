import {
  HamburgerFill24Icon,
  SearchFill18Icon,
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
  Flex,
  IconButton,
  useDisclosure,
  VyLogo,
} from "@vygruppen/spor-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useRouteLoaderData } from "react-router";

import { ColorModeSwitcher } from "~/features/color-mode-switcher";
import { loader } from "~/root";
import { getIcon } from "~/utils/getIcon";

import { SearchableContentMenu } from "../../routes/_base/content-menu/SearchableContentMenu";
import { SearchDocs } from "./SearchDocs";

const useSearchKeyboardShortcut = (onTriggered: () => void) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
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

  const { isPreview } = useRouteLoaderData<typeof loader>("root") || {
    isPreview: false,
  };

  useSearchKeyboardShortcut(() => setSearchDialogOpen(true));

  const routeData = useRouteLoaderData<typeof loader>("root");
  const slug = useLocation().pathname.slice(1);
  const currentSection = slug?.split("/")[0] || "";
  const allSections = routeData?.initialSanityData?.siteSettings?.topMenu || [];

  return (
    <Flex
      as="header"
      justifyContent="space-between"
      alignItems="center"
      paddingX={[3, 4, 7]}
      paddingY={[3, 4, 5, 4]}
      backgroundColor="bg"
      gap="3"
      width="100vw"
      overflow="hidden"
    >
      <Flex
        alignItems="center"
        gap="1"
        justifyContent="space-between"
        width="100%"
        position="relative"
      >
        <Link
          to={isPreview ? "/?sanity-preview-perspective=drafts" : "/"}
          aria-label="Go to the front page"
        >
          <VyLogo
            className="light"
            width="auto"
            height={["30px", "36px", null, "48px"]}
            aria-label="Vy"
          />
        </Link>

        <Box as="nav" flexGrow={1} justifyContent="flex-end">
          <Flex
            as="ul"
            width="full"
            gap="1"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Box as="li" marginLeft="auto">
              <ColorModeSwitcher />
            </Box>
            {allSections.map((section) => {
              return (
                <Box as="li" key={section.title}>
                  <Button
                    asChild
                    variant={
                      (section.default && slug === "") ||
                      section.slug.current === currentSection
                        ? "secondary"
                        : "ghost"
                    }
                    size="md"
                    borderRadius="lg"
                    display={{ base: "none", lg: "flex" }}
                    border="none"
                    leftIcon={getIcon({
                      iconName: section.icon,
                      size: 24,
                      style:
                        section.slug.current === currentSection
                          ? "fill"
                          : "outline",
                    })}
                  >
                    <Link
                      to={`/${section.slug.current}${isPreview ? "?sanity-preview-perspective=drafts" : ""}`}
                    >
                      {section.title}
                    </Link>
                  </Button>
                </Box>
              );
            })}
          </Flex>
        </Box>

        <Flex gap="1">
          <SearchDocsButton onSearchClick={() => setSearchDialogOpen(true)} />
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
            <DrawerCloseTrigger placeContent="end" onClick={onClose} />
          </DrawerHeader>
          <DrawerBody paddingY={2}>
            <SearchableContentMenu />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const SearchDocsButton = ({ onSearchClick }: { onSearchClick: () => void }) => {
  const isMac = useRouteLoaderData<typeof loader>("root")?.isMac;

  return (
    <>
      <IconButton
        icon={<SearchFill18Icon />}
        variant="ghost"
        size="md"
        aria-label={`Search documentation, ${isMac ? "cmd" : "ctrl"} + k to open modal`}
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
