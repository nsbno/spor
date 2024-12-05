import {
  Box,
  BoxProps,
  RecipeVariantProps,
  useRecipe,
  Switch as ChakraSwitch,
  ConditionalValue,
} from "@chakra-ui/react";
import React, { forwardRef, PropsWithChildren } from "react";
import { switchRecipe } from "../theme/components";

type SwitchVariants = RecipeVariantProps<typeof switchRecipe>;

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
    colorPalette?: ConditionalValue<
      | "white"
      | "grey"
      | "green"
      | "red"
      | "darkBlue"
      | "darkGreen"
      | "darkYellow"
    >;
  };

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (props, ref) => {
    const {
      inputProps,
      children,
      rootRef,
      trackLabel,
      thumbLabel,
      colorPalette = "white",
      size,
      ...rest
    } = props;

    const recipe = useRecipe({ recipe: switchRecipe });
    const styles = recipe({ colorPalette, size });

    return (
      <ChakraSwitch.Root ref={rootRef} {...rest} css={styles}>
        <ChakraSwitch.HiddenInput ref={ref} {...inputProps} />
        <ChakraSwitch.Control>
          <ChakraSwitch.Thumb>
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
