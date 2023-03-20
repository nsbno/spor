import { Flex, useClipboard } from "@chakra-ui/react";
import { useLocation } from "@remix-run/react";
import {
  CopyOutline24Icon,
  Heading,
  HeadingProps,
  IconButton,
  SuccessOutline24Icon,
} from "@vygruppen/spor-react";
import React from "react";
import { slugify } from "~/utils/stringUtils";

type LinkableHeadingProps = HeadingProps;

/** A heading that renders a "copy link" button when hovered. */
export const LinkableHeading = ({
  mb,
  mt,
  marginTop,
  marginBottom,
  ...props
}: LinkableHeadingProps) => {
  const spacingProps = { mb, mt, marginTop, marginBottom };
  const location = useLocation();
  const text = getChildrenAsString(props.children);
  const id = props.id || slugify(text as string);
  const { onCopy, hasCopied } = useClipboard(
    `https://spor.vy.no${location.pathname}#${id}`
  );
  return (
    <Flex
      position="relative"
      left={-6}
      alignItems="center"
      data-group
      {...spacingProps}
    >
      <Heading {...props} marginLeft={6} id={id} />
      <IconButton
        aria-label={hasCopied ? "Kopiert" : "Kopiér"}
        onClick={onCopy}
        variant="ghost"
        icon={hasCopied ? <SuccessOutline24Icon /> : <CopyOutline24Icon />}
        size="sm"
        color="darkGrey"
        visibility="hidden"
        opacity="0"
        transitionDuration="fast"
        transitionProperty="common"
        _groupHover={{
          visibility: "visible",
          opacity: 1,
          transform: "translateX(-10%)",
        }}
        position="absolute"
        left={0}
      />
    </Flex>
  );
};

const getChildrenAsString = (children: React.ReactNode) => {
  return React.Children.toArray(children)
    .filter((child) => typeof child === "string")
    .join(" ");
};
