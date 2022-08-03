import {
  DropdownDownFill18Icon,
  DropdownUpFill18Icon,
} from "@vygruppen/spor-icon-react-native";
import React, { useState } from "react";
import { Box } from "@vygruppen/spor-layout-react-native";
import { Pressable } from "react-native";
import { BaseAlert, ColorVariants } from "./BaseAlert";
import { Text } from "@vygruppen/spor-typography-react-native";
import { Button } from "@vygruppen/spor-button-react-native";

type ExpandableAlertProps = {
  children: React.ReactNode;
  colorScheme: ColorVariants;
  leftIcon: JSX.Element;
  heading: string;
  defaultExpanded?: boolean;
  onToggle?: (isExpanded: boolean) => void;
};

/**
 * Renders an Expadable Alert.
 *
 * An expandable version of an alert looks like this:
 *
 * ```tsx
 * <ExpandableAlert colorScheme="yellow" leftIcon={<InformationOutline18Icon />} heading="Informasjon">
 *   <Text variant="md">Content</Text>
 * </ExpandableAlert>
 * ```
 *
 * There are six of color schemes available; yellow, light-yellow, orange, red, green and blue.
 * You can also insert your own icon as a "leftIcon",
 * and your own heading
 *
 * You can also send in your own onToogle function that looks like this:
 * ```tsx
 * <ExpandableAlert colorScheme="yellow" leftIcon={<InformationOutline18Icon />} heading="Informasjon" onTooggle={{your onToogle function}}>
 *   <Text variant="md">Content</Text>
 * </ExpandableAlert>
 * ```
 * If you want the alert to be expanded by default you can send it in thorugh defaultExpanded. It looks like this:
 * ```tsx
 * <ExpandableAlert colorScheme="yellow" leftIcon={<InformationOutline18Icon />} heading="Informasjon" defaultExpanded={true}>
 *   <Text variant="md">Content</Text>
 * </ExpandableAlert>
 * ```
 */

export const ExpandableAlert = ({
  children,
  colorScheme,
  heading,
  leftIcon,
  defaultExpanded = false,
  onToggle = () => {},
  ...props
}: ExpandableAlertProps) => {
  const [isExpanded, setExpanded] = useState(defaultExpanded);

  function handlePress() {
    setExpanded(!isExpanded);
    onToggle(!isExpanded);
  }

  return (
    <Pressable onPress={handlePress}>
      <Box flexDirection={"row"}>
        <BaseAlert
          colorScheme={colorScheme}
          leftIcon={leftIcon}
          heading={
            <Text fontWeight={isExpanded ? "bold" : "normal"}>{heading}</Text>
          }
          rightIcon={
            <Button
              onPress={handlePress}
              variant="ghost"
              leftIcon={
                isExpanded ? (
                  <DropdownUpFill18Icon />
                ) : (
                  <DropdownDownFill18Icon />
                )
              }
            ></Button>
          }
        >
          {isExpanded && (
            <Box ml={5} mt={1} pr={3}>
              {children}
            </Box>
          )}
        </BaseAlert>
      </Box>
    </Pressable>
  );
};
