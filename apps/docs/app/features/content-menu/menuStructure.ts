type MenuDivider = { divider: true };
type MenuStructureItem = { title: string; href: string };
type MenuStructure =
  | {
      title: string;
      items: MenuStructureItem[];
    }
  | MenuDivider;

/**
 * This is the man menu structure with all its data.
 */
export const menuStructure: MenuStructure[] = [
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

/**
 * A version of the menu structure that's optimized for searching
 */
export const searchableMenuStructure = menuStructure.flatMap((category) =>
  isDivider(category)
    ? []
    : category.items.map((item) => ({
        ...item,
        category: category.title,
      }))
);

/**
 * Whether or not a MenuStructure item is a divider;
 */
export function isDivider(item: MenuStructure): item is MenuDivider {
  return "divider" in item;
}
