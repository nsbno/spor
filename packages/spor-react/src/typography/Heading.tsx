"use client";
import {
  HeadingProps as ChakraHeadingProps,
  ConditionalValue,
  Text,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { slugify } from "..";

export type HeadingProps = Omit<ChakraHeadingProps, "textStyle" | "as"> & {
  /** The heading level, e.g. h1, h2, h3... **/
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /** The size and style of the heading. Defaults to xl-display */
  variant?: ConditionalValue<
    "sm" | "md" | "lg" | "2xl" | "xl-display" | "xl-sans" | "xs"
  >;
  /** If true, generate an ID based on the children */
  autoId?: boolean;
};
/**
 * Create your own fancy headings with this component.
 *
 * You have to specify what level of heading you want, depending on the context you are using the heading in.
 * You do this with the `as` prop. The options are h1, h2, h3, h4, h5 and h6.
 *
 * ```tsx
 * <Heading as="h1">Page heading</Heading>
 * ```
 *
 * You can specify the variant, which is one of "xs", "sm", "md", "lg", "xl-sans", "xs-serif" and "2xl". The default is "xl-sans".
 *
 * ```tsx
 * <Heading as="h1" variant="2xl">Look at me!</Heading>
 * ```
 *
 * If you want to generate an ID based on the children, you can use the `autoId` prop.
 * Please note that this only works with string children (not JSX, nor arrays of strings).
 *
 * ```tsx
 * <Heading as="h1" autoId>Page heading</Heading> // Will set id="page-heading"
 * ```
 */

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  function Heading(props, ref) {
    const {
      as,
      variant = "xl-display",
      autoId = false,
      id: externalId,
      ...rest
    } = props;

    const id =
      (externalId ?? (autoId && typeof rest.children === "string"))
        ? slugify(rest.children as string)
        : undefined;

    return (
      <Text
        as={as}
        textStyle={variant}
        id={id}
        color={"text.default"}
        ref={ref}
        {...rest}
      />
    );
  },
);
