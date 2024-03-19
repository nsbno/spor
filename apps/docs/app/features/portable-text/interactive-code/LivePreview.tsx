import { useColorModeValue } from "@chakra-ui/react";
import { Box, BoxProps } from "@vygruppen/spor-react";
import { LivePreview as ReactLivePreview } from "react-live";

export const LivePreview = (props: BoxProps) => {
  const backgroundColor = useColorModeValue(
    "bg.default.light",
    "bg.default.dark",
  );
  const color = useColorModeValue("text.default.light", "text.default.dark");
  return (
    <Box
      borderRadius="sm"
      border="sm"
      borderColor="osloGrey"
      backgroundColor={backgroundColor}
      color={color}
      transition="all .1s ease-out"
      padding={4}
      paddingRight={8}
      position="relative"
      {...props}
    >
      {/** @ts-ignore Bad typing in React Live */}
      <ReactLivePreview Component={Box} width="100%" />
    </Box>
  );
};
