import { useMultiStyleConfig, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { IconButton } from "@vygruppen/spor-button-react";
import { Box } from "@vygruppen/spor-layout-react";

export type PlayPauseButtonColorSchemed = "green"

export type PlayPauseButtonProps = {
  colorScheme?: "green" | "white";
  variant:
    | "control"
    | "primary"
    | "secondary"
    | "tertiary"
    | "additional"
    | "ghost";
  size?: "md" | "lg";
  isDisabled?: boolean;
  "aria-label": string;
  isPlaying: PlayPause;
  onToggle: () => void;
};
export const PlayPauseButton = ({
  colorScheme = "white",
  variant = "ghost",
  size,
  isPlaying,
  isDisabled = false,
  "aria-label": ariaLabel,
  onToggle,
  ...props
}: PlayPauseButtonProps) => {
  const style = useMultiStyleConfig("PlayPauseButton", {
    isDisabled,
    size,
    colorScheme,
    variant,
  });

  return (
    <Box __css={style.container}>
      <IconButton
        variant={variant}
        onClick={onToggle}
        isDisabled={isDisabled}
        size={size}
        aria-label={isPlaying ? "Pause" : "Play"}
        icon={isPlaying ? <PauseIcon /> : <PlayIcon />}
        {...props}
      />
    </Box>
  );
};

type IconProp = {
  width?: number | string;
  height?: number | string;
};

type PlayPause = "play" | "pause";

const PlayIcon = ({ width = 60, height = 60 }: IconProp) => (
  <svg width={width} height={height} viewBox="0 0 60 60" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30 60c16.569 0 30-13.431 30-30C60 13.431 46.569 0 30 0 13.431 0 0 13.431 0 30c0 16.569 13.431 30 30 30Zm-4.25-45.325c-1.97-1.533-4.84-.128-4.84 2.368v25.914c0 2.496 2.87 3.9 4.84 2.368l16.66-12.957a3 3 0 0 0 0-4.736L25.75 14.675Z"
      fill={"currentcolor"}
    />
  </svg>
);

const PauseIcon = ({ width = 60, height = 60 }: IconProp) => (
  <svg width={width} height={height} viewBox="0 0 60 60" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M60 30c0 16.569-13.431 30-30 30C13.431 60 0 46.569 0 30 0 13.431 13.431 0 30 0c16.569 0 30 13.431 30 30Zm-25.5-9.75a2.25 2.25 0 0 1 4.5 0v19.5a2.25 2.25 0 0 1-4.5 0v-19.5ZM23.25 18A2.25 2.25 0 0 0 21 20.25v19.5a2.25 2.25 0 0 0 4.5 0v-19.5A2.25 2.25 0 0 0 23.25 18Z"
      fill={"currentcolor"}
    />
  </svg>
);
