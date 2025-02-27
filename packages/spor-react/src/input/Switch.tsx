"use client";
import {
  RecipeVariantProps,
  Switch as ChakraSwitch,
  ConditionalValue,
  useSlotRecipe,
} from "@chakra-ui/react";
import React, { forwardRef, PropsWithChildren } from "react";
import { switchSlotRecipe } from "../theme/slot-recipes/switch";

type SwitchVariants = RecipeVariantProps<typeof switchSlotRecipe>;

export type SwitchProps = Exclude<
  ChakraSwitch.RootProps,
  "size" | "colorPalette"
> &
  PropsWithChildren<SwitchVariants> & {
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    rootRef?: React.Ref<HTMLLabelElement>;
    trackLabel?: { on: React.ReactNode; off: React.ReactNode };
    thumbLabel?: { on: React.ReactNode; off: React.ReactNode };
    size?: ConditionalValue<"sm" | "md" | "lg">;
  };

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (props, ref) => {
    const {
      inputProps,
      children,
      rootRef,
      trackLabel,
      thumbLabel,
      size = "sm",
      ...rest
    } = props;

    const recipe = useSlotRecipe({ key: "switch" });
    const styles = recipe({ size });

    return (
      <ChakraSwitch.Root ref={rootRef} {...rest} css={styles.root}>
        <ChakraSwitch.HiddenInput ref={ref} {...inputProps} />
        <ChakraSwitch.Control css={styles.control}>
          <ChakraSwitch.Thumb css={styles.thumb}>
            {thumbLabel && (
              <ChakraSwitch.ThumbIndicator fallback={thumbLabel?.off}>
                {thumbLabel?.on}
              </ChakraSwitch.ThumbIndicator>
            )}
          </ChakraSwitch.Thumb>
          {trackLabel && (
            <ChakraSwitch.Indicator fallback={trackLabel.off}>
              {trackLabel.on}
            </ChakraSwitch.Indicator>
          )}
        </ChakraSwitch.Control>
        {children != null && (
          <ChakraSwitch.Label>{children}</ChakraSwitch.Label>
        )}
      </ChakraSwitch.Root>
    );
  },
);
