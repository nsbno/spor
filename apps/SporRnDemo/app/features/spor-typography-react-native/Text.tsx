import { createText } from "@shopify/restyle";
import { Theme } from "../spor-theme-react-native";

/**
 * A paragraph of text.
 *
 * ```tsx
 * <Text>Welcome to this paragraph of text.</Text>
 * ```
 *
 * Note that you're most likely going to run into some issues auto-importing this component. That's because Text is a window global, and it'll be available wherever. So take care to import it thorougly. Alternatively, you can import `Paragraph`, which is an alias for the same component.
 */
export const Text = createText<Theme>();

/**
 * A paragraph of text.
 *
 * ```tsx
 * <Paragraph>Welcome to this paragraph of text.</Paragraph>
 * ```
 *
 * You can specify the text color, and a lot of other props as well.
 */
export const Paragraph = Text;
