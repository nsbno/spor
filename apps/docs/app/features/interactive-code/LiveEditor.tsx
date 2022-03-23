import { BoxProps } from "@vygruppen/spor-react";
import { useContext } from "react";
import { LiveContext, LiveEditor as ReactLiveEditor } from "react-live";
import { CodeBlockContainer } from "../code-block/CodeBlock";
import { theme } from "../code-block/codeTheme";

export const LiveEditor = (props: BoxProps) => {
  const liveContext = useContext(LiveContext);

  if (!liveContext.code) {
    return null;
  }

  return (
    <CodeBlockContainer code={liveContext.code} {...props}>
      <ReactLiveEditor theme={theme} />
    </CodeBlockContainer>
  );
};
