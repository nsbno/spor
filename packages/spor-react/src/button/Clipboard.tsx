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

const ClipboardIcon = React.forwardRef<
  HTMLDivElement,
  ChakraClipboard.IndicatorProps
>((props, ref) => {
  ClipboardIcon.displayName = "ClipboardIcon";
  return (
    <ChakraClipboard.Indicator
      copied={<CheckmarkFill18Icon />}
      {...props}
      ref={ref}
    >
      <CopyOutline18Icon />
    </ChakraClipboard.Indicator>
  );
});

const ClipboardCopyText = React.forwardRef<
  HTMLDivElement,
  ChakraClipboard.IndicatorProps
>((props, ref) => {
  ClipboardCopyText.displayName = "ClipboardCopyText";
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
});

type ClipboardButtonProps = ButtonProps;

export const ClipboardButton = React.forwardRef<
  HTMLButtonElement,
  ClipboardButtonProps
>((props, ref) => {
  ClipboardButton.displayName = "ClipboardButton";
  return (
    <ChakraClipboard.Trigger asChild>
      <Button ref={ref} size="xs" leftIcon={<ClipboardIcon />} {...props}>
        <ClipboardCopyText />
      </Button>
    </ChakraClipboard.Trigger>
  );
});

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
