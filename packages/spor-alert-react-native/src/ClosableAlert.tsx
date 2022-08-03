import { CloseOutline18Icon } from "@vygruppen/spor-icon-react-native";
import React, { useEffect, useState } from "react";
import { Box } from "@vygruppen/spor-layout-react-native";
import { BaseAlert, ColorVariants } from "./BaseAlert";
import { Text } from "@vygruppen/spor-typography-react-native";
import { Button } from "@vygruppen/spor-button-react-native";

type ClosableAlertProps = {
  children: React.ReactNode;
  colorScheme: ColorVariants;
  leftIcon: JSX.Element;
  heading: string;
  onClose: () => void;
};

/**
 * Renders an Closable Alert.
 *
 * A closable version of an alert looks like this:
 *
 * ```tsx
 * <ClosableAlert colorScheme="yellow" leftIcon={<InformationOutline18Icon />} heading="Informasjon" onClose={your onclose function}>
 *   <Text variant="md">Content</Text>
 * </ClosableAlert>
 * ```
 *
 * There are six of color schemes available; yellow, light-yellow, orange, red, green and blue.
 * You will also need to insert your own icon as a "leftIcon", an onclose function and your own heading.
 *
 */

export const ClosableAlert = ({
  children,
  colorScheme,
  onClose,
  heading,
  leftIcon,
  ...props
}: ClosableAlertProps) => {
  return (
    <BaseAlert
      colorScheme={colorScheme}
      heading={<Text fontWeight="bold">{heading}</Text>}
      leftIcon={leftIcon}
      rightIcon={
        <Button
          onPress={onClose}
          variant="ghost"
          leftIcon={<CloseOutline18Icon />}
        ></Button>
      }
    >
      <Box ml={5} mt={1} pr={3}>
        {children}
      </Box>
    </BaseAlert>
  );
};
