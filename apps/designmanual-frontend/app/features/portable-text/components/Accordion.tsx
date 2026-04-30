import type { PortableTextBlock } from "@portabletext/types";
import {
  Accordion as SporAccordion,
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  Box,
  Heading,
} from "@vygruppen/spor-react";
import { useEffect, useMemo, useState, useSyncExternalStore } from "react";

import { BlockHeading } from "~/features/portable-text/components/BlockHeading";
import { PortableText } from "~/features/portable-text/PortableText";
import { getIcon } from "~/utils/getIcon";
import { stripHiddenChars } from "~/utils/sanitize";

const headingLevelToVariantMap = {
  h2: "lg",
  h3: "md",
  h4: "sm",
  h5: "xs",
} as const;

const subscribeToHashChanges = (callback: () => void) => {
  if (globalThis.window === undefined) return () => {};
  globalThis.addEventListener("hashchange", callback);
  globalThis.addEventListener("popstate", callback);
  return () => {
    globalThis.removeEventListener("hashchange", callback);
    globalThis.removeEventListener("popstate", callback);
  };
};

const getClientHash = () =>
  globalThis.window === undefined ? "" : globalThis.location.hash;

const getServerHash = () => "";

export type AccordionProps = {
  title?: string;
  description?: string;
  titleHeadingLevel: "h2" | "h3" | "h4" | "h5";
  accordionItemHeadingLevel: "h3" | "h4" | "h5" | "h6";
  headingIcon?: string;
  items: {
    _key: string;
    title: string;
    icon?: string;
    content: PortableTextBlock[];
  }[];
};

export const Accordion = ({
  title,
  description,
  titleHeadingLevel,
  accordionItemHeadingLevel,
  headingIcon,
  items,
}: AccordionProps) => {
  const hash = useSyncExternalStore(
    subscribeToHashChanges,
    getClientHash,
    getServerHash,
  );

  const hashOpenValue = useMemo(() => {
    if (!hash) return null;
    const id = hash.replace(/^#item-/i, "");
    const index = items.findIndex((item) => item._key === id);
    return index === -1 ? null : String(index);
  }, [hash, items]);

  // overrides[value] = true: user explicitly opened it; false: explicitly closed it.
  // An explicit close overrides hash-derived openness.
  const [overrides, setOverrides] = useState<Record<string, boolean>>({});

  const openValues = useMemo(() => {
    const open = new Set<string>();
    if (hashOpenValue !== null) open.add(hashOpenValue);
    for (const [value, isOpen] of Object.entries(overrides)) {
      if (isOpen) open.add(value);
      else open.delete(value);
    }
    return [...open];
  }, [hashOpenValue, overrides]);

  useEffect(() => {
    if (!hash) return;
    const element = document.querySelector(hash);
    if (!element) return;
    // Position the target 1/3 down the screen to avoid header and cookie banner overlap
    const rect = element.getBoundingClientRect();
    const targetScrollPos =
      rect.top + globalThis.scrollY - globalThis.innerHeight / 3;
    globalThis.scrollTo({ top: targetScrollPos });
  }, [hash]);

  const handleValueChange = (details: { value: string[] }) => {
    const next = new Set(details.value);
    const current = new Set(openValues);

    setOverrides((previous) => {
      const updated = { ...previous };
      for (const value of next) if (!current.has(value)) updated[value] = true;
      for (const value of current) if (!next.has(value)) updated[value] = false;
      return updated;
    });

    const newlyOpened = details.value.find((value) => !current.has(value));
    if (newlyOpened !== undefined) {
      const item = items[Number(newlyOpened)];
      if (item) history.replaceState({}, "", `#item-${item._key}`);
    } else if (details.value.length === 0) {
      history.replaceState(
        {},
        "",
        globalThis.location.pathname + globalThis.location.search,
      );
    }
  };

  const rawTitleLevel = stripHiddenChars(titleHeadingLevel);
  const safeTitleLevel = /^h[2-5]$/.test(rawTitleLevel)
    ? (rawTitleLevel as "h2" | "h3" | "h4" | "h5")
    : "h2";

  const rawItemLevel = stripHiddenChars(accordionItemHeadingLevel);
  const safeItemLevel = /^h[3-6]$/.test(rawItemLevel)
    ? (rawItemLevel as "h3" | "h4" | "h5" | "h6")
    : "h3";

  return (
    <Box marginX="auto" width="100%" marginTop={9}>
      {title && (
        <BlockHeading
          heading={title}
          headingLevel={safeTitleLevel}
          variant={headingLevelToVariantMap[safeTitleLevel]}
          subheading={description}
          icon={headingIcon}
        />
      )}
      <SporAccordion
        multiple
        variant="underlined"
        data-testid="accordion"
        value={openValues}
        onValueChange={handleValueChange}
      >
        {items.map((item, index) => (
          <AccordionItem key={item._key} value={String(index)}>
            <Heading as={safeItemLevel} variant="md" fontWeight="bold" autoId>
              <AccordionItemTrigger gap={1}>
                {item.icon && getIcon({ iconName: item.icon, size: 24 })}
                {item.title}
              </AccordionItemTrigger>
            </Heading>
            <AccordionItemContent>
              <PortableText value={item.content} />
            </AccordionItemContent>
          </AccordionItem>
        ))}
      </SporAccordion>
    </Box>
  );
};
