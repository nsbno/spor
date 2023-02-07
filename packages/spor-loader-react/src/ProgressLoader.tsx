import {
  Box,
  BoxProps,
  chakra,
  Text,
  useInterval,
  useTheme,
} from "@chakra-ui/react";
import { createTexts, useTranslation } from "@vygruppen/spor-i18n-react";
import { motion } from "framer-motion";
import React, { useMemo, useRef, useState } from "react";
import { useProgressBar } from "react-aria";

const MotionPath = motion(chakra.path);

type ProgressLoaderProps = {
  /** The percentage of progress made.
   *
   * The value must be between 0 and 100 */
  value?: number;
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
 * <ProgressLoader value={50} />
 * ```
 *
 * You can also pass a label to show below the loader:
 *
 * ```tsx
 * <ProgressLoader value={50} label="Loading..." />
 * ```
 *
 * If you pass an array of strings, the text will rotate every 5 seconds. If you want to change the delay, pass the delay in milliseconds to the `labelRotationDelay` prop.
 *
 * ```tsx
 * <ProgressLoader value={50} label={["Loading...", "Almost done..."]} />
 * ```
 *
 * If you don't pass a value, the loader will show an indeterminate progress bar:
 *
 * ```tsx
 * <ProgressLoader label="Fetching your trips..." />
 * ```
 *
 * If you don't pass a label, you should pass an `aria-label` prop:
 *
 * ```tsx
 * <ProgressLoader aria-label="Fetching your trips..." />
 * ```
 */
export const ProgressLoader = ({
  value,
  label,
  labelRotationDelay = 5000,
  "aria-label": ariaLabel,
}: ProgressLoaderProps) => {
  const { t } = useTranslation();
  const currentLoadingText = useRotatingLabel({
    label,
    delay: labelRotationDelay,
  });
  const { labelProps, progressBarProps } = useProgressBar({
    isIndeterminate: value === undefined,
    value,
  });
  const pathRef = useRef<SVGPathElement>(null);
  const isIndeterminate = value === undefined;
  const progressPathLength = pathRef.current?.getTotalLength() ?? 0;
  const progress = isIndeterminate
    ? progressPathLength
    : ((value - 100) / 100) * progressPathLength;
  const theme = useTheme();
  return (
    <Box {...progressBarProps} minWidth="100px">
      <Box as="svg" viewBox="0 0 246 78" fill="none">
        <Box
          as="path"
          id="start-dot"
          d="M14.0479 44.8251C19.4332 44.8251 23.7988 40.5242 23.7988 35.2187C23.7988 29.9133 19.4332 25.6124 14.0479 25.6124C8.66254 25.6124 4.29688 29.9133 4.29688 35.2187C4.29688 40.5242 8.66254 44.8251 14.0479 44.8251Z"
          fill="#FFB466"
        />
        <Box
          as="path"
          id="track"
          d="M204.911 39.1156C204.911 39.1156 175.012 46.8319 157.651 30.4354C140.29 14.0388 121 21.7547 110.391 47.6529C103.22 65.157 78.9634 67.0859 67.9533 47.6529C59.8376 33.3287 36.125 37.1866 36.125 37.1866"
          stroke="coralGreen"
          strokeWidth="13.6469"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <MotionPath
          id="progress"
          d="M204.911 39.1156C204.911 39.1156 175.012 46.8319 157.651 30.4354C140.29 14.0388 121 21.7547 110.391 47.6529C103.22 65.157 78.9634 67.0859 67.9533 47.6529C59.8376 33.3287 36.125 37.1866 36.125 37.1866"
          stroke={theme.colors.greenHaze}
          strokeWidth="13.6469"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={progressPathLength}
          strokeDashoffset={progress}
          animate={{
            strokeDashoffset: isIndeterminate
              ? [-progress, 0, -progress / 2, progress, -progress]
              : undefined,
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
          ref={pathRef as any}
        />
        <Box
          as="path"
          id="end-dot"
          d="M226.025 44.8251C231.411 44.8251 235.776 40.5242 235.776 35.2187C235.776 29.9133 231.411 25.6124 226.025 25.6124C220.64 25.6124 216.274 29.9133 216.274 35.2187C216.274 40.5242 220.64 44.8251 226.025 44.8251Z"
          fill="#688CBA"
        />
      </Box>
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
