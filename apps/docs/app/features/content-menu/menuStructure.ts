type MenuDivider = { divider: true };
type MenuStructureItem = {
  title: string;
  href: string;
  keywords?: string[];
  isAvailable?: boolean;
};
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
      {
        title: "Introduksjon",
        href: "/kom-i-gang/introduksjon",
        keywords: ["intro"],
        isAvailable: true,
      },
      {
        title: "Hva er Spor?",
        href: "/kom-i-gang/hva-er-spor",
        keywords: ["om", "about", "hæ"],
      },
      {
        title: "Installasjon",
        href: "/kom-i-gang/installasjon",
        keywords: ["setup", "oppstart", "npm install"],
      },
      {
        title: "Greit å kunne",
        href: "/kom-i-gang/greit-a-kunne",
        keywords: ["prerequisites", "forkunnskap"],
      },
    ],
  },
  {
    title: "Ressurser",
    items: [
      {
        title: "Designprosessen",
        href: "/ressurser/designprosessen",
        keywords: ["process", "prosess", "design"],
        isAvailable: true,
      },
      { title: "Profil", href: "/ressurser/profil", keywords: ["visuell"] },
      {
        title: "Ikoner",
        href: "/ressurser/ikoner",
        keywords: ["icon"],
        isAvailable: true,
      },
      {
        title: "Design tokens",
        href: "/ressurser/design-tokens",
        keywords: [
          "tokens",
          "atom",
          "farger",
          "skygger",
          "radius",
          "radii",
          "rounding",
          "outlines",
          "breakpoints",
          "animasjon",
          "z-index",
          "font",
          "størrelser",
          "spacing",
          "padding",
          "margin",
        ],
        isAvailable: true,
      },

      { title: "FAQ", href: "/ressurser/faq" },
      { title: "Bidra", href: "/ressurser/bidra" },
    ],
  },
  { divider: true },
  {
    title: "Skjema",
    items: [
      {
        title: "Skjemaelementer",
        href: "/komponenter/skjemaelementer",
        keywords: ["input"],
        isAvailable: true,
      },
      {
        title: "Inputfelt",
        href: "/komponenter/inputfelt",
        keywords: ["input"],
        isAvailable: true,
      },
      {
        title: "Passordfelt",
        href: "/komponenter/passordfelt",
        keywords: ["passord", "input"],
        isAvailable: true,
      },
      {
        title: "Tekstområder",
        href: "/komponenter/tekstomrade",
        keywords: ["textarea"],
        isAvailable: true,
      },
      {
        title: "Nedtrekkslister",
        href: "/komponenter/nedtrekkslister",
        keywords: ["select", "dropdown"],
        isAvailable: true,
      },
      {
        title: "Radioknapper",
        href: "/komponenter/radioknapper",
        keywords: ["flere valg"],
        isAvailable: true,
      },
      {
        title: "Sjekkbokser",
        href: "/komponenter/sjekkbokser",
        keywords: ["checkbox"],
        isAvailable: true,
      },
      {
        title: "Brytere",
        href: "/komponenter/brytere",
        keywords: ["switch", "boolean", "bryter", "toggle"],
        isAvailable: true,
      },
      {
        title: "Valgknapper",
        href: "/komponenter/valgknapper",
        keywords: ["choice", "chips"],
        isAvailable: true,
      },
    ],
  },
  {
    title: "Layout og flater",
    items: [
      { title: "Kort", href: "/komponenter/kort", keywords: ["cards"] },
      {
        title: "Delestreker",
        href: "/komponenter/divider",
        keywords: ["divider"],
      },
      { title: "Grids", href: "/komponenter/grid" },
      {
        title: "Containere",
        href: "/komponenter/container",
        keywords: ["innhold"],
      },
      { title: "Bokser", href: "/komponenter/box", keywords: ["box"] },
      { title: "Flex", href: "/komponenter/flex", keywords: ["flexbox"] },
      {
        title: "Sentrering",
        href: "/komponenter/center",
        keywords: ["center"],
      },
      { title: "Stacks", href: "/komponenter/stack" },
      { title: "Wraps", href: "/komponenter/wrap" },
    ],
  },
  {
    title: "Knapper og lenker",
    items: [
      {
        title: "Knapper",
        href: "/komponenter/knapper",
        keywords: [
          "buttons",
          "control",
          "kontroll",
          "primary",
          "primær",
          "secondary",
          "sekundær",
          "tertiary",
          "tertiær",
          "additional",
          "tillegg",
        ],
        isAvailable: true,
      },
      {
        title: "Chips",
        href: "/komponenter/chips",
        keywords: ["knapper", "buttons"],
      },
      {
        title: "Floating action buttons",
        href: "/komponenter/floating-action-buttons",
        keywords: ["fab", "flytende", "knapper", "buttons"],
        isAvailable: true,
      },
      {
        title: "Lenker",
        href: "/komponenter/lenker",
        keywords: ["link", "a", "lenke", "knapper", "buttons"],
        isAvailable: true,
      },
    ],
  },
  {
    title: "Datavisning",
    items: [
      {
        title: "Tabeller",
        href: "/komponenter/table",
        keywords: ["tables", "tr", "th", "td", "thead", "tbody", "tfoot"],
      },
      {
        title: "Lister",
        href: "/komponenter/list",
        keywords: ["ul", "ol", "li"],
      },
      { title: "Badges", href: "/komponenter/badge", keywords: ["tag"] },
    ],
  },
  {
    title: "Feedback og lasting",
    items: [
      {
        title: "Meldinger",
        href: "/komponenter/message",
        keywords: ["message"],
      },
      {
        title: "Spinners",
        href: "/komponenter/spinner",
        keywords: ["last", "vent", "spinner"],
      },
      {
        title: "Skjelett",
        href: "/komponenter/skeleton",
        keywords: ["skeleton", "skjelett", "spinner"],
      },
    ],
  },
  {
    title: "Typografi",
    items: [
      {
        title: "Tekst",
        href: "/komponenter/text",
        keywords: ["text", "paragraph", "avsnitt"],
      },
      {
        title: "Overskrifter",
        href: "/komponenter/heading",
        keywords: ["heading", "h1", "h2", "h3", "h4", "h5", "h6"],
      },
      { title: "Kodeblokker", href: "/komponenter/code" },
    ],
  },
  {
    title: "Modaler og dialoger",
    items: [
      { title: "Modaler", href: "/komponenter/modal" },
      { title: "Dialoger", href: "/komponenter/dialog", keywords: ["alert"] },
      { title: "Skuffer", href: "/komponenter/drawer", keywords: ["drawers"] },
    ],
  },
  {
    title: "Vis og skjul",
    items: [
      {
        title: "Accordions",
        href: "/komponenter/accordion",
        keywords: ["expandable"],
        isAvailable: true,
      },
      { title: "Tabs", href: "/komponenter/tab", keywords: ["fliker"] },
      {
        title: "Popovers",
        href: "/komponenter/popover",
        keywords: ["tooltip"],
        isAvailable: true,
      },
    ],
  },
  {
    title: "Navigasjon",
    items: [
      {
        title: "Toppnavigasjon",
        href: "/komponenter/top-navigation",
        keywords: ["navigation"],
      },
      {
        title: "Brødsmuler",
        href: "/komponenter/breadcrumb",
        keywords: ["breadcrumbs"],
      },
      {
        title: "Stepper",
        href: "/komponenter/stepper",
        keywords: ["progress bar", "stepper", "wizard"],
        isAvailable: true,
      },
    ],
  },
  {
    title: "Media og logoer",
    items: [
      {
        title: "Bilder",
        href: "/komponenter/image",
        keywords: ["images", "media"],
      },
      { title: "Logoer", href: "/komponenter/logo", keywords: ["vy"] },
    ],
  },
  {
    title: "Hooks og utils",
    items: [
      {
        title: "useClipboard",
        href: "/komponenter/use-clipboard",
        keywords: ["utklippstavle", "copy", "paste"],
      },
      { title: "useTheme", href: "/komponenter/use-theme", keywords: ["tema"] },
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
