import { DarkMode, forwardRef, useClipboard } from "@chakra-ui/react";
import { Box, BoxProps, Button } from "@vygruppen/spor-react";
import Highlight, { defaultProps } from "prism-react-renderer";
import { useRef } from "react";
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
  const copyButtonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const handleKeyUp = (e: React.KeyboardEvent) => {
    console.log(e.key, e.shiftKey);
    if (e.key === "Escape") {
      if (e.shiftKey) {
        const previousElement = getPreviousFocusableElement();
        previousElement.focus();
      } else {
        copyButtonRef.current?.focus();
      }
    }
  };
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
      onKeyUp={handleKeyUp}
      ref={containerRef}
      {...props}
    >
      <Box width="100%" overflowX="hidden">
        {children}
      </Box>
      <CopyCodeButton ref={copyButtonRef} code={code} />
    </Box>
  );
};

function getPreviousFocusableElement() {
  const allTabbableElements = Array.from(
    document.querySelectorAll(
      'a, button, input, select, textarea, [contenteditable], [tabindex]:not([tabindex^="-"])'
    )
  );

  const currentlyFocusedElementIndex = allTabbableElements.findIndex(
    (el) => el === document.activeElement
  );

  return allTabbableElements[currentlyFocusedElementIndex - 1] as HTMLElement;
}

type CopyCodeButtonProps = { code: string };
export const CopyCodeButton = forwardRef<CopyCodeButtonProps, "button">(
  ({ code }, ref) => {
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
          ref={ref}
        >
          {hasCopied ? "Kopiert" : "Kopiér"}
        </Button>
      </DarkMode>
    );
  }
);
