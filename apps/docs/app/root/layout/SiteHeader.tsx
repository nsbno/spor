import { Link, useLocation } from "@remix-run/react";
import {
  HamburgerFill24Icon,
  SearchFill24Icon,
} from "@vygruppen/spor-icon-react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerBackdrop,
  Flex,
  IconButton,
  SearchInput,
  Stack,
  Text,
  VyLogo,
  useDisclosure,
  Input,
  Switch,
  useColorMode,
  Button,
  ColorModeButton,
} from "@vygruppen/spor-react";
import { useEffect, useState } from "react";
import { SearchableContentMenu } from "../../routes/_base/content-menu/SearchableContentMenu";
import { SiteSearchModal } from "./SiteSearchModal";
import { SiteSettings } from "./SiteSettings";

/** The site header shown at the top of every part of our site */
export const SiteHeader = () => {
  const [searchDialogOpen, setSearchDialogOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchDialogOpen(true);
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
      backgroundColor={"surface.tertiary"}
      css={{
        position: "sticky",
        top: "0",
        zIndex: "sticky",
      }}
      gap={1}
    >
      <Box marginRight={[0, 0, 5]} flex={[0, 0, 0, 0, 1]}>
        <Link to="/" aria-label="Go to the front page">
          <VyLogo
            width="auto"
            height={["30px", "36px", null, "48px"]}
            aria-label="Vy"
            className="dark"
          />
        </Link>
      </Box>
      <ColorModeButton /> {/* temp solution */}
      <DesktopNavigation
        onSearchClick={() => setSearchDialogOpen(!searchDialogOpen)}
      />
      <MobileNavigation
        onSearchClick={() => setSearchDialogOpen(!searchDialogOpen)}
      />
      {searchDialogOpen && (
        <SiteSearchModal
          searchDialogOpen={searchDialogOpen}
          setSearchDialogOpen={setSearchDialogOpen}
        />
      )}
    </Flex>
  );
};

type SearchFieldProps = {
  onSearchClick: () => void;
};

const DesktopNavigation = ({ onSearchClick }: SearchFieldProps) => {
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      setIsMac(/Mac|iPod|iPhone|iPad/.test(navigator.userAgent));
    }
  }, []);
  return (
    <>
      <Flex
        display={["none", null, null, "flex"]}
        maxWidth={[null, null, null, "breakpoints.lg", "breakpoints.xl"]}
        marginX="auto"
        paddingX={[3, null, 7, 5, 9]}
      >
        {/* <SearchInput
          onClick={onSearchClick}
          width={[null, null, null, "37.5rem"]}
          readOnly
          className="dark"
          label={
            <Flex alignItems="center" gap={1}>
              Search docs{" "}
              <Text variant="sm" fontSize="12" paddingTop={0.5}>
                ({isMac ? "cmd" : "ctrl"} + K)
              </Text>
            </Flex>
          }
        /> */}
        <Input label="Label" />
      </Flex>
      <Flex
        display={["none", null, null, "flex"]}
        flex={[0, 0, 0, 0, 1]}
        justifyContent="flex-end"
        alignItems="center"
      >
        <SiteSettings showLabel={true} />
      </Flex>
    </>
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
        <DrawerBackdrop />
        <DrawerContent>
          <DrawerCloseTrigger />
          <DrawerHeader>Explore Spor</DrawerHeader>
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
