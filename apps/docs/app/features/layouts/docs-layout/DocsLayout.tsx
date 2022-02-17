import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Divider,
  Flex,
  FormControl,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  SearchOutline24Icon,
} from "@vygruppen/spor-react";
import React from "react";
import { Link } from "remix";

type DocsLayoutProps = { children: React.ReactNode };
export const DocsLayout = ({ children }: DocsLayoutProps) => {
  return (
    <Flex flex="1">
      <LeftNavigation />
      <Box
        as="main"
        flex="1"
        mt={6}
        mx={[3, 6, 10]}
        mb={["60px", "120px", "180px"]}
        maxWidth="924px"
      >
        {children}
      </Box>
    </Flex>
  );
};

const LeftNavigation = () => {
  return (
    <Box
      display={["none", "block"]}
      as="nav"
      aria-label="content"
      flex="1"
      maxWidth="340px"
      px={1.5}
      py={2}
      borderRight="9px solid"
      borderRightColor="alias.lightGrey"
    >
      <FormControl>
        <InputGroup>
          <InputLeftElement width="48px">
            <IconButton
              type="submit"
              aria-label="Søk"
              variant="ghost"
              icon={<SearchOutline24Icon />}
            />
          </InputLeftElement>
          <Input label="Search" pl="48px" />
        </InputGroup>
      </FormControl>
      <Box mt={6}>
        <Accordion variant="list" size="sm" allowToggle>
          {menuStructure.map((item) => {
            if (isDivider(item)) {
              return <Divider my={2} height="1px" />;
            }
            return (
              <AccordionItem key={item.title}>
                <AccordionButton fontWeight="bold">
                  {item.title}
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pt={1} pb={0}>
                  {item.items.map((subItem) => (
                    <Flex
                      as={Link}
                      to={subItem.href}
                      height={6}
                      px={2}
                      fontSize="mobile.xs"
                      borderRadius="sm"
                      alignItems="center"
                      _hover={{
                        backgroundColor: "alias.mint",
                      }}
                      _focus={{
                        backgroundColor: "alias.mint",
                        outlineColor: "alias.greenHaze",
                      }}
                      _active={{
                        backgroundColor: "alias.seaMist",
                      }}
                    >
                      {subItem.title}
                    </Flex>
                  ))}
                </AccordionPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </Box>
    </Box>
  );
};

const isDivider = (item: MenuStructure): item is { divider: true } => {
  return "divider" in item;
};

type MenuStructure =
  | {
      title: string;
      items: { title: string; href: string }[];
    }
  | { divider: true };

const menuStructure: MenuStructure[] = [
  {
    title: "Kom i gang",
    items: [
      { title: "Hva er Spor?", href: "/kom-i-gang/hva-er-spor" },
      { title: "Installasjon", href: "/kom-i-gang/installasjon" },
      { title: "Greit å kunne", href: "/kom-i-gang/greit-a-kunne" },
    ],
  },
  {
    title: "Ressurser",
    items: [
      { title: "Profil", href: "/ressurser/profil" },
      { title: "Ikoner", href: "/ressurser/ikoner" },
      { title: "Design tokens", href: "/ressurser/design-tokens" },
      { title: "FAQ", href: "/ressurser/faq" },
      { title: "Bidra", href: "/ressurser/bidra" },
    ],
  },
  { divider: true },
  {
    title: "Skjema",
    items: [
      { title: "Skjemafelt", href: "/komponenter/form-control" },
      { title: "Tekstfelt", href: "/komponenter/input" },
      { title: "Passordfelt", href: "/komponenter/password-input" },
      { title: "Tekstområder", href: "/komponenter/textarea" },
      { title: "Nedtrekkslister", href: "/komponenter/select" },
      { title: "Radioknapper", href: "/komponenter/radio" },
      { title: "Sjekkbokser", href: "/komponenter/checkbox" },
      { title: "Switches", href: "/komponenter/switch" },
      { title: "Valgknapper", href: "/komponenter/choice-chips" },
    ],
  },
  {
    title: "Layout og flater",
    items: [
      { title: "Kort", href: "/komponenter/kort" },
      { title: "Delestreker", href: "/komponenter/divider" },
      { title: "Grids", href: "/komponenter/grid" },
      { title: "Containere", href: "/komponenter/container" },
      { title: "Bokser", href: "/komponenter/box" },
      { title: "Flex", href: "/komponenter/flex" },
      { title: "Sentrering", href: "/komponenter/center" },
      { title: "Stacks", href: "/komponenter/stack" },
      { title: "Wraps", href: "/komponenter/wrap" },
    ],
  },
  {
    title: "Knapper og lenker",
    items: [
      { title: "Knapper", href: "/komponenter/knapper" },
      { title: "Chips", href: "/komponenter/chips" },
      { title: "Floating action button", href: "/komponenter/fab" },
      { title: "Lenker", href: "/komponenter/link" },
    ],
  },
  {
    title: "Datavisning",
    items: [
      { title: "Tabeller", href: "/komponenter/table" },
      { title: "Lister", href: "/komponenter/list" },
      { title: "Badges", href: "/komponenter/badge" },
    ],
  },
  {
    title: "Feedback og lasting",
    items: [
      { title: "Meldinger", href: "/komponenter/message" },
      { title: "Spinners", href: "/komponenter/spinner" },
      { title: "Skjelett", href: "/komponenter/skeleton" },
    ],
  },
  {
    title: "Typografi",
    items: [
      { title: "Tekst", href: "/komponenter/text" },
      { title: "Overskrifter", href: "/komponenter/heading" },
      { title: "Kodeblokker", href: "/komponenter/code" },
    ],
  },
  {
    title: "Modaler og dialoger",
    items: [
      { title: "Modaler", href: "/komponenter/modal" },
      { title: "Dialoger", href: "/komponenter/dialog" },
      { title: "Skuffer", href: "/komponenter/drawer" },
    ],
  },
  {
    title: "Vis og skjul",
    items: [
      { title: "Accordions", href: "/komponenter/accordion" },
      { title: "Tabs", href: "/komponenter/tab" },
    ],
  },
  {
    title: "Navigasjon",
    items: [
      { title: "Toppnavigasjon", href: "/komponenter/top-navigation" },
      { title: "Brødsmuler", href: "/komponenter/breadcrumb" },
    ],
  },
  {
    title: "Media og logoer",
    items: [
      { title: "Bilder", href: "/komponenter/image" },
      { title: "Logoer", href: "/komponenter/logo" },
    ],
  },
  {
    title: "Hooks og utils",
    items: [
      { title: "useClipboard", href: "/komponenter/use-clipboard" },
      { title: "useTheme", href: "/komponenter/use-theme" },
      { title: "useToken", href: "/komponenter/use-token" },
    ],
  },
];
