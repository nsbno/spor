import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { LinkOutOutline24Icon } from "@vygruppen/spor-icon-react";
import React from "react";

type LinkProps = Omit<ChakraLinkProps, "variant"> & {
  variant?: "primary" | "secondary" | "tertiary";
};
/** Link to different sites or parts of site
 *
 * You can specify the `variant` prop to get different link designs. `tertiary` should only be used on dark backgrounds.
 */
export const Link = ({ children, ...props }: LinkProps) => {
  const isExternal =
    props.isExternal || Boolean(props.href?.match(/^https?:\/\//));
  return (
    <ChakraLink {...props} isExternal={isExternal}>
      {children}
      {isExternal && <LinkOutOutline24Icon ml={0.5} />}
    </ChakraLink>
  );
};
