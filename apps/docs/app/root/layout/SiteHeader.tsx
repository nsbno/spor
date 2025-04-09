import { Link, useLocation, useRouteLoaderData } from "@remix-run/react";
import {
  HamburgerFill24Icon,
  SearchFill24Icon,
  SearchOutline24Icon,
} from "@vygruppen/spor-icon-react";
import {
  Box,
  Button,
  CardSelect,
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
      <Box marginRight={[0, 0, 5]} flex={[0]}>
        <Link to="/" aria-label="Go to the front page">
          <VyLogo className="dark" width="auto" height="56px" aria-label="Vy" />
        </Link>
      </Box>
      <DesktopNavigation
        onSearchClick={() => setSearchDialogOpen(!searchDialogOpen)}
      />
      <MobileNavigation
        onSearchClick={() => setSearchDialogOpen(!searchDialogOpen)}
      />

      <SearchDocs onOpenChange={setSearchDialogOpen} open={searchDialogOpen} />
    </Flex>
  );
};

type SearchFieldProps = {
  onSearchClick: () => void;
};

const DesktopNavigation = ({ onSearchClick }: SearchFieldProps) => {
  const isMac = useRouteLoaderData<typeof loader>("root")?.isMac;
  const domain = useRouteLoaderData<typeof loader>("root")?.domain;
  const isOldVersion = domain?.includes("spor-v1");

  return (
    <Flex alignItems={"center"} flex="4">
      <Flex
        display={["none", null, null, "flex"]}
        maxWidth={[null, null, null, "breakpoints.lg", "breakpoints.xl"]}
        marginX="auto"
        paddingX={[3, null, 7, 5, 9]}
        className="dark"
        justifyContent={"center"}
        flex="8"
      >
        <Button
          variant="tertiary"
          borderRadius="xs"
          leftIcon={<SearchOutline24Icon />}
          className="dark"
          onClick={onSearchClick}
          padding="2"
        >
          <Box
            xl={{ minWidth: "35rem" }}
            lg={{ minWidth: "25rem" }}
            display="flex"
            gap="2"
            justifyContent="space-between"
          >
            <Text>Search docs...</Text>
            <Text variant="xs">({isMac ? "cmd" : "ctrl"} + k)</Text>
          </Box>
        </Button>
      </Flex>
      <Flex
        display={["flex"]}
        className="dark"
        flex="1"
        justifyContent={"flex-end"}
      >
        <CardSelect
          label="Version"
          variant="core"
          size="md"
          width={["100%", "100%", "100%", "auto"]}
        >
          <Button
            variant="tertiary"
            size="md"
            marginBottom={2}
            as="a"
            href="https://spor.vy.no"
            disabled={!isOldVersion}
          >
            Spor V2 - ver.12.xx
          </Button>
          <Button
            variant="tertiary"
            size="md"
            as="a"
            href="https://spor-v1.test.vylabs.io/"
            disabled={isOldVersion}
          >
            Spor V1 - ver.11.xx
          </Button>
        </CardSelect>
      </Flex>
      <Flex
        display={["none", null, null, "flex"]}
        flex={[0, 0, 0, 0, 1]}
        justifyContent="flex-end"
        alignItems="center"
        className="dark"
        gap={2}
      >
        <SiteSettings showLabel={true} />
      </Flex>
    </Flex>
  );
};

const MobileNavigation = ({ onSearchClick }: SearchFieldProps) => {
  const { open, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  useEffect(() => {
    // This doesn't close the menu when you're on the page you're clicking on,
    // but that's on you!
    onClose();
  }, [location.pathname, onClose]);

  return (
    <Flex display={["flex", null, null, "none"]}>
      <Flex gap={2}>
        <IconButton
          icon={<SearchFill24Icon />}
          variant="ghost"
          size="md"
          aria-label="Search documentation"
          onClick={onSearchClick}
          className="dark"
        />

        <SiteSettings showLabel={false} />

        <IconButton
          icon={<HamburgerFill24Icon />}
          aria-label="Menu"
          variant="ghost"
          size="md"
          onClick={onOpen}
          className="dark"
        />
      </Flex>
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
    </Flex>
  );
};
