import type { TextProps as RestyleTextProps } from "@shopify/restyle";
import { createText } from "@shopify/restyle";
import type { Theme } from "@vygruppen/spor-theme-react-native";
import React from "react";

export type TextProps = RestyleTextProps<Theme> & { children: React.ReactNode };
/**
 * A paragraph of text.
 *
 * ```tsx
 * <Text>Welcome to this paragraph of text.</Text>
 * ```
 */
export const Text = createText<Theme>();
