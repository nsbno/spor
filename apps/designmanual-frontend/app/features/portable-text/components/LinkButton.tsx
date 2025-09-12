import {
  ArrowRightOutline24Icon,
  LinkOutOutline24Icon,
} from "@vygruppen/spor-icon-react";
import { Button } from "@vygruppen/spor-react";

import { getIcon } from "~/utils/getIcon";
import { useLinkProps } from "~/utils/link";

export type LinkButtonProps = {
  href: string;
  anchor?: string;
  icon?: string;
  children: React.ReactNode;
  onClick?: () => void;
};
/** A button that links to some resource – either a page or a file, for instance */
export const LinkButton = ({
  href,
  anchor,
  icon,
  children,
  onClick,
}: LinkButtonProps) => {
  const { linkProps, isExternal } = useLinkProps(href, anchor);
  const iconProps = resolveIcon({ icon, isExternal });
  return (
    <Button
      variant="tertiary"
      size="sm"
      width="fit-content"
      {...linkProps}
      {...iconProps}
      marginY={3}
      marginRight={2}
      onClick={onClick}
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
      leftIcon: getIcon({ iconName: icon }),
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
