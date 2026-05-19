"use client";

import {
  Alert as ChakraAlert,
  HStack,
  useDisclosure,
  useSlotRecipe,
} from "@chakra-ui/react";
import { IconComponent } from "@vygruppen/spor-icon-react";

import { CloseButton } from "@/button";
import { createTexts, useTranslation } from "@/i18n";

import { AlertIcon } from "./AlertIcon";

export type AlertProps = Omit<ChakraAlert.RootProps, "colorPalette"> & {
  /** Whether or not to show the alert icon */
  showIndicator?: boolean;
  /** Whether or not the alert is closable */
  icon?: IconComponent;
  closable?: boolean;
  /** Callback for when the alert is closed */
  onAlertClose?: () => void;
};

/**
 *
 * Alerts are used to communicate important information to the user.
 * They can be used to inform about success, errors, warnings, or other important information.
 *
 * ```tsx
 * <Alert variant="info" title="Information">
 *  This is an information alert
 * </Alert>
 * ```
 *
 * You may also use the closable prop to allow the user to dismiss the alert.
 *
 * ```tsx
 * <Alert variant="info" title="Information" closable>
 *    This is an closable alert
 * </Alert>
 *
 * @see Docs https://spor.vy.no/alert
 */

export const Alert = ({
  ref,
  ...props
}: AlertProps & {
  ref?: React.Ref<HTMLDivElement>;
}) => {
  const {
    title,
    showIndicator = true,
    icon,
    closable = false,
    onAlertClose,
    children,
  } = props;
  const { open, onClose } = useDisclosure({ defaultOpen: true });
  const { t } = useTranslation();

  const handleAlertClose = () => {
    onClose();
    onAlertClose?.();
  };

  const recipe = useSlotRecipe({ key: "alert" });
  const styles = recipe({ variant: props.variant });

  const getAriaLabelText = () => {
    const variant = props.variant;
    if (variant === "important" || variant === "alt")
      return texts.ariaLabelAlertWarning;
    if (variant === "error" || variant === "error-secondary")
      return texts.ariaLabelAlertError;
    if (variant === "success") return texts.ariaLabelAlertSuccess;
    return texts.ariaLabelAlertInformative;
  };

  const ariaLabel = t(getAriaLabelText());

  if (!open) return null;
  return (
    <ChakraAlert.Root ref={ref} role="alert" aria-label={ariaLabel} {...props}>
      <ChakraAlert.Content
        flexDirection={title ? "column" : "row"}
        data-part="content"
      >
        <HStack gap="1" alignItems="flex-start">
          {showIndicator && (
            <ChakraAlert.Indicator asChild>
              <AlertIcon variant={props.variant ?? "info"} customIcon={icon} />
            </ChakraAlert.Indicator>
          )}
          {title && (
            <ChakraAlert.Title
              paddingRight={closable ? 6 : 0}
              data-part="title"
            >
              {title}
            </ChakraAlert.Title>
          )}
        </HStack>
        {children && (
          <ChakraAlert.Description
            width="100%"
            paddingLeft={title ? 0.5 : 0}
            paddingRight={closable ? 6 : 0}
            data-part="description"
          >
            {children}
          </ChakraAlert.Description>
        )}
      </ChakraAlert.Content>
      {closable && (
        <CloseButton
          data-part="close-button"
          size="xs"
          position="absolute"
          top="1.5"
          right="1.5"
          onClick={handleAlertClose}
          css={styles.closeButton}
        />
      )}
    </ChakraAlert.Root>
  );
};

const texts = createTexts({
  ariaLabelAlertInformative: {
    en: "Announcement",
    nb: "Kunngjøring",
    nn: "Kunngjering",
    sv: "Meddelande",
  },
  ariaLabelAlertWarning: {
    en: "Warning",
    nb: "Advarsel",
    nn: "Varsel",
    sv: "Varning",
  },
  ariaLabelAlertError: {
    en: "Error",
    nb: "Feil",
    nn: "Feil",
    sv: "Fel",
  },
  ariaLabelAlertSuccess: {
    en: "Success",
    nb: "Suksess",
    nn: "Suksess",
    sv: "Framgång",
  },
});
