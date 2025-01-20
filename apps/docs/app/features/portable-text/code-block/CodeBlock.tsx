import { DarkMode, forwardRef, useClipboard } from "@chakra-ui/react";
import { Box, BoxProps, Button } from "@vygruppen/spor-react";
import { Highlight } from "prism-react-renderer";
import { Key, useRef } from "react";
import { theme } from "./codeTheme";

type CodeBlockProps = Omit<BoxProps, "children"> & {
  /** The code to highlight */
  code: string;
  /** The code language to highlight */
  language?: "tsx" | "elm" | "bash";
};

export const CodeBlock = ({
  code,
  language = "tsx",
  ...props
}: CodeBlockProps) => {
  return (
    <CodeBlockContainer
      maxWidth={`calc(100vw - var(--spor-space-6))`}
      {...props}
      code={code}
    >
      <Highlight theme={theme} code={code} language={language as any}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Box
            as="pre"
            className={className}
            style={{ ...style, overflowX: "auto" }}
          >
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line, key: i });
              const { key, ...restLineProps } = lineProps;
              return (
                <Box key={key as Key} {...restLineProps}>
                  {line.map((token, key) => {
                    const tokenProps = getTokenProps({ token, key });
                    const { key: tokenKey, ...restTokenProps } = tokenProps;
                    return (
                      <Box
                        as="span"
                        key={tokenKey as Key}
                        {...restTokenProps}
                      />
                    );
                  })}
                </Box>
              );
            })}
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
      borderColor="osloGrey"
      backgroundColor="darkGrey"
      fontFamily="monospace"
      fontSize={["mobile.sm", null, "desktop.sm"]}
      padding={2}
      position="relative"
      onKeyUp={handleKeyUp}
      {...props}
    >
      <Box position="absolute" top={2} right={2} zIndex="docked">
        <CopyCodeButton ref={copyButtonRef} code={code} />
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};

function getPreviousFocusableElement() {
  const allTabbableElements = Array.from(
    document.querySelectorAll(
      'a, button, input, select, textarea, [contenteditable], [tabindex]:not([tabindex^="-"])',
    ),
  );

  const currentlyFocusedElementIndex = allTabbableElements.findIndex(
    (el) => el === document.activeElement,
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
          variant="primary"
          size="xs"
          onClick={onCopy}
          padding={3}
          _active={{ backgroundColor: "mint", color: "darkGrey" }}
          fontFamily="body"
          ref={ref}
        >
          {hasCopied ? "Copied" : "Copy"}
        </Button>
      </DarkMode>
    );
  },
);
