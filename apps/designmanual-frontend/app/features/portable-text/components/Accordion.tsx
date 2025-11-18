import type { PortableTextBlock } from "@portabletext/types";
import {
  Accordion as SporAccordion,
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  Box,
  Heading,
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
      const el = document.querySelector(hash);
      if (el) {
        // Calculate the scroll position to be 1/3 down the screen to avoid header and cookie banner
        const viewpHeight = window.innerHeight;
        const rect = el.getBoundingClientRect();
        const targetScrollPos = rect.top + window.scrollY - viewpHeight / 3;

        window.scrollTo({ top: targetScrollPos });
      }
    }
  }, [hash, items]);

  const handleAccordionState = (id: string, index: number) => {
    const includesIndex = openIndex.includes(index);
    setOpenIndex(
      includesIndex
        ? openIndex.filter((i) => i !== index)
        : [...openIndex, index],
    );
    history.replaceState({}, "", includesIndex ? " " : `#item-${id}`);
  };

  return (
    <Box
      marginX="auto"
      width="100%"
      maxWidth={["100%", null, "66.7%"]}
      marginTop={9}
    >
      {title && titleHeadingLevel && (
        <BlockHeading
          heading={title}
          headingLevel={titleHeadingLevel}
          variant={headingLevelToVariantMap[titleHeadingLevel]}
          subheading={description}
          icon={headingIcon}
        />
      )}
      <SporAccordion
        multiple
        variant="core"
        data-testid="accordion"
        value={openIndex.map(String)}
      >
        {items.map((item, i) => (
          <AccordionItem key={item._key} value={String(i)}>
            <Heading as={accordionItemHeadingLevel ?? "h3"} autoId>
              <AccordionItemTrigger
                gap={1}
                onClick={() => handleAccordionState(item._key, i)}
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
