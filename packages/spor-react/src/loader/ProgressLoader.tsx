"use client";
import { BoxProps, chakra, RecipeVariantProps, Text } from "@chakra-ui/react";
import React, { forwardRef, useEffect, useId, useRef, useState } from "react";
import { useProgressBar } from "react-aria";

import { createTexts, useTranslation } from "..";
import { progressLoaderRecipe } from "../theme/recipes/progress-loader";
import { useRotatingLabel } from "./useRotatingLabel";
export type ProgressLoaderVariantProps = RecipeVariantProps<
  typeof progressLoaderRecipe
>;

export type ProgressLoaderProps = BoxProps & {
  children: React.ReactNode;
  /** The percentage of progress made.
   *
   * The value must be between 0 and 100 */
  value: number;
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
 * Custom hook to calculate the total length of an SVG path and progress offset.
 * @param value The percentage of progress made (0-100).
 * @returns A ref for the path element, the calculated path length, and the progress offset.
 */
const usePathLength = (value: number) => {
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      const totalLength = pathRef.current.getTotalLength();
      setPathLength(totalLength);
    }
  }, []);

  const progressOffset = ((value - 100) / 100) * pathLength;

  return { pathRef, pathLength, progressOffset };
};

const ProgressLoaderWrapper = chakra("div", progressLoaderRecipe);

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
 * If you don't pass a label, you should pass an `aria-label` prop:
 *
 * ```tsx
 * <ProgressLoader value={50} aria-label="Fetching your trips..." />
 * ```
 */

export const ProgressLoader = forwardRef<HTMLDivElement, ProgressLoaderProps>(
  (
    {
      value,
      label,
      labelRotationDelay = 5000,
      "aria-label": ariaLabel,
      width,
      ...rest
    },
    ref,
  ) => {
    const { t } = useTranslation();
    const currentLoadingText = useRotatingLabel({
      label,
      delay: labelRotationDelay,
    });
    const { labelProps, progressBarProps } = useProgressBar({
      isIndeterminate: value === undefined,
      value,
      "aria-label": ariaLabel ?? t(texts.fallbackLabel(value ?? "?")),
    });
    const {
      pathRef,
      pathLength: progressPathLength,
      progressOffset,
    } = usePathLength(value);

    const id = useId();

    return (
      <ProgressLoaderWrapper
        {...progressBarProps}
        width={width}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={ariaLabel ?? t(texts.fallbackLabel(value ?? "?"))}
        {...rest}
        ref={ref}
      >
        <chakra.svg as="svg" viewBox="0 0 246 78" fill="none">
          <path
            id={`${id}-start-dot`}
            d="M14.0479 44.8251C19.4332 44.8251 23.7988 40.5242 23.7988 35.2187C23.7988 29.9133 19.4332 25.6124 14.0479 25.6124C8.66254 25.6124 4.29688 29.9133 4.29688 35.2187C4.29688 40.5242 8.66254 44.8251 14.0479 44.8251Z"
            fill="#FFB466"
          />
          <path
            id={`${id}-track`}
            d="M204.911 39.1156C204.911 39.1156 175.012 46.8319 157.651 30.4354C140.29 14.0388 121 21.7547 110.391 47.6529C103.22 65.157 78.9634 67.0859 67.9533 47.6529C59.8376 33.3287 36.125 37.1866 36.125 37.1866"
            strokeWidth="13.6469"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id={`${id}-progress`}
            d="M204.911 39.1156C204.911 39.1156 175.012 46.8319 157.651 30.4354C140.29 14.0388 121 21.7547 110.391 47.6529C103.22 65.157 78.9634 67.0859 67.9533 47.6529C59.8376 33.3287 36.125 37.1866 36.125 37.1866"
            strokeWidth="13.6469"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={progressPathLength}
            strokeDashoffset={progressOffset}
            style={{ transition: "stroke-dashoffset .2s ease-out" }}
            ref={pathRef}
          />
          <path
            id={`${id}-end-dot`}
            d="M226.025 44.8251C231.411 44.8251 235.776 40.5242 235.776 35.2187C235.776 29.9133 231.411 25.6124 226.025 25.6124C220.64 25.6124 216.274 29.9133 216.274 35.2187C216.274 40.5242 220.64 44.8251 226.025 44.8251Z"
            fill="#688CBA"
          />
        </chakra.svg>
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
      </ProgressLoaderWrapper>
    );
  },
);
ProgressLoader.displayName = "ProgressLoader";

const texts = createTexts({
  fallbackLabel: (value) => ({
    nb: `${value}% ferdig`,
    nn: `${value}% ferdig`,
    sv: `${value}% klart`,
    en: `${value}% done`,
  }),
});
