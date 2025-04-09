import { CopyOutline18Icon } from "@vygruppen/spor-icon-react";
import { Text, Button } from "@vygruppen/spor-react";
import { Clipboard, ClipboardRootProps } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
  copyValue?: string;
} & ClipboardRootProps;

export const CopyTokenToClipBoard = ({
  children,
  copyValue = `"${children?.toString()}"`,
}: Props) => {
  return (
    <Clipboard.Root value={copyValue} width="100%" timeout={1000}>
      <Clipboard.Trigger asChild>
        <Button
          variant="ghost"
          className="group"
          title="Click to copy token"
          width="100%"
          fontWeight="normal"
          paddingLeft="0"
          _hover={{
            marginLeft: "-2",
            paddingLeft: "2",
          }}
          rounded="sm"
          rightIcon={
            <Clipboard.Indicator
              className="copy-icon"
              _groupHover={{
                display: "block",
              }}
              display="none"
              copied={
                <Text variant="xs" color="text.tertiary">
                  copied
                </Text>
              }
            >
              <CopyOutline18Icon />
            </Clipboard.Indicator>
          }
        >
          {children}
        </Button>
      </Clipboard.Trigger>
    </Clipboard.Root>
  );
};
