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
  /** Heading-levels: "h2" | "h3" | "h4" | "h5" | "h6" */
  headingLevel?: HeadingLevel;
  /** Icon to be displayed on the left of the trigger button */
  leftIcon?: React.ReactNode;
};

export type HeadingLevel = "h2" | "h3" | "h4" | "h5" | "h6";

export type AccordionItemContentProps = ChakraAccordion.ItemContentProps & {
  /** Heading-levels: "h2" | "h3" | "h4" | "h5" | "h6" */
  headingLevel?: HeadingLevel;
  /** Title of the accordion conent */
  title?: string;
  /** Icon to be displayed on the left of the accordion content */
  leftIcon?: React.ReactNode;
  children?: React.ReactNode;
};

export type ExpandableProps = AccordionProps &
  AccordionItemTriggerProps & {
    title?: string;
    value: string;
    headingLevel?: HeadingLevel;
  };
