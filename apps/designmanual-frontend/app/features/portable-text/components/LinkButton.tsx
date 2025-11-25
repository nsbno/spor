import {
  ArrowRightOutline24Icon,
  LinkOutOutline24Icon,
} from "@vygruppen/spor-icon-react";
import { Button } from "@vygruppen/spor-react";

import { getIcon } from "~/utils/getIcon";
import { useLinkProps } from "~/utils/link";
import { sanitizeInternalHref } from "~/utils/sanitize";

export type LinkButtonProps = {
  href: string;
  anchor?: string;
  icon?: string;
  children: React.ReactNode;
  linkType?: "internal" | "external";
  onClick?: () => void;
};
export const LinkButton = ({
  href,
  anchor,
  icon,
  children,
  linkType = "internal",
}: LinkButtonProps) => {
  const isExternalLink = linkType === "external";
  const cleanedHref = isExternalLink ? href : sanitizeInternalHref(href);
  const { linkProps, isExternal } = useLinkProps(cleanedHref, anchor);
  const { as, ...restLinkProps } = linkProps;
  const iconProps = resolveIcon({ icon, isExternal });

  const isDownloadLink = String(href ?? "")
    .toLowerCase()
    .includes("files");

  if (isDownloadLink) {
    return (
      <a
        href={cleanedHref.slice(1)}
        download
        style={{ textDecoration: "none", width: "100%" }}
      >
        <Button
          {...restLinkProps}
          {...iconProps}
          variant="ghost"
          size="sm"
          width="100%"
          marginY={3}
          marginRight={2}
          border="1px solid transparent"
          borderBottom="1px solid"
          borderBottomColor="floating.outline.hover"
          borderRadius={0}
          display="flex"
          justifyContent="flex-start"
          marginBlock="0.2rem"
          _hover={{
            border: "1px solid",
            borderColor: "floating.outline.hover",
            backgroundColor: "transparent",
          }}
        >
          {children}
        </Button>
      </a>
    );
  }

  return (
    <Button
      {...restLinkProps}
      {...iconProps}
      variant="ghost"
      size="sm"
      as={as as React.ElementType}
      width="100%"
      marginY={3}
      marginRight={2}
      border="1px solid transparent"
      borderBottom="1px solid"
      borderBottomColor="floating.outline.hover"
      borderRadius={0}
      display="flex"
      justifyContent="flex-start"
      marginBlock="0.2rem"
      _hover={{
        border: "1px solid",
        borderColor: "floating.outline.hover",
        backgroundColor: "transparent",
      }}
      href={cleanedHref}
    >
      {children}
    </Button>
  );
};

type resolveIconArgs = {
  icon?: string;
  isExternal: boolean;
};

function resolveIcon({ icon, isExternal }: resolveIconArgs) {
  if (icon) {
    const iconProps = {
      leftIcon: getIcon({ iconName: icon, size: 24 }),
      rightIcon: isExternal ? <LinkOutOutline24Icon /> : undefined,
    };
    return iconProps;
  } else {
    const iconProps = {
      rightIcon: isExternal ? (
        <LinkOutOutline24Icon />
      ) : (
        <ArrowRightOutline24Icon />
      ),
    };
    return iconProps;
  }
}
