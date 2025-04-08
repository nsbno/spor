import { Link, useLocation, useRouteLoaderData } from "@remix-run/react";
import {
  HamburgerFill24Icon,
  SearchFill24Icon,
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
  SearchInput,
  Stack,
  VyLogo,
  useDisclosure,
} from "@vygruppen/spor-react";
import { useEffect, useState } from "react";
import { loader } from "~/root";
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
      gap={1}
      width={"100vw"}
      overflow={"hidden"}
    >
      <Box marginRight={[0, 0, 5]} flex={[0, 0, 0, 0, 1]}>
        <Link to="/" aria-label="Go to the front page">
          <VyLogo
            className="dark"
            width="auto"
            height={["30px", "36px", null, "48px"]}
            aria-label="Vy"
          />
        </Link>
      </Box>
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
  const isMac = useRouteLoaderData<typeof loader>("root")?.isMac;

  return (
    <Flex alignItems={"center"}>
      <Flex
        display={["none", null, null, "flex"]}
        maxWidth={[null, null, null, "breakpoints.lg", "breakpoints.xl"]}
        marginX="auto"
        paddingX={[3, null, 7, 5, 4]}
        className="dark"
      >
        <SearchInput
          role="button"
          onClick={onSearchClick}
          onKeyDown={(e: React.KeyboardEvent) => {
            if (e.key === "Enter" || e.key === " ") {
              onSearchClick();
            }
          }}
          width={[null, null, "15rem", "22rem"]}
          readOnly
          label="Search components"
          color="white"
        />
      </Flex>
      <Flex display={["flex"]} className="dark">
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
          >
            Spor V2 - ver.12.xx.xx
          </Button>
          <Button
            variant="tertiary"
            size="md"
            as="a"
            href="https://spor-v1.vy.no"
          >
            Spor V1 - ver.11.xx.xx
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
