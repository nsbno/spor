import { Box, BoxProps, Text, useMultiStyleConfig } from "@chakra-ui/react";
import React from "react";
import { useProgressBar } from "react-aria";
import { createTexts, useTranslation } from "..";
import { useRotatingLabel } from "./useRotatingLabel";

type ProgressBarProps = BoxProps & {
  /** The percentage of progress made.
   *
   * The value must be between 0 and 100 */
  value: number;
  /** The height of the progress bar.
   * Defaults to .5rem
   **/
  height?: BoxProps["height"];
  /** The width of the progress bar.
   *
   * Defaults to the width of its container
   **/
  width?: BoxProps["width"];

  /** Pass if no label is passed to the label */
  "aria-label": string;
  /** Optional text shown below the loader.
   *
   * If you pass an array of strings, the text will rotate every 5 seconds. If you want to change the delay, pass the delay in milliseconds to the `labelRotationDelay` prop.
   */
  label: string | string[];
  /** The number of milliseconds a label is shown, if an array of strings is passed to the `label` prop.
   *
   * Defaults to 5000 (5 seconds).
   */
  labelRotationDelay?: number;
  /** Pass to disable the color of the component */
  isDisabled?: boolean;
};

/**
 * Shows the progress of a loading process.
 *
 * You can pass the amount of progress with the `value` prop:
 *
 * ```tsx
 * <ProgressBar value={50} />
 * ```
 *
 *  You can also pass a label to show below the loader:
 *
 * ```tsx
 * <ProgressBar value={50} label="Loading..." />
 * ```
 *
 * If you pass an array of strings, the text will rotate every 5 seconds. If you want to change the delay, pass the delay in milliseconds to the `labelRotationDelay` prop.
 *
 * ```tsx
 * <ProgressBar value={50} label={["Loading...", "Almost there..."]} />
 * ```
 *
 * If you don't pass a label, you should pass an `aria-label` prop:
 *
 * ```tsx
 * <ProgressBar value={50} aria-label="Loading..." />
 * ```
 */
export const ProgressBar = ({
  value,
  label,
  labelRotationDelay = 5000,
  height = "0.5rem",
  width = "100%",
  "aria-label": ariaLabel,
  isDisabled = false,
  ...rest
}: ProgressBarProps) => {
  const { t } = useTranslation();
  const currentLoadingText = useRotatingLabel({
    label,
    delay: labelRotationDelay,
  });
  const { labelProps, progressBarProps } = useProgressBar({
    isIndeterminate: value === undefined,
    value,
    "aria-label": ariaLabel || t(texts.label(value)),
  });
  const styles = useMultiStyleConfig("ProgressBar", { isDisabled });
  return (
    <>
      <Box
        {...progressBarProps}
        title={t(texts.label(value))}
        __css={styles.container}
        {...rest}
      >
        <Box width={width} __css={styles.background}>
          <Box
            __css={styles.progress}
            height={height}
            width={isDisabled ? "100%" : `${value}%`}
          />
        </Box>
        {currentLoadingText && (
          <Text sx={styles.description} {...labelProps}>
            {currentLoadingText}
          </Text>
        )}
      </Box>
    </>
  );
};

const texts = createTexts({
  label: (value) => ({
    nb: `${value}% ferdig`,
    nn: `${value}% ferdig`,
    sv: `${value}% klart`,
    en: `${value}% done`,
  }),
});
