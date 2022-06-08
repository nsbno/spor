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
    <CodeBlockContainer
      maxWidth={`calc(100vw - var(--spor-space-6))`}
      overflowX="auto"
      {...props}
      code={code}
    >
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
  const handleKeyUp = (e: React.KeyboardEvent) => {
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
      fontSize={["mobile.sm", "desktop.sm"]}
      p={2}
      position="relative"
      onKeyUp={handleKeyUp}
      {...props}
    >
      <Box position="absolute" top={2} right={2}>
        <CopyCodeButton ref={copyButtonRef} code={code} />
      </Box>
      <Box>{children}</Box>
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
          color="white"
          boxShadow="inset 0 0 0 1px white"
          size="xs"
          onClick={onCopy}
          fontFamily="body"
          ref={ref}
        >
          {hasCopied ? "Kopiert" : "Kopiér"}
        </Button>
      </DarkMode>
    );
  }
);
