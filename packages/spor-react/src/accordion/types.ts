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

export type AccordionItemTriggerProps = ChakraAccordion.ItemTriggerProps & {
  indicatorPlacement?: "start" | "end";
  /** Title of the trigger button */
  title?: string;
  /** Icon to be displayed on the left of the trigger button */
  startElement?: React.ReactNode;
};

export type HeadingLevel = "h2" | "h3" | "h4" | "h5" | "h6";

export type AccordionItemContentProps = ChakraAccordion.ItemContentProps & {
  children?: React.ReactNode;
};

export type ExpandableProps = AccordionProps &
  AccordionItemTriggerProps & {
    value: string[];
    items?: ExpandableItemsProps[];
    [key: string]: any;
  };

export type ExpandableItemProps = {
  value: string;
  title: string;
  children?: React.ReactNode;
  headingLevel?: HeadingLevel;
  startElement?: React.ReactNode;
};

export type ExpandableItemsProps = {
  value: string;
  title: string;
  content: string;
  [key: string]: any;
};
