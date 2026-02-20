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
import { useLayoutEffect, useRef } from "react";
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
export const SiteHeader = ({
  onHeightChange,
}: {
  onHeightChange?: (height: number) => void;
}) => {
  const [searchDialogOpen, setSearchDialogOpen] = useState(false);

  const { isPreview } = useRouteLoaderData<typeof loader>("root") || {
    isPreview: false,
  };
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const headerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!headerRef.current) return;

    const measure = () => {
      const h = headerRef.current?.offsetHeight ?? 0;
      onHeightChange?.(show ? h : 0);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [onHeightChange, show]);

  useEffect(() => {
    const controlNavbar = () => {
      if (globalThis.window !== undefined) {
        if (window.scrollY > lastScrollY) {
          setShow(false);
        } else {
          setShow(true);
        }
        setLastScrollY(window.scrollY);
      }
    };
    if (globalThis.window !== undefined) {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  useSearchKeyboardShortcut(() => setSearchDialogOpen(true));

  const routeData = useRouteLoaderData<typeof loader>("root");
  const slug = useLocation().pathname.slice(1);
  const currentSection = slug?.split("/")[0] || "";
  const allSections = routeData?.initialSanityData?.siteSettings?.topMenu || [];

  // Filter out "identitet" section in production
  // remove to line 72 when "identitet" section is ready for production
  // and use allSections insted of sections below

  const isProduction = routeData?.env === "prod";

  const sections = allSections.filter((s) => {
    if (isProduction && s.slug.current.includes("identitet")) {
      return false;
    }
    return true;
  });
  const heightSpacer = ["72px", "90px", "120px", "138px"];

  return (
    <Box minHeight={heightSpacer}>
      <Box
        data-testid="header"
        ref={headerRef}
        style={{
          transition: "all .2s linear",
          position: "fixed",
          top: show ? "0" : "-160px",
          left: "0",
          right: "0",
          zIndex: "1100",
        }}
      >
        <Flex
          as="header"
          minHeight={["78px", "90px", "120px", "132px"]}
          position="relative"
          backgroundColor="bg"
          alignItems="center"
          gap="1"
          justifyContent="space-between"
          width="100%"
          paddingX={[3, 4, 7]}
          paddingY={[3, 4, 5, 4]}
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
              gap="4"
              width="auto"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Box as="li" marginLeft="auto">
                <ColorModeSwitcher />
              </Box>
              {sections.map((section) => {
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
      </Box>
    </Box>
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
