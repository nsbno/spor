import { Box, BoxProps } from "@vygruppen/spor-react";
import { LivePreview as ReactLivePreview } from "react-live";

export const LivePreview = (props: BoxProps) => {
  return (
    <Box
      borderRadius="sm"
      border="sm"
      borderColor="osloGrey"
      backgroundColor="bg.default"
      color="text.default"
      transition="all .1s ease-out"
      padding={4}
      paddingRight={8}
      position="relative"
      {...props}
    >
      {/** @ts-ignore Bad typing in React Live */}
      <ReactLivePreview Component={Box} />
    </Box>
  );
};
