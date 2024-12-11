"use client";
import {
  Code as ChakraCode,
  CodeProps as ChakraCodeProps,
  RecipeVariantProps,
  useRecipe,
} from "@chakra-ui/react";
import React, { forwardRef, PropsWithChildren } from "react";
import { codeRecipie } from "../theme/recipes/code";

type CodeVariantProps = RecipeVariantProps<typeof codeRecipie>;

type CodeColorPalette =
  | "yellow"
  | "light-yellow"
  | "red"
  | "green"
  | "orange"
  | "blue"
  | "grey"
  | "white";

export type CodeProps = Exclude<ChakraCodeProps, "colorPalette" | "variant"> &
  PropsWithChildren<CodeVariantProps> & {
    /**
     * The color scheme of the inline code.
     */
    colorPalette?: CodeColorPalette;
    /** The design variant – "solid" by default.
     *
     * Can be specified as `outline` to render a border around the badge. */
    variant?: "solid" | "outline";
  };
/**
 * Shows inline code.
 */

export const Code = forwardRef<HTMLElement, CodeProps>(
  function Code(props, ref) {
    const { colorPalette, variant, ...rest } = props;
    const recipe = useRecipe({ recipe: codeRecipie });
    const styles = recipe({ variant, colorPalette });
    return <ChakraCode {...rest} ref={ref} css={styles} />;
  },
);
