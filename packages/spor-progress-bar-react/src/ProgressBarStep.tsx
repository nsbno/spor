import { useMultiStyleConfig } from "@chakra-ui/react";
import { Box, Flex } from "@vygruppen/spor-react";
import React from "react";
import { useProgressBar } from "./ProgressBarContext";

type ProgressBarStepProps = {
  children: React.ReactNode;
  index?: number;
};
export const ProgressBarStep = ({ children, index }: ProgressBarStepProps) => {
  const guaranteedIndex = index ?? 0;
  const { activeStepIndex, onClick } = useProgressBar();
  const variant = getVariant(guaranteedIndex, activeStepIndex);
  const styles = useMultiStyleConfig("ProgressBar", { variant });

  return (
    <Flex
      as="button"
      type="button"
      alignItems="center"
      onClick={() => onClick(guaranteedIndex)}
    >
      <Box __css={styles.circle}>{guaranteedIndex + 1}</Box>
      <Box>{children}</Box>
    </Flex>
  );
};

const getVariant = (index: number, activeStepIndex: number) => {
  if (index < activeStepIndex) {
    return "completed";
  }
  if (index === activeStepIndex) {
    return "active";
  }
  return "disabled";
};
