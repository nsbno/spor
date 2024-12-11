"use client";
import {
  BoxProps,
  ProgressLabel,
  ProgressRoot,
  ProgressValueText,
  RecipeVariantProps,
} from "@chakra-ui/react";
import React, { forwardRef, PropsWithChildren } from "react";
import { progressBarRecipe } from "../theme/slot-recipes/progress-bar";
import { useTranslation } from "react-i18next";
import { useRotatingLabel } from "./useRotatingLabel";
import { createTexts } from "../i18n";

type ProgressBarVariants = RecipeVariantProps<typeof progressBarRecipe>;

export type ProgressBarProps = BoxProps &
  PropsWithChildren<ProgressBarVariants> & {
    children: React.ReactNode;
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
    isActive?: boolean;

    colorPalette?: string;
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
      height = "0.5rem",
      width = "100%",
      "aria-label": ariaLabel,
      ...rest
    },
    ref,
  ) => {
    const { t } = useTranslation();
    const currentLoadingText = useRotatingLabel({
      label,
      delay: labelRotationDelay,
    });

    return (
      <ProgressRoot
        ref={ref}
        defaultValue={value}
        css={{
          "--progress-bar-color": colorPalette,
        }}
        {...rest}
      >
        {label && <ProgressLabel>{t(texts.label(value).en)}</ProgressLabel>}
        <ProgressBar
          children={undefined}
          aria-label={""}
          value={0}
          label={""}
        />
        <ProgressValueText>{`${value}%`}</ProgressValueText>
      </ProgressRoot>
    );
  },
);

const texts: {
  label: (value: number) => { nb: string; nn: string; sv: string; en: string };
} = createTexts({
  label: (value) => ({
    nb: `${value}% ferdig`,
    nn: `${value}% ferdig`,
    sv: `${value}% klart`,
    en: `${value}% done`,
  }),
});
