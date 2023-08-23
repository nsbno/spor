import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionItemProps,
  AccordionPanel,
  Box,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { Accordion, AccordionProps } from "./Accordion";
import { useAccordionContext } from "./AccordionContext";

type HeadingLevel = "h2" | "h3" | "h4" | "h5" | "h6";
type ExpandableProps = Omit<AccordionProps, "title"> & {
  /** The hidden content */
  children: React.ReactNode;
  /** The title that's shown inside the toggle button */
  title: React.ReactNode;
  /** The semantic heading level of the toggle button */
  headingLevel?: HeadingLevel;
  /**
   * Icon shown to the left of the title
   *
   * Make sure it's the outlined version of the icon.
   *
   * If the size is set to `sm` or `md` the icon should be 24px.
   * If the size is set to `lg`, the icon should be 30px.
   */
  leftIcon?: React.ReactNode;
};
/**
 * A standalone expandable component.
 *
 * This one is great to use if you have a single expandable component by itself.
 * If you want several expandables in a row, use the `Accordion` and `ExpandableItem` components instead.
 *
 * ```tsx
 * <Expandable title="Click for more" variant="card" size="lg">
 *   <Text>MORE! 🎉</Text>
 * </Expandable>
 * ```
 */
export const Expandable = ({
  children,
  headingLevel,
  title,
  leftIcon,
  size = "md",
  ...rest
}: ExpandableProps) => {
  return (
    <Accordion {...rest} size={size}>
      <ExpandableItem
        headingLevel={headingLevel}
        title={title}
        leftIcon={leftIcon}
      >
        {children}
      </ExpandableItem>
    </Accordion>
  );
};

export type ExpandableItemProps = Omit<AccordionItemProps, "title"> & {
  /** The hidden content */
  children: React.ReactNode;
  /** The title that's shown inside the toggle button */
  title: React.ReactNode;
  /** The semantic heading level of the toggle button */
  headingLevel?: HeadingLevel;
  /**
   * Icon shown to the left of the title
   *
   * Make sure it's the 30px outlined version of the icon
   */
  leftIcon?: React.ReactNode;
};
/**
 * An item in a set of Expandables. Must be wrapped in an `<Accordion>` component.
 *
 * ```tsx
 * <Accordion variant="list" size="md">
 *  <ExpandableItem title="Is Spor easy?" headingLevel="h3">
 *    Yes
 *  </ExpandableItem>
 *  <ExpandableItem title="Do you love it?" headingLevel="h3">
 *    🥰
 *  </ExpandableItem>
 * </Accordion>
 * ```
 *
 * If you need even more control, you can put together your own expandable with the `Accordion`, `AccordionItem`, `AccordionButton`, `AccordionIcon` and `AccordionPanel` components.
 */
export const ExpandableItem = ({
  children,
  title,
  headingLevel = "h3",
  leftIcon,
  ...rest
}: ExpandableItemProps) => {
  const { size } = useAccordionContext();
  warnAboutMismatchingIcon({ icon: leftIcon, size });
  return (
    <AccordionItem {...rest}>
      <Box as={headingLevel}>
        <AccordionButton>
          <Flex alignItems="center">
            {leftIcon && <Box marginRight={2}>{leftIcon}</Box>}
            {title}
          </Flex>
          <AccordionIcon />
        </AccordionButton>
      </Box>
      <AccordionPanel>{children}</AccordionPanel>
    </AccordionItem>
  );
};

type WarnAboutMismatchingIcon = {
  icon: any;
  size: AccordionProps["size"];
};
const warnAboutMismatchingIcon = ({ icon, size }: WarnAboutMismatchingIcon) => {
  if (process.env.NODE_ENV !== "production") {
    const displayName = icon?.type?.render?.displayName;
    if (!displayName) {
      return;
    }
    if (displayName.includes("Fill")) {
      console.warn(
        `You passed a filled icon. This component requires outlined icons. You passed ${displayName}, replace it with ${displayName.replace(
          "Fill",
          "Outline"
        )}.`
      );
      return;
    }
    if (size === "lg" && !displayName.includes("30Icon")) {
      console.warn(
        `The icon you passed was of the wrong size for the lg size. You passed ${displayName}, replace it with ${displayName.replace(
          /(\d{2})Icon/,
          "30Icon"
        )}.`
      );
      return;
    }
    if (["md" || "sm"].includes(size!) && !displayName.includes("24Icon")) {
      console.warn(
        `The icon you passed was of the wrong size for the ${size} size. You passed ${displayName}, replace it with ${displayName.replace(
          /(\d{2})Icon/,
          "24Icon"
        )}.`
      );
    }
  }
};
