/* eslint-disable simple-import-sort/imports */
import type { PortableTextBlock } from "@portabletext/types";
import { stegaClean } from "@sanity/client/stega";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  Box,
  Heading,
  Accordion as SporAccordion,
} from "@vygruppen/spor-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { BlockHeading } from "~/features/portable-text/components/BlockHeading";
import { PortableText } from "~/features/portable-text/PortableText";
import { getIcon } from "~/utils/getIcon";

const headingLevelToVariantMap = {
  h2: "lg",
  h3: "md",
  h4: "sm",
  h5: "xs",
} as const;

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
  const { hash } = useLocation();

  const [openIndex, setOpenIndex] = useState<number[]>(() => {
    if (hash) {
      const id = hash.replace(/^#item-/i, "");
      const index = items.findIndex((item) => item._key === id);

      if (index !== -1) {
        return [index];
      }
    }
    return [];
  });

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
    const includesIndex = openIndex.includes(index);
    setOpenIndex(
      includesIndex
        ? openIndex.filter((index_) => index_ !== index)
        : [...openIndex, index],
    );
    history.replaceState({}, "", includesIndex ? " " : `#item-${id}`);
  };

  // sanitize heading inputs and fall back to safe defaults
  const rawTitleLevel = stegaClean(titleHeadingLevel);
  const safeTitleLevel = /^h[2-5]$/.test(rawTitleLevel)
    ? (rawTitleLevel as "h2" | "h3" | "h4" | "h5")
    : "h2";

  const rawItemLevel = stegaClean(accordionItemHeadingLevel);
  const safeItemLevel = /^h[3-6]$/.test(rawItemLevel)
    ? (rawItemLevel as "h3" | "h4" | "h5" | "h6")
    : "h3";

  return (
    <Box
      marginX="auto"
      width="100%"
      maxWidth={["100%", null, "66.7%"]}
      marginTop={9}
    >
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
            <Heading as={safeItemLevel ?? "h3"} autoId>
              <AccordionItemTrigger
                gap={1}
                onClick={() => handleAccordionState(item._key, index)}
              >
                {item.icon && getIcon({ iconName: item.icon, size: 24 })}
                <Box flex={1} id={`item-${item._key}`}>
                  {item.title}
                </Box>
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
