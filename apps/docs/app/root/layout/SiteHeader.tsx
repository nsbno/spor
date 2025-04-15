import { Link, useLocation, useRouteLoaderData } from "@remix-run/react";
import {
  HamburgerFill24Icon,
  SearchFill24Icon,
  SearchOutline24Icon,
} from "@vygruppen/spor-icon-react";
import {
  Button,
  CardSelect,
  CardSelectContent,
  CardSelectTrigger,
  Drawer,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  Flex,
  IconButton,
  Stack,
  Text,
  VyLogo,
  useDisclosure,
} from "@vygruppen/spor-react";
import { useEffect, useState } from "react";
import { loader } from "~/root";
import { SearchableContentMenu } from "../../routes/_base/content-menu/SearchableContentMenu";
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

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
};

/** The site header shown at the top of every part of our site */
export const SiteHeader = () => {
  const [searchDialogOpen, setSearchDialogOpen] = useState(false);

  useSearchKeyboardShortcut(() => setSearchDialogOpen(true));

  return (
    <Flex
      as="header"
      justifyContent="space-between"
      alignItems="center"
      paddingX={[3, 4, 7]}
      paddingY={[3, 4, 5, 4]}
      backgroundColor={"surface.tertiary"}
      className="light"
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
          <VyLogo className="dark" width="auto" height="56px" aria-label="Vy" />
        </Link>

        <Flex gap="1">
          <SearchDocsButton onSearchClick={() => setSearchDialogOpen(true)} />

          <ChangeVersion />

          <SiteSettings />

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

const ChangeVersion = () => {
  const domain = useRouteLoaderData<typeof loader>("root")?.domain;
  const isOldVersion = domain?.includes("spor-v1");

  return (
    <CardSelect>
      <CardSelectTrigger variant="core" className="dark">
        <Text display={{ base: "none", xl: "block" }}>Spor</Text>
        v2
      </CardSelectTrigger>
      <CardSelectContent>
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
      </CardSelectContent>
    </CardSelect>
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
        className="dark"
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
  const isMac = useRouteLoaderData<typeof loader>("root")?.isMac;

  return (
    <>
      <IconButton
        icon={<SearchFill24Icon />}
        variant="ghost"
        size="md"
        aria-label="Search documentation"
        onClick={onSearchClick}
        className="dark"
        display={{ base: "flex", lg: "none" }}
      />

      <Button
        variant="tertiary"
        borderRadius="xs"
        leftIcon={<SearchOutline24Icon />}
        rightIcon={<Text variant="xs">({isMac ? "cmd" : "ctrl"} + k)</Text>}
        className="dark"
        onClick={onSearchClick}
        padding="2"
        xl={{ minWidth: "38rem" }}
        lg={{ minWidth: "24rem" }}
        position="absolute"
        left="50%"
        transform="translateX(-50%)"
        display={{ base: "none", lg: "flex" }}
      >
        Search docs...
      </Button>
    </>
  );
};
