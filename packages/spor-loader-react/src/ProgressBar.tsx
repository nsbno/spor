import { Box, BoxProps, Flex, Text, useInterval } from "@chakra-ui/react";
import { createTexts, useTranslation } from "@vygruppen/spor-i18n-react";
import React, { useMemo, useState } from "react";
import { useProgressBar } from "react-aria";

type ProgressBarProps = {
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
 * If you don't pass a value, the loader will show an indeterminate progress bar:
 *
 * ```tsx
 * <ProgressBar label="Loading..." />
 * ```
 *
 * If you don't pass a label, you should pass an `aria-label` prop:
 *
 * ```tsx
 * <ProgressBar aria-label="Loading..." />
 * ```
 */
export const ProgressBar = ({
  value,
  label,
  labelRotationDelay = 5000,
  height = "0.5rem",
  width = "100%",
  "aria-label": ariaLabel,
}: ProgressBarProps) => {
  const { t } = useTranslation();
  const currentLoadingText = useRotatingLabel({
    label,
    delay: labelRotationDelay,
  });
  const { labelProps, progressBarProps } = useProgressBar({
    isIndeterminate: value === undefined,
    value,
    "aria-label": ariaLabel || t(texts.fallbackLabel(value)),
  });
  const { indeterminateValue, direction } = useIndeterminateValue(value);
  return (
    <Box
      {...progressBarProps}
      title={t(texts.fallbackLabel(indeterminateValue))}
      minWidth="100px"
    >
      <Flex
        backgroundColor="coralGreen"
        borderRadius="sm"
        width={width}
        justifyContent={direction === "right" ? "flex-start" : "flex-end"}
      >
        <Box
          backgroundColor="greenHaze"
          borderRadius="sm"
          height={height}
          width={`${indeterminateValue}%`}
          maxWidth="100%"
          transition="width .2s ease-out"
        />
      </Flex>
      {currentLoadingText && (
        <Text
          textAlign="center"
          marginTop={2}
          fontWeight="bold"
          {...labelProps}
        >
          {currentLoadingText}
        </Text>
      )}
    </Box>
  );
};

const texts = createTexts({
  fallbackLabel: (value) => ({
    nb: `${value}% ferdig`,
    nn: `${value}% ferdig`,
    sv: `${value}% klart`,
    en: `${value}% done`,
  }),
});

type UseRotatingLabelArgs = {
  label?: string | string[];
  delay: number;
};
const useRotatingLabel = ({ label, delay }: UseRotatingLabelArgs) => {
  const loadingTextArray = useMemo(
    () => (Array.isArray(label) ? label : [label]),
    [label]
  );
  const [currentLoadingTextIndex, setCurrentLoadingTextIndex] = useState(0);

  useInterval(() => {
    setCurrentLoadingTextIndex(
      (prevIndex) => (prevIndex + 1) % loadingTextArray.length
    );
  }, delay);
  return loadingTextArray[currentLoadingTextIndex];
};

const useIndeterminateValue = (value?: number) => {
  const [indeterminateValue, setIndeterminateValue] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  useInterval(() => {
    setIndeterminateValue((prevValue) => {
      const valueToAdd = Math.max(Math.round(Math.random() * 10));
      const newValue = (prevValue + valueToAdd) % 100;
      if (newValue < prevValue) {
        setDirection((prevDirection) =>
          prevDirection === "left" ? "right" : "left"
        );
      }
      return newValue;
    });
  }, 100);
  if (value !== undefined)
    return { indeterminateValue: value, direction: "right" };
  return { indeterminateValue, direction };
};
