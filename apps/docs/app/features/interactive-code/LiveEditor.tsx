import { Box, BoxProps } from "@vygruppen/spor-react";
import { LiveEditor as ReactLiveEditor } from "react-live";

export const LiveEditor = (props: BoxProps) => {
  return (
    <Box
      borderRadius="sm"
      border="sm"
      borderColor="alias.osloGrey"
      backgroundColor="alias.darkGrey"
      fontFamily="monospace"
      fontSize="sm"
      p={2}
      {...props}
    >
      <ReactLiveEditor />
    </Box>
  );
};
