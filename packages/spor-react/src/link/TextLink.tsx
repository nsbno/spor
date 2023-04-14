import {
  forwardRef,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { createTexts, useTranslation } from "@vygruppen/spor-i18n-react";
import { LinkOutOutline24Icon } from "@vygruppen/spor-icon-react";
import React from "react";

type LinkProps = Omit<ChakraLinkProps, "variant"> & {
  variant?: "primary" | "secondary" | "tertiary";
};
/** Link to different sites or parts of site
 *
 * You can specify the `variant` prop to get different link designs. `tertiary` should only be used on dark backgrounds.
 */
export const TextLink = forwardRef<LinkProps, "a">(
  ({ children, ...props }, ref) => {
    const { t } = useTranslation();
    const isExternal =
      props.isExternal !== undefined
        ? props.isExternal
        : Boolean(props.href?.match(/^https?:\/\//));
    return (
      <ChakraLink {...props} ref={ref} isExternal={isExternal}>
        {children}
        {isExternal && (
          <LinkOutOutline24Icon
            marginLeft={0.5}
            aria-label={t(texts.externalLink)}
          />
        )}
      </ChakraLink>
    );
  }
);

const texts = createTexts({
  externalLink: {
    nb: "Ekstern lenke",
    nn: "Ekstern lenke",
    sv: "Extern länk",
    en: "External link",
  },
});

/** Link to different sites or parts of sites.
 *
 * @deprecated Use `TextLink` instead. Will be removed in v1.0.0
 */
export const Link = TextLink;
