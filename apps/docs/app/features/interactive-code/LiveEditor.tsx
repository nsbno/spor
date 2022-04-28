import { BoxProps } from "@vygruppen/spor-react";
import { useContext } from "react";
import { LiveContext, LiveEditor as ReactLiveEditor } from "react-live";
import { CodeBlockContainer } from "../code-block/CodeBlock";
import { theme } from "../code-block/codeTheme";

type LiveEditorProps = Omit<BoxProps, "onChange"> & {
  onChange?: (code: string) => void;
};
export const LiveEditor = ({
  onChange = () => {},
  ...props
}: LiveEditorProps) => {
  const liveContext = useContext(LiveContext);

  if (!liveContext.code) {
    return null;
  }

  return (
    <CodeBlockContainer code={liveContext.code} spellCheck={false} {...props}>
      <ReactLiveEditor
        theme={theme}
        style={{ overflow: "scroll", height: "100%" }}
        onChange={onChange}
      />
    </CodeBlockContainer>
  );
};
