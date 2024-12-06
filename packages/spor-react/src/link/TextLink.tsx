import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  RecipeVariantProps,
} from "@chakra-ui/react";
import { LinkOutOutline24Icon } from "@vygruppen/spor-icon-react";
import React, { forwardRef, PropsWithChildren } from "react";
import { createTexts, useTranslation } from "..";
import linkRecipie from "../theme/components/link";

type linkVariantProps = RecipeVariantProps<typeof linkRecipie>;

export type LinkProps = Exclude<ChakraLinkProps, "variant"> &
  PropsWithChildren<linkVariantProps> & {
    variant?: "primary" | "secondary";
    external?: boolean;
  };

/** Link to different sites or parts of site
 *
 * You can specify the `variant` prop to get different link designs.
 */
export const TextLink = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, ...props }, ref) => {
    const { t } = useTranslation();
    const external =
      props.external !== undefined
        ? props.external
        : Boolean(props.href?.match(/^https?:\/\//));
    return (
      <ChakraLink {...props} ref={ref}>
        {children}
        {external && (
          <LinkOutOutline24Icon
            marginLeft={0.5}
            aria-label={t(texts.externalLink)}
          />
        )}
      </ChakraLink>
    );
  },
);

const texts = createTexts({
  externalLink: {
    nb: "Ekstern lenke",
    nn: "Ekstern lenke",
    sv: "Extern länk",
    en: "External link",
  },
});
