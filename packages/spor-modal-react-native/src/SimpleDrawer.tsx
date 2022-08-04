import { Text } from "@vygruppen/spor-typography-react-native";
import React from "react";
import { Drawer } from "./Drawer";
import { DrawerHeader } from "./DrawerHeader";

type SimpleDrawerProps = {
  title?: string;
  textAlign?: "left" | "center";
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element;
};

/** Renders a simple drawer.
 *
 * Can be used when you want to render a drawer with only text as its content.
 *
 * A simple drawer looks like this:
 *
 * ```tsx
 * <SimpleDrawer isOpen={} onClose={} title="Small title">
 *  Content
 * </SimpleDrawer>
 *
 * The SimpleDrawer component comes with the following props: textAlign, title, isOpen, onClose.
 * ```
 */
export const SimpleDrawer = ({
  textAlign = "center",
  children,
  title,
  isOpen,
  onClose,
  ...props
}: SimpleDrawerProps) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} {...props}>
      {title && (
        <DrawerHeader
          textAlign={textAlign}
          size={title.length > 30 ? "sm" : "lg"}
        >
          {title}
        </DrawerHeader>
      )}
      <Text textAlign={textAlign} marginBottom="lg">
        {children}
      </Text>
    </Drawer>
  );
};
