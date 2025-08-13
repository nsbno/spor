import { Box, BoxProps } from "@vygruppen/spor-react";
import { useContext } from "react";
import { LiveContext, LiveError as ReactLiveError } from "react-live";

export const LiveError = (props: BoxProps) => {
  const liveContext = useContext(LiveContext);
  if (!liveContext.error) {
    return null;
  }
  return (
    <Box textStyle="sm" padding={2} {...props}>
      <ReactLiveError />
    </Box>
  );
};
