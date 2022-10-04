import {
  Text as ChakraText,
  TextProps as ChakraTextProps,
} from "@chakra-ui/react";
import React from "react";

export type TextProps = ChakraTextProps;
/**
 * A paragraph of text.
 *
 * ```tsx
 * <Text>Welcome to this paragraph of text.</Text>
 * ```
 *
 * Note that you're most likely going to run into some issues auto-importing this component. That's because Text is a window global, and it'll be available wherever. So take care to import it thorougly. Alternatively, you can import `Paragraph`, which is an alias for the same component.
 */
export const Text = ({ fontSize = "xl", ...props }: TextProps) => {
  return <ChakraText fontSize={fontSize} {...props} />;
};
