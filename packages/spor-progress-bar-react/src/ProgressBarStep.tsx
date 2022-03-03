import { useMultiStyleConfig, AccordionIcon, HStack } from "@chakra-ui/react";
import { Box, Flex, Stack } from "@vygruppen/spor-layout-react";
import React from "react";
import { useProgressBar } from "./ProgressBarContext";

type ProgressBarStepProps = {
  children: React.ReactNode;
  index?: number;
  icon?: React.ReactNode;
};
export const ProgressBarStep = ({
  children,
  index,
  icon,
}: ProgressBarStepProps) => {
  const guaranteedIndex = index ?? 0;
  const { activeStepIndex, onClick, colorScheme } = useProgressBar();
  const variant = getVariant(guaranteedIndex, activeStepIndex);
  const styles = useMultiStyleConfig("ProgressBar", {
    variant,
    colorScheme,
    icon,
  });

  return (
    <Flex
      as="button"
      type="button"
      alignItems="center"
      onClick={() => onClick(guaranteedIndex)}
    >
      <Box __css={styles.stepNumber}>{guaranteedIndex + 1}</Box>

      <Box __css={styles.stepTitle}>{children}</Box>

      <Box __css={styles.chevron}>{icon}</Box>
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
