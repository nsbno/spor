/* eslint-disable simple-import-sort/imports */
import type { PortableTextBlock } from "@portabletext/types";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  Box,
  Heading,
  Accordion as SporAccordion,
} from "@vygruppen/spor-react";
import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { useLocation } from "react-router";

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
  const routerHash = useLocation().hash;
  const liveHash = useSyncExternalStore(
    subscribeToHashChanges,
    getClientHash,
    getServerHash,
  );
  const hash = liveHash || routerHash;

  const [toggles, setToggles] = useState<Record<number, boolean>>({});

  const hashIndex = useMemo(() => {
    if (!hash) return -1;
    const id = hash.replace(/^#item-/i, "");
    return items.findIndex((item) => item._key === id);
  }, [hash, items]);

  const openIndex = useMemo(() => {
    const open = new Set<number>();
    if (hashIndex !== -1) open.add(hashIndex);
    for (const [key, value] of Object.entries(toggles)) {
      const index = Number(key);
      if (value) open.add(index);
      else open.delete(index);
    }
    return [...open];
  }, [hashIndex, toggles]);

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        // Calculate the scroll position to be 1/3 down the screen to avoid header and cookie banner
        const viewpHeight = window.innerHeight;
        const rect = element.getBoundingClientRect();
        const targetScrollPos = rect.top + window.scrollY - viewpHeight / 3;

        window.scrollTo({ top: targetScrollPos });
      }
    }
  }, [hash, items]);

  const handleAccordionState = (id: string, index: number) => {
    const isOpen = openIndex.includes(index);
    setToggles((previous) => ({ ...previous, [index]: !isOpen }));
    history.replaceState({}, "", isOpen ? " " : `#item-${id}`);
  };

  // sanitize heading inputs and fall back to safe defaults
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
        value={openIndex.map(String)}
      >
        {items.map((item, index) => (
          <AccordionItem key={item._key} value={String(index)}>
            <Heading
              as={safeItemLevel ?? "h4"}
              variant="md"
              fontWeight="bold"
              autoId
            >
              <AccordionItemTrigger
                gap={1}
                onClick={() => handleAccordionState(item._key, index)}
              >
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
