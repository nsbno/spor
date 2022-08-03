import { BaseAlert, ColorVariants } from "./BaseAlert";
import React from "react";
import { Text } from "@vygruppen/spor-typography-react-native";

type SimpleAlertProps = {
  children: React.ReactNode;
  colorScheme: ColorVariants;
  leftIcon: JSX.Element;
};

/**
 * Renders a simple alert.
 *
 * This most basic version of an alert.
 * It looks like this:
 *
 * ```tsx
 * <SimpleAlert colorScheme="yellow" leftIcon={<AltTransportOutline18Icon />}>
 *   <Text variant="md">Content</Text>
 * </SimpleAlert>
 * ```
 *
 * There are six of color schemes available; yellow, light-yellow, orange, red, green and blue.
 * You can also insert your own icon as a "leftIcon"
 *
 */

export const SimpleAlert = ({
  children,
  colorScheme,
  leftIcon,
  ...props
}: SimpleAlertProps) => {
  return (
    <BaseAlert
      colorScheme={colorScheme}
      heading={<Text>{children}</Text>}
      leftIcon={leftIcon}
    ></BaseAlert>
  );
};
