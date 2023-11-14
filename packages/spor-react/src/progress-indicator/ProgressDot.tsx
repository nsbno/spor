import React from "react";
import { Box } from "..";
import { useMultiStyleConfig } from "@chakra-ui/react";

type ProgressDot = {
  isActive: boolean;
};

export const ProgressDot = ({ isActive }: ProgressDot) => {
  const style = useMultiStyleConfig("ProgressIndicator");
  return (
    <Box
      as="svg"
      display="block"
      __css={style.progressDot}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      aria-current={isActive ? "step" : undefined}
    >
      <Box as="circle" cx="50" cy="50" r="50" />
    </Box>
  );
};
