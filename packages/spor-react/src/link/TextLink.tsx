"use client";
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  RecipeVariantProps,
} from "@chakra-ui/react";
import { LinkOutOutline24Icon } from "@vygruppen/spor-icon-react";
import React, { forwardRef, PropsWithChildren } from "react";

import { linkRecipe } from "../theme/recipes/link";

type linkVariantProps = RecipeVariantProps<typeof linkRecipe>;

export type LinkProps = Exclude<ChakraLinkProps, "variant"> &
  PropsWithChildren<linkVariantProps> & {
    /** Defaults to primary */
    variant?: "primary" | "secondary";
    /** Define if the link shows an icon on the right that indicate it is an external link */
    external?: boolean;
  };

/** Link to different sites or parts of site
 *
 * You can specify the `variant` prop to get different link designs.
 *  * ```tsx
 * <TextLink href="/url-to-page" variant="primary" size="md">
 *   text that is linked
 * </TextLink>
 * ```
 */
export const TextLink = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, ...props }, ref) => {
    TextLink.displayName = "TextLink";
    const external =
      props.external !== undefined
        ? props.external
        : Boolean(props.href?.match(/^https?:\/\//));
    return (
      <ChakraLink {...props} ref={ref}>
        {children}
        {external && <LinkOutOutline24Icon aria-hidden />}
      </ChakraLink>
    );
  },
);
