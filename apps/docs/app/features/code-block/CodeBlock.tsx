import { DarkMode, useClipboard } from "@chakra-ui/react";
import { Box, BoxProps, Button } from "@vygruppen/spor-react";
import Highlight, { defaultProps } from "prism-react-renderer";
import { theme } from "./codeTheme";

type CodeBlockProps = BoxProps & {
  /** The code to highlight */
  children: string;
  /** The code language to highlight */
  language?: "jsx";
};
export const CodeBlock = ({
  children,
  language = "jsx",
  ...props
}: CodeBlockProps) => {
  return (
    <CodeBlockContainer {...props}>
      <Highlight
        {...defaultProps}
        theme={theme}
        code={children}
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
      <CopyCodeButton code={children} />
    </CodeBlockContainer>
  );
};
/** The wrapper around a <pre /> code block */
export const CodeBlockContainer = ({ children, ...props }: BoxProps) => {
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
      {...props}
    >
      {children}
    </Box>
  );
};

type CopyCodeButtonProps = { code: string };
export const CopyCodeButton = (props: CopyCodeButtonProps) => {
  const { onCopy, hasCopied } = useClipboard(props.code);
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
