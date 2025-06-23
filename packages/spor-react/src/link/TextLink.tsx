"use client";
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  VisuallyHidden,
} from "@chakra-ui/react";
import {
  LinkOutOutline18Icon,
  LinkOutOutline24Icon,
} from "@vygruppen/spor-icon-react";
import React, { cloneElement, forwardRef, isValidElement } from "react";

import { createTexts, useTranslation } from "@/i18n";

export type LinkProps = ChakraLinkProps & {
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
const ExternalIcon = ({
  label,
  size,
}: {
  label: string;
  size: LinkProps["size"];
}) => (
  <>
    {size === "lg" || size === "md" ? (
      <LinkOutOutline24Icon aria-hidden />
    ) : (
      <LinkOutOutline18Icon aria-hidden />
    )}
    {/* Visually hidden text for screen readers */}
    <VisuallyHidden>{label}</VisuallyHidden>
  </>
);

export const TextLink = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, external, href, ...props }, ref) => {
    const { t } = useTranslation();

    const isExternal =
      external ??
      Boolean(href?.startsWith("http://") || href?.startsWith("https://"));

    const externalLabel = t ? t(texts.externalLink) : texts.externalLink.en;

    // If asChild is true, we need to clone the children and add the external icon
    if (props.asChild && isValidElement(children)) {
      return (
        <ChakraLink href={href} {...props} ref={ref}>
          {cloneElement(children as React.ReactElement, {
            ...children.props,
            children: (
              <>
                {children.props.children}
                {isExternal && (
                  <ExternalIcon label={externalLabel} size={props.size} />
                )}
              </>
            ),
          })}
        </ChakraLink>
      );
    }

    return (
      <ChakraLink href={href} {...props} ref={ref}>
        {children}
        {isExternal && <ExternalIcon label={externalLabel} size={props.size} />}
      </ChakraLink>
    );
  },
);
TextLink.displayName = "TextLink";

const texts = createTexts({
  externalLink: {
    nb: "Ekstern lenke",
    nn: "Ekstern lenke",
    sv: "Extern länk",
    en: "External link",
  },
});
