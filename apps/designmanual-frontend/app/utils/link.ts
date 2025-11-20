import { Link } from "react-router";

/** Gets the link props for a given URL
 *
 * const { isExternal, linkProps } = useLinkProps(href);
 * return <SomeItem {...linkProps} />
 */
type LinkPropsResult = {
  isExternal: boolean;
  linkProps: {
    as: string | typeof Link;
    href?: string;
    to?: string;
    target?: string;
    viewTransition?: boolean;
  };
};

// ...existing code...
export const useLinkProps = (
  href?: string,
  anchor?: string,
): LinkPropsResult => {
  const fileUrlBuilder = "http://localhost:3008/";
  if (!href) {
    return { isExternal: false, linkProps: { as: "a" } };
  }

  if (href.startsWith("https://design.vy.no")) {
    return {
      isExternal: false,
      linkProps: {
        as: "a",
        href: href.replace("https://design.vy.no", ""),
      },
    };
  }

  // Check if it's an external URL first (before processing)
  const isExternalUrl = !!/^https?:\/\/|^tel:.*|^mailto:.*/.test(href);

  let url = href;

  // Only process internal URLs (that match vy.no patterns)
  if (!isExternalUrl && /^https?:\/\/(?:design\.)?vy\.no\//.test(href)) {
    url = href.replace(
      new RegExp(String.raw`^https?://(?:design\.)?vy\.no/`),
      "/",
    );
    url = fileUrlBuilder + url;
  }

  if (anchor) {
    url = `${url}#${anchor}`;
  }

  const isExternal = isExternalUrl;
  const linkProps: {
    as: string | typeof Link;
    href?: string;
    to?: string;
    target?: string;
    viewTransition?: boolean;
  } = isExternal
    ? { as: "a", href: url, target: "_blank" }
    : { as: Link, to: url, viewTransition: true };
  return { isExternal, linkProps };
};
