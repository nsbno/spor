import { accordionSlotRecipe } from "@/theme/slot-recipes/accordion";
import { RecipeVariantProps } from "@chakra-ui/react";
import {
  AccordionRootProps as ChakraAccordionProps,
  Accordion as ChakraAccordion,
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export type AccordionVariantProps = RecipeVariantProps<
  typeof accordionSlotRecipe
>;

export type AccordionProps = Exclude<
  ChakraAccordionProps,
  "variant" | "size" | "orientation"
> &
  PropsWithChildren<AccordionVariantProps> & {
    /**
     * The display variant of the accordion items.
     *
     * - `core` renders a pretty unstyled expandable list without any borders
     * - `base` renders an outlined version
     * - `floating` renders a version with a drop shadow
     */
    variant?: "ghost" | "core" | "floating";
    /* Gap between accordions */
    gap?: string | number;
  };

export type HeadingLevel = {
  /** Heading level of the trigger button */
  headingLevel?: "h2" | "h3" | "h4" | "h5" | "h6";
};

export type AccordionItemTriggerProps = Omit<
  ChakraAccordion.ItemTriggerProps,
  "indicatorElement"
> &
  HeadingLevel & {
    /** Icon to be displayed on the left of the trigger button. Use 24px outline. */
    startElement?: React.ReactNode;
  };

export type AccordionItemContentProps = ChakraAccordion.ItemContentProps & {
  children?: React.ReactNode;
};

export type ExpandableProps = AccordionProps &
  AccordionItemTriggerProps &
  HeadingLevel & {
    title: string;
  };

export type ExpandableItemProps = HeadingLevel & {
  value: string;
  title: string;
  children?: React.ReactNode;
  startElement?: React.ReactNode;
};
