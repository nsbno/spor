import { Flex, useClipboard } from "@chakra-ui/react";
import {
  CopyOutline24Icon,
  Heading,
  HeadingProps,
  IconButton,
  SuccessOutline24Icon,
} from "@vygruppen/spor-react";
import React from "react";
import { useLocation } from "react-router-dom";
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
  const { onCopy, hasCopied } = useClipboard(`${location.pathname}#${id}`);
  return (
    <Flex position="relative" alignItems="center" data-group {...spacingProps}>
      <Heading {...props} id={id} />
      <IconButton
        aria-label={hasCopied ? "Kopiert" : "Kopiér"}
        onClick={onCopy}
        variant="ghost"
        icon={hasCopied ? <SuccessOutline24Icon /> : <CopyOutline24Icon />}
        size="sm"
        color="alias.darkGrey"
        visibility="hidden"
        opacity="0"
        ml={2}
        transitionDuration="fast"
        transitionProperty="common"
        _groupHover={{ visibility: "visible", opacity: 1 }}
      />
    </Flex>
  );
};

const getChildrenAsString = (children: React.ReactNode) => {
  return React.Children.toArray(children)
    .filter((child) => typeof child === "string")
    .join(" ");
};
