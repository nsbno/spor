import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  BoxProps,
  CloseButton,
  Flex,
  useDisclosure,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import {
  AltTransportOutline24Icon,
  ErrorOutline24Icon,
  InformationOutline24Icon,
  SuccessOutline24Icon,
  WarningOutline24Icon,
} from "@vygruppen/spor-icon-react";
import React from "react";

type BaseAlertProps = BoxProps & {
  /** The color scheme and icon of the alert */
  variant: "info" | "success" | "warning" | "alt-transport" | "error";
  /** Defaults to h3 */
  headingLevel?: "h2" | "h3" | "h4" | "h5" | "h6";
  /** The body content of the alert */
  children: React.ReactNode;
};

/**
 * A base alert box component. Should only be composed by other alert components.
 */
const BaseAlert = ({ variant, children, ...boxProps }: BaseAlertProps) => {
  const styles = useMultiStyleConfig("Alert", { variant });
  return (
    <Box sx={styles.container} {...boxProps}>
      {children}
    </Box>
  );
};

type ExpandableAlertProps = BaseAlertProps & {
  /** The title string  */
  title: string;
  /** Callback for when the expandable panel is opened or closed */
  onToggle?: (isOpen: boolean) => void;
  /** Whether or not the default state of the expandable alert is open */
  defaultOpen?: boolean;
};
/**
 * An expandable alert component.
 *
 * A regular alert with an expandable body. The expandable body can be used to provide more information about the alert.
 *
 * ```tsx
 * <ExpandableAlert variant="alt-transport" title="Replacement bus service">
 *   The replacement bus service will be running from 10:00 to 16:00.
 * </ExpandableAlert>
 * ```
 */
export const ExpandableAlert = ({
  variant,
  children,
  title,
  headingLevel = "h3",
  defaultOpen = false,
  onToggle = () => {},
}: ExpandableAlertProps) => {
  return (
    <BaseAlert variant={variant} paddingX={0} paddingY={0} padding={0}>
      <Accordion
        onChange={(expandedIndex) => onToggle(expandedIndex === 0)}
        defaultIndex={defaultOpen ? 0 : -1}
        allowToggle
        flexGrow="1"
      >
        <AccordionItem>
          <AccordionButton paddingX={3} paddingY={2}>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              flexGrow="1"
            >
              <Flex as={headingLevel}>
                <AlertIcon variant={variant} />
                <Box as="span">{title}</Box>
              </Flex>
              <AccordionIcon />
            </Flex>
          </AccordionButton>
          <AccordionPanel>{children}</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </BaseAlert>
  );
};

type ClosableAlertProps = BaseAlertProps & {
  /** Callback for when the close button is clicked */
  onClose?: () => void;
};
/**
 * A closable alert component.
 *
 * A regular alert with a close button that can be used to dismiss the alert.
 *
 * ```tsx
 * <ClosableAlert variant="info" title="Nice to know">
 *   <Text>Some info here</Text>
 * </ClosableAlert>
 * ```
 *
 * You can also pass in an optional `onClose` callback, for things like analytics.
 *
 * ```tsx
 * <ClosableAlert
 *   variant="info"
 *   title="Nice to know"
 *   onClose={() => analytics.track('alert-closed')}
 * >
 *   <Text>Some info here</Text>
 * </ClosableAlert>
 */
export const ClosableAlert = ({
  variant,
  children,
  onClose: externalOnClose = () => {},
}: ClosableAlertProps) => {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  const styles = useMultiStyleConfig("Alert", { variant });
  if (!isOpen) {
    return null;
  }

  const handleClose = () => {
    externalOnClose();
    onClose();
  };

  return (
    <BaseAlert variant={variant}>
      <CloseButton size="sm" onClick={handleClose} sx={styles.closeButton} />
      <AlertIcon variant={variant} />
      {children}
    </BaseAlert>
  );
};

type StaticAlertProps = BaseAlertProps;
/**
 * A static alert component.
 *
 * This alert component cannot be closed, nor dismissed.
 *
 * ```tsx
 * <StaticAlert variant="info" title="Nice to know">
 *   Thomas the Train was originally only a wooden toy made for the creator’s son.
 * </StaticAlert>
 * ```
 */
export const StaticAlert = ({ children, ...props }: StaticAlertProps) => {
  return (
    <BaseAlert {...props}>
      <AlertIcon variant={props.variant} />
      {children}
    </BaseAlert>
  );
};

type AlertIconProps = { variant: BaseAlertProps["variant"] };
/**
 * Internal component that shows the correct icon for the alert.
 */
const AlertIcon = ({ variant }: AlertIconProps) => {
  const Icon = getIcon(variant);
  return <Icon aria-hidden="true" marginRight={1} color="darkGrey" />;
};

const getIcon = (variant: BaseAlertProps["variant"]) => {
  switch (variant) {
    case "info":
      return InformationOutline24Icon;
    case "success":
      return SuccessOutline24Icon;
    case "warning":
      return WarningOutline24Icon;
    case "alt-transport":
      return AltTransportOutline24Icon;
    case "error":
      return ErrorOutline24Icon;
    default:
      return null;
  }
};
