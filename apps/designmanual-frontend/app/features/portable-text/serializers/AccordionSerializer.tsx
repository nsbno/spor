import {
  Accordion,
  type AccordionProps,
} from "~/features/portable-text/components/Accordion";

type AccordionSerializerProps = {
  value: AccordionProps;
};

/** Renders accordions from portable text */
export const AccordionSerializer = ({ value }: AccordionSerializerProps) => (
  <Accordion
    title={value.title}
    description={value.description}
    titleHeadingLevel={value.titleHeadingLevel}
    accordionItemHeadingLevel={value.accordionItemHeadingLevel}
    headingIcon={value.headingIcon}
    items={value.items}
  />
);
