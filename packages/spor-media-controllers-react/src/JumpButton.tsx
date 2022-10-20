import { useMultiStyleConfig } from "@chakra-ui/react";
import React from "react";
import { IconButton } from "@vygruppen/spor-button-react";
import { Box } from "@vygruppen/spor-layout-react";

type SkipDirection = "next" | "previous";

type JumpButtonProps = {
  onClick: () => void;
  colorScheme?: "light" | "dark" | "green";
  size?: "md" | "lg";
  direction: SkipDirection;
  isDisabled?: boolean;
  "aria-label": string;
};

export const JumpButton = ({
  onClick,
  size = "md",
  colorScheme = "green",
  direction,
  isDisabled = false,
  "aria-label": ariaLabel,
  ...props
}: JumpButtonProps) => {
  const style = useMultiStyleConfig("JumpButton", {
    colorScheme,
    isDisabled,
  });

  const Icon = direction === "next" ? Next : Previous;

  return (
    <Box __css={style.container}>
      <IconButton
        variant="ghost"
        onClick={onClick}
        isDisabled={isDisabled}
        size={size}
        aria-label={ariaLabel}
        icon={<Icon width={30} height={30} />}
        {...props}
        position="relative"
        __css={style.iconContainer}
      />
    </Box>
  );
};

type IconProp = {
  width?: number | string;
  height?: number | string;
};

const Next = ({ width = 30, height = 30 }: IconProp) => (
  <svg width={width} height={height} fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.453 4.18A1.695 1.695 0 0 0 4 5.696v18.608c0 1.26 1.326 2.08 2.453 1.516L24 17.047V25a1 1 0 1 0 2 0V5a1 1 0 1 0-2 0v7.952L6.453 4.18ZM23.623 15 6 23.81V6.19l17.623 8.81Z"
      fill={"currentcolor"}
    />
  </svg>
);

const Previous = ({ width = 30, height = 30 }: IconProp) => (
  <svg width={width} height={height} fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.547 4.18A1.695 1.695 0 0 1 26 5.696v18.608c0 1.26-1.326 2.08-2.453 1.516L6 17.047V25a1 1 0 1 1-2 0V5a1 1 0 1 1 2 0v7.952L23.547 4.18ZM6.377 15 24 23.81V6.19l-17.623 8.81Z"
      fill={"currentcolor"}
    />
  </svg>
);
