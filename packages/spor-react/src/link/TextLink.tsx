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
import React, {
  cloneElement,
  isValidElement,
  PropsWithChildren,
  ReactNode,
} from "react";

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
      <LinkOutOutline24Icon aria-hidden display="inline" />
    ) : (
      <LinkOutOutline18Icon aria-hidden display="inline" />
    )}
    {/* Visually hidden text for screen readers */}
    <VisuallyHidden>{label}</VisuallyHidden>
  </>
);

export const TextLink = ({
  ref,
  children,
  external,
  href,
  ...props
}: LinkProps & {
  ref?: React.RefObject<HTMLAnchorElement>;
}) => {
  const { t } = useTranslation();

  const isExternal =
    external ??
    Boolean(href?.startsWith("http://") || href?.startsWith("https://"));

  const externalLabel = t ? t(texts.externalLink) : texts.externalLink.en;

  // If asChild is true, we need to clone the children and add the external icon
  if (props.asChild && isValidElement(children)) {
    return (
      <ChakraLink
        href={href}
        {...props}
        ref={ref}
        {...(isExternal && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
      >
        {cloneElement(children as React.ReactElement<{ children: ReactNode }>, {
          ...(children.props as object),
          children: (
            <>
              {(children.props as PropsWithChildren).children}
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
    <ChakraLink
      href={href}
      {...props}
      ref={ref}
      {...(isExternal && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
    >
      {children}
      {isExternal && <ExternalIcon label={externalLabel} size={props.size} />}
    </ChakraLink>
  );
};
TextLink.displayName = "TextLink";

const texts = createTexts({
  externalLink: {
    nb: "Ekstern lenke",
    nn: "Ekstern lenke",
    sv: "Extern länk",
    en: "External link",
  },
});
