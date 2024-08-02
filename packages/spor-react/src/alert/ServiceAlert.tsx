import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
    Text,
    useMultiStyleConfig,
  } from "@chakra-ui/react";
  import React from "react";
  import { AlertIcon } from "./AlertIcon";
  import { BaseAlert, BaseAlertProps } from "./BaseAlert";
  import { createTexts, useTranslation } from "../i18n";
  
  type ServiceAlertProps = BaseAlertProps & {
    /** The title string  */
    title: string;
    /** The number of notifications when there is a list of multiple alerts */
    notification: number;
    /** Callback for when the expandable panel is opened or closed */
    onToggle?: (isOpen: boolean) => void;
    /** Whether or not the default state of the alert is open */
    defaultOpen?: boolean;
    /**
     * The HTML element used for the `title` prop.
     *
     * Defaults to h3 */
    headingLevel?: "h2" | "h3" | "h4" | "h5" | "h6";
  };
  /**
   * A service alert component.
   *
   * A regular alert with an expandable body, used to show service messages. The expandable body can be used to provide more information about the alert(s).
   *
   * ```tsx
   * <ServiceAlert variant="service" title="Error with Vipps">
   *   Some customers are experiencing issues logging in with Vipps. Vipps is working to resolve the issue. Try logging in with email instead.
   * </ServiceAlert>
   * ```
   */
  export const ServiceAlert = ({
    variant,
    children,
    title,
    notification,
    headingLevel = "h3",
    defaultOpen = false,
    onToggle = () => {},
    ...boxProps
  }: ServiceAlertProps) => {
    variant = "service";
    const { t } = useTranslation();
    const styles = useMultiStyleConfig("AlertExpandable", { variant });
    return (
      <BaseAlert variant={variant} {...boxProps} paddingX={0} paddingY={0}>
        <Accordion
          onChange={(expandedIndex) => onToggle(expandedIndex === 0)}
          defaultIndex={defaultOpen ? 0 : -1}
          allowToggle
          flexGrow="1"
        >
          <AccordionItem>
            <AccordionButton sx={styles.container} >
              <Flex
                justifyContent="space-between"
                alignItems="center"
                flexGrow="1"
              >
                <Flex as={headingLevel} alignItems="center">
                  <AlertIcon variant={variant} />
  
                  <Box
                    as="span"
                    sx={{
                      // Truncate the title to one line
                      display: "-webkit-box",
                      overflow: "hidden",
                      "-webkit-line-clamp": "1",
                      "-webkit-box-orient": "vertical",
                    }}
                    color="white"
                  >
                    {title}
                  </Box>
                </Flex>
  
                <Flex alignItems="center">
                  {notification && <Text 
                    color="white"
                    fontWeight={400}
                    fontSize={16}
                    pr="6px"
                  >
                    {t(texts.notification(notification))}
                  </Text>}
  
                <AccordionIcon color="white" />
                </Flex>
                
              </Flex>
            </AccordionButton>
            <AccordionPanel color="white">{children}</AccordionPanel>
          </AccordionItem>
        </Accordion>
      </BaseAlert>
    );
  };
  
  const texts = createTexts({
    notification: (notification) => {
      const numNotification = Number(notification);
      return {
        nb: `${numNotification} varsel`,
        nn: `${numNotification} varsel`,
        sv: `${numNotification} ${numNotification > 1 ? 'underrättelser' : 'underrättelse'}`,
        en: `${numNotification} ${numNotification > 1 ? 'notifications' : 'notification'}`,
      };
    },
  });