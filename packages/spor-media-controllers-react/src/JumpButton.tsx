import { useMultiStyleConfig } from "@chakra-ui/react";
import React from "react";
import { IconButton } from "@vygruppen/spor-button-react";
import { Box } from "@vygruppen/spor-layout-react";

export type JumpButtonColorSchemes = "green";

type JumpButtonProps = {
  onClick: () => void;
  colorScheme?: "light" | "dark" | "green";
  variant:
    | "control"
    | "primary"
    | "secondary"
    | "tertiary"
    | "additional"
    | "ghost";
  size?: "md" | "lg";
  direction: JumpDirection;
  isDisabled?: boolean;
  "aria-label": string;
};

export const JumpButton = ({
  onClick,
  size = "md",
  variant = "ghost",
  colorScheme = "green",
  direction,
  isDisabled = false,
  "aria-label": ariaLabel,
  ...props
}: JumpButtonProps) => {
  const style = useMultiStyleConfig("JumpButton", {
    colorScheme,
    isDisabled,
    variant,
  });

  return (
    <Box __css={style.container}>
      <IconButton
        variant={variant}
        onClick={onClick}
        size={size}
        isDisabled={isDisabled}
        aria-label={
          direction === "forward" ? "15 sekunder frem" : "15 sekunder tilbake"
        }
        icon={
          direction === "forward" ? <JumpForwardIcon /> : <JumpBackwardIcon />
        }
        {...props}
      />
    </Box>
  );
};

type IconProp = {
  width?: number | string;
  height?: number | string;
};

type JumpDirection = "forward" | "backward";

const JumpForwardIcon = ({ width = 30, height = 30 }: IconProp) => (
  <svg width={width} height={height} fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.388 7.5C20.567 5.967 18.251 5 15.75 5 9.951 5 5.25 9.701 5.25 15.5S9.951 26 15.75 26s10.5-4.701 10.5-10.5a1 1 0 1 1 2 0c0 6.904-5.596 12.5-12.5 12.5s-12.5-5.596-12.5-12.5S8.846 3 15.75 3c3.206 0 6.11 1.31 8.304 3.3l.206-1.441a1 1 0 0 1 1.98.282L25.617 9.5H21.25a1 1 0 1 1 0-2h1.138Z"
      fill={"currentcolor"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.465 14.568c-.4-.232-.863-.348-1.392-.348-.655 0-1.195.172-1.62.516l.18-2.172h2.989c.256 0 .436-.016.54-.048.111-.032.168-.112.168-.24v-1.02h-.012c-.04.04-.117.064-.229.072a7.65 7.65 0 0 1-.515.012H15.42l-.36 4.464 1.273.12c.175-.16.384-.284.623-.372a2.11 2.11 0 0 1 .768-.144c.48 0 .856.136 1.128.408.28.264.42.624.42 1.08 0 .456-.155.832-.468 1.128-.311.296-.703.444-1.175.444a3.04 3.04 0 0 1-.936-.132 3.802 3.802 0 0 1-.756-.348c-.289-.176-.48-.34-.577-.492l-.636.888a.233.233 0 0 0-.047.12c0 .08.043.16.131.24.089.072.225.168.409.288.712.448 1.547.672 2.508.672.576 0 1.091-.124 1.547-.372a2.743 2.743 0 0 0 1.08-1.056 2.97 2.97 0 0 0 .384-1.5c0-.472-.111-.9-.335-1.284a2.314 2.314 0 0 0-.937-.924ZM13.338 19.224a2.954 2.954 0 0 1-.036-.552V11.34h-1.116a2.07 2.07 0 0 1-.576.768c-.248.208-.576.312-.984.312h-.144c-.136 0-.224-.016-.264-.048v.792c0 .128.052.208.156.24.112.032.296.048.552.048h.912v5.364c0 .248.028.424.084.528.056.104.172.156.348.156h1.248v-.012a.478.478 0 0 1-.18-.264Z"
      fill={"currentcolor"}
    />
  </svg>
);

const JumpBackwardIcon = ({ width = 30, height = 30 }: IconProp) => (
  <svg width={width} height={height} fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.612 7.5C11.433 5.967 13.749 5 16.25 5c5.799 0 10.5 4.701 10.5 10.5S22.049 26 16.25 26s-10.5-4.701-10.5-10.5a1 1 0 1 0-2 0c0 6.904 5.596 12.5 12.5 12.5s12.5-5.596 12.5-12.5S23.154 3 16.25 3c-3.206 0-6.11 1.31-8.304 3.3L7.74 4.86a1 1 0 0 0-1.98.282L6.383 9.5h4.367a1 1 0 1 0 0-2H9.612Z"
      fill={"currentcolor"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.965 14.568c-.4-.232-.863-.348-1.392-.348-.655 0-1.195.172-1.62.516l.18-2.172h2.989c.256 0 .436-.016.54-.048.111-.032.168-.112.168-.24v-1.02h-.012c-.04.04-.117.064-.229.072a7.65 7.65 0 0 1-.515.012H15.92l-.36 4.464 1.273.12c.175-.16.384-.284.623-.372a2.11 2.11 0 0 1 .768-.144c.48 0 .856.136 1.128.408.28.264.42.624.42 1.08 0 .456-.155.832-.468 1.128-.311.296-.703.444-1.175.444a3.04 3.04 0 0 1-.936-.132 3.802 3.802 0 0 1-.756-.348c-.288-.176-.48-.34-.576-.492l-.636.888a.233.233 0 0 0-.049.12c0 .08.045.16.133.24.088.072.223.168.407.288.713.448 1.548.672 2.508.672.576 0 1.092-.124 1.548-.372a2.743 2.743 0 0 0 1.08-1.056 2.97 2.97 0 0 0 .384-1.5c0-.472-.111-.9-.335-1.284a2.314 2.314 0 0 0-.937-.924ZM13.838 19.224a2.954 2.954 0 0 1-.036-.552V11.34h-1.116a2.07 2.07 0 0 1-.576.768c-.248.208-.576.312-.984.312h-.144c-.136 0-.224-.016-.264-.048v.792c0 .128.052.208.156.24.112.032.296.048.552.048h.912v5.364c0 .248.028.424.084.528.056.104.172.156.348.156h1.248v-.012a.478.478 0 0 1-.18-.264Z"
      fill={"currentcolor"}
    />
  </svg>
);
