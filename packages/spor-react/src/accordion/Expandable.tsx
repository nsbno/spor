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

type HeadingLevel = "h2" | "h3" | "h4" | "h5" | "h6";
type ExpandableProps = Omit<
  AccordionProps,
  "title" | "index" | "defaultIndex" | "onChange"
> & {
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
   * The icon size should be 24px.
   */
  leftIcon?: React.ReactNode;

  /** Controlled value of whether the accordion is open or not */
  isOpen?: boolean;
  /** Default value of when the accordion is open or not */
  defaultOpen?: boolean;
  /** Callback for when the expandable opens or closes */
  onChange?: (isOpen: boolean) => void;
};
/**
 * A standalone expandable component.
 *
 * This one is great to use if you have a single expandable component by itself.
 * If you want several expandables in a row, use the `Accordion` and `ExpandableItem` components instead.
 *
 * ```tsx
 * <Expandable title="Click for more" variant="base">
 *   <Text>MORE! 🎉</Text>
 * </Expandable>
 * ```
 */
export const Expandable = ({
  children,
  headingLevel,
  title,
  leftIcon,
  defaultOpen,
  isOpen,
  onChange = () => {},
  ...rest
}: ExpandableProps) => {
  return (
    <Accordion
      {...rest}
      index={isOpen ? 0 : undefined}
      defaultIndex={defaultOpen ? 0 : undefined}
      allowMultiple={true}
      onChange={(expandedIndex) => onChange(expandedIndex === 0)}
    >
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
   * Make sure it's the 24px outlined version of the icon
   */
  leftIcon?: React.ReactNode;
};
/**
 * An item in a set of Expandables. Must be wrapped in an `<Accordion>` component.
 *
 * ```tsx
 * <Accordion variant="ghost">
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
  warnAboutMismatchingIcon({ icon: leftIcon });
  return (
    <AccordionItem {...rest}>
      <Box as={headingLevel}>
        <AccordionButton>
          <Flex alignItems="center">
            {leftIcon && <Box marginRight={1}>{leftIcon}</Box>}
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
};
const warnAboutMismatchingIcon = ({ icon }: WarnAboutMismatchingIcon) => {
  if (process.env.NODE_ENV !== "production") {
    const displayName = icon?.type?.render?.displayName;
    if (!displayName) {
      return;
    }
    if (displayName.includes("Fill")) {
      console.warn(
        `You passed a filled icon. This component requires outlined icons. You passed ${displayName}, replace it with ${displayName.replace(
          "Fill",
          "Outline",
        )}.`,
      );
      return;
    }
  }
};
