"use client";
import {
  ConditionalValue,
  RecipeVariantProps,
  Switch as ChakraSwitch,
  useSlotRecipe,
} from "@chakra-ui/react";
import React, { forwardRef, PropsWithChildren } from "react";

import { switchSlotRecipe } from "../theme/slot-recipes/switch";
import { Field, FieldBaseProps } from "./Field";

type SwitchVariants = RecipeVariantProps<typeof switchSlotRecipe>;

export type SwitchProps = Exclude<
  ChakraSwitch.RootProps,
  "size" | "colorPalette"
> &
  FieldBaseProps &
  PropsWithChildren<SwitchVariants> & {
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    rootRef?: React.Ref<HTMLLabelElement>;
    trackLabel?: { on: React.ReactNode; off: React.ReactNode };
    thumbLabel?: { on: React.ReactNode; off: React.ReactNode };
    size?: ConditionalValue<"sm" | "md" | "lg">;
    label?: React.ReactNode;
    onCheckedChange?: (checked: boolean) => void;
  };

/**
 * A switch lets you toggle between on and off, yes and no. It's an alternative to a checkbox.
 *
 * You can set a label inside of the Switch component by defining the `label` prop.
 *
 * ```tsx
 * <Switch label="This is a label"/>
 * ```
 *
 * Switches are available in three different sizes - `sm`, `md` and `lg`.
 *
 * ```tsx
 *
 *   <Switch size="sm" />
 *
 * ```
 */

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (props, ref) => {
    const {
      rootRef,
      size = "md",
      label,
      invalid,
      errorText,
      helperText,
      ...rest
    } = props;
    const recipe = useSlotRecipe({ key: "switch" });
    const styles = recipe({ size });

    return (
      <Field
        style={{ width: "auto" }}
        invalid={invalid}
        errorText={errorText}
        helperText={helperText}
        required={props.required}
      >
        <ChakraSwitch.Root
          ref={rootRef}
          {...rest}
          checked={props.checked}
          css={styles.root}
        >
          <ChakraSwitch.Label>{label}</ChakraSwitch.Label>
          <ChakraSwitch.HiddenInput ref={ref} />
          <ChakraSwitch.Control css={styles.control}>
            <ChakraSwitch.Thumb />
          </ChakraSwitch.Control>
        </ChakraSwitch.Root>
      </Field>
    );
  },
);
Switch.displayName = "Switch";
