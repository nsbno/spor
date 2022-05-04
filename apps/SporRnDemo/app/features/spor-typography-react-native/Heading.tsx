import { createText } from "@shopify/restyle";
import { Theme } from "../spor-theme-react-native";

/**
 * Create your own fancy headings with this component.
 *
 * You can specify the textStyle, which is one of "xs", "sm", "md", "lg", "xl-sans", "xs-serif" and "2xl". The default is "xl-sans".
 *
 * ```tsx
 * <Heading size="2xl">Look at me!</Heading>
 * ```
 */
export const Heading = createText<Theme>();
