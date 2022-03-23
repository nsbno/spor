import { DarkMode, useClipboard } from "@chakra-ui/react";
import { Box, BoxProps, Button } from "@vygruppen/spor-react";
import Highlight, { defaultProps } from "prism-react-renderer";
import { theme } from "./codeTheme";

type CodeBlockProps = Omit<BoxProps, "children"> & {
  /** The code to highlight */
  code: string;
  /** The code language to highlight */
  language?: "jsx";
};
export const CodeBlock = ({
  code,
  language = "jsx",
  ...props
}: CodeBlockProps) => {
  return (
    <CodeBlockContainer {...props} code={code}>
      <Highlight
        {...defaultProps}
        theme={theme}
        code={code}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Box as="pre" className={className} style={style}>
            {tokens.map((line, i) => (
              <Box {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <Box as="span" {...getTokenProps({ token, key })} />
                ))}
              </Box>
            ))}
          </Box>
        )}
      </Highlight>
    </CodeBlockContainer>
  );
};
type CodeBlockContainerProps = BoxProps & {
  code: string;
};
/** The wrapper around a <pre /> code block */
export const CodeBlockContainer = ({
  children,
  code,
  ...props
}: CodeBlockContainerProps) => {
  return (
    <Box
      borderRadius="sm"
      border="sm"
      borderColor="alias.osloGrey"
      backgroundColor="alias.darkGrey"
      fontFamily="monospace"
      fontSize="sm"
      p={2}
      position="relative"
      zIndex="0"
      maxWidth="calc(100vw - var(--spor-space-4))"
      __css={{ "pre > div": { whiteSpace: "initial", maxWidth: "100%" } }}
      {...props}
    >
      <Box width="100%" overflowX="hidden">
        {children}
      </Box>
      <CopyCodeButton code={code} />
    </Box>
  );
};

type CopyCodeButtonProps = { code: string };
export const CopyCodeButton = ({ code }: CopyCodeButtonProps) => {
  const { onCopy, hasCopied } = useClipboard(code);
  return (
    <DarkMode>
      <Button
        variant="additional"
        size="xs"
        onClick={onCopy}
        position="absolute"
        top={2}
        right={2}
        fontFamily="body"
      >
        {hasCopied ? "Kopiert" : "Kopiér"}
      </Button>
    </DarkMode>
  );
};
