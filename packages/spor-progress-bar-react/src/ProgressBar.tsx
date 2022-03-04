import { useMultiStyleConfig } from "@chakra-ui/react";
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
  activeStep,
  colorScheme,
}: ProgressBarProps) => {
  const style = useMultiStyleConfig("ProgressBar", { colorScheme });
  const numberOfSteps = React.Children.count(children);
  return (
    <Box __css={style.root}>
      <ProgressBarProvider
        onClick={onClick}
        activeStep={Number(activeStep)}
        colorScheme={colorScheme}
        numberOfSteps={numberOfSteps}
      >
        {React.Children.toArray(children).map((child, index) =>
          React.cloneElement(child as any, { stepNumber: index + 1 })
        )}
      </ProgressBarProvider>
    </Box>
  );
};
