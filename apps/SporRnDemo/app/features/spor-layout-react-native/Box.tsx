import { createBox } from "@shopify/restyle";
import { Theme } from "../spor-theme-react-native";

/** A basic box.
 *
 * This component is the basic building block of the Spor design system.
 * You'll compose these boxes into more complex components to create your UI.
 *
 * Think of it as a simple View with all styles are props instead of a stylesheet. And instead of specifying colors or using SIZES, you can pass in the name of your token directly
 *
 * Here's an example:
 *
 * ```tsx
 * <Box backgroundColor="osloGrey" padding={3} />
 *
 * The Box component comes with the following props: backgroundColor, opacity, visible, layout, spacing, border, shadow, position.
 * ```
 */
export const Box = createBox<Theme>();
