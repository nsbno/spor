import { Flex, HStack, useMultiStyleConfig } from "@chakra-ui/react";
import { IconButton } from "@vygruppen/spor-button-react";
import { DropdownLeftFill24Icon } from "@vygruppen/spor-icon-react";
import { Box } from "@vygruppen/spor-layout-react";
import React from "react";
import { ProgressBarProvider } from "./ProgressBarContext";

type ProgressBarProps = {
  children: React.ReactNode;
  onClick: (clickedIndex: number) => void;
  colorScheme: "light" | "dark" | "green";
  title?: string;
  activeStep: number;
};
export const ProgressBar = ({
  onClick,
  children,
  activeStep: activeStepAsStringOrNumber,
  title,
  colorScheme,
}: ProgressBarProps) => {
  const style = useMultiStyleConfig("ProgressBar", { colorScheme });
  const numberOfSteps = React.Children.count(children);
  const activeStep = Number(activeStepAsStringOrNumber);
  return (
    <Box __css={style.root}>
      <Box __css={style.container}>
        <Box __css={style.innerContainer}>
          <HStack>
            {activeStep > 1 && (
              <IconButton
                aria-label="Tilbake"
                icon={<DropdownLeftFill24Icon />}
                variant="ghost"
                size="sm"
                __css={style.backButton}
              />
            )}
            <Box __css={style.stepCounter}>
              Steg {activeStep} av {numberOfSteps}
            </Box>
          </HStack>
          <Box as="h3" __css={style.title}>
            {title}
          </Box>
        </Box>
        <Flex justifyContent="center">
          <ProgressBarProvider
            onClick={onClick}
            activeStep={activeStep}
            colorScheme={colorScheme}
            numberOfSteps={numberOfSteps}
          >
            {React.Children.toArray(children).map((child, index) =>
              React.cloneElement(child as any, { stepNumber: index + 1 })
            )}
          </ProgressBarProvider>
        </Flex>
      </Box>
    </Box>
  );
};
