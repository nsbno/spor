import { Box, BoxProps } from "@vygruppen/spor-react";
import { useContext, useRef, useState } from "react";
import { LiveContext, LiveEditor as ReactLiveEditor } from "react-live";
import { CodeBlockContainer } from "../code-block/CodeBlock";
import { theme } from "../code-block/codeTheme";

type LiveEditorProps = Omit<BoxProps, "onChange"> & {
  onChange?: (code: string) => void;
};
export const LiveEditor = ({ onChange, ...props }: LiveEditorProps) => {
  const liveContext = useContext(LiveContext);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDisabled, setDisabled] = useState(true);

  if (!liveContext.code) {
    return null;
  }

  return (
    <Box
      ref={containerRef}
      position="relative"
      _after={{
        display: "none",
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "greenHaze",
        color: "white",
        padding: 1,
        borderBottomRightRadius: "sm",
      }}
      _focus={{
        outline: "none",
        boxShadow: `0 0 0 4px var(--spor-colors-greenHaze)`,
        "&::after": {
          content:
            "'Tap enter (or click) to change the code, and escape to cancel'",
          display: "block",
        },
      }}
      tabIndex={0}
      borderRadius="sm"
      onKeyUp={(e) => {
        if (e.key === "Enter") {
          setDisabled(false);
          // This doesn't work without a setTimeout for some reason :shrug:
          setTimeout(
            () => containerRef.current?.querySelector("pre")?.focus(),
            0,
          );
        }
      }}
      onMouseDown={() => {
        setDisabled(false);
      }}
      aria-label="Tap enter (or click) to change the code, and escape to cancel"
    >
      <CodeBlockContainer code={liveContext.code} spellCheck={false} {...props}>
        <Box
          onBlur={() => {
            setDisabled(true);
          }}
          onKeyUp={(e) => {
            if (e.key === "Escape") {
              containerRef.current?.focus();
              setDisabled(true);
            }
          }}
        >
          <ReactLiveEditor
            theme={theme}
            style={{
              overflow: "scroll",
              height: "100%",
            }}
            disabled={isDisabled}
            {...(onChange ? { onChange } : {})}
          />
        </Box>
      </CodeBlockContainer>
    </Box>
  );
};
