import type { TextProps as RestyleTextProps } from "@shopify/restyle";
import { createText } from "@shopify/restyle";
import React from "react";
import { Theme } from "../spor-theme-react-native";
export type TextProps = RestyleTextProps<Theme> & { children: React.ReactNode };
/**
 * A paragraph of text.
 *
 * ```tsx
 * <Text>Welcome to this paragraph of text.</Text>
 * ```
 */
export const Text = createText<Theme>();
