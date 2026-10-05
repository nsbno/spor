import { Clipboard, ClipboardRootProps } from "@chakra-ui/react";
import {
  CheckmarkOutline18Icon,
  CopyOutline18Icon,
} from "@vygruppen/spor-icon-react";
import { Button, Flex } from "@vygruppen/spor-react";

type Props = {
  children: React.ReactNode;
  copyValue?: string;
} & ClipboardRootProps;

export const CopyTokenToClipBoard = ({ children, copyValue }: Props) => {
  const effectiveCopyValue = copyValue ?? `"${children?.toString()}"`;
  if (!children) return null;

  return (
    <Clipboard.Root value={effectiveCopyValue} width="100%" timeout={1000}>
      <Clipboard.Trigger asChild>
        <Button
          variant="ghost"
          className="group"
          title="Click to copy token"
          width="100%"
          fontWeight="normal"
          size="sm"
          rounded="sm"
          justifyContent="space-between"
          textAlign="left"
          wordBreak="break-all"
        >
          {children}
          <Flex minWidth="18px">
            <Clipboard.Indicator
              className="copy-icon"
              _groupHover={{
                display: "block",
              }}
              display="none"
              copied={<CheckmarkOutline18Icon />}
            >
              <CopyOutline18Icon />
            </Clipboard.Indicator>
          </Flex>
        </Button>
      </Clipboard.Trigger>
    </Clipboard.Root>
  );
};
