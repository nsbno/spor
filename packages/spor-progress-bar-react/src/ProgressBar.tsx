import { useMultiStyleConfig } from "@chakra-ui/react";
import { Box } from "@vygruppen/spor-layout-react";
import React from "react";
import { ProgressBarProvider } from "./ProgressBarContext";

type ProgressBarProps = {
  children: React.ReactNode;
  onClick: (clickedIndex: number) => void;
  colorScheme: "light" | "dark" | "green";
  title?: string;
  activeStepIndex: number;
};
export const ProgressBar = ({
  onClick,
  children,
  activeStepIndex,
  colorScheme,
}: ProgressBarProps) => {
  const style = useMultiStyleConfig("ProgressBar", { colorScheme });
  return (
    <Box __css={style.root}>
      <ProgressBarProvider onClick={onClick} activeStepIndex={activeStepIndex}>
        {React.Children.toArray(children).map((child, index) =>
          React.cloneElement(child as any, { index })
        )}
      </ProgressBarProvider>
    </Box>
  );
};
