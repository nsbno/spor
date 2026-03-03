import { stegaClean } from "@sanity/client/stega";
import {
  Box,
  BoxProps,
  Clipboard,
  ClipboardButton,
} from "@vygruppen/spor-react";
import { Highlight } from "prism-react-renderer";
import { Key, useRef } from "react";

import { theme } from "./codeTheme";

type CodeBlockProps = Omit<BoxProps, "children"> & {
  /** The code to highlight */
  code: string;
  /** The code language to highlight */
  language?: "tsx" | "bash";
};

export const CodeBlock = ({
  code,
  language = "tsx",
  ...props
}: CodeBlockProps) => {
  return (
    <CodeBlockContainer
      maxWidth="calc(100vw - var(--spor-space-6))"
      {...props}
      code={stegaClean(code)}
      marginTop={2}
    >
      <Highlight theme={theme} code={code} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Box
            as="pre"
            className={className}
            style={{ ...style, overflowX: "auto" }}
          >
            {tokens.map((line, index) => {
              const lineProps = getLineProps({ line, key: index });
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
  const handleKeyUp = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      if (event.shiftKey) {
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
      // eslint-disable-next-line spor/use-semantic-tokens
      borderColor="osloGrey"
      // eslint-disable-next-line spor/use-semantic-tokens
      backgroundColor="darkGrey"
      fontFamily="monospace"
      fontSize={["mobile.sm", null, "desktop.sm"]}
      padding={2}
      position="relative"
      onKeyUp={handleKeyUp}
      {...props}
    >
      <Box position="absolute" top={2} right={2} ref={copyButtonRef}>
        <CopyCodeButton code={code} />
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};

function getPreviousFocusableElement() {
  const allTabbableElements = [
    ...document.querySelectorAll(
      'a, button, input, select, textarea, [contenteditable], [tabindex]:not([tabindex^="-"])',
    ),
  ];

  const currentlyFocusedElementIndex = allTabbableElements.indexOf(
    document.activeElement as Element,
  );

  return allTabbableElements[currentlyFocusedElementIndex - 1] as HTMLElement;
}

type CopyCodeButtonProps = { code: string };
export const CopyCodeButton = ({ code }: CopyCodeButtonProps) => {
  return (
    <Clipboard value={code}>
      <ClipboardButton className="dark" variant="primary" />
    </Clipboard>
  );
};
