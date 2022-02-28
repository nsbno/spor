import { Box, Center, Flex } from "@vygruppen/spor-layout-react";
import React from "react";

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
}: ProgressBarProps) => {
  return (
    <Flex>
      <ProgressBarProvider onClick={onClick} activeStepIndex={activeStepIndex}>
        {React.Children.toArray(children).map((child, index) =>
          React.cloneElement(child as any, { index })
        )}
      </ProgressBarProvider>
    </Flex>
  );
};

type ProgressBarStepProps = {
  children: React.ReactNode;
  index?: number;
};
export const ProgressBarStep = ({ children, index }: ProgressBarStepProps) => {
  const guaranteedIndex = index ?? 0;
  const { activeStepIndex, onClick } = useProgressBar();
  const variant = getVariant(guaranteedIndex, activeStepIndex);
  return (
    <Flex
      as="button"
      type="button"
      alignItems="center"
      onClick={() => onClick(guaranteedIndex)}
    >
      <Center borderRadius="round" width={4} height={4}>
        {guaranteedIndex + 1}
      </Center>
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

type ProgressBarContextType = {
  activeStepIndex: number;
  onClick: (clickedIndex: number) => void;
};
const ProgressBarContext = React.createContext<ProgressBarContextType | null>(
  null
);

type ProgressBarProviderProps = {
  children: React.ReactNode;
  onClick: (clickedIndex: number) => void;
  activeStepIndex: number;
};
export const ProgressBarProvider = ({
  activeStepIndex,
  children,
  onClick,
}: ProgressBarProviderProps) => {
  return (
    <ProgressBarContext.Provider value={{ activeStepIndex, onClick }}>
      {children}
    </ProgressBarContext.Provider>
  );
};

export const useProgressBar = () => {
  const context = React.useContext(ProgressBarContext);
  if (!context) {
    throw new Error(
      "useProgressBar must be used within a ProgressBarProvider. Most likely, you forgot to wrap your ProgressBarStep in a ProgressBar component"
    );
  }
  return context;
};
