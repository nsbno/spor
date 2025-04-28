"use client";
import {
  BoxProps,
  Progress,
  UseProgressProps,
  RecipeVariantProps,
  useSlotRecipe,
} from "@chakra-ui/react";
import React, { forwardRef, PropsWithChildren } from "react";
import { progressBarRecipe } from "../theme/slot-recipes/progress-bar";
import { useRotatingLabel } from "./useRotatingLabel";

type ProgressBarVariants = RecipeVariantProps<typeof progressBarRecipe>;

export type ProgressBarProps = BoxProps &
  UseProgressProps &
  PropsWithChildren<ProgressBarVariants> & {
    children: React.ReactNode;
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
    isActive?: boolean;

    /** Pass to show the value text */
    showValueText?: boolean;
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

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {
      value,
      colorPalette = "white",
      label,
      labelRotationDelay = 5000,
      isActive = true,
      showValueText = false,
      height = "0.5rem",
      "aria-label": ariaLabel,
      ...rest
    },
    ref,
  ) => {
    const recipe = useSlotRecipe({ key: "progressbar" });
    const styles = recipe({});
    const currentLoadingText = useRotatingLabel({
      label,
      delay: labelRotationDelay,
    });

    return (
      <Progress.Root css={styles.container} ref={ref} value={value} {...rest}>
        <Progress.Track
          height={height}
          css={isActive ? styles.background : styles.disabledBackground}
        >
          <Progress.Range css={styles.progress} />
        </Progress.Track>

        {label && (
          <Progress.Label css={styles.description}>
            {currentLoadingText}
          </Progress.Label>
        )}

        {showValueText && <Progress.ValueText>{value}%</Progress.ValueText>}
      </Progress.Root>
    );
  },
);
