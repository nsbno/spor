import { Box, BoxProps } from "@vygruppen/spor-react";
import { LiveError as ReactLiveError } from "react-live";

export const LiveError = (props: BoxProps) => {
  return (
    <Box textStyle="sm" p={2} {...props}>
      <ReactLiveError />
    </Box>
  );
};
