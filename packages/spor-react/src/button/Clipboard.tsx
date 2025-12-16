import { Clipboard as ChakraClipboard } from "@chakra-ui/react";
import {
  CheckmarkFill18Icon,
  CopyOutline18Icon,
} from "@vygruppen/spor-icon-react";
import * as React from "react";

import { createTexts, useTranslation } from "@/i18n";
import { Text } from "@/typography";

import { Button, ButtonProps } from "./Button";

/**
 *
 * Creates a button that copies text to the clipboard.
 *
 * ```tsx
 * <Clipboard value="Some value to be copied">
 *  <ClipboardButton />
 * </Clipboard>
 */

const ClipboardIcon = ({
  ref,
  ...props
}: ChakraClipboard.IndicatorProps & {
  ref?: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <ChakraClipboard.Indicator
      copied={<CheckmarkFill18Icon />}
      {...props}
      ref={ref}
    >
      <CopyOutline18Icon />
    </ChakraClipboard.Indicator>
  );
};
ClipboardIcon.displayName = "ClipboardIcon";

const ClipboardCopyText = ({
  ref,
  ...props
}: ChakraClipboard.IndicatorProps & {
  ref?: React.RefObject<HTMLDivElement>;
}) => {
  const { t } = useTranslation();
  return (
    <ChakraClipboard.Indicator
      copied={<Text variant="xs">{t(texts.copied)}</Text>}
      {...props}
      ref={ref}
    >
      <Text variant="xs">{t(texts.copy)}</Text>
    </ChakraClipboard.Indicator>
  );
};
ClipboardCopyText.displayName = "ClipboardCopyText";

type ClipboardButtonProps = ButtonProps;

export const ClipboardButton = ({
  ref,
  ...props
}: ClipboardButtonProps & {
  ref?: React.RefObject<HTMLButtonElement>;
}) => {
  return (
    <ChakraClipboard.Trigger asChild>
      <Button ref={ref} size="xs" leftIcon={<ClipboardIcon />} {...props}>
        <ClipboardCopyText />
      </Button>
    </ChakraClipboard.Trigger>
  );
};
ClipboardButton.displayName = "ClipboardButton";

export const Clipboard = ChakraClipboard.Root;

const texts = createTexts({
  copy: {
    nb: "Kopier",
    nn: "Kopier",
    en: "Copy",
    sv: "Kopiera",
  },
  copied: {
    nb: "Kopiert",
    nn: "Kopiert",
    en: "Copied",
    sv: "Kopierad",
  },
});
