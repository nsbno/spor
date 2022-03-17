import { BoxProps } from "@vygruppen/spor-react";
import { useContext } from "react";
import { LiveContext, LiveEditor as ReactLiveEditor } from "react-live";
import { CodeBlockContainer, CopyCodeButton } from "../code-block/CodeBlock";
import { theme } from "../code-block/codeTheme";

export const LiveEditor = (props: BoxProps) => {
  const liveContext = useContext(LiveContext);
  return (
    <CodeBlockContainer {...props}>
      <ReactLiveEditor theme={theme} />
      {liveContext.code && <CopyCodeButton code={liveContext.code} />}
    </CodeBlockContainer>
  );
};
